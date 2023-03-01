import React from 'react'
import './careers.scss'
import { jobsData } from '../../data/jobsData'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'
const bussinesIntelligence = jobsData.slice(2)
const digitalOnline = jobsData.slice(0, 1)
const others = jobsData.slice(1, 2)
const careers = () => {
  return (
    <div className='intelligence'>
      <div className='intelligence-header'>
        <div className='overlay'></div>
        <h2>Bussines Intelligence</h2>
      </div>
      <div className='intelligence-row'>
        <div className='intelligence-col'>
          {bussinesIntelligence.map((item) => {
            const { id, title, date, desc } = item
            return (
              <div className='single-job' key={id}>
                <h3>{title}</h3>
                <time>
                  <AiOutlineClockCircle />
                  {date}
                </time>
                <p>{desc.substring(0, 104)}...</p>
                <Link to='/career/id'>
                  <button className='btn'>Learn More</button>
                </Link>
              </div>
            )
          })}
        </div>
      </div>

      {/* online-digital */}

      <div className='intelligence-header second-bg'>
        <div className='overlay'></div>

        <h2>Digital Online</h2>
      </div>
      <div className='intelligence-row'>
        <div className='intelligence-col'>
          {digitalOnline.map((item) => {
            const { id, title, date, desc } = item
            return (
              <div className='single-job' key={id}>
                <h3>{title}</h3>
                <time>
                  <AiOutlineClockCircle />
                  {date}
                </time>
                <p>{desc.substring(0, 104)}...</p>
                <button className='btn'>Learn More</button>
              </div>
            )
          })}
        </div>
      </div>

      {/* others */}

      <div className='  intelligence-header third-bg'>
        <div className='overlay'></div>

        <h2>Others</h2>
      </div>
      <div className='intelligence-row'>
        <div className='intelligence-col'>
          {others.map((item) => {
            const { id, title, date, desc } = item
            return (
              <div className='single-job' key={id}>
                <h3>{title}</h3>
                <time>
                  <AiOutlineClockCircle />
                  {date}
                </time>
                <p>{desc.substring(0, 104)}...</p>
                <button className='btn'>Learn More</button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default careers
