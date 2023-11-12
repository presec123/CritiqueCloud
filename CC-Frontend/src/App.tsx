import React from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import CategoryList from './components/categoryList/categoryList';
import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
       <CategoryList />
      <Footer />
      </Router>
    </div>
  );
}

export default App;
