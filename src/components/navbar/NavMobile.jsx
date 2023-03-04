import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './nav-mobile.scss'
import { navLinks } from '../../utilities/constants'
import { NavLink } from 'react-router-dom'
import Dropdown from '../nav-dropdown/Dropdown'
import { BiChevronDown } from 'react-icons/bi'

import {
  openMenu,
  closeMenu,
  toggleMenu,
  openLink,
  resizeImage,
  notResizeImage,
  openDropdownMenu,
  closeDropdownMenu,
  openSearch,
  closeSearch,
  toggleDropdownMenu,
} from '../../redux/featueres/navbar/navbarSlice'

const NavMobile = ({ navToggler, setNavToggler, setOpenLinks, openLinks }) => {
  const dispatch = useDispatch()
  const {
    isLoading,
    isMenuOpen,
    isdropdownOpen,
    isImageResized,
    isDropdownMenuOpen,
    isSearchOpen,
    isLinksOpen,
  } = useSelector((state) => state.navbar)

  return (
    <div className='navmob '>
      <div
        className={isMenuOpen ? 'navmob-container ' : 'navmob-container hide'}
      >
        <ul className='navmob-list'>
          {navLinks.map((item) => {
            const { id, path, title } = item

            if (title === 'Our Services') {
              return (
                <li key={id}>
                  <article
                    onClick={() => {
                      dispatch(toggleDropdownMenu()
                      )
                    }}
                  >
                    <NavLink
                      style={({ isActive }) => {
                        return { color: isActive ? '#43a9d1' : '' }
                      }}
                      className='mobnav-link'
                      to={path}
                    >
                      {title}
                    </NavLink>
                    <span
                      className={
                        isDropdownMenuOpen
                          ? ' mobnav-link link-chev'
                          : 'mobnav-link turn-180'
                      }
                    >
                      <BiChevronDown size={30} />
                    </span>
                  </article>
                  <div className={isDropdownMenuOpen ? 'show' : 'hide'}>
                    <Dropdown
          
                    />
                  </div>
                </li>
              )
            }
            return (
              <li onClick={() => dispatch(closeMenu())} key={id}>
                <NavLink
                  style={({ isActive }) => {
                    return { color: isActive ? '#43a9d1' : '' }
                  }}
                  className='mobnav-link'
                  to={path}
                >
                  {title}
                </NavLink>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default NavMobile
