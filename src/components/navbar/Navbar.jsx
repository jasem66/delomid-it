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
  toggleMenu,
  openLink,
  resizeImage,
  notResizeImage,
  openDropdownMenu,
  closeDropdownMenu,
  openSearch,
  loading,
  notLoading,
} from '../../redux/featueres/navbar/navbarSlice'
const Navbar = () => {
  const dispatch = useDispatch()
  const { isLoading, isMenuOpen, isImageResized, isSearchOpen } = useSelector(
    (state) => state.navbar
  )

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        dispatch(resizeImage())
      } else {
        dispatch(notResizeImage())
      }
    })
  }, [])

  return (
    <section className={isImageResized ? 'navbar nav-smaller' : 'navbar'}>
      <div className='nav-container '>
        <div className='nav-logo'>
          <Link to='/'>
            <img
              className={
                isImageResized ? 'delomid-logo-smaller' : 'delomid-logo '
              }
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
                    onMouseEnter={() => dispatch(openDropdownMenu())}
                    onMouseLeave={() => dispatch(closeDropdownMenu())}
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

                    <Dropdown />
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
            <article onClick={() => dispatch(toggleMenu(), openLink())}>
              <FiMenu
                className={isMenuOpen ? 'menu-icon transform' : ' menu-icon  '}
              />
              <FaTimes className={isMenuOpen && 'menu-icon-close '} />
            </article>
          </span>
          <SearchBtn />
          <span
            className={!isSearchOpen ? 'nav-search ' : ' nav-search hidden'}
          >
            <HiSearch
              onClick={() => {
                dispatch(openSearch(), openMenu())
              }}
            />
          </span>
        </div>
      </div>
      <article className='nav-mob-section'>
        <NavMobile />
      </article>
    </section>
  )
}

export default Navbar
