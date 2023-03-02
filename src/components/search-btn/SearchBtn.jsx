import React from 'react'
import './searchbtn.scss'
import { FaTimes } from 'react-icons/fa'

const SearchBtn = ({ setSearchBar, searchBar, setNavToggler }) => {
  return (
    <div className={searchBar ? 'searchbtn ' : '  searchbtn search-close '}>
      <input placeholder='To research...' type='text' />
      {searchBar && (
        <div className='cancle-search'>
          <FaTimes onClick={() =>{
             setSearchBar(false)
             setNavToggler(true)
             } }/>
        </div>
      )}
    </div>
  )
}
export default SearchBtn
