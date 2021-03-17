import style from 'styled-components'

const ContainerRodape = style.footer`
    background-color: ${({ theme }) => theme.BackgroundRodape};
    padding: 4rem 8rem;
`;
const LinksRodape = style.ul`
    display: flex;
    flex-direction: column;
`;
const Item = style.li`
    list-style-type: none;
    padding: 15px 0;
    a{
        font-size: 1.2vw;
        font-weight: 600;
    }
    @media(min-width: 700px){
        a{
            font-size: 1vw;
        }
    }
`;
export{
    ContainerRodape,
    LinksRodape,
    Item
}