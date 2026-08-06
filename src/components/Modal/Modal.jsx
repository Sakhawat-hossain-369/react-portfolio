import React from 'react'
import './Modal.css'
import '../../App.css'

const Modal = ({ isOpen, setIsOpen, image, title, level, description }) => {
    if (!isOpen) return null;

    return (
        <div className="container">
            <div className="modal" onClick={setIsOpen}>
                <div className="modal-content"
                    onClick={(e) => e.stopPropagation()} >
                    <button
                        className="close-btn"
                        onClick={() => setIsOpen(false)}
                        aria-label="Close modal"
                    >
                        &times;
                    </button>
                    <img src={image} alt={title} />
                    <h2>{title}</h2>
                    <p><strong>Level:</strong>{level}</p>
                    <p>{description}</p>
                </div>

            </div >
        </div>
    )
}

export default Modal