import React, { Component } from 'react'
import logo from '../../../logo.svg'

class Navbar extends Component {
  state = {  }
  render() { 
    return (
      <nav className="navbar fixed-top navbar-dark bg-dark">
        <span className="navbar-brand">
          <img src={logo} className="App-logo" alt="logo" loading="lazy"/>
          Comunicación entre componentes
        </span>
      </nav>

    )
  }
}
 
export default Navbar;