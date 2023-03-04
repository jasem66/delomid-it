import React, { useEffect, useState } from 'react'
import './services.scss'
import { servicesData } from '../../data/servicesData'
const Services = () => {
  const [size, setSize] = useState(window.innerWidth)
  const [animeOn, setAnimeOn] = useState(false)
  useEffect(() => {
    const handleSize = () => {
      setSize(window.innerWidth)
    }
    window.addEventListener('resize', handleSize)
    if (size > 992) {
      setAnimeOn(true)
    } else setAnimeOn(false)
  }, [size])

  return (
    <div className='services'>
      <div className='services-container'>
        <h2>Delomid IT supports you in the realization of your project</h2>

        <div className='services-col'>
          {servicesData.map((item) => {
            const { id, title, desc, icon, color, anime } = item

            return (
              <div
                key={id}
                className={
                  animeOn ? `single-service ${anime}` : 'single-service '
                }
              >
                <article>
                  <div
                    className='icon'
                    title='find out more'
                    style={{ color: `#${color}` }}
                  >
                    {icon}
                  </div>
                </article>
                <h3 title='find out more'>{title}</h3>
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
            <q>Build an authentic relationship with our customers.</q>
          </div>
          <h5>Delomid team</h5>
        </div>
      </div>
    </div>
  )
}

export default Services
