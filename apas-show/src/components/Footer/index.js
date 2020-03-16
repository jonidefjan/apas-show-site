import React from 'react';
import {Link} from 'react-router-dom'
import { Container, Row, Col, Image, Table } from 'react-bootstrap';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faFacebookSquare, faTwitterSquare, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import logo from '../../assets/logo_apas.png'

const face = <FontAwesomeIcon icon={faFacebookSquare} />
const tw = <FontAwesomeIcon icon={faTwitterSquare} />
const yt = <FontAwesomeIcon icon={faYoutube} />
const lnd = <FontAwesomeIcon icon={faLinkedin} />
const envelope = <FontAwesomeIcon icon={faEnvelope} />
const calendar = <FontAwesomeIcon icon={faCalendar}/>
const map = <FontAwesomeIcon icon={faMapMarkerAlt}/>

const Footer = () => (
  <Container fluid className="footer">
      <Row>
        <Col className="footer_logo">
          <Image src={logo}/>
        </Col>

        <Col>

          <Row>
            <Col>
              <p className="icone-info"><span>{calendar}</span> 18 a 21 de maio de 2020</p>
              <p className="icone-info"><span>{map}</span>  expo center norte</p>
            </Col>
          </Row>

          <Row>
            <Col >
            <Table className="social">
              <thead>
                <th><a href="">{face}</a></th>
                <th><a href="">{tw}</a></th>
                <th><a href="">{yt}</a></th>
                <th><a href="">{lnd}</a></th>
                <th><a href="">{envelope}</a></th>
              </thead>
            </Table>
            </Col>
          </Row>

        </Col>

        <Col className="nav_footer" >

          <div>
            <h4>expositores</h4>
            <ul className="category">
              <li><Link to='/'>mapa</Link></li>
              <li><Link to='/'>expositores</Link></li>
              <li><Link to='/'>busca</Link></li>
              <li><Link to='/'>categorias</Link></li>
            </ul>
          </div>

          <div>
            <h4>arena <br/>inovação</h4>
            <ul className="category">
              <li><Link to='/'>mapa</Link></li>
              <li><Link to='/'>startups</Link></li>
              <li><Link to='/'>inscrição</Link></li>
            </ul>
          </div>
          
          <div>
            <h4>prêmios</h4>
            <ul className="category">
              <li><Link to='/'>geração de <br/>Negócios</Link></li>
              <li><Link to='/'>popai</Link></li>
            </ul>
          </div>
          
          <div>
          <h4>congresso</h4>
          <ul className="category">
            <li><Link to='/'>grade</Link></li>
            <li><Link to='/'>agenda</Link></li>
            <li><Link to='/'>certificado</Link></li>
          </ul>
          </div>

          <div>
            <h4>resp. social</h4>
            <ul className="category">
              <li><Link to='/'>arrecadação</Link></li>
              <li><Link to='/'>prêmio resp. <br/>social</Link></li>
            </ul>
          </div>

          <div>
            <h4>imprensa</h4>
            <ul className="category">
              <li><Link to='/'>releases</Link></li>
              <li><Link to='/'>vídeos</Link></li>
              <li><Link to='/'>fotos</Link></li>
              <li><Link to='/'>contato</Link></li>
            </ul>
          </div>

        </Col>
      </Row>
  </Container>
);

export default Footer;