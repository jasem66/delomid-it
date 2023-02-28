import React from 'react'
import { Link } from 'react-router-dom'
import { Blogs, PageHero } from '../components'

const Blog = () => {
  return (
    <>
      <PageHero
        title='Blog'
        link1={
          <div style={{ margin: '0 5px ' }}>
            <Link to='/blog'>
              <cite>Blog</cite>
            </Link>
          </div>
        }
      />
      <Blogs />
    </>
  )
}

export default Blog