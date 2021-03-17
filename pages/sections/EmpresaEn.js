import React from 'react'

//Contents
import { Content } from '../Components/Template/style'
//Textos
import {
    TitleSection
  } from '../Components/Texts/style'
//Grids  
import {
    Container,
    Col,
    Row
} from '../Components/Grids/style'



const EmpresaEn = (props) => {
    return (
        <>
            <Content>
            <article>
                <Container>
                <Row>
                    <Col Desk="5">
                    <TitleSection>
                    {props.BigAbout}
                    <span>{props.TitleAbout}</span>
                    </TitleSection>
                    <p className="description_about">{props.AboutText}</p>
                    </Col>
                    <Col Desk="6">
                        <img 
                        src="/imgs/about.png"
                        className="imagem_about"
                        alt="Imagem-banner"
                    />
                    </Col>
                </Row>
                </Container>
            </article>
            </Content>
            <Content>
                <article className="service">
                    <Container>
                    <Row>
                        <Col Desk="10">
                        <TitleSection>
                        {props.BigService}
                        <span>{props.TitleServices}</span>
                        </TitleSection>
                        <p className="description_about">{props.ServicesText}</p>
                        </Col>
                    </Row>
                    </Container>
                </article>
            </Content>
        </>
    )
}

export default EmpresaEn;