import React from 'react'
import { Link } from 'react-router-dom'
import { Digital, PageHero } from '../components'

const DigitalOnline = () => {
  return (
    <>
      <PageHero
        title='Digital Online'
        link1={
          <div style={{ margin: '0 5px ' }}>
            <Link to='/our-services'>
              <cite>Our Services</cite>
            </Link>
          </div>
        }
        link2={
          <div style={{ margin: '0 5px ' }}>
            <Link to='/our-services/digital-online'>
              ><cite> Digital Online</cite>
            </Link>
          </div>
        }
      />

      <Digital />
    </>
  )
}

export default DigitalOnline