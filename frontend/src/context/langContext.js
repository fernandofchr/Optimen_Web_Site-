//Autor: Abraham Espinoza

import React, { useState } from 'react'; // Se importan React y useState desde la librería React
import MensajesIngles from '../lang/en-US.json'; // Se importa el archivo de mensajes en inglés
import MensajesEspañol from '../lang/es-MX.json'; // Se importa el archivo de mensajes en español
import { IntlProvider } from 'react-intl'; // Se importa el componente IntlProvider de la librería react-intl

// Se crea un contexto para el lenguaje
const langContext = React.createContext();

// Se define un componente LangProvider para proveer el contexto de lenguaje
const LangProvider = ({ children }) => {
  let localePorDefecto;
  let mensajesPorDefecto;
  const lang = localStorage.getItem('lang'); // Se obtiene el lenguaje guardado en localStorage

  if (lang) {
    localePorDefecto = lang;

    if (lang === 'es-MX') { // Si el lenguaje es español
      mensajesPorDefecto = MensajesEspañol; // Se establecen los mensajes en español
    } else if (lang === 'en-US') { // Si el lenguaje es inglés
      mensajesPorDefecto = MensajesIngles; // Se establecen los mensajes en inglés
    } else { // Si el lenguaje no es válido
      localePorDefecto = 'en-US';
      mensajesPorDefecto = MensajesIngles; // Se establecen los mensajes en inglés por defecto
    }
  }

  const [mensajes, establecerMensajes] = useState(mensajesPorDefecto); // Se crea un estado para los mensajes
  const [locale, establecerLocale] = useState(localePorDefecto); // Se crea un estado para el lenguaje

  // Se define una función para establecer el lenguaje
  const establecerLenguaje = (lenguaje) => {
    switch (lenguaje) {
      case 'es-MX': // Si se selecciona el lenguaje español
        establecerMensajes(MensajesEspañol); // Se establecen los mensajes en español
        establecerLocale('es-MX'); // Se establece el lenguaje a español
        localStorage.setItem('lang', 'es-MX'); // Se guarda el lenguaje seleccionado en localStorage
        break;
      case 'en-US': // Si se selecciona el lenguaje inglés
        establecerMensajes(MensajesIngles); // Se establecen los mensajes en inglés
        establecerLocale('en-US'); // Se establece el lenguaje a inglés
        localStorage.setItem('lang', 'en-US'); // Se guarda el lenguaje seleccionado en localStorage
        break;
      default: // Si se selecciona un lenguaje no válido
        establecerMensajes(MensajesIngles); // Se establecen los mensajes en inglés por defecto
        establecerLocale('en-US'); // Se establece el lenguaje a inglés por defecto
        localStorage.setItem('lang', 'en-US'); // Se guarda el lenguaje por defecto en localStorage
    }
  }

  // Se provee el contexto de lenguaje a través del Provider del contexto
  return (
    <langContext.Provider value={{ establecerLenguaje: establecerLenguaje }}>
      <IntlProvider locale={locale} messages={mensajes}>
				{children}
			</IntlProvider>
		</langContext.Provider>
	);
}
 
export {LangProvider, langContext};