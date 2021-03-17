import style from "styled-components";

const TitleSection = style.h2`
    color: ${({ theme }) => theme.ColorTitle};
    font-size: 3vw;
    position: relative;
    span{
        color: ${({ theme }) => theme.text};
        font-size: 2vw;
        position: absolute;
        left: 0;
        bottom: 3.5px;
    }
    @media(min-width: 700px){
        font-size: 5.8vw;
        line-height: 50px;
        margin-left: 10rem;
        margin-bottom: 3rem;
        span{
            font-size: 2.5vw;
            position: absolute;
            left: 0;
            bottom: -2.5rem;
        }
    }
`;

export {
    TitleSection
}