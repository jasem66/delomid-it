import React from 'react'
import './intelligence.scss'
import { jobsData } from '../../data/jobsData'
const Intelligence = () => {
  return (
    <div className='intelligence'>
      <div className='overlay'></div>
      <div className='intelligence-header'>
        <h2>Bussines Intelligence</h2>
      </div>

      <div className='intelligence-row'>
        <div className='intelligence-col'>
          {jobsData.map((item) => {
            const { id, title, date, desc } = item
            return (
              <div className='single-job' key={id}>
                <h3>{title}</h3>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Intelligence
