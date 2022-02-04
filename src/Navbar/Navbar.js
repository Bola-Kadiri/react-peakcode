import  React from 'react'
 import {Link} from 'react-router-dom';
import  './Navbar.css'
import { useState } from 'react';

import { menulist} from './Menulist';
 
  

const Navbar = () => {
    const [clicked, setClicked] = useState(false); // THIS HERE TOO
    const Menulist = menulist.map((item)=>{
        return(
            <li key={item.id}>
                <Link to = {item.url} className='active'>
                    {item.title}
                </Link>
                
            </li>
            
        )
    })
    
      const handleClick = () => {   // THESE HERE TOO
        setClicked(!clicked);
      };
    return (
       <nav>
           <div className='logo'>PeakCode</div>
            <div className="menu-icon" onClick={handleClick}>   
         <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>  
      </div> 
           
               {/* OR */}
            <ul className={clicked ? "menu-list" : "menu-list close"}>{Menulist}</ul> 
              
              
               {/* <i className={"fas fa-bars"} style={{ color: 'white', display: 'block', alignItems: 'center'}}></i>
               */}
           
       </nav>
    )
}

export default Navbar
