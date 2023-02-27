import React, { useState } from 'react'
import { sliderData } from '../../data/sliderData'
import './slider.scss'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
const Slider = () => {
 const [index, setIndex] = useState(0)
const [data, setData] = useState(sliderData)
 const increase=()=>{

 }
  return (
    <div className='slider'>
      <div className='slider-container'>
        <div className='img-wrapper'>
          <div className='slider-btn'>
            <button className='slider-left'>
              <BiChevronLeft size={30} />
            </button>
            <button className='slider-right'>
              <BiChevronRight size={30} />
            </button>
          </div>
          <img src={data[index]} alt='' />
          <img src={data[index+1]} alt='' />
          <img src={data[index+2]} alt='' />

          {/* {sliderData.map((item,index) => (
            <img key={index} src={item} alt='' />
          ))} */}
        </div>
      </div>
    </div>
  )
}
export default Slider
