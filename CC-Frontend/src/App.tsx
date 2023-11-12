import React from 'react';
import Header from './components/header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      </Router>
    </div>
  );
}

export default App;
