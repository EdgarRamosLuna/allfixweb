import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { MainContext } from '../context/MainContext'
import { HeaderS } from '../styles/Main'
import Footer from './Footer'
import Gallery from './helpers/Gallery'

export default function Header(){
    const {
        service, setService,
        showService, setShow,
        show
    } = useContext(MainContext);
    return(
        <>
        {show == true ? <Gallery id={service} /> : "" }
        
        <HeaderS>
            
            <div className="header-cont">
                    <div className="logo">
                        <a href="#"><img src="/assets/img/logo.png" alt="" /></a>
                    </div>
                    <div className="menu">
                        <ul>
                            <li><a href="#">Inicio</a></li>
                            <li><HashLink smooth   to={{pathname: "/", hash: "#allfix"}} >AllFix</HashLink ></li>
                            <li><HashLink smooth   to={{pathname: "/", hash: "#servicios"}} >Servicios</HashLink ></li>
                            <li><HashLink smooth   to={{pathname: "/", hash: "#contacto"}} >Contacto</HashLink ></li>
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
                        <HashLink smooth   to={{pathname: "/", hash: "#contacto"}} className="a-btn"><button>Servicios <span><i class="fa-solid fa-arrow-right"></i></span></button></HashLink >
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
            <div id="allfix"></div>
        </HeaderS>
        <Outlet/>
        <Footer />
        </>

        
    )
}