//Autor:  Espinoza Gómez Abraham Salvador

// Importamos los componentes de las páginas y otros elementos
import Customers from './Pages/Customers';
import Dashboard from './Pages/Home';
import AboutUs from './Pages/About-Us';
import ContactUs from './Pages/Contact-Us';
import News from './Pages/News';
import FloatingButton from "./Components/home/FloatingButton";

// Importamos React, estilos y componentes de enrutamiento de React
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Definimos el componente App
export function App() {
  return (
    <div className="App">
        {/* Definimos el componente de enrutamiento */}
        <BrowserRouter>
        <Routes>
          <Route exact path="/Dashboard" element={<Dashboard />} />
          <Route exact path="/Customers" element={<Customers />} />
          <Route exact path="/About-Us" element={<AboutUs />} />
          <Route exact path="/News" element={<News />} />
          <Route exact path="/Contact-Us" element={<ContactUs />} />
          <Route exact path="*" element={<Dashboard />} />
        </Routes>
        {/* Agregamos el componente de botón flotante */}
        <FloatingButton/>
        </BrowserRouter>
    </div>
  );
}
