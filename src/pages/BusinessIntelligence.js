import React from 'react'
import { BiChevronRight } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { Intelligence, PageHero } from '../components'

const BusinessIntelligence = () => {
  return (
    <>
      <PageHero
        title='Our Services'
        link1={
          <div style={{ margin: '0 5px ' }}>
            <Link to='/our-services'>
              <cite style={{}}>Our Services</cite>
            </Link>
          </div>
        }
        link2={
          <div style={{ margin: '0 5px ' }}>
            <Link to='/our-services/business-intelligence'>
              ><cite> Business Intelligence </cite>
            </Link>
          </div>
        }
      />

      <Intelligence />
    </>
  )
}

export default BusinessIntelligence
