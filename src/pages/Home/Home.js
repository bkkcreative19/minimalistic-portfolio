import React from 'react'
import About from '../../components/About/About'
import Hero from '../../components/Hero/Hero'
import Interested from '../../components/Interested/Interested'
import './Home.scss'

const Home = () => {
    return (
        <div className='home container'>
            <Hero/>
            <About/>
            <Interested/>
        </div>
    )
}

export default Home
