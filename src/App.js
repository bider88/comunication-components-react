import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/common/Navbar';
import Jumbotron from './components/common/Jumbotron';
import ChildComponent from './components/ChildComponent';
import ParentComponent from './components/ParentComponent';
import ObserverPattern from './components/ObserverPattern';
import ApiContext from './components/ApiContext';

function App() {
  return (
    <div>
      <Navbar/>
      <Jumbotron title='Comunicación entre componentes' content='Se revisará la comunicación entre los componentes sin usar las props' bg='primary' color='white'/>
      <div className="container-fluid">
        <ChildComponent/>
        {/* Usaremos el botón como componente hijo (Padre a hijo) */}
        <ParentComponent/>
        {/* Implementando parent component (Componentes hermanos) */}
        <ObserverPattern/>
        {/* Hay tres formas comunes o usadas que son: PubSubJS, EventEmitter o MicroEvent.js. Usaremos PubSubJS (cualquiera) */}
        <ApiContext/>
        {/* Usando React Context (Solo de React 16 en adelante) */}
      </div>
    </div>
  );
}

export default App;
