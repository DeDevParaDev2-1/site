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

const breakPointsBlog = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 2 },
];


//Sections Default
import Empresa from './sections/EmpresaPt'
import Rodape from './Components/Rodape'

const Blog = () => {
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
        <Carousel breakPointsBlog={breakPointsBlog}>
          <Item>
            <img
                src="https://png.pngtree.com/thumb_back/fw800/back_our/20190625/ourmid/pngtree-blockchain-bitcoin-fintech-banner-image_260937.jpg"
            />
          </Item>
        </Carousel>
        <Content>
          <article>
            <Container>
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
                              DescriptionCard="Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos."
                              nameButton="Confira"
                              />
                          </CardContainer>
                        </Card>
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

export default Blog;

