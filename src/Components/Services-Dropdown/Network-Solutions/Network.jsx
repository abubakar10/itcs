import React,{useEffect} from 'react'
import "./Network.scss"
const Network = () => {
   useEffect(() => {
        // Scroll to the top of the page when the component is mounted
        window.scrollTo(0, 0);
      }, []);
  return (
    <div style={{marginTop:"120px"}}>Network</div>
  )
}

export default Network