import React from 'react'
import { Link } from 'react-router-dom'
import { navDropdownLInks } from '../../utilities/constants'
import './dropdown.scss'

const Dropdown = ({ setDropdown, dropdown }) => {
  return (
    <div className={dropdown ? 'dropdown ' : 'dropdown close '}>
      <ul>
        {navDropdownLInks.map((item) => {
          return (
            <Link
              onClick={() => setDropdown(false)}
              className='single-dropdown'
              to={item.path}
            >
              {item.title}
            </Link>
          )
        })}
      </ul>
    </div>
  )
}

export default Dropdown
