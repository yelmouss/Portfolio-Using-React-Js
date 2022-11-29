// import logo from './logo.svg';
import './App.css';
// import Button from 'react-bootstrap/Button'
import "bootstrap/dist/css/bootstrap.min.css"
import { Routes, Route } from "react-router-dom";

// structure front
import Header from './components/header';
import Footer from './components/footer';

// routes SPA
import Home from './components/home'
import About from './components/About'
import Contact from './components/contact'



// import React, { useEffect } from 'react';

import { useState } from 'react'

function App() {

  const [dark, updateDark] = useState([])
  

  return (
    <div className="App col-12">
      <Header dark={dark} updateDark={updateDark} />     
      <Routes>
      <Route path="/" element={<Home dark={dark} updateDark={updateDark}/>} />
      <Route path="/About" element={<About  dark={dark} updateDark={updateDark}/>} />
      <Route path="/Contact" element={<Contact  dark={dark} updateDark={updateDark}/>} />
      {/* The 404 page that render when a path does not exists */}
      </Routes>
      <Footer />

    </div>
  );
}


export default App;
