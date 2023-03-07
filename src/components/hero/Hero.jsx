import React from 'react'
import './hero.scss'
import { RiDoubleQuotesL } from 'react-icons/ri'
import images from '../../utilities/images'

const Hero = () => {
  return (
    <section className='hero'>
      <div className='video-wrapper'>
        <video autoPlay muted loop id='myVideo' controlsList='nodownload'>
          <source src={images.video} type='video/mp4' />
        </video>
        <div className='overlay'>
          <div className='hero-contents'>
            <h3>Our values ​​and our culture</h3>
            <div className='hero-texts'>
              <article>
                <span>
                  <RiDoubleQuotesL />
                </span>
                <p>
                  We were born with a clear and well-defined objective, that of
                  offering high level services to our customers and a quality of
                  life to our employees. Therefore, in a results-oriented
                  perspective, we bring together a customer-oriented approach
                  and the resources of IT experts.
                </p>
              </article>
              <address>Management of Delomid</address>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
