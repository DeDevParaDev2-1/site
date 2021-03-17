import style, { createGlobalStyle} from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
`
export const lightTheme = {
    body: '#f2f9ff',
    text: '#263238',
    ShadowCard: '#eee',
    toggleBorder: '#FFF',
    background: '#f2f9ff',
    BackgroundCard: '#fff',
    ColorTitle: 'rgba(134, 164, 241, 0.11)',
    BackgroundRodape: '#daeeff',
    BackgroundArticle: '#fff',
    BackgroundSidebar: '#fff',
    Borderprofile: '#0000002b',
}
export const darkTheme = {
    body: '#0e1012',
    text: '#fff',
    toggleBorder: '#263238',
    ShadowCard: '#0003',
    background: '#263238',
    BackgroundCard: '#5252522e',
    BackgroundService: 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)',
    BackgroundRodape: '#000',
    BackgroundArticle: '#161617',
    ColorTitle: '#a7dbf34d',
    BackgroundSidebar: '#161617',
    Borderprofile: '#c8dcec2b',
}

export const Content = style.div`
  .service{
    background: ${({ theme }) => theme.BackgroundService};
  }
  article{
    padding: 4rem 0,
  }
  article .description_email{
    font-size: 2vw;
    margin-top: 5rem;
  }
  @media(min-width: 700px){
    article{
      padding: 4rem 0;
    }
    article .imagem_about{
      margin-left: 10rem;
      width: 70%;
    }
    article .description_about,
    article .description_email{
      margin-left: 10rem;
    }
    article .description_email{
      font-size: 2vw;
      margin-top: 5rem;
    }
  }
`;

export const Wrap = style.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 20px;
  @media(min-width: 700px){
    flex-direction: row;
  }
`;
export const ContentArticle = style.div`
  background: ${({ theme }) => theme.BackgroundArticle};
  display: flex;
  flex-direction: column;
  min-height: 80vh;
  padding: 3rem 20px;
  img{
    box-shadow: 1px 3px 6px 0 ${({ theme }) => theme.ShadowCard};
    display: inline-block;
  }
  @media(min-width: 700px){
    margin-left: 30px;
    width: 75%;
    img{
      border-radius: 8px;
      margin-left: 5rem;
      width: 80%;
    }
  }
`;
  

