import style from "styled-components"

const Menu = style.nav`
    background: ${({ theme }) => theme.body};
    padding: 10px 0;
    position: fixed;
    width: 100%;
    z-index: 1;
`;
const ContainerMenu = style.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    width: 99%;
    @media(min-width: 700px){
        width: 96%;
    }
`;
export{ Menu, ContainerMenu }