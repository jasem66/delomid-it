import React from 'react'
import { Business, Hero, HomeVideo, Jobs, Portfolio } from '../components'

const Home = () => {
  return (
    <div className='home'>
      <Hero/>
<Business/>
<HomeVideo/>
<Portfolio/>
      <Jobs />
    </div>
  )
}

export default Home
