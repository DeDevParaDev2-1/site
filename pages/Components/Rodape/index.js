import React from 'react'
import Link from 'next/link'
//Grids
import{
    Container,
    Col,
    Row
} from '../Grids/style'

//Estilo interno
import{
    ContainerRodape,
    LinksRodape,
    Item
} from './style'

//Widgets Redes sociais
import {
    WidgetInsta
} from '../Widgets/style'

const Rodape = (props) => {
    return (
        <ContainerRodape>
            <Container>
                <Row>
                    <Col Desk="6">
                        <h1>De-Dev-para-Dev</h1>
                        <h2>Contatos</h2>
                        <p>{props.Telefone}</p>
                        <p>{props.Email}</p>
                    </Col>
                    <Col Desk="6">
                        <h2>Navegação</h2>
                        <LinksRodape>
                            <Item>
                                <Link href="/">
                                    <a>Home</a>
                                </Link>
                            </Item>
                            <Item>
                                <Link href="/">
                                    <a>Blog</a>
                                </Link>
                            </Item>
                            <Item>
                                <Link href="/">
                                    <a>Quer contribuir?</a>
                                </Link>
                            </Item>
                            <Item>
                                <Link href="/">
                                    <a>Contato</a>
                                </Link>
                            </Item>
                        </LinksRodape>
                    </Col>
                    <Col Desk="6">
                    <div className="elfsight-app-2c906a1e-01b6-499e-bd7e-7020455ef431"></div>
                    </Col>
                </Row>
                <Row>
                    <Col Desk="12">
                        <p>&copy; Todos direitos reservados <a href="https://xordevweb.com.br" target="_blank">André Rodrigues</a></p>
                    </Col>
                </Row>
            </Container>
        </ContainerRodape>
    )
}

export default Rodape