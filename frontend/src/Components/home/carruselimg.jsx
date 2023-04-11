//Autor: Espinoza Gómez Abraham Salvador 

import React from "react";
import "../../css/carru.css";
import { FormattedMessage } from "react-intl";

// Este componente es una función de flecha que representa el carrusel de imágenes de clientes.
const Customers = () => {
  // Este componente devuelve un elemento <div> que contiene todo el carrusel de imágenes.
  // El elemento <div> tiene una clase "slider", que es utilizada por el archivo CSS carru.css para aplicar estilos específicos al carrusel.

  // Este elemento <div> contiene una imagen del cliente. Hay varios elementos <div> como este en el carrusel.
  // Cada imagen del cliente es representada por un elemento <div> como este.
  // Los atributos "src" y "alt" de la etiqueta <img> definen la ubicación de la imagen y el texto alternativo de la imagen, respectivamente.

  return (
    <div className="slider">
      <h4 className="carrusel-title">
        <FormattedMessage
          id="Carru.text"
          defaultMessage="Partnerships and Affiliations"
        />
      </h4>
      <div className="slide-track">
        <div className="slide">
          <img
            src="https://optimen.com.mx/media/external/GTOtech2.webp"
            alt=""
          />
        </div>
        <div className="slide">
          <img
            src="https://optimen.com.mx/media/external/bjx_aerospace.png"
            alt=""
          />
        </div>

        <div className="slide">
          <img
            src="https://optimen.com.mx/media/external/gto_logo_cofoce.webp"
            alt=""
          />
        </div>
        <div className="slide">
          <img src="https://optimen.com.mx/media/external/aws.png " alt="" />
        </div>
        <div className="slide">
          <img
            src="https://optimen.com.mx/media/external/AEROCLUSTER_QRO.webp"
            alt=""
          />
        </div>
        <div className="slide">
          <img
            src="https://optimen.com.mx/media/external/CANIETI.webp"
            alt=""
          />
        </div>
        <div className="slide">
          <img src="https://optimen.com.mx/media/external/CLUTIG.webp" alt="" />
        </div>
        <div className="slide">
          <img
            src="https://optimen.com.mx/media/external/LOGO_GOBIERNO.webp"
            alt=""
          />
        </div>
        <div className="slide">
          <img
            src="https://optimen.com.mx/media/external/logo-utng.png"
            alt=""
          />
        </div>
        <div className="slide">
          <img
            src="https://optimen.com.mx/media/external/ATG_ADDITIVE_MANUFCATURING.webp"
            alt=""
          />
        </div>
        <div className="slide">
          <img
            src="https://optimen.com.mx/media/external/HORIZONTC.jpg"
            alt=""
          />
        </div>
        <div className="slide">
          <img
            src="https://optimen.com.mx/media/external/EDUCAFINEVOLUCIONA.png"
            alt=""
          />
        </div>
        <div className="slide">
          <img
            src="https://optimen.com.mx/media/external/idea_gto.png"
            alt=""
          />
        </div>
        <div className="slide">
          <img
            src="https://optimen.com.mx/media/external/CEI_GPA.jpeg"
            alt=""
          />
        </div>
        <div className="slide">
          <img
            src="https://optimen.com.mx/media/external/Cinvestav.png"
            alt=""
          />
        </div>
        <div className="slide">
          <img src="https://optimen.com.mx/media/external/SDES.png" alt="" />
        </div>
        <div className="slide">
          <img src="https://optimen.com.mx/media/external/IECA_.png" alt="" />
        </div>
        <div className="slide">
          <img
            src="https://optimen.com.mx/media/external/Juventud_es_GTO.jpg"
            alt=""
          />
        </div>
        <div className="slide">
          <img src="https://optimen.com.mx/media/external/REDHAT_.png" alt="" />
        </div>
        <div className="slide">
          <img src="https://optimen.com.mx/media/external/TDM.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

// Exporta el componente Customers para que pueda ser utilizado en otros componentes.
export default Customers;
