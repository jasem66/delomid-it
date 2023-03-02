import React, { useState } from 'react'
import { sliders } from '../../data/sliderData'
import './carousel.scss'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    // autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <div className='carousel'>
      <div className='slider-container'>
        <article>
          <h2>Customer references</h2>
          <div className='seperator'></div>
          <Slider {...settings}>
            {sliders.map((item) => {
              return (
                <div className='image-wrapper'>
                  <img src={item} alt='' />
                </div>
              )
            })}
          </Slider>
        </article>
      </div>
    </div>
  )
}

export default Carousel
