import React from 'react'
import '../../App.css'
import './Skills.css'
import Card from '../Card/Card'
import react_logo from '../../assets/logos/react_logo.png'
import js_logo from '../../assets/logos/js_logo.png'

const Skills = () => {
    return (
        <section id="skills">
            <div className="container">
                <div className="skills_container">
                    <div className="skills_header">
                        <h1>My Skills</h1>
                        <p>Technologies and tools I use to build modern web applications.</p>
                    </div>
                    <div className="skills_content">

                        <div className="frontend_section">
                            <h3>Frontend Skills</h3>
                            <div className="skills_list">
                                <Card image={js_logo}
                                    title="JavaScript"
                                />
                                <Card image={react_logo}
                                    title="React"
                                />

                            </div>

                        </div>
                        <div className="backend_section">
                            <h3> Backend Skills</h3>
                            <div className="skills_list">

                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </section>

    )
}

export default Skills