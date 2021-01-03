import React from 'react';
import './App.css';
import Counter from './components/Counter';
import CounterDisplay from './components/CounterDisplay';

function App() {
  return (
    <div className="counter">
      <Counter/>
      <CounterDisplay />
    </div>
  );
}

export default App;
