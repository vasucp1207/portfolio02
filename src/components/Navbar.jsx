/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styled from 'styled-components'
import { Link, animateScroll as scroll } from "react-scroll";
import { Link as LinkRoute } from 'react-router-dom'
import { Avatar } from '@mui/material';

export default function Navbar() {

    function handleClick(event) {
        event.preventDefault();
        const navbarLinks = document.getElementsByClassName('navbar-links')[0]
        navbarLinks.classList.toggle('active')
    }

    return (
        <Wrap>
            <nav class="navbar">
                <div class="brand-title"><Avatar>V</Avatar></div>
                <a href="#" class="toggle-button" onClick={handleClick}>
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </a>
                <div class="navbar-links">
                    <ul>
                        <Link to='particles-js' smooth={true} duration={500} offset={-130}><li><a href="#">Home</a></li></Link>
                        <Link to='about-section' smooth={true} duration={500} offset={130}><li><a href="#">About</a></li></Link>
                        <Link to='project-section' smooth={true} duration={500} offset={-190}><li><a href="#">Projects</a></li></Link>
                        <LinkRoute style={{ 'text-decoration': 'none' }} to="/signin"><li><a href="#">SignIn</a></li></LinkRoute>
                    </ul>
                </div>
            </nav>
        </Wrap>
    )
}

const Wrap = styled.div`
.navbar {
    /* height: 70px; */
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    /* background-color: #333; */
    color: white;
    font-size: 20px;
}

.brand-title {
    font-size: 1.5rem;
    margin: .5rem;
}

.navbar-links {
    display: flex;
    align-items: center;
    height: 100%;
}

.navbar-links ul {
    display: flex;
    margin: 0;
    padding: 0;
}

.navbar-links li {
    list-style: none;
}

.navbar-links li a {
    display: block;
    text-decoration: none;
    color: var(--coral);
    padding: 1rem;
}

.navbar-links li:hover {
    background: lightseagreen;
    transition: 0.3s;
}

.navbar-links li a:hover {
    color: white;
}

.toggle-button {
    position: absolute;
    top: .75rem;
    right: 1rem;
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 21px;
}

.toggle-button .bar {
    height: 3px;
    width: 100%;
    background-color: white;
    border-radius: 10px;
}
@media (max-width: 800px) {
    .navbar {
        flex-direction: column;
        align-items: flex-start;
    }

    .toggle-button {
        display: flex;
    }

    .navbar-links {
        display: none;
        width: 100%;
    }

    .navbar-links ul {
        width: 100%;
        flex-direction: column;
    }

    .navbar-links ul li {
        text-align: center;
    }

    .navbar-links ul li a {
        padding: .5rem 1rem;
    }

    .navbar-links.active {
        display: flex;
    }
}
`
