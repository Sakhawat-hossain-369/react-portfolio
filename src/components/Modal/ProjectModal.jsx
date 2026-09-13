import React, { useState } from 'react'
import './ProjectModal.css'

export const ProjectModal = ({
    isOpen,
    setisOpen,
    title,
    images,
    github,
    technology,
    description }) => {

    const [currentImage, setCurrentImage] = useState(0);

    if (!isOpen) return null;


    const nextImage = () => {
        setCurrentImage((prev) =>
            prev === images.length - 1 ? 0 : prev + 1);
    }

    const previousImage = () => {
        setCurrentImage((prev) =>
            prev === 0 ? images.length - 1 : prev - 1);


    }

    return (
        <div className="project-modal"
            onClick={() => setisOpen(false)}>
            <div className="project-modal-content"
                onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={() => setisOpen(false)}>&times;</button>
                <div className="project-modal-image">
                    <button
                        className="image-arrow left-arrow"
                        onClick={previousImage}
                    >
                        &#10094;
                    </button>
                    <img
                        src={images[currentImage]}
                        alt={`${title} ${currentImage + 1}`}
                    />

                    <button
                        className="image-arrow right-arrow"
                        onClick={nextImage}
                    >
                        &#10095;
                    </button>

                    {/* {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`${title} ${index + 1}`} />
                    ))} */}

                </div>
                <div className="image-indicator">
                    {currentImage + 1} / {images.length}
                </div>
                <div className="modal-title">
                    <h2>{title}</h2>
                </div>
                <div className="modal-technology">
                    <p><strong>Technology:</strong> {technology.join(', ')}</p>
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
