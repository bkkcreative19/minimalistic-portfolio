import React from 'react'
import './ProjectDetails.scss'
// import {Link} from 'react-router-dom'
import projects from '../../data'
// import leftIcon from '../../assets/icons/arrow-left.svg'
// import rightIcon from '../../assets/icons/arrow-right.svg'
import Interested from '../../components/Interested/Interested'

const ProjectDetails = ({match}) => {
    const project = projects.find(p => p.name === match.params.name)

   

    // let previous;
    // let next;


    // switch (match.params.name) {
    //     case 'MyTeam':
    //         previous = 'BookMark'
    //         next = 'Photosnap'
    //         break
    //     case 'Photosnap':
    //         previous = 'MyTeam'
    //         next = 'Beach Resort'
    //         break
    //     case 'Beach Resort':
    //         previous = 'Photosnap'
    //         next = 'BookMark'
    //         break
    //     case 'BookMark':
    //         previous = 'Beach Resort'
    //         next = 'MyTeam'
    //         break
    //     default:
    //         console.log('hi')
    // }
    
    
    return (
        <section className='project-details container'>
        
            <div style={{background: `url(${project.mainImg}) top no-repeat`,
                        backgroundSize: 'cover',
                        
                }} className="project-details__img-container">
                {/*<img className='project-details__container-hero' src={project.mainImg} alt='hero-details'/>*/}
            </div>
            
            <div className="project-details__content">
                <div className="project-details__content-title">
                    <h2 className="project-details__content-title-head">{project.name}</h2>
                    <p className="project-details__content-title-text">{project.description}</p>
                    <a rel='noopener noreferrer' target='_blank' href={project.websiteLink}><button className="projects__item-content-btn btn">View Project</button></a> 
                   
                </div>
                <div className="project-details__content-background">
                    <h3 className="project-details__content-background-head">Project Background</h3>
                    <p className="project-details__content-background-text">{project.background}</p>

                    <div className="project-details__content-background-previews">
                        <h3>Static Previews</h3>
                        <div style={{background: `url(${project.staticPreview_1}) center no-repeat`,
                        backgroundSize: 'cover',
                        
                }} className="static-preview-1"></div>
                        <div style={{background: `url(${project.staticPreview_2}) center no-repeat`,
                        backgroundSize: 'cover',
                        
                }} className="static-preview-2"></div>
                       
                       
                    </div>
                </div>
            </div>
            
            {/*<div className="slider-controls">
                <div className="slider-controls__previous">
                    <div className="slider-controls__previous-content">
                        <Link to={`/projects/${previous}`}><h4>{previous}</h4></Link>
                        <p>Previous Project</p>
                    </div>
                    
                    <Link to={`/projects/${previous}`}><img className='left' src={leftIcon} alt=""/></Link>
                    
                </div>
                <div className="slider-controls__next">
                    <div className="slider-controls__next-content">
                        <Link to={`/projects/${next}`}><h4>{next}</h4></Link>
                        <p>Next Project</p>
                    </div>

                    <Link to={`/projects/${next}`}><img className='right' src={rightIcon} alt=""/></Link>
                    
                </div>
            </div>*/}
            <Interested/>
        </section>
    )
}

export default ProjectDetails
