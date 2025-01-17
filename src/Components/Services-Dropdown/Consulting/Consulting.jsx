import React,{useEffect} from 'react'
import "./Consulting.scss"
const Consulting = () => {
  useEffect(() => {
      // Scroll to the top of the page when the component is mounted
      window.scrollTo(0, 0);
    }, []);
  return (
    <div style={{marginTop:"120px"}}>Consulting</div>
  )
}

export default Consulting