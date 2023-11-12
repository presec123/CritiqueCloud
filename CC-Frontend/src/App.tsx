import React from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Footer />
      </Router>
    </div>
  );
}

export default App;
