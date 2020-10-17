import React from 'react'
import {Link} from 'react-router-dom'
import './Projects.scss'

const Projects = () => {
    return (
        <section className='projects'>
            <div className="projects__item">
                <div className="projects__item-img img1"></div>
                <div className="projects__item-content">
                    <div className="projects__item-content-container">
                        <h3 className="projects__item-content-head">Manage</h3>
                        <p className="projects__item-content-text"> This project required me to build a fully responsive landing page to the designs provided. 
                        I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, 
                        such as the testimonial slider.</p>
                        <Link to='/projects/Manage'><button className="projects__item-content-btn btn">View Project</button></Link>
                    </div>
                    <div className="border-top"></div>
                    <div className="border-bottom"></div>
                </div>
            </div>
            <div className="projects__item">
                <div className="projects__item-img img2"></div>
                <div className="projects__item-content">
                    <div className="projects__item-content-container">
                        <h3 className="projects__item-content-head">Bookmark</h3>
                        <p className="projects__item-content-text">This project required me to build a fully responsive landing page to the designs provided. I 
                        used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such 
                        as the features section.</p>
                        <Link to='/projects/Bookmark'><button className="projects__item-content-btn btn">View Project</button></Link>
                    </div>
                    <div className="border-top"></div>
                    <div className="border-bottom"></div>
                </div>
            </div>
            <div className="projects__item">
                <div className="projects__item-img img3"></div>
                <div className="projects__item-content">
                    <div className="projects__item-content-container">
                        <h3 className="projects__item-content-head">Insure</h3>
                        <p className="projects__item-content-text">This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive 
                        landing page. The only JavaScript this project required was to enable the toggling of the 
                        mobile navigation.</p>
                        <Link to='/projects/Insure'><button className="projects__item-content-btn btn">View Project</button></Link>
                    </div>
                    <div className="border-top"></div>
                    <div className="border-bottom"></div>
                </div>
            </div>
            <div className="projects__item">
                <div className="projects__item-img img4"></div>
                <div className="projects__item-content">
                    <div className="projects__item-content-container">
                        <h3 className="projects__item-content-head">Fylo</h3>
                        <p className="projects__item-content-text">This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and 
                        built it so that it was fully-responsive. I took a mobile-first approach and used modern 
                        CSS like Flexbox and Grid for layout purposes.</p>
                        <Link to='/projects/Fylo'><button className="projects__item-content-btn btn">View Project</button></Link>
                    </div>
                    <div className="border-top"></div>
                    <div className="border-bottom"></div>
                </div>
            </div>
            
        </section>
    )
}

export default Projects
