import React, { Component } from 'react'

class ComponentA extends Component {
  state = {  }
  render() {
    
    const { num } = this.props

    return (
      <div className='card bg-primary text-white p-5'>
        <h5>Componente A</h5>
        <button className='btn btn-light' onClick={ this.props.onAdd }>
          ( { num } )
        </button>
      </div>
    )
  }
}

class ComponentB extends Component {
  state = {  }
  render() {

    const { num } = this.props

    return (
      <div className='card bg-success text-white p-5'>
        <h5>Componente B</h5>
        <button className='btn btn-light' onClick={ this.props.onAdd }>
          ( { num } )
        </button>
      </div>
    )
  }
}

class ParentComponent extends Component {
  state = {
    countA: 0,
    countB: 0
  }

  handleAddA = () => {
    this.setState(state => ({
      countA: state.countA + 1
    }))
  }

  handleAddB = () => {
    this.setState(state => ({
      countB: state.countB + 2
    }))
  }

  render() {

    const { countA, countB } = this.state

    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Componentes hermanos</h5>
          <h6 className="card-subtitle mb-2 text-muted">Comunicación entre componentes hermanos (Parent components)</h6>
          <p className="card-text"></p>
          <div className='d-flex justify-content-around'>
            {/* <ComponentA num={countA} onAdd={this.handleAddA}/> */}
            <ComponentA num={countA} onAdd={this.handleAddB}/>
            {/* <ComponentB num={countB} onAdd={this.handleAddB}/> */}
            <ComponentB num={countB} onAdd={this.handleAddA}/>
            {/* Con esto se comunican entre componentes hermanos en el que se invierte los métodos (Parent component) */}
          </div>
        </div>
      </div>
    )
  }
}

export default ParentComponent;