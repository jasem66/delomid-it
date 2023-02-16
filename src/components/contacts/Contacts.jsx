import React from 'react'
import './contacts.scss'
import { FaFacebookF } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { AiOutlinePhone } from 'react-icons/ai'
import { AiOutlineMail } from 'react-icons/ai'

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
        <div className='seperator-container'>
          <div className='seperator-down'></div>
        </div>
        <div className='contacts-row-2'>
          <h3>Contact information</h3>
          <div className='icons'>
            <div className='icon'>
              <AiOutlinePhone />
            </div>
            <span>+32 2 544 04 45</span>
            <article></article>
            <div className='icon'>
              <AiOutlineMail />
            </div>
            <span>info@delomid-it.com</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts
