import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Hero,
  Business,
  Carousel,
  HomeVideo,
  Jobs,
  Loading,
  Portfolio,
} from '../components'

const Home = () => {
  const dispatch = useDispatch()
  const { isLoading } = useSelector((state) => state.navbar)
  return (
    <div className='home'>
      {/* {isLoading ? (
        <Loading />
      ) : ( )}*/}
      <>
        <Hero />
        <Business />
        <HomeVideo />
        <Portfolio />
        <Jobs />
        <Carousel />
      </>
    </div>
  )
}

export default Home
