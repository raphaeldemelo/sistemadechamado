import styled from 'styled-components';

export const Container = styled.div`
height: 100%;
display:flex;
align-items: center;
justify-content: center;
background-color: #121212;

@media screen and (max-width: 720px){
align-items: center;
justify-content: center;
padding: 10px;
}

`;

export const AreaLogin = styled.div`
background-color: #eaeaec;
width: 600px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
border-radius: 15px;
`;

export const AreaLogo = styled.div`
display: flex;
justify-content: center;
background-color: #181c2e;
width: 100%;
border-top-right-radius: 10px;
border-top-left-radius: 10px;
`;

export const Imagem = styled.img`
padding: 20px;
width: 170px;
height: 130px;

`;

export const Titulo = styled.h1`
text-align: center;
color: #181c2e;
margin-bottom: 0.5em;
`;

export const AreaFormulario = styled.div`
margin-top: 1.5em;
width: 90%;
display: flex;
flex-direction: column;
`;

export const Input = styled.input`
margin-bottom: 15px;
height: 35px;
border: 0;
border-radius: 7px;
padding: 10px;
font-size: 15px;
background-color: #fff;
`;

export const Botao = styled.button`
height: 35px;
border:0;
border-radius: 7px;
background-color: #181c2e;
color: #fff;
font-weight: bold;
font-size: 18px;
`;

