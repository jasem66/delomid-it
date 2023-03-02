import React from 'react'
import { Business, Carousel, Hero, HomeVideo, Jobs, Portfolio } from '../components'

const Home = () => {
  return (
    <div className='home'>
      <Hero />
      <Business />
      <HomeVideo />
      <Portfolio />
      <Jobs />
      <Carousel />
    </div>
  )
}

export default Home
