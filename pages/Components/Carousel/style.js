import style from 'styled-components'

const ContainerImg = style.div`
    @media(min-width: 700px){
        width: 50%;
    }
`;
const ContainerText = style.div`
    margin-left: 4rem;
    @media(min-width: 700px){
        margin-left: 10rem;
        padding: 8rem 0;
        width: 40%;
        h2{
            font-size: 2.5vw;
        }
        p{
            font-size: 1.5vw;
        }
    }
`;
const ButtonBanner = style.a`
    display: flex;
    margin-top: 15px;
    span{
        display: inline-block;
        font-size: 1rem;
        margin-left: 10px;
    }
    @media(min-width: 700px){
        .icone_mao{
            width: 6%;
        }
        span{
            font-size: 1rem;
        }
    }
`;
const RowCarousel = style.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    @media(min-width: 700px){
        padding: 4rem 0;
        .imagem_banner{
            position: relative;
            top: -2rem;
            width: 50%;
        }
    }
`;


export{
    ContainerText,
    ContainerImg,
    ButtonBanner,
    RowCarousel
}