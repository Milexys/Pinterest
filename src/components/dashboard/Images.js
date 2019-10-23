import React from 'react';
import enviar from '../../assets/subir.svg'
import menu from '../../assets/menu.svg'

const Pictures = (props) => {
    return (
        <div className="item" onClick={() => props.pushClick(props)}>
            <img className="image" src={props.url} alt="img" />
            <div className="hidden-buttons">
                <button>Guardar</button>
                <div className="spacer"></div>
                <div className="iconos">
                    <div><img src={enviar} alt="icono de enviar" placeholder='Enviar'/></div>
                    <div><img src={menu} alt="icono de menu" placeholder='Más información' /></div>
                </div>
            </div>
        </div>
    )
}

export default Pictures;