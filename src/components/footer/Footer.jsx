import React from 'react'
import { Link } from 'react-router-dom'
import './footer.scss'
import { navLinks } from '../../utilities/constants'
import { MdEmail } from 'react-icons/md'
import { AiFillPhone } from 'react-icons/ai'
const Footer = () => {
  return (
    <section className='footer'>
      <article className='footer-row'>
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
                <AiFillPhone className='icon' /> <span> +32 2 544 04 45</span>{' '}
                (Belgium)
              </a>
            </address>
            <address>
              <a href='   mailto:jasemsarafraz66@gmail.com'>
                <span>+352 621 47 17 46</span> (Luxembourg)
              </a>
            </address>
            <address>
              <a href='   mailto:jasemsarafraz66@gmail.com'>
                <MdEmail className='icon' />

                <span> info@delomid-it.com </span>
              </a>
            </address>
          </div>
          <div className='search-footer'>
            <input type='text' placeholder='To research...' />
          </div>
        </div>
      </article>
      <article className='sub-footer'>
        <p>DELOMID IT AGENCY © 2022 All rights reserved.</p>
      </article>
    </section>
  )
}

export default Footer
