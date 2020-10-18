import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.scss'
import Logo from '../../assets/logo.svg'

const NavBar = () => {
    return (
        <nav className='nav-bar container'>
            <div className="nav-bar__logo">
                <img src={Logo} alt=""/>
            </div>
            <ul className="nav-bar__list">
                <Link className='nav-bar__list-link' to='/'>
                    <li>Home</li>
                </Link>
                <Link className='nav-bar__list-link' to='/portfolio'>
                    <li>Portfolio</li>
                </Link>
                <Link className='nav-bar__list-link' to='/contact'>
                    <li>Contact Me</li>
                </Link>
            </ul>
        </nav>
    )
}

export default NavBar
