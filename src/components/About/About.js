import React from 'react'
import {Link} from 'react-router-dom'
import './About.scss'

const About = () => {
    return (
        <section className='about'>
            <div className="about__img"></div>
            <div className="about__content">
                <div className="about__content-container">
                    <h3 className="about__content-head">About Me</h3>
                    <p className="about__content-text">
                    I’m a front-end developer looking for a new role in an exciting company. 
                    I focus on writing accessible HTML, using modern CSS practices and writing clean 
                    JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to 
                    whatever tools are required. I’m based in London, UK, but I’m happy working remotely 
                    and have experience in remote teams. When I’m not coding, you’ll find me outdoors. 
                    I love being out in nature whether that’s going for a walk, run or cycling. I’d love 
                    you to check out my work.</p>
                    <Link to='/portfolio'><button className="about__content-btn btn">Go to portfolio</button></Link>
                </div>
               
            </div>
        </section>
    )
}

export default About
