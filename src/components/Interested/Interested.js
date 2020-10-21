import React from 'react'
import {Link} from 'react-router-dom'
import './Interested.scss'

const Interested = () => {
    return (
        <section className='interested'>
            <h3 className='interested__head'>Interested in doing</h3>
            <Link to='/contact'><button className='btn interested__head-btn'>Contact Me</button></Link>
        </section>
    )
}

export default Interested
