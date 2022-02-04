

import Home from './pages/Home'
import About from './pages/About'
import Team from './pages/Team'
import Service from './pages/Service'
import React from 'react';
import './App.css';
import Form from './pages/Form';


import Navbar from './Navbar/Navbar'
import {HashRouter, Routes, Route} from 'react-router-dom';





function App() {

  return (
    
  <HashRouter>
    <div className=''></div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/> 
          <Route path='/team' element={<Team/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/contact' element={<Form/>}/>
    </Routes> 
    
      
     
      
      </HashRouter>
    
    

  );
}

// const App = () => {
//   return(
    
//     <div className='container'>
//         <Navbar/>
//     <Routes>
//         <Route path='/'  element={<Home />}/>
//         <Route path='/about' element={<About />}/>
//         <Route path='/intro' element={<Intro />}/>
//         <Route path='/cartlist' element={<CartList />}/>
//     </Routes>
//     </div>
//   )
// }

// export default App;





export default App;

