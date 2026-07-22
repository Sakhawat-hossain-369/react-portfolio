import React from 'react'

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <nav>
            <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? 'Close' : 'Menu'}
            </button>
            {isOpen && (
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#about_me">About Me</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            )}

        </nav>

    )
}

export default Navbar