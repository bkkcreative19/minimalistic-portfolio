import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import './ProjectDetails.scss'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import projects from '../../data'
import leftIcon from '../../assets/icons/arrow-left.svg'
import rightIcon from '../../assets/icons/arrow-right.svg'
import Interested from '../../components/Interested/Interested'

const ProjectDetails = ({match}) => {
    const project = projects.find(p => p.name === match.params.name)

    console.log(match.params.name)

    let previous;
    let next;


    switch (match.params.name) {
        case 'Manage':
            previous = 'Fylo'
            next = 'Bookmark'
            break
        case 'Bookmark':
            previous = 'Manage'
            next = 'Insure'
            break
        case 'Insure':
            previous = 'Bookmark'
            next = 'Fylo'
            break
        case 'Fylo':
            previous = 'Insure'
            next = 'Manage'
            break
        default:
            console.log('hi')
    }
    
    
    return (
        <section className='project-details container'>
        
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
            
            <div className="slider-controls">
                <div className="slider-controls__previous">
                    <div className="slider-controls__previous-content">
                        <Link to={`/projects/${previous}`}><h4>{previous}</h4></Link>
                        <p>Previous Project</p>
                    </div>
                   
                    <img className='left' src={leftIcon} alt=""/>
                </div>
                <div className="slider-controls__next">
                    <div className="slider-controls__next-content">
                    <Link to={`/projects/${next}`}><h4>{next}</h4></Link>
                        <p>Next Project</p>
                    </div>
                   
                    <img className='right' src={rightIcon} alt=""/>
                </div>
            </div>
            <Interested/>
        </section>
    )
}

export default ProjectDetails
