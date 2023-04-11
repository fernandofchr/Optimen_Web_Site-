//Autor: Espinoza Gomez Abraham Salvador

import "bootstrap/dist/css/bootstrap.min.css";

import Nadvar from "../layouts/Nadvar"; // importar el layout de navegación
import Footer from "../layouts/Footer"; // importar el layout de pie de página
import Customer from "../Components/customer/Customers"; // importar el componente de clientes
//import Carru from "../Components/customer/carrusel"; // importar el componente de carrusel


function Customers() {
  return (
    <>
      <Nadvar />
      <Customer />
      <Footer/>
    </>
  );
}

export default Customers;
