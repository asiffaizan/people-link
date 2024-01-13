import React from 'react';
import './Hero.css';
import Card from '../Card/Card';
import Summary from '../Summary/Summary';
import Users from '../../fake data/users.json';


const Hero = () => {
    return (
        <div className='wrapper'>
            <div id="right">
                {
                    Users.map(user=> <Card user={user} key={user.id}/>)
                }
            </div>
            <div id="left">
                <Summary/>
            </div>
        </div>
    );
};

export default Hero;