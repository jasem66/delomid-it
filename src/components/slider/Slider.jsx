import React, { useEffect, useState } from 'react'
import './slider.scss'
import { sliderData } from '../../data/sliderData'
const Slider = () => {
  const [index, setIndex] = useState(1)
  const [anime, setAnime] = useState('')

  const lastSlide = sliderData.length -1
  const increase = () => {
    setIndex((num) => num + 1)
    setAnime(false)
  }
  const decrease = () => {
    setIndex((num) => num - 1)
    setAnime(true)
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
    if (anime) {
      setAnime('ltr-anime')
    } else {
      setAnime('rtl-anime')
    }
  }, [index])

  return (
    <div className='slider'>
      {anime}
      {index}
      <div className='slider-container'>
        <h3>Customer references </h3>
        <div className='slider-col '>
          <div className={anime}>
            <img src={sliderData[index]} alt='' />
          </div>
          <div className='button-wrapper'>
            <button className='btn' onClick={decrease} setAnime>
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
