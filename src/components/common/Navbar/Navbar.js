import React, { Component } from 'react'
import logo from '../../../logo.svg'

class Navbar extends Component {
  render() { 
    return (
      <nav className="navbar fixed-top navbar-dark bg-dark">
        <span className="navbar-brand">
          <img src={logo} className="App-logo" alt="logo"/>
          Comunicación entre componentes
        </span>
      </nav>

    )
  }
}

export default Navbar;