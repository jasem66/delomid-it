import React, { useEffect, useState } from 'react'
import './navbar.scss'
import images from '../../utilities/images'
import { HiSearch } from 'react-icons/hi'
import { FiMenu } from 'react-icons/fi'
import { RiCloseFill } from 'react-icons/ri'
import { navDropdownLInks, navLinks } from '../../utilities/constants'
import { Link, NavLink } from 'react-router-dom'
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
  closeMenu,
} from '../../redux/featueres/navbar/navbarSlice'
const Navbar = () => {
  const dispatch = useDispatch()
  const { isMenuOpen, isImageResized, isSearchOpen, isDropdownMenuOpen } =
    useSelector((state) => state.navbar)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        dispatch(resizeImage())
      } else {
        dispatch(notResizeImage())
      }
    })
  }, [])

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      if (windowWidth > 920) {
        dispatch(closeDropdownMenu())
        console.log('hehehehehehehehhehehe')
      }
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [windowWidth])

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
                    onClick={() => dispatch(closeDropdownMenu())}
                  >
                    <NavLink
                      className='dropdown-link '
                      style={({ isActive }) => {
                        return { color: isActive ? '#43a9d1' : '' }
                      }}
                      to={path}
                    >
                      {title}
                    </NavLink>
                    <div
                      className={
                        isDropdownMenuOpen ? 'show-dropdown' : 'hide-dropdown'
                      }
                    >
                      {navDropdownLInks.map((item) => {
                        return (
                          <li>
                            <NavLink
                              key={item.id}
                              style={({ isActive }) => {
                                return { color: isActive ? '#43a9d1' : '' }
                              }}
                              className='single-dropdown '
                              to={item.path}
                            >
                              {item.title}
                            </NavLink>
                          </li>
                        )
                      })}
                    </div>
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
              onClick={() =>
                dispatch(
                  toggleMenu(),
                  dispatch(closeDropdownMenu()),
                  openLink()
                )
              }
            >
              <FiMenu
                className={isMenuOpen ? 'menu-icon transform' : ' menu-icon  '}
              />
              <RiCloseFill className={isMenuOpen && 'menu-icon-close '} />
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
