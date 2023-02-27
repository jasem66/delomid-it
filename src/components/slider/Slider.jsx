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

  const RenderCards = () => {
    if (winSize > 1200) {
      // Display 4 cards in large screens
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
    if (winSize > 768) {
      // Display 4 cards in large screens
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
      // Display 4 cards in large screens
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
      // Display 1 card in small screens
      return (
        <div className={animeOn ? 'card right-anime-f' : 'card left-anime-f'}>
          <img src={sliderData[currentIndex]} alt='' />
        </div>
      )
    }
  }

  return (
    <div className='card-carousel'>
      <div className='card-container'>
        <RenderCards />
        <div className='button-container'>
          <button className='prev-btn' onClick={handlePrevClick}>
            <BsChevronLeft color='#222' size={30} />
          </button>
          <button className='next-btn' onClick={handleNextClick}>
            <BsChevronRight color='#222' size={30} />
          </button>
        </div>
      </div>
      <div className='dots'>
        {sliderData.map((item, index) => {
          if (index === currentIndex) {
            return (
              <RxDotFilled
                size={30}
                onClick={() => goToSlide(index)}
              />
            )
          }
          return (
            <RxDot color='#43a9d1' size={30} onClick={() => goToSlide(index)} />
          )
        })}
      </div>
    </div>
  )
}

export default Slider
