//Echo por Carlos 
//Actualizado por Fernando


import React, { useState, useEffect }from 'react';  // Importa React y los hooks useState y useEffect
import axios from "axios";  // Importa el módulo axios para hacer solicitudes HTTP
import '../../css/innovation.css' // Importa un archivo CSS específico para este componente

import { FormattedMessage } from "react-intl"; // Importa el componente FormattedMessage de react-intl

const Innovation = () => { // Define el componente Innovation como una función de flecha
  const [events, setEvents] = useState([]); // Define un estado para almacenar los eventos obtenidos de la API

  useEffect(() => { // Utiliza el hook useEffect para hacer una solicitud a la API cuando se monta el componente
    axios
      .get("http://localhost:4000/admin/api/resources/Events/actions/list") // Hace una solicitud GET a la API
      .then((response) => { // Si la solicitud es exitosa, actualiza el estado de los eventos
        setEvents(response.data.records);
      })
      .catch((error) => console.log(error.message)); // Si la solicitud falla, imprime un mensaje de error en la consola
  }, []); // Este efecto se ejecutará solo una vez, cuando se monte el componente

  return (
    <div className=''>
        <h1 className='services-center' ><FormattedMessage id="Home.innovation" defaultMessage="Innovation"/></h1> 
      <div className="boxesContainer">
        {events.map((card) => ( // Mapea la matriz de eventos y muestra cada evento en una "caja"
          <div className="cardBoxs" key={card.params.id}>
            <div className="card-inno">
              <div className="front-inno">
                <h2>{card.params.evento}</h2> 
                <img src={card.params.imagen} alt={card.params.imagen} width="200" height="150"/> 
              </div>
              <div className="back-inno">
                <h2>{card.params.evento}</h2>
                <h6>{card.params.descripcion}</h6>
                <h6>{card.params.ubicacion}</h6>
                <h6>{card.params.fechaEvento}</h6>
                <h6>{card.params.horaEvento}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Innovation; // Exporta el componente Innovation para que pueda ser utilizado en otros archivos de la aplicación
