import React from 'react'
import './careers.scss'
import { jobsData } from '../../data/jobsData'
import { AiOutlineClockCircle } from 'react-icons/ai'
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
                <p>{desc}</p>
                <button className='btn'>Learn More</button>
              </div>
            )
          })}
        </div>
      </div>

      <div className='intelligence-header'>
        <div className='overlay'></div>

        <h2>digital-online</h2>
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
                <p>{desc}</p>
                <button className='btn'>Learn More</button>
              </div>
            )
          })}
        </div>
      </div>

      <div className='intelligence-header'>
        <div className='overlay'></div>

        <h2>digital-online</h2>
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
                <p>{desc}</p>
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
