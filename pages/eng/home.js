import Head from 'next/head'
import styles from '../../styles/Home.module.css'

//Icones
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

//Componentes Template
import {ThemeProvider} from "styled-components";
import  { useDarkMode } from "../Components/DarkMode/useDarkMode"
import { GlobalStyles, lightTheme, darkTheme, Content } from '../Components/Template/style'

//Textos
import {
  TitleSection
} from '../Components/Texts/style'

//Grids
import{
  Container,
  Col,
  Row
} from '../Components/Grids/style'
//Cards
import {
    Card,
    CardContainer,
    CardHeader
} from '../Components/Cards/style'
import CardBody from '../Components/Cards'

//Form
import{
  NewsForm,
  ContainerInput,
  CampoMail,
  ButtonEmail
} from '../Components/Form/style'


//Menu Componentes
import { Menu, ContainerMenu } from '../Components/Menu/Menu'
import Toggle from "../Components/Toggler"
import Logo from '../Components/Menu/Logo'
import LinksHome from '../Components/Menu/LinksHome'
import { Actions } from '../Components/Menu/Actions'
import DropdownLangs from '../Components/Dropdownlangs'

//Banner Topo
import Carousel from "react-elastic-carousel";
import Item from "../Components/Carousel/global";
import ContentText from '../Components/Carousel'
import {
  RowCarousel
} from '../Components/Carousel/style'

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
import Empresa from '../sections/EmpresaPt'
import Rodape from '../Components/Rodape'

const Home = () => {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <>
      <GlobalStyles/>
        <Head>
          <title>Descentralizado | Home</title>
          <meta name="description" content="Descentralizado o maior portal Brasileiro sobre Blockchain e suas tecnologias"/>
          <meta name="robots" content="index, follow"/>
          <meta name="author" content="Velance ( André Rodrigues https://xordevweb.com.br )"/>
          <script src="https://apps.elfsight.com/p/platform.js" defer></script>
        </Head>
        <Menu>
          <ContainerMenu>
              <Logo
                logoName="Descentralizado"
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
                titleBanner="Technology and education go hand in hand here!"
                descriptionBanner="
                Learn about Blockchain technology in our posts, several articles for those who want to know from basic to advanced.
                "
                linkBanner="Check out our blog"
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
                titleBanner="Technology and education go hand in hand here!"
                descriptionBanner="
                Learn about Blockchain technology in our posts, several articles for those who want to know from basic to advanced.
                "
                linkBanner="Check out our blog"
              />
              <img 
                src="/imgs/banner1.png"
                className="imagem_banner"
                alt="Imagem-banner"
              />
            </RowCarousel>
          </Item>
        </Carousel>
        <Empresa
          BigAbout="About the company"
          TitleAbout="About-us"
          AboutText="Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker."
          BigService="Our services"
          TitleServices="Services"
          ServicesText="Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker."

        />
        <Content>
          <article>
            <Container>
              <Row>
                <Col Desk="10">
                  <TitleSection>
                   News
                   <span>Top News</span>
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
                                  src="https://previews.123rf.com/images/peshkov/peshkov1803/peshkov180300176/97244483-creative-glowing-blockchain-wallpaper-cyberspace-and-cryptocurrency-concept-3d-rendering.jpg"
                                  alt="imagem-card"
                                />
                              </CardHeader>
                              <CardBody
                                TitleCard="Titulo aqui"
                                DescriptionCard="Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos."
                                nameButton="Confira"
                              />
                            </CardContainer>
                          </Card>
                        </Col>
                        <Col Desk="4">
                          <Card>
                            <CardContainer>
                              <CardHeader>
                                <img
                                  src="https://previews.123rf.com/images/peshkov/peshkov1803/peshkov180300176/97244483-creative-glowing-blockchain-wallpaper-cyberspace-and-cryptocurrency-concept-3d-rendering.jpg"
                                  alt="imagem-card"
                                />
                              </CardHeader>
                              <CardBody
                                TitleCard="Titulo aqui"
                                DescriptionCard="Teste de conteúdo"
                              />
                            </CardContainer>
                          </Card>
                        </Col>
                        <Col Desk="4">
                          <Card>
                            <CardContainer>
                              <CardHeader>
                                <img
                                  src="https://previews.123rf.com/images/peshkov/peshkov1803/peshkov180300176/97244483-creative-glowing-blockchain-wallpaper-cyberspace-and-cryptocurrency-concept-3d-rendering.jpg"
                                  alt="imagem-card"
                                />
                              </CardHeader>
                              <CardBody
                                TitleCard="Titulo aqui"
                                DescriptionCard="Teste de conteúdo"
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
                  QDo you want to receive warm news? Leave your email below and we will send you the best ones!
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
          Telefone="(xx) xxxx-xxxx"
          Email="emailaqui.com.br"
        />
      </>
  </ThemeProvider>
  )
}

export default Home

