import React from 'react'
import { Link } from 'react-router-dom'
import './footer.scss'
import { navLinks } from '../../utilities/constants'
const Footer = () => {
  return (
    <section className='footer'>
      <div className='footer-links'>
        <ul className='nav-links'>
          {navLinks.map((item) => {
            const { id, title, path } = item
            return (
              <Link className='nav-link' to={path}>
                {title}
              </Link>
            )
          })}
        </ul>
        <div className='addresses'>
          <address>
            <a href='   mailto:jasemsarafraz66@gmail.com'>
            
              +32 2 544 04 45 (Belgium)
            </a>
          </address>
          <address>
            <a href='   mailto:jasemsarafraz66@gmail.com'>
              +352 621 47 17 46 (Luxembourg)
            </a>
          </address>
          <address>
            <a href='   mailto:jasemsarafraz66@gmail.com'>
              info@delomid-it.com
            </a>
          </address>
        </div>
        <div className="search-footer">
          <input type="text" placeholder='to search...'/>
        </div>
      </div>
    </section>
  )
}

export default Footer