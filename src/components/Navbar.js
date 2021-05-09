import React from 'react';

function Navbar() {

    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar-container">
                    <ul className="navbar_left">
                        <div className="navbar-logo"><a href="#">Portfo<span>lio.</span></a></div>
                    </ul>
                    <ul className="navbar-right">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#project">Project</a></li>
                        <li><a href="#skill">Skills</a></li>
                        <li><a href="#education">Education</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
