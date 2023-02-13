import React from 'react'
import './navbar.scss'
import images from '../../utilities/images'
import { HiSearch } from 'react-icons/hi'
import { FiMenu } from 'react-icons/fi'
const Navbar = () => {
  return (
    <section className='navbar'>
      <div className='nav-logo'>
        <img src={images.logo} alt='Delomid-it' />
      </div>
      <li className='nav-links'></li>
      <div className='nav-icons'>
        <div className='nav-toggle'>
          <FiMenu />
        </div>
        <div className='nav-search'>
          <HiSearch />
        </div>
      </div>
    </section>
  )
}

export default Navbar
