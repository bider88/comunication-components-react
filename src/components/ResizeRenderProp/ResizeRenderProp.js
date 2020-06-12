import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Resize extends Component {

  static propTypes = {
    render: PropTypes.func.isRequired
  }

  state = {
    width: window.innerWidth,
    height: window.innerHeight
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  handleResize = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }
  

  render() {
    const { width, height } = this.state
    const { render } = this.props
    return render({ width, height })
  }
}

class ResizeRenderProp extends Component {
  state = {  }
  render() { 
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Otro ejemplo de render props</h5>
          <h6 className="card-subtitle mb-2 text-muted">Usaremos el patrón render props</h6>
          <p className="card-text"></p>
          <Resize render={({width, height}) => {
              return (
                <div>
                  <p>width: { width }</p>
                  <p>height: { height }</p>
                </div>
              )
          }}/>
        </div>
      </div>
    )
  }
}

export default ResizeRenderProp;