import React from 'react'
import './navbar.scss'
import images from '../../utilities/images'
import { HiSearch } from 'react-icons/hi'
import { FiMenu } from 'react-icons/fi'
import {navLinks} from '../../utilities/constants'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <section className='navbar'>
      <div className='nav-logo'>
        <Link to='/'>        <img src={images.logo} alt='Delomid-it' />
</Link>
      </div>
      <ul className='nav-links'>
        {navLinks.map((item) => {
          const { id, title, path } = item
          return (
            <Link className='nav-link' to={path}>
              {title}
            </Link>
          ) 
        })}
      </ul>
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
