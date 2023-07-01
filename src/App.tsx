import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Login from './components/Login';
import ParentMount from './components/ParentMount';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          {/* <Counter></Counter> */}
          {/* <Login></Login> */}
          <ParentMount></ParentMount>
      </header>
    </div>
  );
}

export default App;
