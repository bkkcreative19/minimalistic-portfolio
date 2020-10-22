import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './NavBar.scss'
import Logo from '../../assets/logo.svg'
import Hamburger from '../../assets/icons/hamburger.svg'
import closeHamburger from '../../assets/icons/close.svg'

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className='nav-container'>
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
                <img onClick={toggleMenu} className='hamburger' src={isOpen ? closeHamburger : Hamburger} alt=""/>
            </nav>
                   
                <nav style={isOpen ? {display: 'inline'} : {display: 'none'}} className="mobile-nav">
                    <ul className="mobile-nav__list">
                        <Link className='mobile-nav__list-link' to='/'>
                            <li>Home</li>
                        </Link>
                        <Link className='mobile-nav__list-link' to='/portfolio'>
                            <li>Portfolio</li>
                        </Link>
                        <Link className='mobile-nav__list-link' to='/contact'>
                            <li>Contact Me</li>
                        </Link>
                    </ul>
                </nav>
        </div>
       
    )
}

export default NavBar
