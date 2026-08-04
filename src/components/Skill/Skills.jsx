import React from 'react'
import '../../App.css'
import './Skills.css'
import Card from '../Card/Card'
import react_logo from '../../assets/logos/react_logo.png'
import js_logo from '../../assets/logos/js_logo.png'
import HTML_logo from '../../assets/logos/HTML_logo.png'
import CSS_logo from '../../assets/logos/CSS_logo.png'
import bootstrap_logo from '../../assets/logos/bootstrap_logo.png'
import redux_logo from '../../assets/logos/redux_logo.png'
import python_logo from '../../assets/logos/python_logo.png'
import django_logo from '../../assets/logos/django_logo.png'
import rest_api_logo from '../../assets/logos/rest_api_logo.png'
import mysql_logo from '../../assets/logos/mysql_logo.png'
import github_logo from '../../assets/logos/github_logo.png'
import jwt_logo from '../../assets/logos/jwt_logo.png'



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
                                <Card image={HTML_logo}
                                    title="HTML"
                                />
                                <Card image={CSS_logo}
                                    title="CSS"
                                />
                                <Card image={bootstrap_logo}
                                    title="Bootstrap"
                                />
                                <Card image={redux_logo}
                                    title="Redux"
                                />



                            </div>

                        </div>
                        <div className="backend_section">
                            <h3> Backend Skills</h3>
                            <div className="skills_list">
                                <Card image={python_logo}
                                    title="Python"
                                />
                                <Card image={django_logo}
                                    title="Django"
                                />
                                <Card image={rest_api_logo}
                                    title="REST API"
                                />
                                <Card image={mysql_logo}
                                    title="MySQL"
                                />
                                <Card image={jwt_logo}
                                    title="JWT"
                                />
                                <Card image={github_logo}
                                    title="GitHub"
                                />

                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </section>

    )
}

export default Skills