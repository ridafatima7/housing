import React,{useState} from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { MdOutlineArrowDropDown } from "react-icons/md";
import data from '../Accordion';
const Value = () => {
  const[className,setClassName]=useState(null);
  return (
   <section className='v-wrapper'>
     <div className='v-container paddings innerWidth flexCenter'>
        <div className='v-left'>
          <div className='image-container'>
            <img src='/value.png' alt='' />
          </div>
         </div>
         <div className='flexColStart v-right'>
        <span className='orangeText'>Our Value</span>
        <span className='primaryText'>Value we give to you</span>
        <span className='secondaryText'>
          We always ready to help by providing the best services for you.<br />
          We believe a good blace to live can make life better
        </span>
        <Accordion
          className='accordion'
          allowMultipleExpanded={false}
          preExpanded={[0]}
          >
            {data.map((item,i)=>{
              return(
                <AccordionItem className='accordionItem'>
                   <AccordionItemHeading>
                    <AccordionItemButton className='flexCenter AccordionItemButton'>
                      <AccordionItemState>
                        {({expanded})=>
                          expanded
                          ? setClassName('expanded')
                          : setClassName('collapsed')

                        }
                      </AccordionItemState>
                      <div className='flexCenter icon'>
                       {item.icon}
                      </div>
                      <span className='primaryText'>{item.heading}</span>
                      <div className='flexCenter icon'>
                        <MdOutlineArrowDropDown />
                      </div>
                    </AccordionItemButton>
                   </AccordionItemHeading>
                   <AccordionItemPanel>
                    <p className='secondaryText'>{item.detail}</p>
                   </AccordionItemPanel>
                </AccordionItem>
              )
            })
       
            }
        </Accordion>
         </div>
     </div>
     
   </section>
  )
}

export default Value
