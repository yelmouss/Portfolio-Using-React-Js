// import logo from './logo.svg';
import './App.css';
// import Button from 'react-bootstrap/Button'
import "bootstrap/dist/css/bootstrap.min.css"
import { Routes, Route } from "react-router-dom";

import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home'


// import React, { useEffect } from 'react';



function App() {
  
  return (
    <div className="App col-12">
      <Header />
      {/*<Sidebar /> */}
      <Routes>
      <Route path="/" element={<Home/>} />
      </Routes>
      <Footer />

    </div>
  );
}


export default App;
