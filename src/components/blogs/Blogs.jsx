import React from 'react'
import './blogs.scss'
import { blogData } from '../../data/blogData'
import {AiOutlineClockCircle} from 'react-icons/ai'
const Blogs = () => {
  return (
    <div className='blogs'>
      <div className='blogs-container'>
        <div className='blogs-col'>
          {blogData.map((item) => {
            const { id, title, text, image, date } = item

            return (
              <div key={id} className='single-blog'>
                <div className='image-wrapper'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <time> <AiOutlineClockCircle/> {date}</time>
                <p>{text}</p>

                <button className='btn'>Read More</button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Blogs
