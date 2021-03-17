import React from 'react'
import style from 'styled-components'
import Head from 'next/head'
import Link from 'next/link'
//Icones
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

//Componentes Template
import {ThemeProvider} from "styled-components";
import  { useDarkMode } from "../Components/DarkMode/useDarkMode"
import { GlobalStyles, lightTheme, darkTheme, ContentArticle, Wrap } from '../Components/Template/style'
//Menu Componentes
import { Menu, ContainerMenu } from '../Components/Menu/Menu'
import Toggle from "../Components/Toggler"
import Logo from '../Components/Menu/Logo'
import LinksHome from '../Components/Menu/LinksHome'
import { Actions } from '../Components/Menu/Actions'
import DropdownLangs from '../Components/Dropdownlangs'

//Grids
import{
    Container,
    Col,
    Row
} from '../Components/Grids/style'

//Sidebar
import{
    Sidebar
} from '../Components/Sidebar/style'

import Rodape from '../Components/Rodape'
//Profile
import Profile from '../Components/Profile'
import { ContainerAdm, ContainerArticle } from '../Components/Profile/style'

const Article = () => {
    const [theme, themeToggler] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;
    return (
      <ThemeProvider theme={themeMode}>
        <>
        <GlobalStyles/>
          <Head>
            <title>Descentralizado | Artigo</title>
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
          <Wrap>
            <Sidebar>
                <h3>TOPICS</h3>
                <ul>
                    <Link to="#parte1">
                        <a>Link aqui</a>
                    </Link>
                    <Link href="">
                        <a>Link aqui</a>
                    </Link>
                    <Link href="">
                        <a>Link aqui</a>
                    </Link>
                    <Link href="">
                        <a>Link aqui</a>
                    </Link>
                    <Link href="">
                        <a>Link aqui</a>
                    </Link>
                    <Link href="">
                        <a>Link aqui</a>
                    </Link>
                </ul>
            </Sidebar>
            <ContentArticle>
                <Container>
                    <Row>
                        <Col Desk="12">
                            <img
                                src="https://previews.123rf.com/images/peshkov/peshkov1803/peshkov180300176/97244483-creative-glowing-blockchain-wallpaper-cyberspace-and-cryptocurrency-concept-3d-rendering.jpg"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col Desk="12">
                            <ContainerAdm>
                                <img
                                    src="https://d3b4rd8qvu76va.cloudfront.net/192/279/642/30003001-1s51hnf-9dksadbqk5qti5p/original/Picttman14.jpg"
                                    alt="usuario"
                                />
                                <Profile
                                    nameUser="José"
                                    funcaoUser="SEO"
                                />
                            </ContainerAdm>
                        </Col>
                    </Row>
                    <Row>
                        <Col Desk="12">
                            <ContainerArticle id="parte1">
                                <h2>Conteúdo</h2>
                                <p>
                                Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.
                                </p>
                            </ContainerArticle>
                        </Col>
                    </Row>
                </Container>
            </ContentArticle>
          </Wrap>
          <Rodape
            Telefone="(xx) xxxx-xxxx"
            Email="suporte@descentralizado.com.br"
          />
        </>
    </ThemeProvider>
    )
  }
  
  export default Article
  
  