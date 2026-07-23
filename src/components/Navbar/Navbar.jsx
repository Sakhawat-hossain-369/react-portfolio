import React from 'react'
import './Navbar.css'

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <nav className="navbar">
            <button className="menu-btn"
                onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? 'Close' : 'Menu'}
            </button>

            <div className={`menu ${isOpen ? "active" : ""}`}>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#about_me">About Me</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>



        </nav>

    )
}

export default Navbar