import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Login from './components/Login';
import ParentMount from './components/ParentMount';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/templates/Layout';
import ShowStudent from './components/pages/student/ShowStudent';
import { CounterTk } from './components/CounterTk';
import Student from './components/Student';
import Student1 from './components/Student1';

function App() {
  return (
    <div className="App">
              <Routes>
                <Route path="/" element={ <Layout/>}>
                  <Route
                    path="dashboard"
                    element={<Student/>}
                  />
                  <Route path="home" element={<Student1 />} />
                </Route>
              </Routes>
             
    </div>
  );
}

export default App;
