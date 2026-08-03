import React from 'react'
import './Card.css'

const Card = ({ image, title, onClick }) => {
    return (
        <div className="card" onClick={onClick}>
            <div className="card_image">
                <img src={image} alt={title} />
            </div>

            <div className="card_title">
                <h4>{title}</h4>
            </div>


        </div>
    )
}

export default Card