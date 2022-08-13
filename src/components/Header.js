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
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Portafolio</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
            </div>
            <div className="sider-bg">
                <div className="slider-content">
                    <div className="s-item-container">
                        <div className="s-item-c-txt">
                            <h2>We are experienced and <span>expert industry</span> company.</h2>   
                            <p>We provide the best factory services.</p> 
                        </div>
                        <div className="s-item-c-btn">
                            <button>Our Services <span><i class="fa-solid fa-arrow-right"></i></span></button>
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
                                <h3>Call Us:</h3>
                                <p>+00 823 468 739</p>
                            </div>    
                        </div>
                    </div>
                    <div className="info-s-item s-item-contS2">
                        <div className="s-item-cont">
                            <div className="s-item-img">
                                <i class="fa-regular fa-envelope"></i>
                            </div>    
                            <div className="s-item-txt">
                                <h3>Email Us:</h3>
                                <p>allfix@gmail.com</p>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
        </HeaderS>
    )
}