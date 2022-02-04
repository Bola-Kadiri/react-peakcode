import React from "react";
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faSearchLocation, faCalendarDay, faEnvelope } from '@fortawesome/free-solid-svg-icons'




function Contact() {
    
  
    return (
      <div id='contain'>
      <div class='heading'>
       <p>Contact</p>
         <h1>GET IN TOUCH</h1>
      </div>
       <div className="section">
         
         <div className="left">
         
           
           <div className="social-logo">
           <FontAwesomeIcon icon={faSearchLocation}/>
           <FontAwesomeIcon icon={faPhone} />
           <FontAwesomeIcon icon={faCalendarDay} />
           <FontAwesomeIcon icon={faEnvelope}  style={{alignItem: 'center'}}/>

           </div>
           <div className="desc" >
             <p>13 , Oba Fatola Street , Off Igbogbo Road, Ikorodu Lagos.</p>
             <p>Phone: +2349151722634</p>
             <p>Monday-friday: 9.00-19.00 Saturday-Sunday: Holiday</p>
             <p>Email: bolajimoh25@gmail.com</p>
           </div>
         </div>
         
         <div className="right">
           <div className="input">
             <input type='text' placeholder="Enter your name" ></input>
             <div className="treat">
             <input type='text' placeholder="Enter your name"></input>
             <input type='text' placeholder="Enter your name"></input>
             </div>
             <textarea placeholder= 'Your message'></textarea>
           </div>

         </div>
       </div>
       </div>

                       
    );
  }
  export default Contact