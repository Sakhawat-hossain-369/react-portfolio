import React from 'react'
import '../../App.css'
import './Home.css'
import Profile_pic from '../../assets/images/profile_pic.jpg'

const Home = () => {
    return (
        <section id="home">
            <div className="container">
                <div className="home-content">

                    <div className="left-side">
                        <div className="img-container">
                            {/* Profile picture */}
                            <img src={Profile_pic} alt="Profile" />
                            Profile pic
                        </div>
                    </div>
                    <div className="right-side">
                        <div className="intro-container">
                            Name introduction container
                        </div>

                    </div>
                </div>


            </div>
        </section>

    )
}

export default Home