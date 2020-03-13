import React from 'react';
import {Container, Row, Col, Button, Media} from 'react-bootstrap'
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
  <Container className="home">
    <Container className="banner_home">
      <div>A 36ª edição da <b>APAS Show</b> vai promover, durante 4 dias, negócios, experiências e networking entre empresários e executivos do setor supermercadista nacional e internacional. Uma oportunidade única para expor sua marca e realizar grandes negócios.</div>
    </Container>

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
    </Container>
    <Container className="wide">
    <Row className="cards">
        <Col >
          <h1>Expositores</h1>
          <div className="card_amarelo">
            <div>
              <p>Veja o que vai rolar na feira, confira o mapa e os expositores que estarão presentes.</p>
              <img src={expo}/>
              <Button className="inscrevase">Saiba Mais</Button>
            </div>
          </div>
        </Col>
        <Col>
          <h1>Arena Inovação</h1>
          <div className="card_azul">
            <div>
              <p>Conheça o trabalho das startups que estão inovando no mercado.</p>
              <img src={board}/>
              <Button className="inscrevase">Saiba Mais</Button>
            </div>
          </div>
        </Col>
        <Col >
          <h1>Congresso</h1>
          <div className="card_amarelo">
            <div>
              <p>Todos os congressistas que estarão presentes, um pouco sobre eles e a agenda.</p>
              <img src={bwifi}/>
              <Button className="inscrevase">Saiba Mais</Button>
            </div>
          </div>
        </Col>
        <Col >
          <h1>Resp. Social</h1>
          <div className="card_azul">
            <div>
              <p>Confira o projeto de responsabilidade social que a feira promove e descobra como fazer parte.</p>
              <img src={clip}/>
              <Button className="inscrevase">Saiba Mais</Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    <Container className="full">
      <h1 className="titulo_home">Confira o que rolou na <b>APAS Show 2019</b></h1>
      <Row className="video_row">
        <Col className="video_col">
          <div>
            <iframe width="900" height="500" src="https://www.youtube-nocookie.com/embed/mPE6XoEkdyI?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
            <img src={ambev}/>
          </div>
        </Col>
        <Col>
          <p>Patrocinador Silver</p>
          <div className="apoio_institucional">
            <img src={bin}/>
            <img src={hero}/>
            <img src={marquespan}/>
            <img src={nestle}/>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Café Oficial</p>
          <div>
            <img src={nescafe}/>
          </div>
        </Col>
        <Col>
          <p>Apoio de mídia</p>
          <div>
            <img src={globo}/>
          </div>
        </Col>
        <Col>
          <p>Jornal Oficial</p>
          <div>
            <img src={estadao}/>
          </div>
        </Col>
        <Col>
          <p>Rádio Oficial</p>
          <div>
            <img src={radios}/>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Apoio Técnico</p>
          <div>
            <img src={fgv}/>
          </div>
        </Col>
        <Col className="apoio_institucional">
          <p>Congresso</p>
          <div>
            <img src={brasnica}/>
            <img src={jmacedo}/>
            <img src={opteon}/>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="apoio_institucional">
          <p>Apoio Institucional</p>
          <div>
            <img src={alas}/>
            <img src={abras}/>
            <img src={abrasel}/>
            <img src={abag}/>
            <img src={abba}/>
            <img src={abia}/>
          </div>
          <div>
            <img src={abic}/>
            <img src={abicab}/>
            <img src={abiepan}/>
            <img src={abimapi}/>
            <img src={abis}/>
          </div>
          <div>
            <img src={abpa}/>
            <img src={abrafigo}/>
            <img src={anr}/>
            <img src={globalcoldchain}/>
            <img src={abiaf}/>
            <img src={ital}/>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Divulgação</p>
          <div>
            <img src={supervarejo}/>
          </div>
        </Col>
        <Col>
          <p>Promoção e Organização</p>
          <div>
            <img src={promovisao}/>
          </div>
        </Col>
        <Col>
          <p>Administração e Realização</p>
          <div>
            <img src={apas}/>
          </div>
        </Col>
        <Col>
          <p>Parceria</p>
          <div>
            <img src={apexbrasil}/>
          </div>
        </Col>
      </Row>
    </Container>
  </Container>
  )
}

export default Home