import styled from 'styled-components';

export const Container = styled.div`
border-radius: 5px;
padding: 10px;
align-items: center;
`;

export const Conteudo = styled.div`
display: flex;
flex-direction: column;
margin-left: 10%;
margin-right: 10%;

@media screen and (min-width: 320px){
margin-left: 10%;
margin-right: 10%;
}
@media screen and (max-width: 720px){
    margin-left: 10%;
margin-right: 10%;
}
`;

export const AreaPerfil = styled.div`
display: flex ;
align-items: center;
justify-content: center;
width: 100%;
`;

export const AreaAvatar = styled.div`
margin-top: 10px ;
display: flex ;
align-items: center;
justify-content: center;
margin-bottom: 1em;
border-radius: 50%;
object-fit: cover;
`;

export const BotaoUpload = styled.button`
width: 50px;
height: 50px;
background-color: transparent;
border: 0; 
display: flex ;
align-items: center;
justify-content: center;
z-index: 99;
position: absolute;
opacity: 0.1;
transition: all 0.5s ;

&:hover{
    opacity: 1;
    transform: scale(1.4);
}

@media (min-width: 720px){
    margin-left: 310px;
}



`;

export const Input = styled.input`
height: 45px;
border: 0;
border-radius: 7px;
padding: 10px;
`;

export const ImagemPerfil = styled.img`
width: 250px;
height: 250px;
display: flex ;
align-items: center;
justify-content: center;
border-radius: 50%;
object-fit: cover;
@media (min-width: 720px){
    margin-left: 310px;
}
`;

export const AreaFormulario = styled.div`
display: flex;
flex-direction: column;
padding: 10px;

@media (min-width: 720px){
    margin-left: 310px;
}

`;

export const Texto = styled.h3`
margin-top: 10px;
margin-bottom: 10px;
`;

export const Botao = styled.button`
margin-top: 20px;
height: 35px;
border:0;
border-radius: 7px;
background-color: #181c2e;
color: #fff;
font-weight: bold;
font-size: 18px;

`;