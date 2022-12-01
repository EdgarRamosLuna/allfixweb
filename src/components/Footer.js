import React from 'react'
import { FooterS } from '../styles/Main'

export default function Footer(){
    return(
        <FooterS>
            <div className='icons-container'>
                <div className='txt-icos'>
                    Siguenos en:
                </div>
                <div className='img-icos'>
                    <a href="https://www.facebook.com/Allfixparras"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#"><i class="fa-brands fa-twitter"></i></a>
                    <a href="https://wa.me/528421130900"><i class="fa-brands fa-whatsapp"></i></a>
                    
                    
                </div>
            </div>
        </FooterS>
    )
}