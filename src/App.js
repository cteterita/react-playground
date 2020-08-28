import React from 'react';
import RouletteGun from './state-drills/RouletteGun';
import './App.css';

function App() {
  return (
    <div>
      <RouletteGun bulletInChamber={4} />
    </div>
  )
}

export default App;
