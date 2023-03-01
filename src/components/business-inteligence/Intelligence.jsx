import React from 'react'
import './intelligence.scss'
import { businessIntelliganceData } from '../../data/bussinesIntelliganceData'
import { Link } from 'react-router-dom'
const Intelligence = () => {
  return (
    <div className='intelligence'>
      {businessIntelliganceData.map((item) => {
        const { id, title, description, icon } = item

        return (
          <div key={id} className='single-int'>
            <div className='int-title'>
         <article>
           <h3>
                {icon} {title}
              </h3>
         </article>
             
            </div>
            <p>{description}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Intelligence
