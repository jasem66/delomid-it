import React, { useState } from 'react'
import './navbar.scss'
import images from '../../utilities/images'
import { HiSearch } from 'react-icons/hi'
import { FiMenu } from 'react-icons/fi'
import { navLinks } from '../../utilities/constants'
import { Link } from 'react-router-dom'
import Dropdown from '../nav-dropdown/Dropdown'
const Navbar = () => {
  const [dropdown, setDropdown] = useState(true)
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
              if (item.title === 'Our Services') {
                return (
                  <div>
                    <Link
                      // onMouseEnter={() => setDropdown(true)}
                      // onMouseLeave={() => setDropdown(false)}
                      className='nav-link'
                      to={path}
                    >
                      {title}
                    </Link>
                    {dropdown && <Dropdown />}
                  </div>
                )
              }
              return (
                <div>
                  <Link className='nav-link' to={path}>
                    {title}
                  </Link>
                </div>
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
