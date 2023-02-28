import React, { useState } from 'react'
import './business.scss'
import { businessData, digitalData } from '../../data/bussinesData'
import { Link } from 'react-router-dom'
const Business = () => {
  return (
    <div className='business'>
      <div className='business-row'>
        <div className='business-content'>
          <h3>Business Intelligence</h3>
          <p>Expertise in data management and processing</p>
        </div>
        <div className='seperator'></div>
        <div className='business-container'>
          {businessData.map((item) => {
            const { id, icon, title, description } = item
            return (
              <div key={id} className='single-business'>
                <div className='icon-container'>
                  <Link to='/james'>
                    <div className='overlay' />
                    <div className='icon'>{icon}</div>
                  </Link>
                </div>

                <Link to='/james'>
                  <h3>{title}</h3>
                </Link>
                <p>{description}</p>
              </div>
            )
          })}
        </div>
        <div className='seperator-container'>
          <div className='seperator-down' />
        </div>
      </div>

      <div className='business-row'>
        <h3>digital-online</h3>
        <p>Design of web and mobile applications</p>
        <div className='seperator'></div>
        <div className='digital-container'>
          {digitalData.map((item) => {
            const { id, icon, title, description } = item
            return (
              <div key={id} className='single-business'>
                <div className='icon-container'>
                  <Link to='james delomid'>
                    <div className='overlay' />
                    <div className='icon'>{icon}</div>
                  </Link>
                </div>
                <Link to='james delomid'>
                  <h3 className='title'>{title}</h3>
                </Link>
                <p>{description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default Business
