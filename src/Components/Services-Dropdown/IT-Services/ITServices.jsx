import React,{useEffect} from 'react'
import "./ITServices.scss"
import ITSection1 from './IT-Section1/ITSection1';
import ITSection2 from './IT-Section2/ITSection2';
import ITSection3 from './IT-Section3/ITSection3';
import Section6 from "./../../Home/Section6/Section6"
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
    <Section6/>
   
    </>
    
   
  )
}

export default ITServices