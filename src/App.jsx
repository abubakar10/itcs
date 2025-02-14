import './App.css'
import Header from "./Components/Header/Header"
import Footer from './Components/Footer/Footer'
import { Route,Routes } from 'react-router-dom' 
import Home from './Components/Home/Home'
import Services from "./Components/Services/Services"
import Vision from './Components/Vision/Vision'
import AboutUs from './Components/AboutUs/AboutUs'
import Contact from './Components/Contact/Contact'

//Dropdowns
import Cloud from './Components/Services-Dropdown/Cloud/Cloud'
import Consulting from './Components/Services-Dropdown/Consulting/Consulting'
import CyberSecurity from './Components/Services-Dropdown/CyberSecurity/CyberSecurity'
import Enterprise from './Components/Services-Dropdown/Enterprise-Solutions/Enterprise'
import ITServices from './Components/Services-Dropdown/IT-Services/ITServices'
import Network from './Components/Services-Dropdown/Network-Solutions/Network'
import Careers from './Components/Careers/Careers'

function App() {

  return (
    <>
      <Header />
      <Routes>
       
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services/>} />
         <Route path="/services/cloud" element={<Cloud />} />
        <Route path="/services/cyber-security" element={<CyberSecurity />} />
        <Route path="/services/consulting" element={<Consulting />} />
        <Route path="/services/enterprise-solutions" element={<Enterprise />} />
        <Route path="/services/it-services" element={<ITServices />} />
        <Route path="/services/network-solutions" element={<Network />} />

        <Route path='/vision-mission' element={<Vision/>} />
        <Route path='/about-us' element={<AboutUs/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/careers' element={<Careers/>} />
        



      </Routes>
      <Footer />
    </>
  )
}

export default App
