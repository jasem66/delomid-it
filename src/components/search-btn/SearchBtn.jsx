import React from 'react'
import './searchbtn.scss'
import { FaTimes } from 'react-icons/fa'

const SearchBtn = ({ setSearchBar, searchBar }) => {
  return (
    <div className={searchBar ? 'searchbtn ' : 'searchbtn search-btn-close'}>
      <input placeholder='To research...' type='text' />
      <div className='cancle-search'>
        <FaTimes onClick={() => setSearchBar(false)} />
      </div>
    </div>
  )
}
export default SearchBtn
