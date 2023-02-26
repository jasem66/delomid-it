import React, { useRef, useState } from 'react'
import { sliderData } from '../../data/sliderData'
import './slider.scss'
import Carousel from 'react-elastic-carousel'
import Items from './items'
const Slider = () => {
 const [imgIndex, setImgIndex] = useState(0)
  const breakPoints = [
    {
      width: 1,
      itemToShow: 1,
    },
    {
      width: 550,
      itemToShow: 2,
    },
    {
      width: 768,
      itemToShow: 3,
    },
    {
      width: 1200,
      itemToShow: 4,
    },
  ]
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>
        Example to setup your carousel in react
      </h1>
      <div className='slider'>
        <Carousel breakPoints={breakPoints}>
      
          {sliderData.map((item, index) => (
            <div className='slider' key={index}>
              <img src={item} alt='' />
            </div>
          ))} 
   
        </Carousel>
      </div>
    </div>
  )
}
export default Slider
