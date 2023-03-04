import React from 'react'
import './searchbtn.scss'
import { FaTimes } from 'react-icons/fa'
import {
  openSearch,
  closeSearch,
  openMenu,
  closeMenu,
  toggleMenu,
} from '../../redux/featueres/navbar/navbarSlice'
import { useDispatch, useSelector } from 'react-redux'
const SearchBtn = () => {
  const dispatch = useDispatch()
  const { isSearchOpen, isMenuOpen } = useSelector((state) => state.navbar)
  return (
    <div className={isSearchOpen ? 'searchbtn ' : '  searchbtn search-close '}>
      <input placeholder='To research...' type='text' />
      {isSearchOpen && (
        <div
          className='cancle-search'
          onClick={() => {
            dispatch(closeSearch())
            dispatch(closeMenu())
          }}
        >
          <FaTimes />
        </div>
      )}
    </div>
  )
}
export default SearchBtn
