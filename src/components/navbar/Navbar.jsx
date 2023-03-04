import React, { useEffect, useState } from 'react'
import './navbar.scss'
import images from '../../utilities/images'
import { HiSearch } from 'react-icons/hi'
import { FiMenu } from 'react-icons/fi'
import { FaTimes } from 'react-icons/fa'
import { navLinks } from '../../utilities/constants'
import { Link, NavLink } from 'react-router-dom'
import Dropdown from '../nav-dropdown/Dropdown'
import SearchBtn from '../search-btn/SearchBtn'
import NavMobile from './NavMobile'
import { useSelector, useDispatch } from 'react-redux'
import {
  openMenu,
  closeMenu,
  toggleMenu,
  openLink,
  notResizeImage,
  resizeImage,
} from '../../redux/featueres/navbar/navbarSlice'
const Navbar = () => {
  const [dropdown, setDropdown] = useState(false)
  const [imageSize, setImageSize] = useState(false)
  const [searchBar, setSearchBar] = useState(false)
  const [navToggler, setNavToggler] = useState(true)
  const [openLinks, setOpenLinks] = useState(true)

  const dispatch = useDispatch()
  const { isLoading, isMenuOpen, isdropdownOpen } = useSelector(
    (state) => state.navbar
  )

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
       dispatch(resizeImage()) 
      } else setImageSize(false)
    })
  }, [])

  return (
    <section className={imageSize ? 'navbar nav-smaller' : 'navbar'}>
      <div className='nav-container '>
        <div className='nav-logo'>
          <Link to='/'>
            <img
              className={imageSize ? 'delomid-logo-smaller' : 'delomid-logo '}
              src={images.logo}
              alt='Delomid-it'
            />
          </Link>
        </div>
        <h1>{isLoading.toString()}</h1>
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
                    <NavLink
                      style={({ isActive }) => {
                        return { color: isActive ? '#43a9d1' : '' }
                      }}
                      className='nav-link '
                      to={path}
                    >
                      {title}
                    </NavLink>
                    <Dropdown setDropdown={setDropdown} dropdown={dropdown} />
                  </li>
                )
              }
              return (
                <li key={id}>
                  <NavLink
                    style={({ isActive }) => {
                      return { color: isActive ? '#43a9d1' : '' }
                    }}
                    className='nav-link'
                    to={path}
                  >
                    {title}
                  </NavLink>
                </li>
              )
            })}
          </ul>

          <span className='nav-toggle'>
            <article
              onClick={
                () => dispatch(toggleMenu(), openLink())
              

                // setOpenLinks(true)
              }
            >
              <FiMenu
                className={isMenuOpen ? 'menu-icon ' : ' menu-icon  transform'}
              />
              <FaTimes className={!isMenuOpen && 'menu-icon-close '} />
            </article>
          </span>
          <SearchBtn
            setSearchBar={setSearchBar}
            searchBar={searchBar}
            setNavToggler={setNavToggler}
          />
          <span className={!searchBar ? 'nav-search ' : ' nav-search hidden'}>
            <HiSearch
              onClick={() => {
                setSearchBar(true)
                openMenu(true)
              }}
            />
          </span>
        </div>
      </div>
      <article className='nav-mob-section'>
        {' '}
        <NavMobile
          navToggler={navToggler}
          setNavToggler={setNavToggler}
          openLinks={openLinks}
          setOpenLinks={setOpenLinks}
        />
      </article>
    </section>
  )
}

export default Navbar
