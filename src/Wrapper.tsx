import DrawControl from './DrawControl'
import * as React from 'react'

class Wrapper extends React.Component {
  state: { element: any; }
  props: any;fgroup: any;
  constructor(props: any) {
    super(props)
    this.state = {
      element: null
    }
    this.fgroup = null;
  }

  componentDidMount() {
    if (this.fgroup) {
      this.setState({
        element: <DrawControl position={'topleft'} feature={this.fgroup}/>
      })
    }
  }

  componentDidUpdate() {
    setTimeout(() => {if (this.fgroup) {
      this.setState({
        element: <DrawControl position={'topleft'} feature={this.fgroup} />
      })
    }},1000)
  }

  shouldComponentUpdate(nextProps: any, nextState: any) {
    this.fgroup = this.props.fgroup;
    console.log('should: ', this.fgroup)
    return true;
  }

  render() {
    return this.state.element
  }
}


export default Wrapper;
