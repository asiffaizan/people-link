import React from 'react';
import './Card.css';
import { Icon } from '@iconify/react';


const Card = (props) => {
    // console.log(props.users);
    const users = props.users;
    
    return (
        <div className='container'>
        {
            users.map(user => (
                <div className="card" key = {user.id}>
                    <div className="card-header">
                        <div className="card-img">
                            <img src= {user.picture} alt="user" />
                        </div>
                        <div className="card-header-text">
                            <h1>{user.name}</h1>
                            <div className="flex-text">
                                <span className='price-icon'><Icon icon="solar:dollar-broken" /></span>
                                <h2>{user.balance}$</h2>
                            </div>
                            <div className="flex-text">
                                <span className='add-icon'><Icon icon="mdi:address-marker-outline" /></span>
                                <h2>{user.address}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <p className="card-text">{user.about}</p>
                    </div>
                    <div className="card-footer">
                        <button 
                        className='add-friend-btn'
                        onClick={() => props.handleCart(user)}
                        >Add Friend</button>
                    </div>
                </div>
            ))
        }
        </div>
    );
};

export default Card;