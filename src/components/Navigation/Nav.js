import React from 'react';
import './Nav.css';
import logo from '../../PeopleLink-Logo.png';

import { Icon } from '@iconify/react';

const Nav = () => {
    return (
        <nav>
            <div className="logo">
                <a href="/">
                    <img src={logo} alt="PeopleKink" /> 
                    <h1>PeopleLink</h1>
                </a>
            </div>
            <div className="search">
                <input type="text" placeholder="Find Your Friend " />
            </div>
            <div className="social">
                <a href="/"><Icon icon="logos:facebook" /></a>
                <a href="/"><Icon icon="logos:twitter" /></a>
                <a href="/"><Icon icon="devicon:linkedin" /></a>
                <a href="/"><Icon icon="skill-icons:instagram" /></a>
            </div>
        </nav>
    );
};

export default Nav;