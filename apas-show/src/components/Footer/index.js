import React from 'react';
import './style.css';
import { Link } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCalendar, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
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
  <footer id="footer">
    <img src={logo} className="logo-apas" alt="logo apas"/>
    <div className="info">
      <h1>{calendar} 18 a 21 de maio de 2020</h1>
      <h1>{map} expo center norte</h1>
      <hr/>
      <ul className="social">
        <li><a href="">{face}</a></li>
        <li><a href="">{tw}</a></li>
        <li><a href="">{yt}</a></li>
        <li><a href="">{lnd}</a></li>
        <li><a href="">{envelope}</a></li>
      </ul>
    </div>
    <div className="navegation">
      <ul>
        <ul className="category">
          <li>expositores</li>
          <li>mapa</li>
          <li>expositores</li>
          <li>busca</li>
          <li>categorias</li>
        </ul>
        <ul className="category">
          <li>arena inovação</li>
          <li>mapa</li>
          <li>startups</li>
          <li>inscrição</li>
        </ul>
        <ul className="category">
          <li>prêmios</li>
          <li>geração de Negócios</li>
          <li>popai</li>
        </ul>
        <ul className="category">
          <li>congresso</li>
          <li>grade</li>
          <li>agenda</li>
          <li>certificado</li>
        </ul>
        <ul className="category">
          <li>resp. social</li>
          <li>arrecadação</li>
          <li>prêmio resp. social</li>
        </ul>
        <ul className="category">
          <li>imprensa</li>
          <li>releases</li>
          <li>vídeos</li>
          <li>fotos</li>
          <li>contato</li>
        </ul>
      </ul>
    </div>

  </footer>
);

export default Footer;