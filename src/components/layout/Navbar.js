import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="imgLogo">
                <i className='fab fa-pinterest'></i>
            </div>
            <div className="inputSearch">
                <div className="input">
                    <i className="material-icons">search</i>
                    <input type="text" placeholder="Buscar" />
                </div>
            </div>
            <div className="buttons">
                <a href='/inicio' className="btn" style={{ color: 'black' }}>Inicio</a>
                <a href='/siguiendo' className="btn">Siguiendo</a>
                <a href='/perfil' className="btn"style={{display:'flex'}}><div style={{margin: '0 0.5em'}}><p>M</p></div>Milexys</a>
                <a href='/chat' className="btn" ><i className='fas fa-comment-dots'></i></a>
                <a href='/notif' className="btn"><i className='fas fa-bell'></i></a>
                <a href='/menu' className="btn"><i className="material-icons">more_horiz</i></a>
            </div>
        </div>
    )
}

export default Navbar;