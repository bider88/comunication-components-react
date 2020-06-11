import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/common/Navbar';
import Jumbotron from './components/common/Jumbotron';
import ChildComponent from './components/ChildComponent';
import ParentComponent from './components/ParentComponent/ParentComponent';

function App() {
  return (
    <div>
      <Navbar/>
      <Jumbotron title='Comunicación entre componentes' content='Se revisrá la comunicación entre los componentes sin usar las props' bg='primary' color='white'/>
      <div className="container-fluid">
        <ChildComponent/>
        {/* Usaremos el botón como componente hijo */}
        <ParentComponent/>
        {/* Comunicación entre componentes hermanos (Parent components) */}
      </div>
    </div>
  );
}

export default App;
