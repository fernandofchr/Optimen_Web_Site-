//Autor: Arvizu Sotelo Fernando 

import React,{Fragment} from "react"; // Importa React y Fragment desde la biblioteca react
import "../../css/Casouser.css"; // Importa el archivo CSS de estilo para el componente

import InfiniteCarousel from "react-leaf-carousel"; // Importa el componente de carrusel de la biblioteca react-leaf-carousel

import Button from 'react-bootstrap/Button'; // Importa el componente de botón de la biblioteca react-bootstrap

import uno from "../../img/customers/TAP.jpg"; // Importa la imagen 1 desde la carpeta de imágenes
import dos from "../../img/customers/Volaris.jpg"; // Importa la imagen 2 desde la carpeta de imágenes
import tres from "../../img/customers/Boeing.jpg"; // Importa la imagen 3 desde la carpeta de imágenes
import cuatro from "../../img/customers/Interjet.jpg"; // Importa la imagen 4 desde la carpeta de imágenes
import cinco from "../../img/customers/Latam.jpg"; // Importa la imagen 5 desde la carpeta de imágenes
import seis from "../../img/customers/Avianca.jpg"; // Importa la imagen 6 desde la carpeta de imágenes
import siete from "../../img/customers/Jeppesen.jpg"; // Importa la imagen 7 desde la carpeta de imágenes


const Customers = () => { // Define el componente Customers como una función de flecha
    return(
        <Fragment>
            <section className="sec" style={{}}>
                <div className="row">
                <InfiniteCarousel
            sideSize={.5}
            slidesToScroll={1}
            autoCycle={true}
            slidesToShow={3} 
          >
                    <Button
              className="but"
              variant="link"
              href="https://www.flytap.com/es-mx/"
            >
              <div className="customer">
                <div className="img">
                  <img src={uno} alt="1" />
                </div>
              </div>
            </Button>

            <Button
              className="but"
              variant="link"
              href="https://www.avianca.com/mx/es/sobre-nosotros/"
            >
              <div className="customer">
                <div className="img">
                  <img src={dos} alt="Ahora pasa"></img>
                </div>
              </div>
            </Button>

            <Button
              className="but"
              variant="link"
              href="https://volaris.pricetravel.com.mx/?msclkid=ed038b861bd61b8246b8e875b4e91dbd&utm_source=bing&utm_medium=cpc&utm_campaign=PriceTravel%20-%20BranMX%20-%20%20Volaris&utm_term=volaris%2B&utm_content=%2BVolaris&gclid=CKPpwafRpP0CFY6wxQIdU8EC8g&gclsrc=ds"
            >
              <div className="customer">
                <div className="img">
                  <img src={siete} alt="ALTAM"></img>
                </div>
              </div>
            </Button>

            <Button
              className="but"
              variant="link"
              href="https://interjet.pricetravel.com.mx/"
            >
              <div className="customer">
                <div className="img">
                  <img src={cuatro} alt="nada"></img>
                </div>
              </div>
            </Button>

            <Button
              className="but"
              variant="link"
              href="https://ww2.jeppesen.com/"
            >
              <div className="customer">
                <div className="img">
                  <img src={cinco} alt="sisisi"></img>
                </div>
              </div>
            </Button>

            <Button
              className="but"
              variant="link"
              href="https://www.latamairlines.com/mx/es?&msclkid=4e6d6a69b3aa11f0d081099a1c615378&utm_source=bing&utm_medium=cpc&utm_campaign=MX_LATAM_BING_SEM_PERF_AON_EXA_BRAND_XP&utm_term=latam%20airlines&utm_content=LATAM&gclid=4e6d6a69b3aa11f0d081099a1c615378&gclsrc=3p.ds"
            >
              <div className="customer">
                <div className="img">
                  <img src={seis} alt="ggg"></img>
                </div>
              </div>
            </Button>

            <Button
              className="but"
              variant="link"
              href="https://www.boeing.com/"
            >
              <div className="customer">
                <div className="img">
                  <img src={tres} alt="ggg"></img>
                </div>
              </div>
            </Button>
                    </InfiniteCarousel>
                </div>
            </section>
        </Fragment>
    )
}

export default Customers