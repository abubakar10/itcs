import React,{useEffect} from 'react'
import "./Consulting.scss"
import ConsultingSection1 from './ConsultingSection1/ConsultingSection1';
import ConsultingSection2 from './ConsultingSection2/ConsultingSection2';
import ConsultingSection3 from './ConsultingSection3/ConsultingSection3';
import ConsultingSection4 from './ConsultingSection4/ConsultingSection4';
import ConsultingSection5 from './ConsultingSection5/ConsultingSection5';
const Consulting = () => {
  useEffect(() => {
      // Scroll to the top of the page when the component is mounted
      window.scrollTo(0, 0);
    }, []);
  return (
    <>
    <ConsultingSection1/>
    <ConsultingSection2/>
    <ConsultingSection3/>
    <ConsultingSection4/>
    <ConsultingSection5/>
    </>
  )
}

export default Consulting