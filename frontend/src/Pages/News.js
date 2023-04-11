//Autor: Espinoza Gómez Abraham Salvador

import React from "react";
import Nadvar from '../layouts/Nadvar'; //importa el componente de navegación
import New from '../Components/news/news'; //importa el componente de noticias
import Footer from '../layouts/Footer'; //importa el componente de pie de página

function News() {
  return (
    <>
      <Nadvar /> {/*Renderiza el componente de navegación*/}
      <New /> {/*Renderiza el componente de noticias*/}
      <Footer /> {/*Renderiza el componente de pie de página*/}
    </>
  );
}

export default News; //exporta el componente News por defecto
