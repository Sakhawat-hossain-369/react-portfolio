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
                                I am a dedicated and passionate individual with a strong interest in web development and e-commerce. My journey began with a solid educational foundation in Computer Management Technology, followed by a BSc in Computer Science & Engineering. Currently, I work as an Amazon PPC Specialist while continuously developing my skills in web development through hands-on projects and learning.
                            </p>
                        </div>

                        <div className="my_journey">
                            <h3>My Journey</h3>

                            <div className="journey_item">
                                <h4>🎓 Education</h4>
                                <p>
                                    Completed my Diploma in Engineering in Computer Management
                                    Technology and later earned my BSc in Computer Science &
                                    Engineering.
                                </p>
                            </div>

                            <div className="journey_item">
                                <h4>💼 Professional Experience</h4>
                                <p>
                                    Started my professional journey with computer hardware and
                                    technical support, and currently work in Amazon PPC and
                                    e-commerce operations.
                                </p>
                            </div>

                            <div className="journey_item">
                                <h4>💻 Full-Stack Development</h4>
                                <p>
                                    Alongside my professional work, I have been developing my skills in React, Python, Django, Django REST Framework, and MySQL. Through the BOHUBRIHI learning platform, I have been following a structured full-stack development roadmap and strengthening my knowledge through hands-on learning and personal projects.
                                </p>
                            </div>

                            <div className="journey_item">
                                <h4>🚀 Where I'm Heading</h4>
                                <p>
                                    My goal is to transition into a full-time software development
                                    career as a Junior Full-Stack Developer.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="my_goal">
                        <h4>My Goal</h4>
                        <p>To become a skilled full-stack developer and build meaningful, real-world solutions.</p>
                    </div>


                </div>


            </div>
        </section>

    )
}

export default About_me