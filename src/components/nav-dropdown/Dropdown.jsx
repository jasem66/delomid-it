import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { navDropdownLInks } from '../../utilities/constants'
import './dropdown.scss'
import {
  closeMenu,
  openDropdownMenu,

} from '../../redux/featueres/navbar/navbarSlice'

const Dropdown = () => {
  const dispatch = useDispatch()
  const {
   
    isDropdownMenuOpen,
  } = useSelector((state) => state.navbar)
  return (
    <div className={isDropdownMenuOpen ? 'dropdown ' : 'dropdown close '}>
      <ul>
        {navDropdownLInks.map((item) => {
          return (
            

            <NavLink
              key={item.id}
              style={({ isActive }) => {
                return { color: isActive ? '#43a9d1' : '' }
              }}
              onClick={() => {
                dispatch(openDropdownMenu(),
                dispatch(closeMenu()))
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
