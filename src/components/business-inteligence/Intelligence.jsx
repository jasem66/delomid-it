import React from 'react'
import './intelligence.scss'
import { jobsData } from '../../data/jobsData'
import { AiOutlineClockCircle } from 'react-icons/ai'

const Intelligence = () => {
  return (
    <div className='intelligence'>
      <div className='intelligence-header'>
        <div className='overlay'></div>

        <h2>Bussines Intelligence</h2>
      </div>
      <div className='intelligence-row'>
        <div className='intelligence-col'>
          {jobsData.map((item) => {
            const { id, title, date, desc } = item
            return (
              <div className='single-job' key={id}>
                <h3>{title}</h3>
                <time><AiOutlineClockCircle/>{date}</time>
                <p>{desc}</p>
                <button className="btn">Learn More</button>

              </div>
            )
          })}
        </div>
      </div>{' '}
    </div>
  )
}

export default Intelligence
