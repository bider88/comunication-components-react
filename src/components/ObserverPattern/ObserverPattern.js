import React, { Component } from 'react'
import PubSub from 'pubsub-js'

class Child extends Component {
  render() { 
    return (
      <div className='card m-2 p-3 text-center'>
        <p>Hijo</p>
        <GrandChild/>
      </div>
    )
  }
}

class GrandChild extends Component {
  render() { 
    return (
      <div className='card m-2 p-3 text-center'>
        <p>Nieto</p>
        <GreatGrandChild/>
      </div>
    )
  }
}

class GreatGrandChild extends Component {
  state = {
    message: 'initial message'
  }

  componentDidMount() {
    PubSub.subscribe('object-send', (event, data) => {
      this.setState({
        message: data.title
      })
    })
  }

  componentWillUnmount() {
    PubSub.unsubscribe('object-send')
  }

  handleClick = () => {
    PubSub.publish('greeting', 'Hola desde el bisnieto')
  }

  render() { 
    return (
      <div className='card m-2 p-3 text-center'>
        <p>Bisnieto</p>
        <span className='text-muted'>{ this.state.message }</span>
        <div className='d-flex justify-content-center'>
          <button className='btn btn-info' onClick={this.handleClick}>Clic bisnieto</button>
        </div>
      </div> 
    )
  }
}

class ObserverPattern extends Component {
  state = {  }

  componentDidMount() {
    PubSub.subscribe('greeting', (event, data) => {
      alert('Padre: ' + data)
    })
  }

  componentWillUnmount() {
    PubSub.unsubscribe('greeting')
  }

  handleClick = () => {
    PubSub.publish('object-send', {
      title: 'Mensaje desde el padre'
    })
  }

  render() { 
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Patrón Observador</h5>
          <h6 className="card-subtitle mb-2 text-muted">Veremos como usar Observer Pattern</h6>
          <p className="card-text">Hay tres formas comunes o usadas que son: PubSubJS, EventEmitter o MicroEvent.js. Usaremos <b>PubSubJS</b></p>
          <p className='mt-3 text-center'>Padre</p>
          <div className='d-flex justify-content-center'>
            <button className='btn btn-info' onClick={this.handleClick}>Clic padre</button>
          </div>
          <Child/>
        </div>
      </div>
    )
  }
}

export default ObserverPattern;