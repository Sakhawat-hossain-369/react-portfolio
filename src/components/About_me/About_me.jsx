import React from 'react'
import '../../App.css'
import './About_me.css'

const About_me = () => {
    return (
        <section id="about_me">
            <div className="container">
                <div className="about_container">
                    <div className="header">
                        <h2>About Me</h2>
                        <div className="short_description">
                            <p> Hello! I’m <strong>Sakhawat Hossain Shakib</strong>, passionate about building web applications and helping businesses grow through Amazon PPC. </p>
                        </div>
                    </div>
                    <div className="about_me_content">
                        <div className="who_i_am">
                            <h3>Who I Am</h3>
                            <p>
                                Hello! I'm Sakhawat Hossain Shakib...
                            </p>
                        </div>

                        <div className="my_journey">
                            <h3>My Journey</h3>
                            <p>Education</p>
                            <p>Experience</p>
                            <p>Learning</p>
                        </div>
                    </div>

                    <div className="my_goal">
                        <h3>My Goal</h3>
                        <p>Junior Full Stack Developer</p>
                    </div>


                </div>


            </div>
        </section>

    )
}

export default About_me