import React, { Component } from 'react'

class Child extends Component {
  state = {
    message: '****'
  }

  dispatchAlert = (event, message = 'Alert from child') => {
    alert(message)
    this.setState({ message })
  }

  render() { 
    return (
      <div>
        <button className='btn btn-secondary' onClick={this.dispatchAlert}>Hijo ({ this.state.message })</button>
      </div>
    )
  }
}

class ComunicationComponent extends Component {
  state = {  }
  child = React.createRef()

  handleClick = () => {
    console.log(this.child);
    this.child.current.dispatchAlert(null, 'Hola desde el padre')
  }

  render() { 
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Hijo componente</h5>
          <h6 className="card-subtitle mb-2 text-muted">Usaremos el botón como componente hijo</h6>
          <p className="card-text"></p>
          <div className='d-flex justify-content-end'>
            <button className='btn btn-primary mr-2' onClick={this.handleClick}>Padre</button>
            <Child ref={this.child}/>
          </div>
        </div>
      </div>
    )
  }
}

export default ComunicationComponent;