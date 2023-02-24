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
                <li key={id}>
                  <Link to={path}>{title}</Link>
                  <span
                    onClick={() => setOpenLinks(!openLinks)}
                    className={
                      openLinks ? 'link-chev' : 'turn-180'
                    }
                  >
                    <BiChevronDown size={25} />
                  </span>

                  <Dropdown />
                </li>
              )
            }
            return (
              <li key={id}>
                <Link to={path}>{title}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default NavMobile
