import React from 'react'
import './Modal.css'
import '../../App.css'

const Modal = ({ isOpen, setIsOpen, image, title, level, description }) => {
    if (!isOpen) return null;

    return (

        <div className="modal" onClick={() => setIsOpen(false)}>
            <div className="modal-content"
                onClick={(e) => e.stopPropagation()} >
                <button
                    className="close-btn"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close modal"
                >
                    &times;
                </button>
                <div className="modal-image">
                    <img src={image} alt={title} />
                </div>
                <div className="modal-details">
                    <div className="modal-title">
                        <h2>{title}</h2>
                    </div>
                    <div className="modal-level">
                        <p><strong>Level:</strong>{level}</p>
                    </div>
                    <div className="modal-description">
                        <p><strong>Description:</strong></p>


                        <p>{description}</p>
                    </div>

                </div>
            </div>

        </div >

    )
}

export default Modal