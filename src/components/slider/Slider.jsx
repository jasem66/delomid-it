import React, { useEffect, useState } from 'react'
import { sliderData } from '../../data/sliderData'
import './slider.scss'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
const Slider = () => {
  const [imageIndex, setImageIndex] = useState(0)
  const [data, setData] = useState(sliderData)
      const lastImage = data.length - 1

  const increase = () => {
    setImageIndex((prev) => prev + 1)
  }
  const decrease = () => {
    setImageIndex((prev) => prev - 1)
  }

  useEffect(() => {
    if (imageIndex < 0) {
      setImageIndex(lastImage)
    }
    if (imageIndex > lastImage) {
      setImageIndex(0)
    }
  }, [imageIndex])

  return (
    <div className='slider'>
    <h2> {imageIndex} </h2>
      <div className='slider-container'>
        <div className='img-wrapper'>
          <div className='slider-btn'>
            <button className='slider-left' onClick={decrease}>
              <BiChevronLeft size={30} />
            </button>
            <button className='slider-right' onClick={increase}>
              <BiChevronRight size={30} />
            </button>
          </div>
          {/* <img src={data[index]} alt='' />
          <img src={data[index + 1]} alt='' />
          <img src={data[index + 2]} alt='' /> */}

          {sliderData.map((item, index) => {
            let position = 'right';
            if(imageIndex===index){
             position='center'
            }
            if(imageIndex=== index-1 || index === 0 && imageIndex === lastImage){
             position = 'left'
            }

            return <img className={position} key={index} src={item} alt='' />
          })}
        </div>
      </div>
    </div>
  )
}
export default Slider
