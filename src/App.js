import React from 'react';
import './App.css';
import Header from './components/views/Header'

const myFunction = () => {
  return 1+2
}
const App = () => (
  <div className = 'App'>
    <Header
    saludo = "hola a todos desde"
    onFunction = {myFunction}
    miNumero = {2}
    />
    </div>
)

export default App;
