import styled from 'styled-components';

export const Container = styled.div`

`;

export const Conteudo = styled.div`

`;

export const AreaDashboard = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color: #292929;
border-radius: 5px;

@media screen and (min-width: 720px){
margin-left: 310px;
border-radius: 5px;
}
`;

export const Texto = styled.h1`
font-size: 1.3em;
margin: 2em 0;
padding-left: 10px;
padding-right: 10px;
`;

export const Botao = styled.button`
background-color: red;
border: 0;
border-radius: 7px;
padding: 10px;
height: 45px;
align-items: center;
justify-content: center;
display: flex;
margin-bottom: 20px;
transition: ease-in  0.2s;

:hover{
    transform:scale(1.1) ;
}

`;