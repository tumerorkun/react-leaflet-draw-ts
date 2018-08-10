import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {FeatureGroup as fGroup} from 'leaflet'
import { Map, TileLayer, FeatureGroup } from 'react-leaflet'
import { DrawControl } from '../src/index'


class App extends React.Component {
    map: Map;
    state: {drawControlRender:boolean}
    constructor(props: any) {
        super(props)
        this.state = {
            drawControlRender: false
        }
    }

    componentDidMount() {
        console.log('componentDidmount', this.map)
        setTimeout(() => {
            console.log('did mount');
            this.setState({drawControlRender: true})
        }, 0)
        setTimeout(() => {
            console.log(this.map.leafletElement)
        },15000);
    }
    render() {
        return (
            <Map
                ref={ref=>(this.map=ref)}
                className="simpleMap"
                scrollWheelZoom={false}
                maxZoom={20}
                // zoom={5}
                // center={[33.100745405144245,24.510498046875]}
                bounds={[
                    [33.100745405144245, 24.510498046875],
                    [33.100745405144245, 46.48315429687501],
                    [44.55916341529184, 46.48315429687501],
                    [44.55916341529184, 24.510498046875]
                ]}
                maxBounds={[[-90, -180], [90, 180]]}>
                <TileLayer
                    noWrap={true}
                    url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"} />

                <DrawControl position='topleft' />
            </Map>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('app'));
