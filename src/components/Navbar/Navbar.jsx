import React from 'react'
import './Navbar.css'
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <nav className="navbar">
            <div className="logo">
                Sakhawat Hossain
            </div>
            <button className="menu-btn"
                onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <FaTimes /> : <FaBars />}
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