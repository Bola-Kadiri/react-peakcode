
import React from 'react'
import './Intro.css'
import Home from './Home';
import Home from './pages/Home'
import About from './pages/About'
import Team from './pages/Team'
import Service from './pages/Service'

import Form from './pages/Form';


function Intro() {
    return (
      <>
        <Home/>
        <About/>
        <Team/>
        <Service/>
        <Form/>
      </>
    );
  }
  export default Intro