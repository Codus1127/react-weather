import React from 'react';
import './App.css';
import Forecast from './components/Forecast';
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header/>
      <Forecast/>
    </div>
  );
}

export default App;
