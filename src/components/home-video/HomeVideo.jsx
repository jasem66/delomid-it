import React from 'react'
import './home-video.scss'
const HomeVideo = () => {
  return (
    <div className='home-video'>

      <div className='video-container'> 
           <h3>Who are we?</h3>
        <video controls width='100%' >
          <source
            src='https://www.delomid-it.com/wp-content/uploads/2022/04/delomid_long.mp4'
            type='video/mp4'
          />
        </video>
      </div>
    </div>
  )
}

export default HomeVideo
