import React from 'react'
import HomeHero from './HomeHero/HomeHero'
import HomeServices from './HomeServices/HomeServices'
import HomeFeature from './HomeFeature/HomeFeature'
import HomeSolutions from './HomeSolutions/HomeSolutions'
import HomeStats from './HomeStats/HomeStats'
import HomePartners from './HomePartners/HomePartners'
import HomeTestimonials from './HomeTestimonials/HomeTestimonials'
import Blog from '../Home/Blog/HomeBlog'


const Home = () => {
  return (
    <>
      <HomeHero />
      <HomeServices />
      <HomeFeature />
      <HomeSolutions />
      <HomeStats />
      <HomePartners />
      <HomeTestimonials />
      <Blog />
    
    </>
  )
}

export default Home