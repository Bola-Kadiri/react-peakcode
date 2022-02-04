import React from 'react'
import './About.css'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCode } from '@fortawesome/free-solid-svg-icons';
import img3 from '../asset/html.png'
import img4 from '../asset/css.png'
import img5 from '../asset/js.png'



const About = () => {
    return (
    <div className='content1'>
            <div className='first'>
                    <h3>WHO WE ARE?</h3>
                    <h2>WE ARE PEAKCODE ACADEMY</h2>
                    <p><span>Lorem, ipsum dolor sit amet consectetur adipisicing</span> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi </p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi quisquam deleniti voluptatum nihil dolorem accusamus rem odio iure</p>
            </div>
            <div className='second'>
                <div className='card'>
                    <img src={img3} alt='img' style={{width: '150px'}}/>
                    <h4 >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi quisquam deleniti voluptatum nihil dolorem accusamus rem odio iure </h4>
                </div>
                <div className='card'>
                    <img src={img4} alt='img' style={{width: '150px'}}/>
                    <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi quisquam deleniti voluptatum nihil dolorem accusamus rem odio iure</h4>    
                </div>
                <div className='card'>
                    <img src={img5} alt='img' style={{width: '150px'}}/>
                    <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi quisquam deleniti voluptatum nihil dolorem accusamus rem odio iure</h4>   
                </div>
            </div>
    </div>
    )
}

export default About
