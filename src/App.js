import React from 'react';
import './App.css';
import Timer from './components/Timer';

function App() {
  return (
    <div className="App">
      <header>
        <div>
          <h3>Pomodoro timer</h3>
        </div>
      </header>
      <main>
        <Timer/>
      </main>
    </div>
  );
}

export default App;
