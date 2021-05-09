import React from 'react'

function Education() {
    return (
        <div className="education" id="education">
            <div className="container">
                <div className="common">
                    <h3 className="mini-header">Education</h3>
                    <h1 className="main-header">My Education</h1>
                    <div className="border-line"></div>
                </div>
                <div className="education-flex">
                    <div className="education-box">
                        <div className="card-title">Elemantary School</div>
                        <img src="./img/3.png" alt="" />
                        <p>Pomprachunchomklao School</p>
                    </div>
                    <div className="education-box">
                        <div className="card-title">High School</div>
                        <img src="./img/4.png" alt="" />
                        <p>Pomnakarachsawatyanon School</p>
                    </div>
                    <div className="education-box">
                        <div className="card-title">Bachelor's degree</div>
                        <img src="./img/5.png" alt="" />
                        <ul>
                            <li>Suan Sunandha Rajabhat University</li>
                            <li>Bachelor of Science (Computer Science)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education;
