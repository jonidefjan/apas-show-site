import React from 'react';
import { Container, Navbar, Nav, Button, ButtonGroup } from 'react-bootstrap';
import './style.css';
import { LOCALES } from '../../i18n';
import brflag from '../../assets/brasil.png'
import esflag from '../../assets/espanha.png'
import enflag from '../../assets/ingles.png'

const locale = '';

const setLocale = localStorage.setItem(LOCALES, locale)

const Header = () => (
  <Container className="header">
    
    <Navbar expand="lg">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/mapa">Mapa e expositores</Nav.Link>
        <Nav.Link href="/inovacoes">Arena inovações</Nav.Link>
        <Nav.Link href="/premios">Prêmios</Nav.Link>
        <Nav.Link href="/congresso">Congresso</Nav.Link>
        <Nav.Link href="/social">Resp. Social</Nav.Link>
        <Nav.Link href="/imprensa">Imprensa</Nav.Link>
        <Nav.Link href="/imprensa">Inf. Úteis</Nav.Link>
      </Nav>
      <Nav className="mr-auto">
      <ButtonGroup aria-label="Basic example">
        <Button variant="secondary" onClick={() => setLocale(LOCALES, 'pt')} >
          <img src={brflag}/>
           PT /</Button>
        <Button variant="secondary" onClick={() => setLocale(LOCALES, 'en')} >
          <img src={enflag}/>
           EN /</Button>
        <Button variant="secondary" onClick={() => setLocale(LOCALES, 'es')} >
          <img src={esflag}/>
           ES /</Button>
      </ButtonGroup>
      
      </Nav>
      <Nav className="mr-auto">
        <Button className="inscrevase">
          Inscreva-se
        </Button>
      </Nav>
    </Navbar.Collapse>
  </Navbar>

  </Container>
);

export default Header;