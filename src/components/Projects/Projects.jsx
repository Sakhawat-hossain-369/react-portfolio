import React, { useState } from 'react'
import '../../App.css'
import './Projects.css'
import ProjectCard from '../Card/ProjectCard'
import ProjectsData from '../../Data/ProjectsData'


const Projects = () => {
    const [selectedProject, setSelactedProject] = useState(null)
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

                            {ProjectsData.map(project => (
                                <ProjectCard
                                    key={project.id}
                                    image={project.image}
                                    title={project.title}
                                    technologies={project.technology}
                                />
                            ))}

                            {/* <ProjectCard /> */}
                        </div>
                    </div>

                </div>
            </div>
        </section>

    )
}

export default Projects