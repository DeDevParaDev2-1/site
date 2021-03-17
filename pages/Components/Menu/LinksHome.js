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
    transition: border 0.5s linear;
    &:hover{
        border-bottom: 4px solid #27ae60;
    }
    a{
        transition: color 0.5s ease-in-out;
        &:hover{
            color: #27ae60;
        }
    }
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