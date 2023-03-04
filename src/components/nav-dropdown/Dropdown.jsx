import React from 'react'
import { NavLink } from 'react-router-dom'
import { navDropdownLInks } from '../../utilities/constants'
import './dropdown.scss'

const Dropdown = ({ setDropdown, dropdown, setNavToggler, navToggler }) => {
  return (
    <div className={dropdown ? 'dropdown ' : 'dropdown close '}>
      <ul>
        {navDropdownLInks.map((item) => {
          return (
            <NavLink
            key={item.id}
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
