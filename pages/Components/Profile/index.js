import React from 'react'
import style from 'styled-components'

const ContainerProfile = style.div`
    @media(min-width: 700px){
        margin-left: 1rem;
        width: 30%;
    }
`;
const Name = style.h3`
    @media(min-width: 700px){
        font-size: 1.3vw;
    }
`;
const Funcao = style.h4`
    @media(min-width: 700px){
        font-size: 0.78vw;
    }
`;

const Profile = (props) => {
    return (
        <ContainerProfile>
            <Name>{props.nameUser}</Name>
            <Funcao>{props.funcaoUser}</Funcao>
        </ContainerProfile>
    )
}

export default Profile