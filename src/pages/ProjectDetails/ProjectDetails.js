import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import './ProjectDetails.scss'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import projects from '../../data'

const ProjectDetails = ({match}) => {
    const project = projects.find(p => p.name === match.params.name)

    
    
    return (
        <section className='project-details container'>
        <NavBar/>
        <div className="project-details__img-container">
            <img className='project-details__container-hero' src={project.mainImg}/>
        </div>
        
        <div className="project-details__content">
            <div className="project-details__content-title">
                <h2 className="project-details__content-title-head">{project.name}</h2>
                <p className="project-details__content-title-text">{project.description}</p>
                <Link to='/projects/fylo'><button className="projects__item-content-btn btn">View Project</button></Link>
            </div>
            <div className="project-details__content-background">
                <h3 className="project-details__content-background-head">Project Background</h3>
                <p className="project-details__content-background-text">{project.background}</p>

                <div className="project-details__content-background-previews">
                    <h3>Static Previews</h3>
                    <img src={project.staticPreview_1} alt=""/>
                    <img src={project.staticPreview_2} alt=""/>
                </div>
            </div>
        </div>
            
        </section>
    )
}

export default ProjectDetails
