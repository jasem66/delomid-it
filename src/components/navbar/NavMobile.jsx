import React, { useState } from 'react'
import './nav-mobile.scss'
import { navLinks } from '../../utilities/constants'
import { Link } from 'react-router-dom'
import Dropdown from '../nav-dropdown/Dropdown'
import { BiChevronUp, BiChevronDown } from 'react-icons/bi'
const NavMobile = () => {
  const [openLinks, setOpenLinks] = useState(false)
  return (
    <div className='navmob'>
      <div className='navmob-container'>
        <ul className='navmob-list'>
          {navLinks.map((item) => {
            const { id, path, title } = item

            if (title === 'Our Services') {
              return (
                <li  style={{ paddingBottom: '0' }} key={id}>
                  <article  onClick={() => setOpenLinks(!openLinks)}>
                    <Link className='mobnav-link' to={path}>
                      {title}
                    </Link>
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
                    <Dropdown />
                  </div>
                </li>
              )
            }
            return (
              <li key={id}>
                <Link className='mobnav-link' to={path}>
                  {title}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default NavMobile
