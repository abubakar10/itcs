import './App.css'
import Header from "./Components/Header/Header"
import Footer from './Components/Footer/Footer'
import { Route,Routes } from 'react-router-dom' 
import Home from './Components/Home/Home'
import Services from "./Components/Services/Services"
import Vision from './Components/Vision/Vision'
import AboutUs from './Components/AboutUs/AboutUs'
import Contact from './Components/Contact/Contact'
function App() {

  return (
    <>
      <Header />
      <Routes>
       
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services/>} />
        <Route path='/vision-mission' element={<Vision/>} />
        <Route path='/about-us' element={<AboutUs/>} />
        <Route path='/contact' element={<Contact/>} />



      </Routes>
      <Footer />
    </>
  )
}

export default App
