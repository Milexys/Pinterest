import React from 'react';
import './layout.css';
import Buttons from './Buttons';
import FollowButton from './FollowButton'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="imgLogo">
                <img src="https://cdn.freebiesupply.com/logos/large/2x/pinterest-1-logo-png-transparent.png" alt=""/>
            </div>
            <div className="inputSearch">
                <input type="text" placeholder="Buscar" />
            </div>
            <Buttons />
            <FollowButton />
        </div>
    )
}

export default Navbar;