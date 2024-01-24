import React from 'react';
import './housing.css';
import '../../src/App.css';
const Footer = () => {
  return (
  <section className='f-wrapper'>
    <div className='paddings innerWidth f-container'>
        <div className='f-left flexColStart'>
          <img src='./logo2.png' alt='' width={120} />
          <span className='secondaryText'>
            Our vision is to make all people <br />
            the best place to live for them.
          </span>
        </div>
        <div className='f-right flexColStart'>
            <span className='primaryText'>Information</span>
            <span className='secondaryText'>Islamabad, Pakistan</span>
            <div className='flexCenter f-menu'>
              <span>Property</span>
              <span>Services</span>
              <span>Product</span>
              <span>About</span>
            </div>
        </div>
    </div>
  </section>
  )
}

export default Footer
