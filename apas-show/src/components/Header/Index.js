import React from 'react';
import { Container, Navbar, Nav, Button, ButtonGroup } from 'react-bootstrap';
import './style.css';
import { LOCALES } from '../../i18n';

const locale = '';

const setLocale = localStorage.setItem(LOCALES, locale)

const Header = () => (
  <Container>
    
    <Navbar bg="light" expand="lg">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#mapa">Mapa e expositores</Nav.Link>
        <Nav.Link href="#inovacoes">Arena inovações</Nav.Link>
        <Nav.Link href="#premios">Prêmios</Nav.Link>
        <Nav.Link href="#congresso">Congresso</Nav.Link>
        <Nav.Link href="#social">Resp. Social</Nav.Link>
        <Nav.Link href="#imprensa">Imprensa</Nav.Link>
      </Nav>
      <Nav className="mr-auto">
      <ButtonGroup aria-label="Basic example">
        <Button variant="secondary" onClick={() => setLocale(LOCALES, 'pt')} >PT</Button>
        <Button variant="secondary" onClick={() => setLocale(LOCALES, 'en')} >EN</Button>
        <Button variant="secondary" onClick={() => setLocale(LOCALES, 'es')} >ES</Button>
      </ButtonGroup>
      </Nav>
    </Navbar.Collapse>
  </Navbar>

  </Container>
);

export default Header;