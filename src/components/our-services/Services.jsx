import React from 'react'
import './services.scss'
import { servicesData } from '../../data/servicesData'
const Services = () => {
  return (
    <div className='services'>
      <div className='services-container'>
        <h2>Delomid IT supports you in the realization of your project</h2>

        <div className='services-col'>
          {servicesData.map((item) => {
            const { id, title, desc, icon, color } = item

            return (
              <div className='single-service'>
                <article>
                  <div className='icon' style={{ color: `#${color}` }}>
                    {icon}
                  </div>
                </article>
                <h3>{title}</h3>
                <div className='desc-wrapper'>
                  {desc.map((item) => {
                    return <p>{item}</p>
                  })}
                </div>
              </div>
            )
          })}
        </div>
        <div className='quote'>
          <div className='quote-wrapper'>
            <q>
              Build an authentic relationship with our customers.
            </q>
          </div>
          <h5>Delomid team</h5>
        </div>
      </div>
    </div>
  )
}

export default Services
