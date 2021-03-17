import style from 'styled-components'

const Sidebar = style.nav`
    background: ${({ theme }) => theme.BackgroundSidebar};
    ul{
        display: none;
        padding: 10px;
        a{
            color: ${({ theme }) => theme.text};
            display: block;
            font-size: 1.3vw;
            font-weight: 600;
            padding: 10px 3rem;
        }
    }
    @media(min-width: 700px){
        border-radius: 8px;
        box-shadow: 4px 4px 15px 1px rgba(0, 0, 0, 0.04);
        min-height: 80vh;
        padding: 1rem;
        width: 20%;
        ul{
            display: block;
            padding: 1rem 2rem;
            a{
                font-size: 1vw;
                &:hover{
                    background-color: #eeeeee52;
                    border-radius: 3rem;
                }
            }
        }
    }
`
export{
    Sidebar
}