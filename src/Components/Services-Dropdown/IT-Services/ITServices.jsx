import React,{useEffect} from 'react'
import "./ITServices.scss"
const ITServices = () => {
   useEffect(() => {
        // Scroll to the top of the page when the component is mounted
        window.scrollTo(0, 0);
      }, []);
  return (
    <div style={{marginTop:"120px"}}>ITServices</div>
  )
}

export default ITServices