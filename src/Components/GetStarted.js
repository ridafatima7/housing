import React from 'react';
import './housing.css';
import '../../src/App.css';
const GetStarted = () => {
  return (
    <section className='g-wrapper'>
        <div className='paddings innerWidth g-container'>
           <div className='flexColCenter inner-container'>
             <span className='primaryText'>Get Started with Homyz</span>
             <span className='secondaryText'>Subscribe and find super attractive quotes from 
                <br />
                Find your residence soon
             </span>
             <button className='button'>
              Get Started
             </button>
           </div>
        </div>
    </section>
  )
}

export default GetStarted
