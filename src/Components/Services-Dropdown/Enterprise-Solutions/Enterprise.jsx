import React,{useEffect} from 'react'
import "./Enterprise.scss"
import EnterpriseSection1 from './EnterpriseSection1/EnterpriseSection1';
import EnterpriseSection2 from './EnterpriseSection2/EnterpriseSection2';
import EnterpriseSection3 from './EnterpriseSection3/EnterpriseSection3';
import EnterpriseSection4 from './EnterpriseSection4/EnterpriseSection4';
import EnterpriseSection5 from './EnterpriseSection5/EnterpriseSection5';
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
    <EnterpriseSection4/>
    <EnterpriseSection5/>
    </>
  )
}

export default Enterprise