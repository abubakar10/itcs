import { useState } from 'react'
import './App.css'
import Header from "./Components/Header/Header"
import Footer from './Components/Footer/Footer'
import { Route,Routes } from 'react-router-dom' 
import Home from './Components/Home/Home'
import Services from "./Components/Services/Services"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
       
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
