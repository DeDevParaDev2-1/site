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
                        <h1>Descentralizado</h1>
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
                                    <a>Contato</a>
                                </Link>
                            </Item>
                        </LinksRodape>
                    </Col>
                    <Col Desk="6">
                        <div className="elfsight-app-b8e02560-bc4d-4618-908d-11244b928326"></div>
                    </Col>
                </Row>
            </Container>
        </ContainerRodape>
    )
}

export default Rodape