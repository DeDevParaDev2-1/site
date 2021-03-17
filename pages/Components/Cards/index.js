import React from 'react'
import Link from 'next/link'


import {
    ContainerText
} from './style'

const CardBody = (props) => {
    return (
        <ContainerText>
            <h2>{props.TitleCard}</h2>
            <p>{props.DescriptionCard}</p>
            <Link href="/articles">
                <a>{props.nameButton}</a>
            </Link>
        </ContainerText>
    )
}
export default CardBody