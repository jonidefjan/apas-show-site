import React from 'react';
import {Col, Row, Container } from 'react-bootstrap'
import wifiIcon from '../../assets/icon_balao_wifi.png'
import translate from '../../i18n/translate'
import Dias from './Dias'

const Congresso = () =>(
  
  <Container>
    <Row>
      <Col>
      
        <img src={wifiIcon} alt="Congresso"/>
        <h1>{translate("congresso")}</h1>
        
      </Col>
    </Row>
    <Row>
      <Col>

        <p>Durante a APAS Show também acontece o Congresso Internacional de Gestão.</p>

      </Col>
      <Col>
      
        <p>O Congresso de Gestão APAS é um dos mais importantes do setor supermercadista. Anualmente reúne mais de 3 mil congressistas para assistir à cerca de 60 palestras durantes os três dias de evento na APAS Show.</p>
        <p>Especialistas internacionais, convidados e representantes governamentais e da iniciativa privada estão entre os palestrantes do Congresso APAS.</p>

      </Col>
    </Row>
    <Row>
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