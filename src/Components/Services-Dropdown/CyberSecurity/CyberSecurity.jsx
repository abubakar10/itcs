import React,{useEffect} from 'react'
import "./CyberSecurity.scss"
const CyberSecurity = () => {
  useEffect(() => {
        // Scroll to the top of the page when the component is mounted
        window.scrollTo(0, 0);
      }, []);
  return (
    <div style={{marginTop:"110px"}}>CyberSecurity
    
    </div>
  )
}

export default CyberSecurity