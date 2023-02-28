import React from 'react'
import { BiChevronRight } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { Intelligence, PageHero } from '../components'

const BusinessIntelligence = () => {
  return (
    <>
      <PageHero
        title='Our Services'
        link1={<Link to='/our services'>Our Services</Link>}
        link2={
          <cite style={{}}> <cite style={{ margin: '0 5px ' }}> ></cite>
            <Link to='/business-intelligence'>
             Business
              Intelligence
            </Link>
          </cite>
        }
      />

      <Intelligence />
    </>
  )
}

export default BusinessIntelligence
