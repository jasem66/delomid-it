import React from 'react'
import { Business, Hero, HomeVideo } from '../components'

const Home = () => {
  return (
    <div className='home'>
      <Hero />
      {/* <Business /> */}
      <HomeVideo/>
    </div>
  )
}

export default Home
