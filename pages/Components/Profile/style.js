import style from 'styled-components'

const ContainerAdm = style.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    img{
        border-radius: 50%;
        box-shadow: 1px 3px 6px 0 ${({ theme }) => theme.ShadowCard};
        border: 4px solid ${({ theme }) => theme.Borderprofile};
        width: 30%;
    }
    @media(min-width: 700px){
        h2{
            font-size: 1.4vw;
        }
        img{
            margin-left: 80px;
            width: 8%;
        }
    }
`;
const ContainerArticle = style.div`
    display: flex;
    flex-direction: column;
    @media(min-width: 700px){
        margin-left: 7rem;
        margin-top: 1rem;
        width: 70%;
        h2{
            font-size: 1.8vw;
        }
    }
`;
export{
    ContainerAdm,
    ContainerArticle
}