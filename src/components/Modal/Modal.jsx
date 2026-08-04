import React from 'react'
import './Modal.css'

const Modal = ({ isOpen, setIsOpen, image, title, description }) => {
    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <button
                    className="close-btn"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close modal"
                >
                    &times;
                </button>
                <img src={image} alt={title} />
                <h2>{title}</h2>
                <p>{description}</p>
            </div>

        </div >
    )
}

export default Modal