import React from 'react'
import About from '../../components/About/About'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import Interested from '../../components/Interested/Interested'
import NavBar from '../../components/NavBar/NavBar'
import './Home.scss'

const Home = () => {
    return (
        <div className='home container'>
            <NavBar/>
            <Hero/>
            <About/>
            <Interested/>
        </div>
    )
}

export default Home
