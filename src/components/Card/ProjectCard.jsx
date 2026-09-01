import React from 'react'
import './ProjectCard.css'

const ProjectCard = ({ image, title, technologies, onClick }) => {
    return (
        <div className="project-card" onClick={onClick}>
            <div className="project-card-image">
                <img src={image} alt={title} />
            </div>
            <div className="project-card-title">
                <h3>{title}</h3>
            </div>
            <div className="project-card-tech">
                <p> <strong> Technologies: </strong> {technologies.join(', ')}</p>
            </div>


        </div>
    )
}

export default ProjectCard