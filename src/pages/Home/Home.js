import React from 'react'
import About from '../../components/About/About'
import Hero from '../../components/Hero/Hero'
import NavBar from '../../components/NavBar/NavBar'
import './Home.scss'

const Home = () => {
    return (
        <div className='home container'>
            <NavBar/>
            <Hero/>
            <About/>
        </div>
    )
}

export default Home
