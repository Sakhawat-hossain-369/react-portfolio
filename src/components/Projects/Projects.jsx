import React from 'react'
import '../../App.css'
import './Projects.css'
import Card from '../Card/Card'

const Projects = () => {
    return (
        <section id="projects">
            <div className="container">
                <div className="projects_container">
                    <div className="projects_header">
                        <h1>Projects</h1>
                        <h3>Check out some of my recent work.</h3>
                    </div>
                    <div className="projects_content">
                        <div className="projects_cards">
                            <h2>Cards</h2>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    )
}

export default Projects