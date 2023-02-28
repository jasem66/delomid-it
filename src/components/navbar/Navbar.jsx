import React, { useEffect, useState } from 'react'
import './navbar.scss'
import images from '../../utilities/images'
import { HiSearch } from 'react-icons/hi'
import { FiMenu } from 'react-icons/fi'
import { FaTimes } from 'react-icons/fa'
import { navLinks } from '../../utilities/constants'
import { Link } from 'react-router-dom'
import Dropdown from '../nav-dropdown/Dropdown'
import SearchBtn from '../search-btn/SearchBtn'
import NavMobile from './NavMobile'

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false)
  const [imageSize, setImageSize] = useState(false)
  const [searchBar, setSearchBar] = useState(false)
  const [navToggler, setNavToggler] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setImageSize(true)
      } else setImageSize(false)
    })
  }, [])

  return (
    <section className={imageSize ? 'navbar nav-smaller' : 'navbar'}>
      <div className='nav-container'>
        <div className='nav-logo'>
          <Link to='/'>
            <img
              className={imageSize ? 'delomid-logo-smaller' : 'delomid-logo '}
              src={images.logo}
              alt='Delomid-it'
            />
          </Link>
        </div>
        <div className='nav-row'>
          <ul className='nav-links'>
            {navLinks.map((item) => {
              const { id, title, path } = item
              if (item.title === 'Our Services') {
                return (
                  <li
                    key={id}
                    onMouseEnter={() => setDropdown(true)}
                    onMouseLeave={() => setDropdown(false)}
                  >
                    <Link className='nav-link ' to={path}>
                      {title}
                    </Link>
                    <Dropdown setDropdown={setDropdown} dropdown={dropdown} />
                  </li>
                )
              }
              return (
                <li key={id}>
                  <Link className='nav-link' to={path}>
                    {title}
                  </Link>
                </li>
              )
            })}
          </ul>

          <span className='nav-toggle'>
            <article onClick={() => setNavToggler(!navToggler)}>
              {navToggler ? <FiMenu /> : <FaTimes />}
            </article>
          </span>
          <SearchBtn setSearchBar={setSearchBar} searchBar={searchBar} />
          <span className={!searchBar ? 'nav-search ' : ' nav-search hidden'}>
            <HiSearch onClick={() => setSearchBar(true)} />
          </span>
        </div>
      </div>
      <NavMobile navToggler={navToggler} setNavToggler={setNavToggler} />
    </section>
  )
}

export default Navbar
