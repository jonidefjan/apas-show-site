import React from 'react';
import {Container, Row, Col, Button, Media} from 'react-bootstrap'

const Home = () =>{
  return(
  <Container className="home">
    <Container className="banner_home"></Container>

    <Container>
      <h1>Confira alguns números da <b>feira em 2019</b></h1>
      <Row>
        <Col>
          <h2>Expositores</h2>
          <hr></hr>
          <h1>847</h1><span>EXPOSITORES em 2019</span>
          <h1>204</h1><span>INTERNACIONAIS de 22 países</span>
          <h1>US$330</h1><span>MILHÕES em negociações internacionais</span>
        </Col>
        <Col>
          <h2>Visitantes</h2>
          <hr></hr>
          <h1>58.613</h1><span>visitantes representando</span>
          <h1>11.464</h1><span>empresas</span>
          <h1>106.836</h1><span>visitas gerando</span>
        </Col>
      </Row>

      <Row>
        <Col>
          <h2>Conexões de Negócios</h2>
          <hr></hr>
          <h1>1053</h1><span>reuniões</span>
          <h1>192</h1><span>empresas brasileiras</span>
          <h1>91</h1><span>compradores internacionais de 30 países</span>
          <h1>US$330</h1><span>MILHÕES em Negócios</span>
        </Col>
        <Col>
          <h2>Congresso de gestão</h2>
          <hr></hr>
          <h1>4199</h1><span>congressistas</span>
          <h1>6</h1><span>auditórios temáticos</span>
          <h1>+ de 70 palestras</h1>
        </Col>
      </Row>

      <Row>
        <Col>
          <h1>Vai comparecer ao evento? Confira informações úteis</h1> <Button>Informações úteis</Button>
        </Col>
      </Row>

      <Row>
        <Col>
          <h1>Expositores</h1>
          <div>
            <p>Veja o que vai rolar na feira, confira o mapa e os expositores que estarão presentes.</p>
            <Button>Saiba Mais</Button>
          </div>
        </Col>
        <Col>
          <h1>Arena Inovação</h1>
          <div>
            <p>Conheça o trabalho das startups que estão inovando no mercado.</p>
            <Button>Saiba Mais</Button>
          </div>
        </Col>
        <Col>
          <h1>Congresso</h1>
          <div>
            <p>Todos os congressistas que estarão presentes, um pouco sobre eles e a agenda.</p>
            <Button>Saiba Mais</Button>
          </div>
        </Col>
        <Col>
          <h1>Resp. Social</h1>
          <div>
            <p>Confira o projeto de responsabilidade social que a feira promove e descobra como fazer parte.</p>
            <Button>Saiba Mais</Button>
          </div>
        </Col>
      </Row>

    </Container>

    <Container>
      <h1>Confira o que rolou na <b>APAS Show 2019</b></h1>
      <Row>
        <Col>
          <div>
            <Media></Media>
          </div>
        </Col>
      </Row>
    </Container>

    <Container>
      <Row>
        <Col>
          <h1>Tem alguma dúvida ou precisa de alguma informação?</h1>
          <Button>Fale Conosco</Button>
        </Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Col>
          <p>Patrocinador Platinum</p>
          <div></div>
        </Col>
        <Col>
          <p>Patrocinador Silver</p>
          <div></div>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Café Oficial</p>
          <div></div>
        </Col>
        <Col>
          <p>Apoio de mídia</p>
          <div></div>
        </Col>
        <Col>
          <p>Jornal Oficial</p>
          <div></div>
        </Col>
        <Col>
          <p>Rádio Oficial</p>
          <div></div>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Apoio Técnico</p>
          <div></div>
        </Col>
        <Col>
          <p>Congresso</p>
          <div></div>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Apoio Institucional</p>
          <div></div>
          <div></div>
          <div></div>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Divulgação</p>
          <div></div>
        </Col>
        <Col>
          <p>Promoção e Organização</p>
          <div></div>
        </Col>
        <Col>
          <p>Administração e Realização</p>
          <div></div>
        </Col>
        <Col>
          <p>Parceria</p>
          <div></div>
        </Col>
      </Row>
    </Container>
  </Container>
  )
}

export default Home