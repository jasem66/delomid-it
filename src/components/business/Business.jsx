import React, { useState } from 'react'
import './business.scss'
import { businessData, digitalData } from '../../data/bussinesData'
const Business = () => {
  return (
    <div className='business'>
      <div className='business-row'>
        <h3>Business Intelligence</h3>
        <p>Expertise in data management and processing</p>
        <div className='seperator'></div>

        {businessData.map((item) => {
          const { id, icon, title, description } = item
          return (
            <div key={id} className='single-business'>
              <div className='icon-container'>
                <div className='overlay' />
                <div className='icon'>{icon}</div>
              </div>
              <h3 className='title'>{title}</h3>
              <p>{description}</p>
            </div>
          )
        })}

        <hr className='seperator' />
      </div>

      <div className='business-row'>
        <h3>digital-online</h3>
        <p>Design of web and mobile applications</p>
        <div className='seperator-dark'></div>

        {digitalData.map((item) => {
          const { id, icon, title, description } = item
          return (
            <div key={id} className='single-business'>
              <div className='icon-container'>
                <div className='overlay' />
                <div className='icon'>{icon}</div>
              </div>
              <h3 className='title'>{title}</h3>
              <p>{description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Business
