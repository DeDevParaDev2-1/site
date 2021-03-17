import React from 'react'
import style from "styled-components"

const ContainerLogo = style.div`
    width: 20%;
`;

const Logo = (props) => {
    return (
        <ContainerLogo>
            <h1>{props.logoName}</h1>
        </ContainerLogo>
    )
}
export default Logo;