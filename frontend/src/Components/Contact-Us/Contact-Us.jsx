//Autor: Martínez Aldavera Alma Yessenia y  Espinoza Gómez Abraham Salvador

import React, { useState, useRef } from "react"; // Importamos React, useState y useRef desde React
import "../../css/conctact.css"; // Importamos el archivo CSS para el formulario de contacto
import { FormattedMessage } from "react-intl";


import ReCAPTCHA from "react-google-recaptcha"; // Importamos la librería de ReCAPTCHA para el formulario

const ContactForm = () => {
  // Definimos nuestro componente ContactForm como una función
  const [name, setName] = useState(""); // Definimos el estado para el nombre del usuario
  const [email, setEmail] = useState(""); // Definimos el estado para el email del usuario
  const [phone, setPhone] = useState(""); // Definimos el estado para el teléfono del usuario
  const [subject, setSubject] = useState("Information"); // Definimos el estado para el tema del mensaje del usuario, con un valor inicial de "Information"
  const [message, setMessage] = useState(""); // Definimos el estado para el mensaje del usuario

  const handleSubmit = (e) => {
    e.preventDefault(); // Evitamos que el formulario se envíe automáticamente

    // Verificamos si el usuario ha completado el ReCAPTCHA
    if (captcha.current.getValue()) {
      console.log("El usuario Pasó la prueba"); // Imprimimos un mensaje en la consola para confirmar que el usuario ha pasado la prueba
      cambiarCaptchaValido(true); // Cambiamos el estado para confirmar que el usuario ha pasado la prueba

      // Imprimimos en la consola los valores del formulario que ha completado el usuario
      console.log(
        `Name: ${name}, Email: ${email}, Phone: ${phone}, Subject: ${subject}, Message: ${message}`
      );
    } else {
      console.log("Por favor acepta el captcha"); // Si el usuario no ha completado el ReCAPTCHA, le pedimos que lo haga
      cambiarCaptchaValido(false); // Cambiamos el estado para confirmar que el usuario no ha pasado la prueba
    }

    // Aquí puedes añadir el código para enviar el formulario
  };

  const captcha = useRef(null); // Creamos una referencia a nuestro componente de ReCAPTCHA

  const onChange = () => {
    if (captcha.current.getValue()) {
      console.log("El usuario Pasó la prueba"); // Imprimimos un mensaje en la consola para confirmar que el usuario ha pasado la prueba
      cambiarCaptchaValido(true); // Cambiamos el estado para confirmar que el usuario ha pasado la prueba
    }
  };

  const [capchaValido, cambiarCaptchaValido] = useState(null); // Definimos el estado para verificar si el usuario ha completado el ReCAPTCHA

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        <FormattedMessage
              id="cont.nam"
              defaultMessage="Name"
            />
            </label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label htmlFor="email">
      <FormattedMessage
              id="cont.ema"
              defaultMessage="Email"
            />
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label htmlFor="phone">
      <FormattedMessage
              id="cont.pho"
              defaultMessage="Phone"
            />
        </label>
      <input
        type="tel"
        id="phone"
        name="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <label htmlFor="subject">
      <FormattedMessage
              id="cont.sub"
              defaultMessage="Subject"
            />
        </label>
      <select
        id="subject"
        name="subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      >
        <option value="Information">
        <FormattedMessage
              id="cont.sub.inf"
              defaultMessage="Information"
            />
          </option>
        <option value="Services">
        <FormattedMessage
              id="cont.sub.ser"
              defaultMessage="Services"
            />
        </option>
      </select>

      <label htmlFor="message">
      <FormattedMessage
              id="cont.mes"
              defaultMessage="Message"
            />
      </label>
      <textarea
        id="message"
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <div className="recaptcha">
        <ReCAPTCHA
          ref={captcha}
          sitekey="6LdOMAslAAAAAPX8dU8Z6XKbwlh6XgKd1ncsTlRB"
          onChange={onChange}
        />
        {capchaValido === false && (
          <div className="error-captcha">
            <FormattedMessage
          id="cont.alet.cap"
          defaultMessage="Please accept the captcha"
        />
        </div>
        )}
      </div>
      <div >
      <button type="submit"><FormattedMessage
          id="cont.subm"
          defaultMessage="Submit"
        />
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
