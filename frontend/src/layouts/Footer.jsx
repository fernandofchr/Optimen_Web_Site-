//Autor: Espinoza Gomez Abraham Salvador

// Importa los módulos necesarios
import React from "react"; 
import "../css/footer.css"; 
import { FormattedMessage } from "react-intl"; 

// Define el componente funcional "Footer"
function Footer() {
  return (
    // Contenedor principal del pie de página
    <footer className="footer">
      <div className="footer-container">
        {/* Primera columna de enlaces */}
        <div className="footer-column">
          {/* Título de la columna */}
          <h3 className="footer-heading">
            {/* Mensaje localizado del título */}
            <FormattedMessage id="footer.enla" defaultMessage="Helpful Links"/>
          </h3>
          {/* Lista de enlaces */}
          <ul className="footer-list">
            {/* Elemento de lista con un enlace */}
            <li>
              <a href="https://optimen.com.mx/securitypolicy/en">
                {/* Mensaje localizado del enlace */}
                <FormattedMessage id="footer.poli" defaultMessage="Política de privacidad"/>
              </a>
            </li>
            {/* Elemento de lista con otro enlace */}
            <li>
              <a href="/Contact-Us">
                {/* Mensaje localizado del enlace */}
                <FormattedMessage id="footer.cont" defaultMessage="contact"/>
              </a>
            </li>
          </ul>
        </div>
        {/* Segunda columna de enlaces */}
        <div className="footer-column">
          {/* Título de la columna */}
          <h3 className="footer-heading">
            {/* Mensaje localizado del título */}
            <FormattedMessage id="footer.sig" defaultMessage="follow us"/>
          </h3>
          {/* Lista de enlaces */}
          <ul className="footer-list">
            {/* Elemento de lista con un enlace */}
            <li>
              <a href="https://www.facebook.com/optimen.mx/">Facebook</a>
            </li>
            {/* Elemento de lista con otro enlace */}
            <li>
              <a href="https://www.linkedin.com/company/optimen-sc">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
      {/* Sección de derechos de autor */}
      <div className="footer-bottom">
        <p className="footer-text">
          {/* Mensaje localizado del texto de derechos de autor */}
          <FormattedMessage id="footer.derechos" defaultMessage="© 2023 Optimen SA de CV. All rights reserved..."/>
        </p>
      </div>
    </footer>
  );
}

// Exporta el componente como valor predeterminado
export default Footer;
