import React, { useEffect, useRef, useState } from 'react'
import './business.scss'
import { businessData, digitalData } from '../../data/bussinesData'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {
  animationOn,
  animationOff,
} from '../../redux/featueres/navbar/navbarSlice'
const Business = () => {

  // const [isVisible, setIsVisible] = useState(false)
  // const hasAnimatedRef = useRef(false)
  // const ref = useRef(null)

  // const dispatch = useDispatch()
  // useEffect(() => {
  //   window.addEventListener('scroll', () => {
  //     if (window.scrollY > 200) {
  //       dispatch(animationOn())
  //     } else {
  //       dispatch(animationOff())
  //     }
  //   })
  // }, [])

  // useEffect(() => {
  //   if (isVisible && !hasAnimatedRef.current) {
  //     // Trigger animation here
  //     hasAnimatedRef.current = true
  //   }
  // }, [isVisible])
  
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       setIsVisible(entry.isIntersecting)
  //     },
  //     { threshold: 0.5 } 
      // Trigger animation when at least 50% of the element is visible
    // )

    // observer.observe(ref.current)

    // return () => {
    //   observer.unobserve(ref.current)
    // }
  // }, [])

  return (
    <div className='business'>
      <div className='business-row'>
        <div className='business-content'>
          <h3 className='big-title'>Business Intelligence</h3>
          <p>Expertise in data management and processing</p>
        </div>

        <div className='seperator'></div>
        <div className='business-container'>
          {businessData.map((item) => {
            const { id, icon, title, description } = item
            return (
              <div key={id} className='single-business'>
                <div className='icon-container'>
                  <Link to='/james'>
                    <div className='overlay' />
                    <div className='icon'>{icon}</div>
                  </Link>
                </div>

                <Link to='/james'>
                  <h3>{title}</h3>
                </Link>
                <p>{description}</p>
              </div>
            )
          })}
        </div>
        <div className='seperator-container'>
          <div className='seperator-down' />
        </div>
      </div>

      <div className='business-row'>
        <h3 className='big-title' >
          Digital Online
        </h3>
        <p>Design of web and mobile applications</p>
        <div className='seperator'></div>
        <div className='digital-container'>
          {digitalData.map((item) => {
            const { id, icon, title, description, styleClass } = item
            return (
              <div
                key={id}
                className='single-business down-anime ' 
              >
                <div className='icon-container'>
                  <Link to='james delomid'>
                    <div className='overlay' />
                    <div className='icon'>{icon}</div>
                  </Link>
                </div>
                <Link to='james delomid'>
                  <h3 className='title'>{title}</h3>
                </Link>
                <p>{description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default Business
