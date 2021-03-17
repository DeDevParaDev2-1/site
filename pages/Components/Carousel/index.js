import React from 'react'
import Link from 'next/link'
import {
    ContainerText,
    ButtonBanner
} from './style'
const ContentText = (props) => {
    return (
        <ContainerText>
            <h2>{props.titleBanner}</h2>
            <p>{props.descriptionBanner}</p>
            <Link href="/">
                <ButtonBanner>
                    <span>{props.linkBanner}</span>
                    <img className="icone_mao" src="/icons/mao.png" alt="icone-mao"/> 
                </ButtonBanner>
            </Link>
        </ContainerText>
    )
}
export default ContentText