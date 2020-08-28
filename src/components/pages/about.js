import React from 'react';
import aboutImg from "../../../static/assets/images/about/about.jpg";

export default function() {
    return (
        <div className="content-page-wrapper">
            <div
            className="left-column"
            style={{
                backgroundImage: `url(${aboutImg})`
            }}
            />

            <div className="right-column">
                <h1>About Me</h1>
                <p>Hello! My name is Blake Seagraves, I am a front-end web developer and designer located in Chicago, IL.</p>
                <p>I am familiar with HTML, CSS, Javascript, React, Python, SQL, Git/version control, and UML. </p>
            </div>
        </div>
    )
}