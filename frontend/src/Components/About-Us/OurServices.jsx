//Autor: Fuentes Cabrera Itzel Alessandra 

import "../../css/services.css"; // importa el archivo CSS para estilos específicos de esta sección

import React from "react"; // importa la librería React
import Card from "react-bootstrap/Card"; // importa el componente Card de la librería React Bootstrap

import Auditing from "../../img/servicio/AUDITING.png"; // importa la imagen de auditoría
import Consultancy from "../../img/servicio/CONSULTANCY.png"; // importa la imagen de consultoría
import Implementation from "../../img/servicio/IMPLEMENTATION.png"; // importa la imagen de implementación
import Interfaces from "../../img/servicio/INTERFACES.png"; // importa la imagen de desarrollo de interfaces
import Innovation from "../../img/servicio/INNOVATION.png"; // importa la imagen de innovación
import Business from "../../img/servicio/BUSINESS.png"; // importa la imagen de desarrollo de reglas de negocio

import { FormattedMessage } from "react-intl";

const Services = () => {
  // Se crea el componente Services como una función en donde en cada uno se coloca su información dentro de una Card para mejor visualización de su información
  return (
    <div>
      <h1 className="services-center">
        <FormattedMessage id="home.ser" defaultMessage="Our Services" />
      </h1>
      <div
        className="card-container"
        style={{ marginBottom: "40px", marginTop: "10px" }}
      >
        <div id="cardServ">
          <Card.Img
            variant="top"
            src={Auditing}
            height="170px"
            object-position="50% 50%"
          />
          <FormattedMessage id="home.aud" defaultMessage="AUDITING" />
          <hr></hr>
          <Card.Text style={{ color: "black", fontSize: "16px" }}>
            <FormattedMessage
              id="home.aud1"
              defaultMessage="Auditing and process improvement"
            />
          </Card.Text>
        </div>
        <div id="cardServ">
          <Card.Img
            variant="top"
            src={Consultancy}
            height="170px"
            object-position="50% 50%"
          />
          <FormattedMessage id="home.con" defaultMessage="CONSULTANCY" />
          <hr></hr>
          <Card.Text style={{ color: "black", fontSize: "16px" }}>
            <FormattedMessage
              id="home.con1"
              defaultMessage="Consultancy Services"
            />
          </Card.Text>
        </div>
        <div id="cardServ">
          <Card.Img
            variant="top"
            src={Implementation}
            height="170px"
            object-position="50% 50%"
          />
          <FormattedMessage
              id="home.imp"
              defaultMessage="IMPLEMENTATION OUTSOURCING"
            />
          
          <hr></hr>
          <Card.Text style={{ color: "black", fontSize: "16px" }} className="card-text1">
          <FormattedMessage
              id="home.imp1"
              defaultMessage="Implement Aircraft and Crew Tracking Systems and Optimizers"
            />
            
          </Card.Text>
        </div>
        <div id="cardServ">
          <Card.Img
            variant="top"
            src={Interfaces}
            height="170px"
            object-position="50% 50%"
          />
          <FormattedMessage
              id="home.int"
              defaultMessage="INTERFACES DEVELOPMENT"
            />
          
          <hr></hr>
          <Card.Text style={{ color: "black", fontSize: "16px" }}>
          <FormattedMessage
              id="home.int1"
              defaultMessage="Development of Integrations / Interfaces for computer systems"
            />
            
          </Card.Text>
        </div>
        <div id="cardServ">
          <Card.Img
            variant="top"
            src={Innovation}
            height="170px"
            object-position="50% 50%"
          />
          <FormattedMessage
              id="home.inn"
              defaultMessage="INNOVATION"
            />
          
          <hr></hr>
          <Card.Text style={{ color: "black", fontSize: "16px" }}>
          <FormattedMessage
              id="home.inn1"
              defaultMessage="Innovation and Development of new systems"
            />
            
          </Card.Text>
        </div>
        <div id="cardServ">
          <Card.Img
            variant="top"
            src={Business}
            height="170px"
            object-position="50% 50%"
          />
          <FormattedMessage
              id="home.bus"
              defaultMessage="BUSINESS RULES DEVELOPMENT"
            />
          
          <hr></hr>
          <Card.Text style={{ color: "black", fontSize: "16px" }}>
          <FormattedMessage
              id="home.bus1"
              defaultMessage="Development of business rules for resource management"
            />
            <br/>
          </Card.Text>
        </div>
        <br/>
      </div>
    </div>
  );
};

export default Services;
