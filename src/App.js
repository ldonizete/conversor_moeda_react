import React from 'react';
import { format } from 'date-fns'
import './App.css';

import Conversor from './components/Conversor'

function App() {
  return (
    <div className="App">
      <h1>Conversor de moedas</h1>
      <h3>Cotação: { format(new Date(), 'MM/dd/yyyy') }</h3>
      <div className="linha">
        <Conversor moedaA="USD" moedaB="BRL"></Conversor>
        <Conversor moedaA="BRL" moedaB="USD"></Conversor>
      </div>
      <div className="linha">
        <Conversor moedaA="CAD" moedaB="BRL"></Conversor>
        <Conversor moedaA="BRL" moedaB="CAD"></Conversor>
      </div>
      <div className="linha">
        <Conversor moedaA="EUR" moedaB="BRL"></Conversor>
        <Conversor moedaA="BRL" moedaB="EUR"></Conversor>
      </div>
    </div>
  );
}

export default App;
