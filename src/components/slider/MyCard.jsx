import React from 'react'
import './mycard.scss'
import { sliderData } from '../../data/sliderData'

const MyCard = () => {
  return (
    <div className='mycard'>
      {sliderData.map((item) => {
        return <img src={item} alt='' />
      })}
    </div>
  )
}

export default MyCard
