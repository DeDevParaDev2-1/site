import style from 'styled-components'

const NewsForm = style.form`
    width: 100%;
    @media(min-width: 700px){
        margin-left: 10rem;
        margin-top: 30px;
    }
`;

const ContainerInput = style.div`
    display: flex;
    flex-direction: row;
    position: relative;
`;
const CampoMail = style.input`
    border: 2px solid #eee;
    border-radius: 3rem;
    box-shadow: 4px 4px 15px 1px rgba(0, 0, 0, 0.12);
    color: #37474F;
    font-size: 18px;
    font-weight: 600;
    padding: 10px;
    width: 90%;
`;
const ButtonEmail = style.button`
    background-color: transparent;
    border: none;
    color: #37474F;
    padding: 12px 10px;
    position: absolute;
    right: 4rem;
`;

export{
    NewsForm,
    ContainerInput,
    CampoMail,
    ButtonEmail
}