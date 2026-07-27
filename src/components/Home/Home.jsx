import React from 'react'
import '../../App.css'
import './Home.css'
import Profile_pic from '../../assets/images/profile_pic.jpg'
import { MdEmail } from 'react-icons/md'
import { FaPhoneAlt, FaLinkedin } from 'react-icons/fa'

const Home = () => {
    return (
        <section id="home">
            <div className="container">
                <div className="home-content">

                    <div className="left-side">
                        <div className="img-container">
                            {/* Profile picture */}
                            <img src={Profile_pic} alt="Profile" />

                        </div>
                    </div>
                    <div className="right-side">
                        <div className="intro-container">
                            <div className="name">
                                <h1> Sakhawat Hossain </h1>
                            </div>
                            <div className="designation">
                                <h2> Junior Full Stack Developer & Amazon PPC Specialist </h2>
                            </div>
                            <div className="short-intro">
                                <p> <p>
                                    I am a passionate Junior Full Stack Developer who is always eager to learn and grow in software development. Currently, I work as a Junior E-commerce Specialist, managing Amazon PPC campaigns while continuing to improve my web development skills.
                                </p></p>
                            </div>
                            <div className="contact-info">
                                <p>
                                    <MdEmail className="icon" />
                                    shakhawath847@gmail.com
                                </p>
                                <p>
                                    <FaPhoneAlt className="icon" />
                                    +8801627606919
                                </p>
                                <p>
                                    <FaLinkedin className="icon" />
                                    <a href="https://www.linkedin.com/in/sakhawath847/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                </p>

                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </section>

    )
}

export default Home