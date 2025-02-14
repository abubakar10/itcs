import React,{useEffect} from 'react'
import "./ITServices.scss"
import ITSection1 from './IT-Section1/ITSection1';
import ITSection2 from './IT-Section2/ITSection2';
import ITSection3 from './IT-Section3/ITSection3';
import Section6 from "./../../Home/Section6/Section6"
import ITSection4 from './IT-Section4/ITSection4';
import ITSection5 from './IT-Section5/ITSection5';
const ITServices = () => {
   useEffect(() => {
        // Scroll to the top of the page when the component is mounted
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
    <ITSection1/>
    <ITSection2/>
    <ITSection3/>
    <ITSection4/>
    <Section6/>
    <ITSection5/>
   
    </>
    
   
  )
}

export default ITServices