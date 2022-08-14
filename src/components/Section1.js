import React from 'react'
import { Section1S } from '../styles/Main'
import BoxComponent from './BoxComponent'

export default function Section1(){
    return(
        <Section1S>
            <div className="s-container">
                <div className="s-item-l">
                    <div className="s-item-content">
                    <   img src="/assets/img/about2.jpg" className="img1" alt="" />
                        <img src="/assets/img/about.jpg" className="img2" alt="" />
                    </div>
                </div>
                <div className="s-item-r">
                    <div className="s-item-content2">
                        <div className="title-s">
                            <h5>About Our Company</h5>
                        </div>
                        <div className="title-l">
                            <h3>Dream big with get more inspiring solutions from here.</h3>
                        </div>
                        <div className="txt-items">
                            <BoxComponent title="Research & Analysis" imageBg={1}>
                                Lorem ipsum, or lipsum as it is sometimes known is dummy text used in laying in the century who thought usually begins consectetur.
                            </BoxComponent>
                            <BoxComponent title="Quality Product" imageBg={2}>
                                Lorem ipsum, or lipsum as it is sometimes known is dummy text used in laying in the century who thought usually begins consectetur.
                            </BoxComponent>
                        </div>
                    </div>
                </div>
            </div>
        </Section1S>
    )
}