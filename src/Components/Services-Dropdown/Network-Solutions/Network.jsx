import React,{useEffect} from 'react'
import "./Network.scss"
import NetworkSection1 from './NetworkSection1/NetworkSection1';
import NetworkSection2 from './NetworkSection2/NetworkSection2';
import NetworkSection3 from './NetworkSection3/NetworkSection3';
import NetworkSection4 from './NetworkSection4/NetworkSection4';
import NetworkSection5 from './NetworkSection5/NetworkSection5';
const Network = () => {
   useEffect(() => {
        // Scroll to the top of the page when the component is mounted
        window.scrollTo(0, 0);
      }, []);
  return (
    < >
    <NetworkSection1/>
    <NetworkSection2/>
    <NetworkSection3/>
    <NetworkSection4/>
    <NetworkSection5/>
    </>
  )
}

export default Network