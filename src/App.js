import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/common/Navbar';
import Jumbotron from './components/common/Jumbotron';
import ComunicationComponent from './components/ComunicationComponent';

function App() {
  return (
    <div>
      <Navbar/>
      <Jumbotron title='Comunicación entre componentes' content='Se revisrá la comunicación entre los componentes sin usar las props' bg='primary' color='white'/>
      <div className="container-fluid">
        <ComunicationComponent/>
        {/*  */}
      </div>
    </div>
  );
}

export default App;
