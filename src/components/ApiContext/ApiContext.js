import React, { Component } from 'react'

// { Provider, Consumer }
// const MyContext = React.createContext()
const { Provider, Consumer } = React.createContext()

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

const GrandChild = () => (
  <Consumer>
    {
      context => (
        <div className='card m-2 p-3 text-center'>
          <p>Nieto</p>
          <div className='d-flex justify-content-center'>
            <button className='btn btn-info' onClick={context.addClicks}>Clics nieto ({ context.clicks })</button>
          </div>
        </div> 
      )
    }
  </Consumer>
)

class ApiContext extends Component {
  state = {
    clicks: 0
  }

  addClicks = () => {
    this.setState(state => ({
      clicks: state.clicks + 1
    }))
  }

  render() { 
    return (
      <Provider value={{
        clicks: this.state.clicks,
        addClicks: this.addClicks
      }}>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Api Context</h5>
            <h6 className="card-subtitle mb-2 text-muted">Usando React Context</h6>
            <p className="card-text">Esta forma de comunicación puede ser usado en React 16 en adelante</p>
            <p className='mt-3 text-center'>Padre</p>
            <Child/>
          </div>
        </div>
      </Provider>
    )
  }
}

export default ApiContext;