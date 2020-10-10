import React from 'react'
import Button from '../Button/Button'
import './Hero.scss'

const Hero = () => {
    return (
        <section className='hero'>
            <div className="hero__content">
                <h1 className='hero__content-text'> Hey, I’m Baron King and I love building beautiful websites</h1>
                <button className='hero__content-btn'>
                    click me
                </button>
            </div>
        </section>
    )
}

export default Hero
