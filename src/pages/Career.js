import React from 'react'
import { Link } from 'react-router-dom'
import { Careers, PageHero } from '../components'

const Career = () => {
  return (
    <>
      <PageHero
        title='Career'
        link1={
          <div style={{ margin: '0 5px ' }}>
            <Link to='/career'>
              <cite style={{}}>Career</cite>
            </Link>
          </div>
        }
      />
      <Careers />
    </>
  )
}

export default Career
