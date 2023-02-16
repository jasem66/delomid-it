import React from 'react'
import './contacts.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
            <div className='icon-wrapper'>
             <div className="zindex">   <FaLinkedinIn size={50} className='font-icon'  /></div>
           
              <div className='overlay'></div>
            </div>
            <div className='icon-wrapper'>
              {' '}
              <FaFacebookF size={50}  className='font-icon' />
              <div className='overlay'></div>
            </div>
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
            <a href='tell:+32 2 544 04 45'>+32 2 544 04 45</a>
            <article></article>
            <div className='icon'>
              <AiOutlineMail />
            </div>
            <a href='mailto:info@delomid-it.com'> info@delomid-it.com</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts
