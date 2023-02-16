import React from 'react'
import './navbar.scss'
import images from '../../utilities/images'
import { HiSearch } from 'react-icons/hi'
import { FiMenu } from 'react-icons/fi'
import { navLinks } from '../../utilities/constants'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <section className='navbar'>
      <div className='nav-container'>
        <div className='nav-logo'>
          <Link to='/'>
            <img src={images.logo} alt='Delomid-it' />
          </Link>
        </div>

        <div className='nav-row'>
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
        
            <span className='nav-toggle'>
              <FiMenu />
            </span>
            <span className='nav-search'>
              <HiSearch />
            </span>
         
        </div>
      </div>
    </section>
  )
}

export default Navbar
