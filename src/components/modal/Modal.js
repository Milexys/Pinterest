import React from 'react';
import enviar from '../../assets/subir.svg'
import menu from '../../assets/menu.svg'
import arrow from '../../assets/left-arrow.svg'

const Modal = (props) => {
    return (
        <div className="container-modal" onClick={(e) => {
            if (e.target.getAttribute("class") === "flex") {
                props.pushClick()
            }
        }}>
            <div className="back" onClick={props.pushClick}><img src={arrow} alt="Icono para volver" /></div>
            <div className="flex">
                <div className="modal">
                    <div className="imagen">
                        <img className="img-modal" src={props.imgUrl} alt="" />
                    </div>
                    <div className="modal-body">
                        <div className="header">
                            <div className="iconos">
                                <div><img src={enviar} alt="icono de enviar" placeholder='Enviar' /></div>
                                <div><img src={menu} alt="icono de menu" placeholder='Más información' /></div>
                            </div>
                            <div className="spacer"></div>
                            <button>Guardar</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Modal;
