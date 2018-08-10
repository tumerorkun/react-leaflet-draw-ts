import { Control, FeatureGroup, CircleMarker, LineUtil, Polyline } from 'leaflet';
import 'leaflet-draw';
import { FeatureGroup as RLFeatureGroup, MapControl, MapControlProps } from 'react-leaflet';
import * as React from 'react';

// (function () { Draw })()

interface IDrawControlProps extends MapControlProps {
  feature?:FeatureGroup
}


class DrawControl extends MapControl<IDrawControlProps> {
  featuregroup: any;

  constructor(props: any) {
    super(props);
    (LineUtil as any)._flat = (LineUtil as any).isFlat;
    (Polyline as any)._flat = (Polyline as any).isFlat;
  }

  public componentWillMount() {
    // super.componentWillMount()
  }

  public componentDidMount() {
    this.leafletElement = this.createLeafletElement(this.props)
    super.componentDidMount()
  }

  public createLeafletElement(props: IDrawControlProps): Control {
    const options = {
      edit: {
        featureGroup: this.featuregroup.leafletElement
      }
    }

    this.context.map.on('draw:created', (e:any) => {
      const type = e.layerType;
      const layer = e.layer;
      console.log(layer)
      console.log(e.layer.getLatLngs && e.layer.getLatLngs())
      options.edit.featureGroup.addLayer(layer);
    })

    return new Control.Draw(options)
  }

  render() {
    return (
      <RLFeatureGroup ref={(ref) => { this.featuregroup = ref }}>
        {this.props.children}
      </RLFeatureGroup>
    )
  }
}

export default DrawControl;


/**
 *
 *
 * map.on(L.Draw.Event.CREATED, function (e) {
        var type = e.layerType,
            layer = e.layer;

        if (type === 'marker') {
            layer.bindPopup('A popup!');
        }

        editableLayers.addLayer(layer);
    });
 */
