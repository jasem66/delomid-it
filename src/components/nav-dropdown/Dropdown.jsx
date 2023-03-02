import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navDropdownLInks } from '../../utilities/constants'
import './dropdown.scss'

const Dropdown = ({ setDropdown, dropdown, setNavToggler, navToggler }) => {
  return (
    <div className={dropdown ? 'dropdown ' : 'dropdown close '}>
      <ul>
        {navDropdownLInks.map((item) => {
          return (
            <NavLink
              style={({ isActive }) => {
                return { color: isActive ? '#43a9d1' : '' }
              }}
              onClick={() => {
                setNavToggler(true)
              }}
              className='single-dropdown '
              to={item.path}
            >
              {item.title}
            </NavLink>
          )
        })}
      </ul>
    </div>
  )
}

export default Dropdown
