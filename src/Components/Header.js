import React from 'react'
import './housing.css';
import '../../src/App.css';
const Header = () => {
  return (
    <section className='h-wrapper'>
       <div className='flexCenter paddings innerWidth h-container'>
           <img src='/logo2.png' alt='logo' width={100} />
           <div className='flexCenter h-menu'>
             <a href=''>Residencies</a>
             <a href=''>Our Value</a>
             <a href=''>Contact Us</a>
             <a href=''>Get Started</a>
             <button className='button'>
             <a href=''>Contact</a>
             </button>       
           </div>
       </div>
    </section>
  )
}

export default Header
