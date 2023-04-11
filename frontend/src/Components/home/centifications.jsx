//Autor: Fuentes Cabrera Itzel Alessandra 

import React from "react"; // Importa React
import "../../css/certifications.css"; // Importa el archivo de estilo CSS de las certificaciones


import esr from "../../img/Home/certifications/esr.png"; // Importa la imagen ESR
import gto from "../../img/Home/certifications/marca-gto.png"; // Importa la imagen GTO
import iso from "../../img/Home/certifications/ISO27001.png"; // Importa la imagen ISO27001
import boeing from "../../img/Home/certifications/img.png"; // Importa la imagen Boeing
import { FormattedMessage } from "react-intl"; // Importa el componente FormattedMessage de react-intl

const Certifications = () => { // Crea el componente Certifications
  return ( // Retorna el contenido del componente
    <div className="certifications-container"> 
      <div className="certifications-header"> 
        <h4 className="certifications-title"><FormattedMessage id="Certi.text" defaultMessage="Awards and Certifications"/></h4> 
      </div>
      <div className="certifications-body"> 
        <div className="certification"> 
          <img src={esr} alt="ESR Certification" className="certification-image" style={{ width: "140px", height: "50px" }} /> 
        </div>
        <div className="certification"> 
          <img src={gto} alt="GTO Certification" className="certification-image" style={{ width: "80px", height: "76px" }} /> 
        </div>
        <div className="certification" > 
          <img src={iso} alt="ISO 27001 Certification" className="certification-image" style={{ width: "80px", height: "76px" }} /> 
        </div>
        <div className="certification" > 
          <img src={boeing} alt="Boeing Certification" className="certification-image" style={{ width: "150px", height: "80px" }} /> 
        </div>
      </div>
    </div>
  );
};

export default Certifications; // Exporta el componente Certifications para ser usado en otros archivos de React.
