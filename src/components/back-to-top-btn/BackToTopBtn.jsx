import React, { useEffect, useState } from 'react'
import './backtotopbtn.scss'
import { BiChevronUp } from 'react-icons/bi'

const BackToTopBtn = () => {
  const [goToTop, setGoToTop] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setGoToTop(true)
      } else setGoToTop(false)
    })
  }, [])

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div>{goToTop && <BiChevronUp className='backtotopbtn' size={45} />}</div>
  )
}

export default BackToTopBtn
