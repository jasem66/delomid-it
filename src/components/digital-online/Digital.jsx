import React from 'react'
import './digital.scss'
import { digitalOnlineData } from '../../data/digitalOnlineData'
const Digital = () => {
  return (
    <div className='intelligence'>
      {digitalOnlineData.map((item) => {
        const { id, title, desc, icon } = item

        return (
          <div key={id} className='single-int'>
            <div className='int-title'>
              <h3>
                {icon} {title}
              </h3>
            </div>
            <p>{desc}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Digital