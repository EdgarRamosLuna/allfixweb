import React from 'react'
import { ContactoS } from '../styles/Main'
import SimpleMap from './helpers/Map'

export default function Section4(){
    return(
        <ContactoS id="contacto">
            <div className='container-1'>
                <div className='txt1'>
                        Contactanos
                </div>
                <div className='txt2'>
                    <h2>Siempre estamos listos para solucionar tus problemas.</h2>
                </div>
                <div className='form'>
                    <div className='form-content'>
                        <div className='input-container i-50'>
                            <input type="text" name="" value="" placeholder='Nombre' />
                        </div>
                        <div className='input-container i-50'>
                            <input type="text" name="" value="" placeholder='Correo' />
                        </div>
                    </div>
                    <div className='form-content'>
                        <div className='input-container i-50'>
                            <input type="text" name="" value="" placeholder='Telelefono' />
                        </div>
                        <div className='input-container i-50'>
                            <input type="text" name="" value="" placeholder='Asunto' />
                        </div>
                    </div>
                    <div className='form-content-last'>
                        <div className='input-container i-100'>
                            <textarea rows="" cols="" placeholder='Mensaje'></textarea>
                        </div>
                        <div className='input-container i-100'>
                            <button type="submit">Enviar</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-2'>
                <div className='img-c'>
                    <div className='img'><img src="/assets/img/contacto.png" alt="" /></div>
                    <div className='txt'></div>
                </div>
            </div>
            <div className='map'>
                <SimpleMap />
            </div>
        </ContactoS>
    )
}