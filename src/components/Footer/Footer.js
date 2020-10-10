import React from 'react'
import {Link} from 'react-router-dom'
import './Footer.scss'
import Logo from '../../assets/logo.svg'
import Twitter from '../../assets/icons/twitter.svg'
import Github from '../../assets/icons/github.svg'
import Linkedin from '../../assets/icons/linkedin.svg'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer__container container">
                <svg className='footer__logo' xmlns="http://www.w3.org/2000/svg" width="61" height="32"><path fill="#fff" fill-rule="evenodd" d="M60.082 5.878L44.408 32 28.735 5.878h31.347zM15.673 0l15.674 26.122H0L15.673 0z"/></svg>
                
                <ul className="footer__list">
                    <Link className='footer__list-link' to='/'>
                        <li>Home</li>
                    </Link>
                    <Link className='footer__list-link' to='/portfolio'>
                        <li>Portfolio</li>
                    </Link>
                    <Link className='footer__list-link' to='/contact'>
                        <li>Contact Me</li>
                    </Link>
                </ul>
                <ul className="footer__logos">
                    <img src={Github} alt="github"/>
                    <img src={Twitter} alt="twitter"/>
                    <img src={Linkedin} alt="linkedin"/>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
