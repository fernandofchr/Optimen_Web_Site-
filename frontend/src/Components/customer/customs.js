//Autor: Arvizu Sotelo Fernando 

import React, { Fragment } from "react"; // Importa React y Fragment desde la biblioteca 'react'
import "../../css/Casouser.css"; // Importa el archivo CSS para estilos personalizados

import Button from "react-bootstrap/Button"; // Importa el componente Button de la biblioteca 'react-bootstrap'

import InfiniteCarousel from "react-leaf-carousel"; // Importa el componente InfiniteCarousel de la biblioteca 'react-leaf-carousel'

import FRONTIER from "../../img/customers/FRONTIER.jpg"; 
import IBERIA from "../../img/customers/IBERIA.jpg"; 
import Azul from "../../img/customers/Azul.jpg"; 
import GOL from "../../img/customers/GOL.jpg"; 
import United from "../../img/customers/United.jpg"; 
import Alaska from "../../img/customers/Alaska.jpg"; 
import Endeavor from "../../img/customers/Endeavor.jpg"; 
import Kalitta from "../../img/customers/Kalitta.jpg"; 
import AeroMexico from "../../img/customers/AeroMexico.jpg"; 
import CopaAir from "../../img/customers/CopaAir.jpg"; 
const Customs = () => {
  return (
    <Fragment>
      {" "}
      {/* Utiliza un Fragment para devolver elementos sin un nodo padre */}
      <section className="sec">
        {" "}
        {/* Define una sección con la clase 'sec' */}
        <div className="row">
          {" "}
          {/* Define un div con la clase 'row'*/}
          <InfiniteCarousel // Usa el componente InfiniteCarousel para crear un carrusel de imágenes
            sideSize={0.5} // Define el tamaño de las imágenes en el carrusel
            slidesToScroll={1} // Define el número de diapositivas que se desplazan cuando se hace clic en el botón anterior/siguiente
            autoCycle={true} // Activa la función de cambio automático del carrusel
            slidesToShow={3} // Define el número de diapositivas visibles en el carrusel
          >
            <Button // Utiliza el componente Button para crear un botón con un enlace
              className="but" // Asigna la clase 'but' al botón
              variant="link" // Define el estilo del botón como un enlace
              href="https://es.flyfrontier.com/nosotros-1xs/" // Define la URL del enlace
            >
              <div className="customer">
                {" "}
                {/* Crea un div con la clase 'customer'*/}
                <div className="img">
                  {" "}
                  {/* Crea un div con la clase 'img'*/}
                  <img src={FRONTIER} alt="1" />{" "}
                  {/* Inserta la imagen 'uno' con un atributo 'alt' */}
                </div>
              </div>
            </Button>
            <Button
              className="but"
              variant="link"
              href="https://grupo.iberia.es/about_us"
            >
              <div className="customer">
                <div className="img">
                  <img src={IBERIA} alt="Ahora pasa"></img>
                </div>
              </div>
            </Button>
            <Button
              className="but"
              variant="link"
              href="https://www.united.com/ual/en/us/fly/company/united-airlines-ventures.html"
            >
              <div className="customer">
                <div className="img">
                  <img src={Azul} alt="ALTAM"></img>
                </div>
              </div>
            </Button>
            <Button
              className="but"
              variant="link"
              href="https://www.voegol.com.br/es-ar/sobre-gol"
            >
              <div className="customer">
                <div className="img">
                  <img src={GOL} alt="nada"></img>
                </div>
              </div>
            </Button>
            <Button
              className="but"
              variant="link"
              href="https://aeromexico.com/es-mx/acerca-de-aeromexico/corporativo-aeromexico"
            >
              <div className="customer">
                <div className="img">
                  <img src={United} alt="sisisi"></img>
                </div>
              </div>
            </Button>
            <Button
              className="but"
              variant="link"
              href="https://www.alaskaair.com/content/about-us"
            >
              <div className="customer">
                <div className="img">
                  <img src={Alaska} alt="ggg"></img>
                </div>
              </div>
            </Button>
            <Button
              className="but"
              variant="link"
              href="https://www.endeavorair.com/content/endeavor-air/en_us/about-us.html"
            >
              <div className="customer">
                <div className="img">
                  <img src={Endeavor} alt="ggg"></img>
                </div>
              </div>
            </Button>
            <Button
              className="but"
              variant="link"
              href="https://www.copaair.com/es/web/mx/nuestra-historia"
            >
              <div className="customer">
                <div className="img">
                  <img src={Kalitta} alt="ggg"></img>
                </div>
              </div>
            </Button>
            <Button
              className="but"
              variant="link"
              href="https://www.voeazul.com.br/ar/sobre-azul/sobre-azul"
            >
              <div className="customer">
                <div className="img">
                  <img src={AeroMexico} alt="ggg"></img>
                </div>
              </div>
            </Button>
            <Button
              className="but"
              variant="link"
              href="http://www.kalittaair.com/ourcompany-"
            >
              <div className="customer">
                <div className="img">
                  <img src={CopaAir} alt="ggg"></img>
                </div>
              </div>
            </Button>
          </InfiniteCarousel>
        </div>
      </section>
    </Fragment>
  );
};
export default Customs;
