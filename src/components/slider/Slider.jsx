import React, { useEffect, useState } from 'react'
import './slider.scss'
import { sliderData } from '../../data/sliderData'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { RxDot, RxDotFilled } from 'react-icons/rx'

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [winSize, setWinSize] = useState(window.innerWidth)
  const [animeOn, setAnimeOn] = useState(false)

  const handlePrevClick = () => {
    const index = currentIndex === 0 ? sliderData.length - 1 : currentIndex - 1
    setCurrentIndex(index)
    setAnimeOn(false)
  }

  const handleNextClick = () => {
    const index = currentIndex === sliderData.length - 1 ? 0 : currentIndex + 1
    setCurrentIndex(index)
    setAnimeOn(true)
  }
  const goToSlide = (slide) => {
    setCurrentIndex(slide)
  }

  const handleSize = () => {
    setWinSize(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', handleSize)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(currentIndex + 1)
    }, 3000)
    return () => clearInterval(interval)
  }, [currentIndex])
  useEffect(() => {
    const lastSlide = sliderData.length - 1
    if (currentIndex > lastSlide) {
      setCurrentIndex(0)
    }
    if (currentIndex < 0) {
      setCurrentIndex(lastSlide)
    }
  }, [currentIndex])

  const RenderCards = () => {
    if (winSize > 1200) {
      return sliderData
        .slice(currentIndex, currentIndex + 4)
        .map((card, index) => (
          <div
            key={index}
            className={animeOn ? 'card right-anime-f' : 'card left-anime-f'}
          >
            <img src={card} alt='' />
          </div>
        ))
    }
    if (winSize > 922) {
      return sliderData
        .slice(currentIndex, currentIndex + 3)
        .map((card, index) => (
          <div
            key={index}
            className={animeOn ? 'card right-anime-f' : 'card left-anime-f'}
          >
            <img src={card} alt='' />
          </div>
        ))
    }
    if (winSize > 599) {
      return sliderData
        .slice(currentIndex, currentIndex + 2)
        .map((card, index) => (
          <div
            key={index}
            className={animeOn ? 'card right-anime-f' : 'card left-anime-f'}
          >
            <img src={card} alt='' />
          </div>
        ))
    } else {
      return (
        <div className={animeOn ? 'card right-anime-f' : 'card left-anime-f'}>
          <img src={sliderData[currentIndex]} alt='' />
        </div>
      )
    }
  }

  return (
    <div className='card-carousel'>
      <h3>Customer references</h3>

      <div className='seperator-container'>
        <div className='seperator-down'></div>
      </div>
      <div className='card-container'>
        <RenderCards />
        <div className='button-container'>
          <button className='prev-btn' onClick={handlePrevClick}>
            <BsChevronLeft size={25} />
          </button>
          <button className='next-btn' onClick={handleNextClick}>
            <BsChevronRight size={25} />
          </button>
        </div>
      </div>
      <div className='dots'>
        {sliderData.map((item, index) => {
          if (index === currentIndex) {
            return (
              <RxDot
                opacity={0.5}
                color='#43a9d1'
                size={30}
                onClick={() => goToSlide(index)}
              />
            )
          }
          return (
            <RxDotFilled
              color='#222'
              opacity={0.4}
              size={30}
              onClick={() => goToSlide(index)}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Slider
