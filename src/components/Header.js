import React from 'react';
import { FaFacebook, FaGithub, FAiFillInstagram } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import ReactTypingEffect from 'react-typing-effect';


function Header() {
    return (
        <header className="header" id="">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="header-content">
                            <div className="header-section">
                                <ul className="ul-icons">
                                    <li>
                                        <a href="https://www.facebook.com/theppakorn.pongteedee/" target="_blank"><FaFacebook />
                                        </a>
                                    </li>
                                    <li><a href="https://github.com/Mr-Theppakorn" target="_blank"><FaGithub /></a></li>
                                    <li><a href="https://www.instagram.com/theppakornpongteedee/" target="_blank"><AiFillInstagram /></a></li>
                                </ul>
                                <p>Hello, my name is</p>
                                <h1><ReactTypingEffect text='Theppakorn Pongteedeee' speed={100} eraseDelay={5000} /></h1>
                                <p>And I'm a <span>Web Developer</span></p>
                                <div className="header-button">
                                    <a href="https://drive.google.com/file/d/1ev3ERxfvoZrliXYTsdIMFIS31OLkT3NI/view?usp=sharing" className="btn" target="_blank">My Resume</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header;
