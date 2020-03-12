import React from 'react';
import {Col, Row, Container, Media } from 'react-bootstrap'
import wifiIcon from '../../assets/icon_balao_wifi.png'
import translate from '../../i18n/translate'
import Dias from './Dias'
import topo from '../../assets/congresso.png'

const Congresso = () =>(

  <Container className="desk">

  <div className="topoCongresso__container">
    <Row className="topoCongresso">
      <div className="above-background">

      </div>
    </Row>
  </div>

    <Row>
      <Col className="pageTitle">
      


        <img src={wifiIcon} alt="Congresso"/>
        <h1>{translate("congresso")}</h1>
        
        
      </Col>
    </Row>
    <Row className="resumoCongresso">
      <Col className="destaqueAmarelo">

        <h1>Durante a APAS Show também acontece o Congresso Internacional de Gestão.</h1>

      </Col>
      <Col className="destaqueTxt">
      
        <p>O <b>Congresso de Gestão APAS</b> é um dos mais importantes do setor supermercadista. Anualmente reúne mais de <b>3 mil congressistas</b> para assistir à cerca de <b>60 palestras</b> durantes os três dias de evento na APAS Show.</p>
        <p>Especialistas internacionais, convidados e representantes governamentais e da iniciativa privada estão entre os palestrantes do Congresso APAS.</p>

      </Col>
    </Row>
    <Row className="agenda">
      <Col>

        <Dias/>

      </Col>
    </Row>
    <Row>
      <Col></Col>
    </Row>
  </Container>

);
export default Congresso;