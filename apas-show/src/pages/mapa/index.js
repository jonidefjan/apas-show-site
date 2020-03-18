import React from 'react';
import {Container, Row, Col, Button, Image} from 'react-bootstrap'
import mapaIcon from '../../assets/mapa_icon.png'
import mapa from '../../assets/planta.png'

const Mapa = () =>{
  return (
    <Container className="container_wide">
        <Container className="topo_container">
          <Row className="topo_mapa">
            
          </Row>
        </Container>
        <Row>
        <Col className="pageTitle">
        

          
          <Image src={mapaIcon} alt="Mapa e Expositores"/>
          <h1>Mapa e Expositores</h1>
          
          
        </Col>
      </Row>
      <Container>
        <h1 className="titleDesaque">Mapa do <b>evento</b></h1>
        <Row>
          <Col className="destaque_azul"><p>Confira o mapa do evento ou se preferir clique ao lado para baixá-lo em PDF. <Button className="inscrevase">Mapa em PDF</Button></p></Col>
        </Row>
      </Container>
      <Container className="container_wide">
        <Row>
          <Col className="center_text">
            <Image src={mapa}/>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Mapa
