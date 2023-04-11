//Autor: Espinoza Gómez Abraham Salvador 

import React, { useContext, useState } from "react"; // Importa React, useContext y useState desde la biblioteca React
import "../../css/FloatingButton.css"; // Importa el archivo CSS para dar estilo al componente
import ES from "../../img/Home/espana.png"; // Importa la imagen de la bandera española
import ING from "../../img/Home/english.png"; // Importa la imagen de la bandera inglesa
import idiomas from "../../img/Home/idioma.png"; // Importa la imagen del ícono de idiomas

import { langContext } from "../../context/langContext"; // Importa el contexto de idioma definido en otro lugar del código

const FloatingButton = () => {
  const [showOptions, setShowOptions] = useState(false); // Define el estado inicial del botón flotante, estableciendo la opción de mostrar opciones como "falso"

  const toggleOptions = () => { // Define una función para alternar entre mostrar y ocultar las opciones de idioma
    setShowOptions(!showOptions); // Cambia el estado de "showOptions" de "true" a "false" y viceversa
  };

  const idioma = useContext(langContext); // Usa el contexto de idioma definido en otro lugar del código para obtener y establecer el idioma actual

  return (
    <div className="floating-button" onClick={toggleOptions}>
      <img src={idiomas} alt="language" />
      {showOptions && (
        <div className="language-options">
          <button onClick={() => idioma.establecerLenguaje("en-US")}>
            <img src={ING} alt="English" />
          </button>
          <button onClick={() => idioma.establecerLenguaje("es-MX")}>
            <img src={ES} alt="Español" />
          </button>
        </div>
      )}
    </div>
  );
};

export default FloatingButton; // Exporta el componente para que pueda ser utilizado en otros archivos de JavaScript.


