import React from 'react';
import {Container, Row, Col, Button, Card, ResponsiveEmbed, Image} from 'react-bootstrap'
import './style.css'
import expositores from '../../assets/expositores.png'
import gestao from '../../assets/gestao.png'
import negocios from '../../assets/negocios.png'
import visitantes from '../../assets/visitantes.png'
import expo from '../../assets/Group.png'
import board from '../../assets/Group-4.png'
import clip from '../../assets/_icon_.png'
import bwifi from '../../assets/_icon_balao_wifi.png'
import ambev from '../../assets/Logos Apoio Institucional/ambev.png'
import bin from '../../assets/Logos Apoio Institucional/bin.png'
import hero from '../../assets/Logos Apoio Institucional/hero_brasil.png'
import marquespan from '../../assets/Logos Apoio Institucional/marquespan.png'
import nestle from '../../assets/Logos Apoio Institucional/nestle.png'
import nescafe from '../../assets/Logos Apoio Institucional/nescafe.png'
import globo from '../../assets/Logos Apoio Institucional/globo.png'
import estadao from '../../assets/Logos Apoio Institucional/estadao.png'
import radios from '../../assets/Logos Apoio Institucional/radios.png'
import fgv from '../../assets/Logos Apoio Institucional/fgv.png'
import brasnica from '../../assets/Logos Apoio Institucional/brasnica.png'
import jmacedo from '../../assets/Logos Apoio Institucional/jmacedo.png'
import opteon from '../../assets/Logos Apoio Institucional/opteon.png'
import alas from '../../assets/Logos Apoio Institucional/alas.png'
import abras from '../../assets/Logos Apoio Institucional/logo_abras_2014.png'
import abrasel from '../../assets/Logos Apoio Institucional/abrasel_logo.png'
import abag from '../../assets/Logos Apoio Institucional/O8hkZMqS_400x400.png'
import abba from '../../assets/Logos Apoio Institucional/logo.png'
import abia from '../../assets/Logos Apoio Institucional/logo-1.png'
import abic from '../../assets/Logos Apoio Institucional/ABIC-logo-57406C6D45-seeklogo.com.png'
import abicab from '../../assets/Logos Apoio Institucional/abicab.png'
import abiepan from '../../assets/Logos Apoio Institucional/logo_abiepan.png'
import abimapi from '../../assets/Logos Apoio Institucional/abimapi.png'
import abis from '../../assets/Logos Apoio Institucional/abis_logo.png'
import abpa from '../../assets/Logos Apoio Institucional/abpa.png'
import abrafigo from '../../assets/Logos Apoio Institucional/abrafigo.png'
import anr from '../../assets/Logos Apoio Institucional/og-ANR.png'
import globalcoldchain from '../../assets/Logos Apoio Institucional/globalcoldchain.png'
import abiaf from '../../assets/Logos Apoio Institucional/unnamed.png'
import ital from '../../assets/Logos Apoio Institucional/ital.png'
import supervarejo from '../../assets/Logos Apoio Institucional/supervarejo.png'
import promovisao from '../../assets/Logos Apoio Institucional/promovisao.png'
import apas from '../../assets/Logos Apoio Institucional/apas.png'
import apexbrasil from '../../assets/Logos Apoio Institucional/apexbrasil.png'



const Home = () =>{
  return(
  <Container fluid>
    <Container fluid className="fundo_amarelo">
    <Container  className="banner_home">
      <div className="banner_txt"><p>A 36ª edição da <b>APAS Show</b> vai promover, durante 4 dias, negócios, experiências e networking entre empresários e executivos do setor supermercadista nacional e internacional. Uma oportunidade única para expor sua marca e realizar grandes negócios.</p></div>
    </Container>
    </Container>
    <Container className="numeros">
      <h1 className="titulo_home">Confira alguns números da <b>feira em 2019</b></h1>
      <Row>
        <Col xs={12} sm={6} className="expositores dados">
            <Row>
              <Col>
                <Image src={expositores}/>
                <h2>Expositores</h2>
                <hr></hr>
              </Col>
            </Row>
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

        </Col>
        <Col xs={12} sm={6} className="visitantes dados">
          <Image src={visitantes}/>
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
     
        <Col xs={12} sm={6} className="conexoes dados">
          <Image src={negocios}/>
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
        <Col xs={12} sm={6} className="gestao dados">
          <Image src={gestao}/>
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
      
    </Container>
    <Container fluid>
        <Row className="inform destaque_amarelo justify-content-md-center">
          <Col>
            <h3>Vai comparecer ao evento? Confira informações úteis <Button className="inscrevase">Informações úteis</Button></h3>
          </Col>
        </Row>
      </Container>
    
    <Container>
    <Row  className="cards">

        <Col >
          <Card className="card_amarelo">
            <Card.Header>Expositores</Card.Header>
            <Card.Body>
              <Card.Text>
                Conheça o trabalho das startups que estão inovando no mercado.
              </Card.Text>
              <Button className="inscrevase">Saiba Mais</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col >
          <Card className="card_azul">
            <Card.Header>Arena Inovação</Card.Header>
            <Card.Body>
              <Card.Text>
                Veja o que vai rolar na feira, confira o mapa e os expositores que estarão presentes.
              </Card.Text>
              <Button className="inscrevase">Saiba Mais</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col >
          <Card className="card_amarelo">
            <Card.Header>Congresso</Card.Header>
            <Card.Body>
              <Card.Text>
                Veja o que vai rolar na feira, confira o mapa e os expositores que estarão presentes.
              </Card.Text>
              <Button className="inscrevase">Saiba Mais</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col >
          <Card className="card_azul">
            <Card.Header>Expositores</Card.Header>
            <Card.Body>
              <Card.Text>
                Veja o que vai rolar na feira, confira o mapa e os expositores que estarão presentes.
              </Card.Text>
              <Button className="inscrevase">Saiba Mais</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    
    
    <Container className="full">
      <h1 className="titulo_home">Confira o que rolou na <b>APAS Show 2019</b></h1>
      <Row className="video_row">
        <Col className="video_col">
        <div style={{ width: 900, height: 'auto' }}>
          <ResponsiveEmbed aspectRatio="16by9">
            <embed src="https://www.youtube-nocookie.com/embed/mPE6XoEkdyI?controls=0" />
          </ResponsiveEmbed>
        </div>
        </Col>
      </Row>
    </Container>

    <Container className="fale">
      <Row>
        <Col>

          <h1>Tem alguma dúvida ou precisa de alguma informação? <Button className="inscrevase">Fale Conosco</Button></h1>
          
        </Col>
      </Row>
    </Container>
    <Container className="patrocinadores">
      <Row>
        <Col>
          <p>Patrocinador Platinum</p>
          <div>
            <Image src={ambev}/>
          </div>
        </Col>
        <Col>
          <p>Patrocinador Silver</p>
          <div className="apoio_institucional">
            <Image src={bin}/>
            <Image src={hero}/>
            <Image src={marquespan}/>
            <Image src={nestle}/>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Café Oficial</p>
          <div>
            <Image src={nescafe}/>
          </div>
        </Col>
        <Col>
          <p>Apoio de mídia</p>
          <div>
            <Image src={globo}/>
          </div>
        </Col>
        <Col>
          <p>Jornal Oficial</p>
          <div>
            <Image src={estadao}/>
          </div>
        </Col>
        <Col>
          <p>Rádio Oficial</p>
          <div>
            <Image src={radios}/>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Apoio Técnico</p>
          <div>
            <Image src={fgv}/>
          </div>
        </Col>
        <Col className="apoio_institucional">
          <p>Congresso</p>
          <div>
            <Image src={brasnica}/>
            <Image src={jmacedo}/>
            <Image src={opteon}/>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="apoio_institucional">
          <p>Apoio Institucional</p>
          <div>
            <Image src={alas}/>
            <Image src={abras}/>
            <Image src={abrasel}/>
            <Image src={abag}/>
            <Image src={abba}/>
            <Image src={abia}/>
          </div>
          <div>
            <Image src={abic}/>
            <Image src={abicab}/>
            <Image src={abiepan}/>
            <Image src={abimapi}/>
            <Image src={abis}/>
          </div>
          <div>
            <Image src={abpa}/>
            <Image src={abrafigo}/>
            <Image src={anr}/>
            <Image src={globalcoldchain}/>
            <Image src={abiaf}/>
            <Image src={ital}/>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Divulgação</p>
          <div>
            <Image src={supervarejo}/>
          </div>
        </Col>
        <Col>
          <p>Promoção e Organização</p>
          <div>
            <Image src={promovisao}/>
          </div>
        </Col>
        <Col>
          <p>Administração e Realização</p>
          <div>
            <Image src={apas}/>
          </div>
        </Col>
        <Col>
          <p>Parceria</p>
          <div>
            <Image src={apexbrasil}/>
          </div>
        </Col>
      </Row>
    </Container>
  </Container>
  )
}

export default Home