import React from 'react'
import { Link } from 'react-router-dom'
import { Contacts, PageHero } from '../components'

const Contact = () => {
  return (
    <>
      <PageHero
        title='Contact'
        link1={
          <div style={{ margin: '0 5px ' }}>
            <Link to='/contact'>
              <cite style={{}}>Contact</cite>
            </Link>
          </div>
        }
      />
      <Contacts />
    </>
  )
}

export default Contact