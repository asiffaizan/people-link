import React from 'react';
import './Card.css';
import user from '../../image/user1.jpg';
import { Icon } from '@iconify/react';


const Card = (props) => {
    console.log(props.user);
    // const [name,phone,about,balance,address] = props.user;
    return (
        <div className="card">
                <div className="card-header">
                    <div className="card-img">
                        <img src= {user} alt="user" />
                    </div>
                    <div className="card-header-text">
                        <h1>Faizan Arif</h1>
                        <div className="flex-text">
                            <span className='price-icon'><Icon icon="solar:dollar-broken" /></span>
                            <h2>100$</h2>
                            <span className='add-icon'><Icon icon="mdi:address-marker-outline" /></span>
                            <h2>1/3,UAE</h2>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <p className="card-text">Ad nostrud quis aliquip anim ad ipsum proident voluptate sint adipisicing nostrud. Cillum laborum irure irure adipisicing reprehenderit ut elit sint fugiat cupidatat ad deserunt do sit. Ex id do magna irure labore excepteur commodo. Qui nostrud est est tempor eu dolore laborum velit aliquip non. Duis et ad minim commodo esse qui aliquip adipisicing enim commodo laborum velit nostrud veniam. Lorem adipisicing do cillum cillum magna excepteur excepteur.</p>
                </div>
                <div className="card-footer">
                    <button className='add-friend-btn'>Add Friend <Icon icon="material-symbols-light:bookmark-outline" /></button>
                </div>
            </div>
    );
};

export default Card;