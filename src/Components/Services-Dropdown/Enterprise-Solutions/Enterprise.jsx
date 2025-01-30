import React,{useEffect} from 'react'
import "./Enterprise.scss"
import EnterpriseSection1 from './EnterpriseSection1/EnterpriseSection1';
import EnterpriseSection2 from './EnterpriseSection2/EnterpriseSection2';
import EnterpriseSection3 from './EnterpriseSection3/EnterpriseSection3';
const Enterprise = () => {
   useEffect(() => {
        // Scroll to the top of the page when the component is mounted
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
    <EnterpriseSection1/>
    <EnterpriseSection2/>
    <EnterpriseSection3/>
    </>
  )
}

export default Enterprise