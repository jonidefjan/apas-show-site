import React from 'react';
import {Container, Row, Col, Button, Media} from 'react-bootstrap'
import './style.css'
import expositores from '../../assets/expositores.png'
import gestao from '../../assets/gestao.png'
import negocios from '../../assets/negocios.png'
import visitantes from '../../assets/visitantes.png'

const Home = () =>{
  return(
  <Container className="home">
    <Container className="banner_home"></Container>

    <Container className="numeros">
      <h1 className="titulo_home">Confira alguns números da <b>feira em 2019</b></h1>
      <Row>
        <Col className="expositores dados">
          <img src={expositores}/>
          <h2>Expositores</h2>
          <hr></hr>
          <div className="dados_descricao">
            <Row>
              <Col className="destaque_num">
                <h1>847</h1>
              </Col>
              <Col className="destaque_txt">
                <Row>expositores</Row>
                <Row>em 2019</Row>
              </Col>
            </Row>
            <Row>
              <Col className="destaque_num">
                <h1>204</h1>
              </Col>
              <Col className="destaque_txt">
                <Row>internacionais</Row>
                <Row>de 22 países</Row>
              </Col>
            </Row>
            <Row>
              <Col className="destaque_num">
                <h1>US$330</h1>
              </Col>
              <Col className="destaque_txt">
                <Row>milhões em</Row>
                <Row>negociações internacionais</Row>
              </Col>
            </Row>

          </div>
        </Col>
        <Col className="visitantes dados">
          <img src={visitantes}/>
          <h2>Visitantes</h2>
          <hr></hr>
          <div className="dados_descricao">
            <Row>
              <Col className="destaque_num">
                <h1>58.613</h1>
              </Col>
              <Col className="destaque_txt">
                <Row>visitantes</Row>
                <Row>representando</Row>
              </Col>
            </Row>
            <Row>
              <Col className="destaque_num">
                <h1>11.464</h1>
              </Col>
              <Col className="destaque_txt">
                <Row>empresas</Row>
              </Col>
            </Row>
            <Row>
              <Col className="destaque_num">
                <h1>106.836</h1>
              </Col>
              <Col className="destaque_txt">
                <Row>visitas</Row>
                <Row>gerando</Row>
              </Col>
            </Row>

          </div>
        </Col>
      </Row>

      <Row>
        <Col className="conexoes dados">
          <img src={negocios}/>
          <h2>Conexões de Negócios</h2>
          <hr></hr>
          <div className="dados_descricao">
            <Row>
              <Col className="destaque_num">
                <h1>1053</h1>
              </Col>
              <Col className="destaque_txt">
                <Row>reuniões</Row>
              </Col>
            </Row>
            <Row>
              <Col className="destaque_num">
                <h1>192</h1>
              </Col>
              <Col className="destaque_txt">
                <Row>empresas</Row>
                <Row>brasileiras</Row>
              </Col>
            </Row>
            <Row>
              <Col className="destaque_num">
                <h1>91</h1>
              </Col>
              <Col className="destaque_txt">
                <Row>compradores internacionais</Row>
                <Row>de 30 países</Row>
              </Col>
            </Row>
            <Row>
              <Col className="destaque_num">
                <h1>US$330</h1>
              </Col>
              <Col className="destaque_txt">
                <Row>milhões em</Row>
                <Row>negócios</Row>
              </Col>
            </Row>

          </div>
        </Col>
        <Col className="gestao dados">
          <img src={gestao}/>
          <h2>Congresso de gestão</h2>
          <hr></hr>
          <div className="dados_descricao">
            <Row>
              <Col className="destaque_num">
                <h1>4199</h1>
              </Col>
              <Col className="destaque_txt">
                <Row>congressistas</Row>
              </Col>
            </Row>
            <Row>
              <Col className="destaque_num">
                <h1>6</h1>
              </Col>
              <Col className="destaque_txt">
                <Row>auditórios temáticos</Row>
              </Col>
            </Row>
            <Row>
              <Col className="destaque_num">
                <h1>+ de 70 palestras</h1>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    <Container>
      <Row className="inform destaque_amarelo justify-content-md-center">
        <Col>
          <h3>Vai comparecer ao evento? Confira informações úteis <Button className="inscrevase">Informações úteis</Button></h3>
        </Col>
      </Row>
      </Container>
      <Row>
        <Col className="card_amarelo">
          <h1>Expositores</h1>
          <div>
            <div>
              <p>Veja o que vai rolar na feira, confira o mapa e os expositores que estarão presentes.</p>
              <Button className="inscrevase">Saiba Mais</Button>
            </div>
          </div>
        </Col>
        <Col className="card_azul">
          <h1>Arena Inovação</h1>
          <div>
            <p>Conheça o trabalho das startups que estão inovando no mercado.</p>
            <Button className="inscrevase">Saiba Mais</Button>
          </div>
        </Col>
        <Col className="card_amarelo">
          <h1>Congresso</h1>
          <div>
            <p>Todos os congressistas que estarão presentes, um pouco sobre eles e a agenda.</p>
            <Button className="inscrevase">Saiba Mais</Button>
          </div>
        </Col>
        <Col className="card_azul">
          <h1>Resp. Social</h1>
          <div>
            <p>Confira o projeto de responsabilidade social que a feira promove e descobra como fazer parte.</p>
            <Button className="inscrevase">Saiba Mais</Button>
          </div>
        </Col>
      </Row>

    </Container>

    <Container>
      <h1 className="titulo_home">Confira o que rolou na <b>APAS Show 2019</b></h1>
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