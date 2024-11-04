import React from 'react';
import DigitalClock from './components/DigitalClock';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="container">
      <h1 className="app-title">React Clock and Calculator</h1>
      <div className="grid-layout">
        <DigitalClock />
        <Calculator />
      </div>
    </div>
  );
}

export default App;