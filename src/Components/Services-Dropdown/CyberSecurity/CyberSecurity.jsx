import React,{useEffect} from 'react'
import "./CyberSecurity.scss"
import CyberSsection1 from './CyberSsection1/CyberSsection1';
import CyberSsection2 from './CyberSsection2/CyberSsection2';
import CyberSsection3 from './CyberSsection3/CyberSsection3';
import CyberSsection4 from './CyberSsection4/CyberSsection4';
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
    <CyberSsection4/>
    
    </>
  )
}

export default CyberSecurity