import React from "react";
import { Section1S } from "../styles/Main";
import BoxComponent from "./BoxComponent";

export default function Section1() {
  return (
    <Section1S>
      <div className="s-container">
        <div className="s-item-l">
          <div className="s-item-content">
            <img src="/assets/img/about2.jpg" className="img1" alt="" />
            <img src="/assets/img/about.jpg" className="img2" alt="" />
          </div>
        </div>
        <div className="s-item-r">
          <div className="s-item-content2">
            <div className="title-s">
              <h5 className="company-n">All Fix Parras</h5>
            </div>
            <div className="title-l">
              <h3>Acerca de nosotros.</h3>
            </div>
            <div className="txt-items">
              <BoxComponent title="Política de calidad" imageBg={3} scale={1.5}>
                Somos una compañía comprometida en nuestro trabajo, brindando
                servicios de mantenimiento integral de calidad a todos nuestros
                clientes. Contamos con técnicos y personal especializado
                trabajando en equipo y capacitándose constantemente para ofrecer
                cada día mejores resultados.
              </BoxComponent>
              <BoxComponent title="Misión" imageBg={1}>
                Ofrecer un servicio integral de mantenimiento industrial,
                residencial y comercial de la más alta calidad a todos nuestros
                clientes.
              </BoxComponent>
              <BoxComponent title="Visión" imageBg={2}>
                Ser una compañía con el personal mejor calificado en cada una de
                las especialidades que ofrecemos para garantizar la satisfacción
                total de nuestros clientes.
              </BoxComponent>
            </div>
          </div>
        </div>
      </div>
      
    </Section1S>
  );
}
