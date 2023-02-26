import React, { useEffect, useState } from 'react'
import './slider.scss'
import { sliderData } from '../../data/sliderData'
const Slider = () => {
  const [index, setIndex] = useState(0)
  const [anime, setAnime] = useState(false)

  const lastSlide = sliderData.length - 1
  const increase = () => {
    setIndex((num) => num + 1)
    setAnime(true)
  }
  const decrease = () => {
    setIndex((num) => num - 1)
    setAnime(false)
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
setAnime(!anime)
  }, [index])

  return (
    <div className='slider'>{anime}
      <div className='slider-container'>
        <h3>Customer references </h3>
        <div className='slider-col '>
          <div className={anime}>
            <img
              className={anime ? 'rtl-anime' : 'ltr-anime'}
              src={sliderData[index]}
              alt=''
            />
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
