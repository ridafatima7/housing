import React from 'react';
import './housing.css';
import { HiLocationMarker } from "react-icons/hi";
const HeroSection = () => {
  return (
    <section className='hero-wrapper'>
        <div className='paddings innerWidth flexCenter hero-container'>
            <div className='flexColStart hero-left'>
                <div className='hero-title'>
                    <div className='orange-circle' />
                    <h1>Discover <br />Most Suitable<br />Property</h1>
                </div>
                <div className='flexColStart hero-description'>
                   <span className='secondaryText'>Find a variety of properties that suits you very easily</span>
                   <span className='secondaryText'>Forget all the difficulties in finding a residence for you</span>
                </div>
                <div className='flexCenter search-bar'>
                      <HiLocationMarker color='var(--blue)' size={25} />
                      <input type='text'></input>
                      <button className='button'>Search</button>
                </div>
                {/* <div className='flexCenter stats'>
                  <div className='flexColCenter stat'>
                    <span>
                        <CountUp start={88000} end={9000} duration={4} />
                    </span>
                     <span>+</span>
                     <span className='ssecondaryText'>Premium Products</span>
                </div>
                  <div className='flexColCenter stat'>
                    <span>
                        <CountUp start={88000} end={9000} duration={4} />
                    </span>
                     <span>+</span>
                     <span className='ssecondaryText'>Happy Customers</span>
                  </div>
                  <div className='flexColCenter stat'>
                    <span>
                        <CountUp  end={28} />
                    </span>
                     <span>+</span>
                     <span className='ssecondaryText'>Awards Winnings</span>
                  </div>
                </div> */}
            </div>
            <div className='flexCenter hero-right'>
             <div className='image-container'>
               <img src='/hero-image.png' alt='house' />
             </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection
