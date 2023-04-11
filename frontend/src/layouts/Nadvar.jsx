import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "../css/nadvar.css"; // Estilos de la barra de navegación.
import logo from "../img/nadvar/logo_optimenn.ico"; // Ruta de la imagen del logo.
import { FormattedMessage } from "react-intl";

function CustomNavbar() {
  const [scrollNav, setScrollNav] = useState(false);
  const [showNavItems, setShowNavItems] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const handleShowNavItems = () => {
    setShowNavItems(!showNavItems);
  };

  return (
    <Navbar expand="md" className={scrollNav ? "navbar scroll-nav" : "navbar"}>
      <Container>
        <Navbar.Brand href="/Dashboard">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleShowNavItems} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" onClick={handleShowNavItems}>
            <Nav.Link href="/Dashboard">
              <FormattedMessage
                id="menu.home"
                defaultMessage="Home"
              />
            </Nav.Link>
            <Nav.Link href="/About-Us">
              <FormattedMessage
                id="menu.aboutUs"
                defaultMessage="About-Us"
              />
            </Nav.Link>
            <Nav.Link href="/Customers">
              <FormattedMessage
                id="menu.customers"
                defaultMessage="Customers"
              />
            </Nav.Link>
            <Nav.Link href="/News">
              <FormattedMessage
                id="menu.news"
                defaultMessage="News"
              />
            </Nav.Link>
            <Nav.Link href="/Contact-Us">
              <FormattedMessage
                id="menu.contactUs"
                defaultMessage="Contact-Us"
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
