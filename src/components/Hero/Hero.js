import React, { useState } from 'react';
import './Hero.css';
import Card from '../Card/Card';
import Summary from '../Summary/Summary';
import Users from '../../fake data/users.json';

const Hero = () => {

    const [cart, setCart] = useState([]);

    const handleCart = (clickedUser) => {
        // console.log("its clicked",clickedUser.name);
        const newCart = [...cart, clickedUser];
        setCart(newCart);
        // console.log(newCart);
    
    }

    return (
        <div className='wrapper'>
            <div id="right">
                <Card 
                users={Users}
                handleCart={handleCart}
                />
            </div>
            <div id="left">
                <Summary cart= {cart} />
            </div>
        </div>
    );
};

export default Hero;