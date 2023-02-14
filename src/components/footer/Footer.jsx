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
            <a href='mailto:jasemsarafraz66@gmail.com'>
              <span> +32 2 544 04 45</span> (Belgium)
            </a>
          </address>
          <address>
            <a href='   mailto:jasemsarafraz66@gmail.com'>
              <span>+352 621 47 17 46</span> (Luxembourg)
            </a>
          </address>
          <address>
            <a href='   mailto:jasemsarafraz66@gmail.com'>
              <span>info@delomid-it.com </span>
            </a>
          </address>
        </div>
        <div className='search-footer'>
          <input type='text' placeholder='To research...' />
        </div>
      </div>
    </section>
  )
}

export default Footer
