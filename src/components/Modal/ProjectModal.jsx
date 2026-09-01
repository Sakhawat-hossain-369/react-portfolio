import React from 'react'
import './ProjectModal.css'

export const ProjectModal = ({
    isOpen,
    setisOpen,
    title,
    images,
    github,
    technology,
    description }) => {


    return (
        <div className="project-modal">
            <div className="modal-content">
                <button className="close-btn" onClick={() => setisOpen(false)}>&times;</button>
                <div className="modal-image">
                    <img src={image} alt={title} />
                </div>
                <div className="modal-title">
                    <h2>{title}</h2>
                </div>
                <div className="modal-technology">
                    <p><strong>Technology:</strong> {technology}</p>
                </div>
                <div className="github-link">
                    <p><strong>GitHub:</strong> <a href={github} target="_blank" rel="noopener noreferrer">View on GitHub</a></p>
                </div>
                <div className="modal-description">
                    <p><strong>Description:</strong> {description}</p>
                </div>
            </div>

        </div>
    )
}
