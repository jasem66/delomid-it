import React from 'react'
import { Link } from 'react-router-dom'
import { navDropdownLInks } from '../../utilities/constants'
import './dropdown.scss'

const Dropdown = ({ setDropdown }) => {
  
  return (
    <div className='dropdown'>
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
