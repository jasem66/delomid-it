import React from 'react'
import './error.scss'
import { FaRegCompass } from 'react-icons/fa'

const Error = () => {
  return (
    <div className='error'>
      <div className='error-container'>
        <FaRegCompass color='#E6E6E6' className='error-icon' />
        <h2>Page not found</h2>
        <p>
          The link you clicked may not work or the page may have been deleted.
        </p>
      </div>
    </div>
  )
}

export default Error
