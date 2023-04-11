//Autor: Fuentes Cabrera Itzel Alessandra

import React, { useContext } from "react";
import uno from "../../img/Home/uno.png";
import "../../css/home.css"; // Importa hoja de estilo externa

import { FormattedMessage } from "react-intl";
import { langContext } from "../../context/langContext";

const Homes = () => {
  const idioma = useContext(langContext); // Obtiene el lenguaje actual de la aplicación desde el contexto

  console.log(idioma); // Imprime el lenguaje actual en la consola del navegador

  return (
    <header className="home-header">
      <img className="home-image" src={uno} alt="avión" />
      <div className="home-content">
        <h1 className="home-title anim-fade-in">
          <FormattedMessage id="app.welcome" defaultMessage="Welcome to Optimen" />
          {/* El componente FormattedMessage se utiliza para internacionalizar cadenas de texto */}
        </h1>
        <p className="home-description anim-slide-up">
          <FormattedMessage
            id="app.Description"
            defaultMessage="Unique team of Resources Management and Optimization Experts and passionate Software Developers."
          />
        </p>
      </div>
    </header>
  );
};

export default Homes;
