import React, { Component } from 'react'

function About() {
    return(
        <div className="m-3">
            <div>
                <h5>Venkata Surya Vathsava Katragadda</h5>
                A self-motivated university graduate with good communication and technical skills in multiple programming languages and domain
                base. My main selling points are JAVA, Python, and Web Development. Having knowledge and practice on multiple tools and technology
                makes me specific.
            </div>
            <br/>
            <div className="skills">
                <h5>Skills</h5>
                <ul>
                    <li>JAVA</li>
                    <li>Python</li>
                    <li>JS</li>
                    <li>React</li>
                    <li>DBMS</li>
                    <li>Data Structures</li>
                </ul>
            </div>
            <br/>
            <div className="interests">
                <h5>Interests</h5>
                <ul>
                    <li>Movies</li>
                    <li>Music</li>
                    <li>Sports</li>
                    <li>Coin Collection</li>
                </ul>
            </div>
            <br/>
            
        </div>
    );
}

export default About;