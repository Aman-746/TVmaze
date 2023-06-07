import React from 'react'
import { Link } from 'react-router-dom'

const ShowCard = ({ id, img, rating }) => {
  return (
      <div class="image-container">
        <img src={img} alt="" />
        <div class="image-overlay">
          <div class="image-details">
            <h3>{rating}</h3>
            <Link to={`/shows/${id}`}>
              <button>Show More</button>
            </Link>
          </div>
        </div>
      </div>
  )
}

export default ShowCard