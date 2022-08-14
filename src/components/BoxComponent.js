import React, { useState, useEffect } from 'react';
import { BoxComponentS } from '../styles/Main';

export default function BoxComponent(props){
    const {title,children, imageBg} = props;
    return(
        <BoxComponentS>
            <div className="txt-item">
                <div className="txt-item-ico">
                    {imageBg === 1 ? <img src="/assets/img/icon-1.svg" alt="" /> : <img src="/assets/img/icon-2.svg" alt="" />}
                </div>
                <div className="txt-item-content">
                    <div className="txt-item-content-title">
                        <h4>{title}</h4>
                    </div>
                    <div className="txt-item-content-t">
                        <p>{children}</p>
                    </div>
                </div>
            </div>
        </BoxComponentS>
    )
}