import React, { useContext, useState } from "react";
import { MainContext } from "../context/MainContext";
import { Section2S } from "../styles/Main";
import List from "./List";

const data1 = [
  "Instalación de tubería conduit y PVC",
  "Cableado eléctrico industrial y residencial",
  "Instalación y reparación de motores y maquinaria industrial",
  "Instalación de luminaria",
  "Automatización de sistemas de riego",
];
const data2 = [
  "Instalación de minisplit y aire acondicionado ",
  "Mantenimiento y limpieza ",
  "Instalación de ventiladores de techo ",
];
const data3 = [
    "Pintura interior y exterior ",
    "Acabados superficiales ",
    "Impermeabilización",
    "Pintura de portones y protecciones ",
];
const data4 = [
    "Fabricación y reparación de muebles ",
    "Instalación decorativa en interiores",
    "Techados de madera ",
    "Marcos, puertas y ventanas",
];

export default function Section2() {
 const {showService} = useContext(MainContext);
  return (
    <Section2S id="servicios">
      <div className="s-content">
        <div className="s-content-txt">
          <div className="s-content-t-s">
            <h4> Nuestros Servicios</h4>
          </div>
          <div className="s-content-t-s">
            <h2>Ofrecemos servicios de alta calidad para las industrias.</h2>
          </div>
        </div>
        <div className="s-content-items">
          <div className="s-content-item">
            <div className="s-content-item-ico">
              <i class="fa-solid fa-bolt"></i>
            </div>
            <div className="s-content-item-title">
              <h2>Servicios eléctricos</h2>
            </div>
            <div className="s-content-item-txt">
              <List data={data1} />
            </div>
            <div className="s-contente-btn" onClick={(e)=> showService(e, 1)}>
              <i class="fa-solid fa-eye"></i>
            </div>
          </div>
          <div className="s-content-item">
            <div className="s-content-item-ico">
              <i class="fa-solid fa-temperature-low"></i>
            </div>
            <div className="s-content-item-title">
              <h2> Sistemas de enfriamiento </h2>
            </div>
            <div className="s-content-item-txt">
              <List data={data2} />
            </div>
            <div className="s-contente-btn" onClick={(e)=> showService(e, 2)}>
              <i class="fa-solid fa-eye"></i>
            </div>
          </div>
          <div className="s-content-item">
            <div className="s-content-item-ico">
            <i class="fa-solid fa-paint-roller"></i>
            </div>
            <div className="s-content-item-title">
              <h2> Servicios de pintura e impermeabilizante </h2>
            </div>
            <div className="s-content-item-txt">
              <List data={data3} />
            </div>
            <div className="s-contente-btn" onClick={(e)=> showService(e, 3)}>
              <i class="fa-solid fa-eye"></i>
            </div>
          </div>
          <div className="s-content-item">
            <div className="s-content-item-ico">
            <i class="fa-solid fa-hammer"></i>
            </div>
            <div className="s-content-item-title">
              <h2> Servicios de carpintería </h2>
            </div>
            <div className="s-content-item-txt">
              <List data={data4} />
            </div>
            <div className="s-contente-btn" onClick={(e)=> showService(e, 4)}>
              <i class="fa-solid fa-eye"></i>
            </div>
          </div>
        </div>
      </div>
    </Section2S>
  );
}
