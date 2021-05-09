import React from 'react'

function About() {
    return (
        <div className="about" id="about">
            <div className="container">
                <div className="common">
                    <h3 className="mini-header">About</h3>
                    <h1 className="main-header">About Me</h1>
                    <div className="border-line"></div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="my-img">
                            <img src="/img/777.PNG" alt="" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="about-info">
                            <h1>Hi There</h1>
                            <div className="about-info-p">
                                <p>My name is Theppakorn I'm junior Front-End-Developer located in Thailand. I enjoy creating things that live on the internet
                                I like making fun, interactive things with code. I also talk and write about those things.</p>
                            </div>
                            <div className="info-contacts">
                                <div className="row">
                                    <div className="col-6">
                                        <strong>Name</strong>
                                        <p>Theppakorn Pongteedee</p>
                                    </div>
                                    <div className="col-6">
                                        <strong>Email.com</strong>
                                        <p>Mister-Theppakorn@outlook.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
