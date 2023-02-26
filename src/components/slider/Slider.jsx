import React, { useEffect, useState } from 'react'
import './slider.scss'
import { sliderData } from '../../data/sliderData'
const Slider = () => {
  const [index, setIndex] = useState(0)
  const [anime, setAnime] = useState('right-anime')

  const lastSlide = sliderData.length - 1
  const increase = () => {
    setIndex((num) => num + 1)
  }
  const decrease = (numb) => {
    setIndex((num) => num - 1)
    if (numb < 0) {
      return lastSlide
    }
  }

  useEffect(() => {
    if (index < 0) {
      setIndex(lastSlide)
    }
    if (index > lastSlide) {
      setIndex(0)
    }
  }, [index])

  useEffect(() => {
    if (index) {
      setAnime('left-anime')
    }
  }, [index])

  return (
    <div className='slider'>
      <div className='slider-container'>
        <h3>Customer references</h3>
        <div className='slider-col'>
          <div className={anime}>
            <img src={sliderData[index]} alt='' />
            <img src={sliderData[index + 1]} alt='' />
          </div>
          <div className='button-wrapper'>
            <button className='btn' onClick={decrease}>
              left
            </button>
            <button className='btn' onClick={increase}>
              right
            </button>
          </div>

          <div className='dots'></div>
        </div>
      </div>
    </div>
  )
}

export default Slider
