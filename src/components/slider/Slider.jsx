import React, { useRef } from 'react'
import MyCard from './MyCard'
import { sliderData } from '../../data/sliderData'
import './slider.scss'
const Slider = () => {
  let box = document.querySelector('.product-container')

  const btnpressprev = () => {
    let w = box.clientWidth
    box.scrollLeft = box.scrollLeft - w
    // console.log(w)
  }

  const btnpressnext = () => {
    let w = box.clientWidth
    box.scrollLeft = box.scrollLeft + w
    // console.log(w)
  }
  return (
    <div className='product-carousel'>
      <h1></h1>
      <button className='pre-btn' onClick={btnpressprev}>
        <p>&lt;</p>
      </button>
      <button className='next-btn' onClick={btnpressnext}>
        <p>&gt;</p>
      </button>

      <div className='product-container'>
      <MyCard/>

        {/* <MyCard cardno='1' />
                <MyCard cardno='2' />
                <MyCard cardno='3' />
                <MyCard cardno='4' />
                <MyCard cardno='5' />
                <MyCard cardno='6' />
                <MyCard cardno='7' />
                <MyCard cardno='8' />
                <MyCard cardno='9' />
                <MyCard cardno='10' />
                <MyCard cardno='11' />
                <MyCard cardno='12' />
                <MyCard cardno='13' /> */}
      </div>
    </div>
  )
}

// const [index, setIndex] = useState(0)
// const [first, setfirst] = useState(false)
// const [anime, setAnime] = useState('')

// const lastSlide = sliderData.length - 1
// const increase = () => {
//   setfirst(false)
//   setIndex((num) => num + 3)
//   setAnime(false)
// }
// const decrease = () => {
//   setIndex((num) => num - 1)
//   setfirst(true)
//       setAnime(false)

// }

// useEffect(() => {
//   if (index < 0) {
//     setIndex(lastSlide)
//   }
//   if (index > lastSlide) {
//     setIndex(0)
//   }
// }, [index])

// useEffect(() => {
//   if (first) {
//     setAnime('ltr-anime')
//   } if (!first) {
//     setAnime('rtl-anime')
//   }
// }, [index])

// return (
//   <div className='slider'>
//     {anime}
//     {index}
//     <div className='slider-container'>
//       <h3>Customer references </h3>
//       <div className='slider-col '>
//         <div className={anime}>
//           <img src={sliderData[index]} alt='' />
//           <img src={sliderData[index + 1]} alt='' />
//           <img src={sliderData[index + 2]} alt='' />
//         </div>
//         <div className='button-wrapper'>
//           <button className='btn' onClick={decrease} setAnime>
//             left
//           </button>
//           <button className='btn' onClick={increase}>
//             right
//           </button>
//         </div>

//         <div className='dots'></div>
//       </div>
//     </div>
//   </div>
// )

export default Slider
