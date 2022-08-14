import React from 'react'
import { Section2S } from '../styles/Main'

export default function Section2(){
    return(
        <Section2S>
            <div className="s-content">
                <div className="s-content-txt">
                    <div className="s-content-t-s">
                        <h4> Awesome Services</h4>
                    </div>
                    <div className="s-content-t-s">
                        <h2>High quality services
of construction industries</h2> 
                    </div>
                </div>
                <div className="s-content-items">
                    <div className="s-content-item">
                        <div className="s-content-item-ico">
                            <img src="/assets/img/icon-1.1.svg" alt="" />
                        </div>
                    </div>
                    <div className="s-content-item">
                        <div className="s-content-item-ico">
                            <img src="/assets/img/s2.svg" alt="" />
                        </div>
                    </div>
                    <div className="s-content-item">
                        <div className="s-content-item-ico">
                            <img src="/assets/img/s3.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </Section2S>
    )
}