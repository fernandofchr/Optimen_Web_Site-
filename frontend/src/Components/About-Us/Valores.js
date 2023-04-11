//Autor: Martínez Aldavera Alma Yesenia 

// Importa React y algunos componentes de React Bootstrap
import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

// Importa algunas imágenes
import ap1 from "../../img/AboutUs/airplane.png";
import ap2 from "../../img/AboutUs/airplane2.png";
import ap3 from "../../img/AboutUs/CABINA3.png";
import avion from "../../img/AboutUs/viaje.png";

import "../../css/valores.css";

// Importa FormattedMessage de React-Intl
import { FormattedMessage } from "react-intl";

// Define la función "Valores"
function Valores() {
  return (
    <div className="container">
      <div className="col-md-6">
        <div className="column1">
          <div className="image-container" text-aling="center">
            <img src={avion} alt="" />
          </div>

          <div className="card-body">
            <div className="card-title1">
              <h3>
                <FormattedMessage id="vall.mis" defaultMessage="MISSION" />
              </h3>
              <hr style={{ color: "#000000", background: "black" }}></hr>
              <p className="card-text1 text-secondary">
                <FormattedMessage
                  id="vall.miste"
                  defaultMessage="Support and facilitate Air Lines around the world to maintain "
                />
                <br />
                <FormattedMessage
                  id="vall.miste2"
                  defaultMessage="reliable and sustainable operations through Technology, "
                />
                <br />
                <FormattedMessage
                  id="vall.miste3"
                  defaultMessage="Innovation and living our Values. "
                />
              </p>
            </div>
          </div>
        </div>

        <div className="column2">
          <div className="card-body">
            <div className="card-title1">
              <hr></hr>
              <h3>
                <FormattedMessage id="vall.vis" defaultMessage="VISION" />
              </h3>

              <p className="card-text1 text-secondary">
                <FormattedMessage
                  id="vall.viste"
                  defaultMessage="To be the First option in Software, Technology"
                />
                <br />
                <FormattedMessage
                  id="vall.viste2"
                  defaultMessage="and Innovation services for the global Airlines in"
                />
                <br />
                <FormattedMessage
                  id="vall.viste3"
                  defaultMessage="the area of Aeronautical operational control."
                />
              </p>
            </div>
          </div>
        </div>
        <div className="column3">
          <div className="card-body">
            <div className="card-title1">
              <hr></hr>
              <h3>
                <FormattedMessage id="vall.val" defaultMessage="VALUES" />
              </h3>
              <p className="card-text1 text-secondary">
                <FormattedMessage id="vall.valte" defaultMessage="Trustworthy" />
                <br />
                <FormattedMessage id="vall.valte2" defaultMessage="Respect" />
                <br />
                <FormattedMessage id="vall.valte3" defaultMessage="Integrity" />
                <br />
                <FormattedMessage id="vall.valte4" defaultMessage="Team work" />
                <br />
                <FormattedMessage id="vall.valte5" defaultMessage="InnovationSupport" />
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="section-title" data-aos="fade-up">
        <br />
        <br/>
        <h2>
          <FormattedMessage
            id="vall.aireEspe"
            defaultMessage="Airline Experience"
          />
        </h2>
        <CardGroup>
          <Card>
            <Card.Img
              variant="top"
              src={ap1}
              alt=" "
              style={{
                margin: "10px",
                borderRadius: "100%",
                marginLeft: "120px",
                width: "200px",
                height: "190px",
              }}
            />
            <Card.Body>
              <Card.Text>
                <FormattedMessage
                  id="vall.aireEspe1"
                  defaultMessage="Associated with long experience in the Airline Industry with high trust and tight relation with commercial airlines and"
                />
                
                <FormattedMessage
                  id="vall.aireEspe2"
                  defaultMessage="industry key players."
                />
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src={ap2}
              alt="Mi imagen"
              style={{
                margin: "10px",
                borderRadius: "100%",
                marginLeft: "110px",
                width: "200px",
                height: "190px",
                overflow: "hidden",
              }}
            />
            <Card.Body>
              <Card.Text>
              <FormattedMessage
                  id="vall.airaso"
                  defaultMessage="Associated with long experience in the Airline Industry with
                  high trust and tight relation with commercial airlines and
                  industry key players."
                />
                
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src={ap3}
              alt="Mi imagen"
              style={{
                margin: "10px",
                borderRadius: "100%",
                marginLeft: "120px",
                width: "200px",
                height: "190px",
                overflow: "hidden",
              }}
            />
            <Card.Body>
              <Card.Text>
              <FormattedMessage
                  id="vall.airsor"
                  defaultMessage="Strong Project Management following the industry best practices."
                />
                
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
        
      </div>
      <br/>
    </div>
  );
}

export default Valores;
