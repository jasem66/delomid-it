import React, { useState } from 'react'
import './nav-mobile.scss'
import { navLinks } from '../../utilities/constants'
import { NavLink } from 'react-router-dom'
import Dropdown from '../nav-dropdown/Dropdown'
import { BiChevronDown } from 'react-icons/bi'
const NavMobile = ({ navToggler, setNavToggler }) => {
  const [openLinks, setOpenLinks] = useState(true)
  return (
    <div className='navmob '>
      <div
        className={navToggler ? 'navmob-container hide' : 'navmob-container '}
      >
        <ul className='navmob-list'>
          {navLinks.map((item) => {
            const { id, path, title } = item

            if (title === 'Our Services') {
              return (
                <li style={{ paddingBottom: '0' }} key={id}>
                  <article
                    onClick={() => {
                      setOpenLinks(!openLinks)
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
                        openLinks
                          ? ' mobnav-link link-chev'
                          : 'mobnav-link turn-180'
                      }
                    >
                      <BiChevronDown size={28} />
                    </span>
                  </article>
                  <div className={openLinks ? 'hide' : 'show'}>
                    <Dropdown
                      setNavToggler={setNavToggler}
                      navToggler={navToggler}
                    />
                  </div>
                </li>
              )
            }
            return (
              <li onClick={() => setNavToggler(true)} key={id}>
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
