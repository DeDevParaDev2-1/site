import style from 'styled-components'

const Card = style.div`
    background-color: ${({ theme }) => theme.BackgroundCard};
    border-radius: 8px;
    box-shadow: 1px 3px 6px 0 ${({ theme }) => theme.ShadowCard};
    min-height: 58vh;
    margin-top: 5rem;
    padding: 20px;
    @media(min-width: 700px){
        min-width: 300px;
        max-width: 300px;
    }
`;
const CardContainer = style.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
const CardHeader = style.div`
    margin-bottom: 1rem;
    width: 90%;
    img{
        border-radius: 5px;
        display: inline-block;
        width: 90%;
    }
    @media(min-width: 700px){
        img{
            width: 18.3vw;
        }
    }
`;
const ContainerText = style.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2px;
    margin-left: 10px;
    width: 90%;
    a{
        background: #2ecc71;
        border-radius: 24px;
        color: #fff;
        display: inline-block;
        font-size: .89rem;
        font-weight: 600;
        margin-top: 10px;
        min-width: 120px;
        padding: .67rem;
        text-align: center;
        transition: background-color 1s linear;
        &:hover{
            background-color: #27ae60;
        }
    }
    h2{
        font-size: 2vw;
    }
    p{
        font-size: 1.12vw;
        font-weight: 600;
    }
    @media(min-width: 700px){
        h2{
            font-size: 2vw;
        }
    }
`;
export{
    Card,
    CardContainer,
    CardHeader,
    ContainerText
}