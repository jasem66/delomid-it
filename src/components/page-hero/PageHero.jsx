import React from 'react'
import { BiChevronRight } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import './page-hero.scss'
const PageHero = ({ title,link1,link2 }) => {
  return (
    <div className='pagehero'>
      <div className='pagehero-container'>
        <h3>{title}</h3>
        <div className='small-links'>
          <Link to='/'>
            <span>Home</span>
          </Link> 
          <cite style={{ margin: '0 5px ' }}> > </cite> {link1} {link2}
        </div>
      </div>
    </div>
  )
}

export default PageHero
