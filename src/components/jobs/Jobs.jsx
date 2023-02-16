import React from 'react'
import './jobs.scss'
import { jobsData } from '../../data/jobsData'
import images from '../../utilities/images'

const Jobs = () => {
  return (
    <div className='jobs'>
      <div className='jobs-overlay'>
        <div className='jobs-row'>
          <h2>Jobs</h2>
          <div className='jobs-col'>
            {jobsData.map((item) => {
              const { id, title, desc, date } = item

              return (
                <div key={id} className='single-job'>
                  <h3>{title}</h3>
                  <time>{date}</time>
                  <p>{desc}</p>

                  <button className='btn'>Learn More</button>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Jobs
