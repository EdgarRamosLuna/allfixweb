import React from 'react'
import { HeaderS } from '../styles/Main'

export default function Header(){
    return(
        <HeaderS>
            <div className="header-cont">
                    <div className="logo">
                        <a href="#"><img src="/assets/img/logo.png" alt="" /></a>
                    </div>
                    <div className="menu">
                        <ul>
                            <li><a href="#">Inicio</a></li>
                            <li><a href="#">AllFix</a></li>
                            <li><a href="#">Servicios</a></li>
                            <li><a href="#">Contacto</a></li>
                        </ul>
                    </div>
            </div>
            <div className="sider-bg">
                <div className="slider-content">
                    <div className="s-item-container">
                        <div className="s-item-c-txt">
                            <h2>Somos una <span>empresa Experimentada</span> y Experta en la industria.</h2>   
                            <p>Brindamos los mejores servicios.</p> 
                        </div>
                        <div className="s-item-c-btn">
                            <button>Servicios <span><i class="fa-solid fa-arrow-right"></i></span></button>
                        </div>
                    </div>
                </div>
                <div className="info-section">
                    <div className="info-s-item s-item-contS1">
                        <div className="s-item-cont">
                            <div className="s-item-img">
                                <i class="fa-solid fa-phone"></i>
                            </div>    
                            <div className="s-item-txt">
                                <h3>Llamanos:</h3>
                                <p><a href="tel:52-842-113-0900" style={{color:'#fff', textDecoration:'none'}}>+52 842 113 0900</a></p>
                            </div>    
                        </div>
                    </div>
                    <div className="info-s-item s-item-contS2">
                        <div className="s-item-cont">
                            <div className="s-item-img">
                                <i class="fa-regular fa-envelope"></i>
                            </div>    
                            <div className="s-item-txt">
                                <h3>Contactanos:</h3>
                                <p><a href="mailto:allfixparras@gmail.com" style={{color:'#000', textDecoration:'none'}}>allfixparras@gmail.com</a> </p>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
        </HeaderS>
    )
}