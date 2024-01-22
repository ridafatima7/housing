import React from 'react';
// import Swiper from 'swiper';
import './housing.css';
import 'swiper/css';
import data from '../Slider.json';
import 'swiper/swiper-bundle.css';
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';
import {Swiper,SwiperSlide,useSwiper} from 'swiper/react';
const Residencies = () => {
  return (
    <section className='r-wrapper'>
        <div className='paddings innerWidth r-container '>
            <div className='r-head flexColStart'>
              <span className='orangeText'>
                Best Choices
              </span>
              <span className='primaryText'>Popular Residencies</span>
            </div>
            <Swiper
             modules={[Navigation, Pagination, Scrollbar, A11y]}
             spaceBetween={5}
             slidesPerView={5}
             navigation
             pagination={{ clickable: true }}
            //  scrollbar={{ draggable: true }}
             onSwiper={(swiper) => console.log(swiper)}
             onSlideChange={() => console.log('slide change')}
            >
                <SliderButtons />
                {
                    data.map((card,i)=>(
                        <SwiperSlide key={i}>
                          <div className='r-card'>
                             <img src={card.image}  alt=''/>
                             <span className='secondaryText r-prices'>
                                <br /><span style={{color:'orange'}}>$</span>
                               <span>{card.price}</span><br />
                             </span>
                             <span className='primaryText'>{card.name}</span><br />
                             <span className='secondaryText'>{card.detail}</span>
                          </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
          
    </section>
  )
}

export default Residencies
const SliderButtons=()=>{
    const swiper=useSwiper();
    return(
        <div className='flexCenter r-button'>
           <button onClick={()=>swiper.slidePrev()}>&lt;</button>
           <button onClick={()=>swiper.slideNext()}>&gt;</button>
        </div>
    )
}
