import style from 'styled-components'

const ContainerImg = style.div`
    @media(min-width: 700px){
        width: 40%;
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
    background-color: #8bc34a;
    border-radius: 3rem;
    color: #333;
    display: flex;
    font-weight: 600;
    justify-content: center;
    margin-top: 15px;
    padding: 14px 1rem;
    min-width: 70%;
    span{
        display: inline-block;
        font-size: 1rem;
        margin-right: 10px;
    }
    @media(min-width: 700px){
        min-width: 51%;
        max-width: 60%;
        .icone_mao{
            width: 8%;
        }
        span{
            font-size: 1rem;
        }
    }
`;
const RowCarousel = style.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    @media(min-width: 700px){
        padding: 4rem 0;
        .imagem_banner{
            position: relative;
            top: -2rem;
            width: 40%;
        }
    }
`;


export{
    ContainerText,
    ContainerImg,
    ButtonBanner,
    RowCarousel
}