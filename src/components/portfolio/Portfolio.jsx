import React from 'react'
import './portfolio.scss'
import { portfolioData } from '../../data/portfolioData' 

const Portfolio = () => {
  return (
    <div className='portfolio'>
      <div className='portfolio-row'>
        <h3>Portfolio</h3>
        <p>Overview of our projects</p>
<div className="seperator-container">
  <div className="seperator-down"></div>
</div>
        <div className='portfolio-col'>

          {
            portfolioData.map((item)=>{
              const {id,title,text,image} = item

return(
  <div className="single-portfolio">
    <h3>{title}</h3>
    <p>{text}</p>
    <img src={image} alt={title} />
  </div>
)            })
          }
        </div>
      </div>
    </div>
  )
}

export default Portfolio