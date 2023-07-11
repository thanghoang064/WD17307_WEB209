import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Login from './components/Login';
import ParentMount from './components/ParentMount';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          {/* <Counter></Counter> */}
          {/* <Login></Login> */}
          {/* <ParentMount></ParentMount> */}
          <ComponentA></ComponentA>
          <ComponentB></ComponentB>
      </header>
    </div>
  );
}

export default App;
