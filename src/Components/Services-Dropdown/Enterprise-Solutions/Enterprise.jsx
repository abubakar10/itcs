import React,{useEffect} from 'react'
import "./Enterprise.scss"
const Enterprise = () => {
   useEffect(() => {
        // Scroll to the top of the page when the component is mounted
        window.scrollTo(0, 0);
      }, []);
  return (
    <div style={{marginTop:"120px"}}>Enterprise</div>
  )
}

export default Enterprise