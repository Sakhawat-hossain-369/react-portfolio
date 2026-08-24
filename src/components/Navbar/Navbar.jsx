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
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
            >
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>

            <div className={`menu ${isOpen ? "active" : ""}`}>
                <ul>
                    <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
                    <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
                    <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
                    <li><a href="#about_me" onClick={() => setIsOpen(false)}>About Me</a></li>
                    <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
                </ul>
            </div>



        </nav>

    )
}

export default Navbar