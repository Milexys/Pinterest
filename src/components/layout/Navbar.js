import React from 'react'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="imgLogo">
                <img src="https://images.vexels.com/media/users/3/137399/isolated/preview/47c9900ae893cbed1e1599ab9c8bcb18-icono-de-pinterest-logo-by-vexels.png" />
            </div>
            <div className="inputSearch">
                <input type="text" placeholder="Buscar" />
            </div>
        </div>
    )
}

export default Navbar;