import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import logo from '../assets/img/logo.png';
import linedInIcon from '../assets/img/nav-icon1.svg';
import githubIcon from '../assets/img/github.svg';
import facebookIcon from '../assets/img/nav-icon2.svg';
import { HashLink } from 'react-router-hash-link';
import {
    BrowserRouter as Router
  } from "react-router-dom";


const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const onUpdateActiveLink = (link) => {
        setActiveLink(link);
    }

    return (
        <Router>
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
        <Container>
            <Navbar.Brand href="#home">
                <img  src={logo} alt='Logo'/>
                </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className='navbar-toggler-icon'></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>            
                <Nav.Link href="#experience" className={activeLink === 'experience' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('experience')}>Experience</Nav.Link>            
            </Nav>
            <span className='navbar-text'>
                <div className='social-icon'>
                    <a href='https://www.linkedin.com/in/kim-ze-lam-608747251/'><img src={linedInIcon} alt=""/></a>
                    <a href='https://github.com/lamkimze'><img src={githubIcon} alt=""/></a>
                    <a href='https://www.facebook.com/lam.kimze'><img src={facebookIcon} alt=""/></a>
                </div>
                <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
                </span>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </Router>
    );
}

export default NavBar;