import React from 'react'
import './contacts.scss'
import { FaFacebookF } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
const Contacts = () => {
  return (
    <div className='contacts'>
      <div className='contacts-container'>
        <div className='contacts-row-1'>
          <h3>Find us on social networks</h3>
          <div className='icons'>
            <FaLinkedinIn className='font-icon' color='#0072b1' />
            <FaFacebookF color='#3b5998' className='font-icon' />
          </div>
        </div>
        <div className="divider-container">
         
        </div>
        <div className='contacts-row-2'>
          <h3>Contact information</h3>
          <div className='icons'></div>
        </div>
      </div>
    </div>
  )
}

export default Contacts
