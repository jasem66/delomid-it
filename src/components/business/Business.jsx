import React from 'react'
import './business.scss'
import images from '../../utilities/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDatabase, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Business = () => {
  return (
    <div className='business'>
      <div className='business-row'>
        <h3>Business Intelligence</h3>
        <p>Expertise in data management and processing</p>
        <div className='seperator'></div>
        <div className='single-business'>
          <div className='icon'>
            <FontAwesomeIcon className='font-icon' icon={faDatabase} />
          </div>

          <h3 className='title'>data sss</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        </div>
        <div className='single-business'>
          <div className='icon'>
            <FontAwesomeIcon className='font-icon' icon={faDatabase} />
          </div>

          <h3 className='title'>data sss</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        </div>
        <hr className='seperator' />
      </div>

      <div className='business-row'>
        <h3>digital-online</h3>
        <p>Design of web and mobile applications</p>{' '}
        <div className='seperator-dark'></div>
      </div>
    </div>
  )
}
export default Business
