import React from 'react'
import { Link } from 'react-router-dom'

const Review = () => {
  return (
    <div>
      <Link to='/create-rating'>
        <button type="button">Create Rating</button>
      </Link>
    </div>
  )
}

export default Review