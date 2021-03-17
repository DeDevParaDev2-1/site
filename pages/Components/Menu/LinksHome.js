import React from 'react'
import Link from 'next/link'
import style from "styled-components"
const ContainerLinks = style.ul`
    display: none;
    @media(min-width: 700px){
        display: block;
        width: 50%;
    }
`;
const Item = style.li`
    display: block;
    list-style-type: none;
    padding: 10px 20px;
    @media(min-width: 700px){
        display: inline;
    }
`;
const LinksHome = () => {
    return (
       <ContainerLinks>
            <Item>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </Item>
            <Item>
                <Link href="/">
                    <a>O Projeto</a>
                </Link>
            </Item>
            <Item>
                <Link href="/">
                    <a>Lives</a>
                </Link>
            </Item>
            <Item>
                <Link href="/blog">
                    <a>Artigos</a>
                </Link>
            </Item>
            <Item>
                <Link href="/">
                    <a>Contribua</a>
                </Link>
            </Item>
            <Item>
                <Link href="/blog">
                    <a>Blog</a>
                </Link>
            </Item>
       </ContainerLinks>
    )
}
export default LinksHome