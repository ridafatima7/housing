import React from 'react';
import './housing.css';
import '../../src/App.css';
import { MdCall } from "react-icons/md";
import { HiChatBubbleBottomCenterText } from "react-icons/hi2";
import { BsFillChatDotsFill } from "react-icons/bs";
const Contact = () => {
  return (
    <section className='c-wrapper'>
     <div className='paddings innerWidth flexCenter c-container'>
      <div className='flexColStart c-left'>
        <span className='orangeText'>Our Contacts</span>
        <span className='primaryText'>
          Easy to Contact Us
        </span>
        <span className='secondaryText'>We always ready to help by providing the best 
        services because We believe a good blace to to live can make your life better</span>
        <div className='flexColStart contactModes'>
          <div className='flexStart row'>
            <div className='flexColCenter mode'>
               <div className='flexStart'>
                  <div className='flexCenter icon'>
                     <MdCall />
                  </div>
                  <div className='flexColStart detail'>
                     <span>Call</span>
                     <span>
                      021 34 45453321
                     </span>
                  </div>
               </div>
               <div className='flexCenter button'>
                Call Now
               </div>
            </div>
            <div className='flexColCenter mode'>
               <div className='flexStart'>
                  <div className='flexCenter icon'>
                     <BsFillChatDotsFill />
                  </div>
                  <div className='flexColStart detail'>
                     <span>Chat</span>
                     <span>
                      021 34 45453321
                     </span>
                  </div>
               </div>
               <div className='flexCenter button'>
                Chat Now
               </div>
            </div>
          </div>
          <div className='flexStart row'>
            <div className='flexColCenter mode'>
               <div className='flexStart'>
                  <div className='flexCenter icon'>
                     <BsFillChatDotsFill />
                  </div>
                  <div className='flexColStart detail'>
                     <span>Video Call</span>
                     <span>
                      021 34 45453321
                     </span>
                  </div>
               </div>
               <div className='flexCenter button'>
                Video Call Now
               </div>
            </div>
            <div className='flexColCenter mode'>
               <div className='flexStart'>
                  <div className='flexCenter icon'>
                     <HiChatBubbleBottomCenterText />
                  </div>
                  <div className='flexColStart detail'>
                     <span>Message</span>
                     <span>
                      021 34 45453321
                     </span>
                  </div>
               </div>
               <div className='flexCenter button'>
              Message Now
               </div>
            </div>
          </div>
        </div>
      </div>
      <div className='c-right'>
        <div className='image-container'>
          <img src='./contact.jpg'  alt=''/>
        </div>
      </div>
     </div>
    </section>
  )
}

export default Contact
