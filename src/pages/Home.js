import React from 'react'
import './Home.css'
import img1 from '../asset/bg-5.jpg'




const Home = () => {
    return (
        <div>
             
            <div className="content">
        <div className="para1">
            <h2>Welcome to PeakCode</h2>
            <h1>Design<br/> Your Journey<br/> To Freedom</h1> 
        </div>
        <div className="image1">
            <img src={img1} alt="" width="450px" height="300px"/>
        </div>
        </div>
        
       
    </div>
    

    )
}

export default Home
