// src/App.js
import React from 'react';
import './styles.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
