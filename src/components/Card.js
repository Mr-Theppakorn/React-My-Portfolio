import React from 'react'


function Card() {
    return (
        <div className="card" id="skill">
            <div className="container">
                <div className="common">
                    <h3 className="mini-header">Skills</h3>
                    <h1 className="main-header">My Skills</h1>
                    <div className="border-line"></div>
                </div>
                <div className="card-container">
                    <div className="card-box">
                        <div className="card-title">Basic Skills</div>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>PHP</li>
                            <li>MYSQL</li>

                        </ul>
                    </div>
                    <div className="card-box">
                        <div className="card-title">CSS/JS Frameworks</div>
                        <ul>
                            <li>Bootstrap</li>
                            <li>Bulma</li>
                            <li>Tailwind</li>
                            <li>ReactJS</li>
                            <li>Vue.Js</li>
                        </ul>
                    </div>
                    <div className="card-box">
                        <div className="card-title">Tool</div>
                        <ul>
                            <li>Visual Studio Code</li>
                            <li>Git</li>
                            <li>Docker</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;
