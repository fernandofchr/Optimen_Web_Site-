//Autor: Espinoza Gómez Abraham Salvador

import React from "react";
import Nadv from "../layouts/Nadvar"; // Importa el componente de la barra de navegación 
import Home from "../Components/home/Home";// Importa el componente de la página de inicio
import Carru from "../Components/home/carruselimg"; // Importa el componente del carrusel de imágenes
import Caerti from "../Components/home/centifications";  // Importa el componente de las certificaciones
import Fotter from "../layouts/Footer"; // Importa el componente del pie de página
import Innovation from '../Components/home/Innovation'; // Importa el componente de la sección de innovación
import Services from "../Components/About-Us/OurServices"; // Importa el componente de la sección de nuestros servicios

function Dashboard() {
  return (
    <>
      <>
        <>
          <>
            <>
              <Nadv /> {/* Renderiza el componente de la barra de navegación */}
              <Home /> {/* Renderiza el componente de la página de inicio */}
              <Innovation/> {/* Renderiza el componente de la sección de innovación */}
              <Services/> {/* Renderiza el componente de la sección de nuestros servicios */}

            </>
            <Carru /> {/* Renderiza el componente del carrusel de imágenes */}
          </>
          <Caerti /> {/* Renderiza el componente de las certificaciones */}
        </>
        <>
          <Fotter /> {/* Renderiza el componente del pie de página */}
        </>
      </>
    </>
  );
}

export default Dashboard;
