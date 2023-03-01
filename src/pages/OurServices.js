import React from 'react'
import { Link } from 'react-router-dom'
import { Loading, PageHero, Test } from '../components'
import Services from '../components/our-services/Services'

const OurServices = () => {
  return (
    <>
      <PageHero
        title='Our Services'
        link1={
          <div style={{ margin: '0 5px ' }}>
            <Link to='/our-services'>
              <cite>Our Services</cite>
            </Link>
          </div>
        }
      />
      <Test/>
      <Services />
    </>
  )
}

export default OurServices
