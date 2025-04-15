import React,{useEffect} from 'react'
import "./CyberSecurity.scss"
import CyberSsection1 from './CyberSsection1/CyberSsection1';
import CyberSsection2 from './CyberSsection2/CyberSsection2';
import CyberSsection3 from './CyberSsection3/CyberSsection3';
// import CyberSsection4 from './CyberSsection4/CyberSsection4';
import CyberSsection5 from './CyberSsection5/CyberSsection5';
import Section6 from "./../../Home/Section6/Section6"
import CyberSsection6 from './CyberSsection6/CyberSsection6';
const CyberSecurity = () => {
  useEffect(() => {
        // Scroll to the top of the page when the component is mounted
        window.scrollTo(0, 0);
      }, []);
  return (
    < >
    <CyberSsection1/>
    <CyberSsection2/>
    <CyberSsection3/>
    {/* <CyberSsection4/> */}
    <CyberSsection5/>
    <Section6/>
    <CyberSsection6/>

    
    </>
  )
}

export default CyberSecurity