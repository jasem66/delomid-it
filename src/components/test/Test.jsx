import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { sliders } from '../../data/sliderData'
const CarouselContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`

const CarouselItem = styled.div`
  scroll-snap-align: start;
`

const Test = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [startX, setStartX] = useState(0)

  const handleTouchStart = (event) => {
    setStartX(event.touches[0].clientX)
  }

  const handleTouchMove = (event) => {
    const currentX = event.touches[0].clientX
    const diff = startX - currentX

    if (diff > 5) {
      setCurrentIndex(currentIndex + 1)
    } else if (diff < -5) {
      setCurrentIndex(currentIndex - 1)
    }

    setStartX(currentX)
  }

  return (
    <>
      <CarouselContainer
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {sliders.map((item, index) => (
          <CarouselItem key={index}>
            <img src={item} alt='' />
          </CarouselItem>
        ))}
      </CarouselContainer>
      <button className='btn' onClick={()=>setCurrentIndex(currentIndex+1)}>next</button>
    </>
  )
}

Test.propTypes = {
  items: PropTypes.arrayOf(PropTypes.element).isRequired,
}

export default Test
