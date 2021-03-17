import Head from 'next/head'
import styles from '../styles/Home.module.css'

//Icones
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

//Componentes Template
import {ThemeProvider} from "styled-components";
import  { useDarkMode } from "./Components/DarkMode/useDarkMode"
import { GlobalStyles, lightTheme, darkTheme, Content } from './Components/Template/style'

//Textos
import {
  TitleSection
} from './Components/Texts/style'

//Grids
import{
  Container,
  Col,
  Row
} from './Components/Grids/style'
//Cards
import {
    Card,
    CardContainer,
    CardHeader
} from './Components/Cards/style'
import CardBody from './Components/Cards'

//Form
import{
  NewsForm,
  ContainerInput,
  CampoMail,
  ButtonEmail
} from './Components/Form/style'


//Menu Componentes
import { Menu, ContainerMenu } from './Components/Menu/Menu'
import Toggle from "./Components/Toggler"
import Logo from './Components/Menu/Logo'
import LinksHome from './Components/Menu/LinksHome'
import { Actions } from './Components/Menu/Actions'
import DropdownLangs from './Components/Dropdownlangs'

//Banner Topo
import Carousel from "react-elastic-carousel";
import Item from "./Components/Carousel/global";
import ContentText from './Components/Carousel'
import {
  RowCarousel
} from './Components/Carousel/style'

const breakPointsBanner = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 2 },
];

const breakPointsNews = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 },
];

//Sections Default
import Empresa from './sections/EmpresaPt'
import Rodape from './Components/Rodape'

const Home = () => {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <>
      <GlobalStyles/>
        <Head>
          <title>De-Dev-para-Dev | Home</title>
          <meta name="description" content="O melhor da comunidade dev você encontra aqui."/>
          <meta name="robots" content="index, follow"/>
          <meta name="author" content="(André Rodrigues https://xordevweb.com.br)"/>
          <script src="https://apps.elfsight.com/p/platform.js" defer></script>
        </Head>  
        <Menu>
          <ContainerMenu>
              <Logo
                logoName="De-Dev-para-Dev"
              />
              <LinksHome/>
              <Actions>
                <Toggle theme={theme} toggleTheme={themeToggler} />
                <DropdownLangs/>
              </Actions>
          </ContainerMenu>
        </Menu>
        <Carousel breakPointsBanner={breakPointsBanner}>
          <Item>
            <RowCarousel>
              <ContentText
                titleBanner="Aprenda a desenvolver layouts incríveis usando as tops tecnologias da web."
                descriptionBanner="Aprenda a desenvolver layouts incríveis com as ferramentas que são destaque no mercado web."
                linkBanner="Confira os detalhes desse curso"
              />
              <img 
                src="/imgs/banner1.png"
                className="imagem_banner"
                alt="Imagem-banner"
              />
            </RowCarousel>
          </Item>
          <Item>
            <RowCarousel>
              <ContentText
                titleBanner="Aprenda tudo sobre o ecossistema reativo no nosso guia"
                descriptionBanner="Em nosso guia, você pode aprender as boas práticas de todo o ecossistema React!"
                linkBanner="Confira o guia agora mesmo"
              />
              <img 
                src="/imgs/react.png"
                className="imagem_banner"
                alt="Imagem-banner"
              />
            </RowCarousel>
          </Item>
        </Carousel>
        <Content>
          <article>
            <Container>
              <Row>
                <Col Desk="10">
                  <TitleSection>
                   News
                   <span>Notícias em destaque</span>
                  </TitleSection>
                </Col>
              </Row>
              <Row>
                <Col Desk="12">
                <Carousel breakPointsNews={breakPointsNews}>
                    <Item>
                      <Row>
                        <Col Desk="4">
                          <Card>
                            <CardContainer>
                              <CardHeader>
                                <img
                                  src="https://wallpapercave.com/wp/wp4923979.png"
                                  alt="imagem-card"
                                />
                              </CardHeader>
                              <CardBody
                                TitleCard="Entendendo o uso de props no React"
                                DescriptionCard="Aprenda a fazer layouts bem distribuídos usando os recursos da props no React."
                                nameButton="Confira o artigo"
                              />
                            </CardContainer>
                          </Card>
                        </Col>
                        <Col Desk="4">
                          <Card>
                            <CardContainer>
                              <CardHeader>
                                <img
                                  src="https://wallpaperaccess.com/full/3910947.jpg"
                                  alt="imagem-card"
                                />
                              </CardHeader>
                              <CardBody
                                TitleCard="Convertendo componentes React para Angular de maneira fácil."
                                DescriptionCard="Veja como adaptar o ecossistema react dentro Angular de maneira simples."
                                nameButton="Confira o artigo"
                              />
                            </CardContainer>
                          </Card>
                        </Col>
                        <Col Desk="4">
                          <Card>
                            <CardContainer>
                              <CardHeader>
                                <img
                                  src="https://res.cloudinary.com/practicaldev/image/fetch/s--OK5nAo07--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/rmqgubejyi0rjkn87moo.png"
                                  alt="imagem-card"
                                />
                              </CardHeader>
                              <CardBody
                                TitleCard="Aprenda a criar um aplicativo com banco de dados"
                                DescriptionCard="Aprenda a criar um aplicativo de forma simples usando o React Native, PHP e Mysql"
                                nameButton="Confira o artigo"
                              />
                            </CardContainer>
                          </Card>
                        </Col>
                      </Row>
                    </Item>
                  </Carousel>
                </Col>
              </Row>
            </Container>
          </article>
        </Content>
        <Content>
          <article>
            <Container>
              <Row>
                <Col Desk="5">
                  <p className="description_email">
                  Quer receber notícias quentinhas? Deixe seu e-mail abaixo que lhe enviaremos as melhores ;)
                  </p>
                  <NewsForm>
                    <ContainerInput>
                      <CampoMail
                        placeholder="E-mail"
                      />
                      <ButtonEmail>
                        <FontAwesomeIcon icon={faEnvelope} size="2x" />
                      </ButtonEmail>
                    </ContainerInput>
                  </NewsForm>
                </Col>
                <Col Desk="6">
                    <img 
                    src="/imgs/email.png"
                    className="imagem_about"
                    alt="Imagem-banner"
                  />
                </Col>
              </Row>
            </Container>
          </article>
        </Content>
        <Rodape
          Telefone="(37) 99172-4835"
          Email="contatodedevparadev@gmail.com"
        />
      </>
  </ThemeProvider>
  )
}

export default Home

