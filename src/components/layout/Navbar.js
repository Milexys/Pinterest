import React from 'react';
import './layout.css';
import Buttons from './Buttons';
import FollowButton from './FollowButton'

const Navbar = () => {
    return (
        <div className="navbar" style={{top: '0'}}>
            <div className="imgLogo">
                <img src="https://cdn.freebiesupply.com/logos/large/2x/pinterest-1-logo-png-transparent.png" alt=""/>
            </div>
            <div className="inputSearch">
                <input type="text" placeholder="Buscar" />
            </div>
            <Buttons />
            <FollowButton />
            <div className="btn-perfil">
                <a href='/perfil'style={{color: 'gray', fontWeight: 'bold'}}>Milexys<i className='fas fa-chevron-down' style={{color: 'gray', fontSize:'14px'}}></i></a>
            </div>
            <div className="btn-chat">
                <a href='/chat'><i className='fas fa-comment-dots' style={{color: 'gray', fontSize:'24px'}}></i></a>
            </div>
            <div className="btn-notif">
                <a href='/notif'><i className='fas fa-bell' style={{color: 'gray', fontSize:'24px'}}></i></a>
            </div>
            <div className="btn-menu">
                <a href='/menu'><i className="material-icons" style={{color: 'gray', fontSize:'24px'}}>more_horiz</i></a>
            </div>
        </div>
    )
}

export default Navbar;