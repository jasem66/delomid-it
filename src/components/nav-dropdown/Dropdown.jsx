import React from 'react'
import { Link } from 'react-router-dom'
import { navDropdownLInks } from '../../utilities/constants'
import './dropdown.scss'

const Dropdown = ({ setDropdown, dropdown, setNavToggler, navToggler }) => {
  return (
    <div className={dropdown ? 'dropdown ' : 'dropdown close '}>
      <ul>
        {navDropdownLInks.map((item) => {
          return (
            <Link
            
            
              onClick={() => {
                // setDropdown()
                 setNavToggler(true)
              }}
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
