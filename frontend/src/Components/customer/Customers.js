//Autor: Arvizu Sotelo Fernando 

// Importa la hoja de estilo Pag.css desde una ruta relativa
import '../../css/Pag.css';

// Importa los componentes Customer y Customs desde las rutas relativas especificadas
import Customer from "./customer";
import Customs from "./customs"
import { FormattedMessage } from "react-intl";


// Define la función customers que devuelve un componente
function Customers() {
  // El componente principal contiene un elemento div con una clase App
  return (
    <div className="App">

      { /* Un elemento body con una clase App-link */ }
      <body className="App-link">
      
      {/* Un elemento h1 con una clase titulo-Custom y el texto "Our Customers" */}
      <h1 className='titulo-Custom'>         
       <FormattedMessage 
       id="custo.our" 
       defaultMessage="Our Customers" 
       />
      </h1>

      {/* Un elemento div con una clase textio que contiene un elemento h3 que describe los servicios y compromisos de la compañía */}
      <div className="textio">
      <h3>
      <FormattedMessage 
       id="custo.ourTex" 
       defaultMessage="Through our capabilities, the services we provide, 
       and our commitment, we implement projects resulting
       in satisfied clients and success stories." 
       />
       </h3>
      </div>
      
      {/* El componente Customer */}
      <Customer/>

      {/* Un elemento h1 con una clase titulo-Custom y el texto "Our Project Experience"*/}
      <h1 className='titulo-Custom'><FormattedMessage 
       id="custo.ourPro" 
       defaultMessage="Our Project Experience" 
       /></h1>

      {/* Un elemento div con una clase textio que describe la experiencia y contribución de la compañía como consultores certificados de Jeppesen/Boeing en el sector aeronáutico*/}
      <div className="textio">
      <h3>
      <FormattedMessage 
       id="custo.ourPro.tex" 
       defaultMessage="Through our experience as certified Jeppesen/Boeing 
       consultants, we contribute to the support of the 
       configuration and customization of state-of-the-art optimization
       software for several key airlines in the aeronautical sector
       at an international level." 
       />
      </h3>
      </div>

      {/* El componente Customs*/}
      <Customs/>

      {/* Cierra el elemento body */}
      </body>
    </div>
  );
}

// Exporta la función customers como un componente por defecto para ser utilizado en otros archivos
export default Customers;
