import styled from 'styled-components';

export const Container = styled.div`
margin: 0;
padding: 0;
width: 300px;
background-color: #1A1A1A;
position: fixed;
height: 100%;
overflow: auto;
align-items: center;
display: inline-block;
border-radius: 10px;

@media screen and (max-width: 720px){
    width: 100%;
    height: auto;
    position: relative;
    
    a{
        float: left;
    }

}
`;

export const HeaderProfile = styled.div`
width: 100%;
height: 150px;
display:flex;
align-items: center;
justify-content: center;
flex-direction: column;

@media screen and (max-width: 720px){
display: none;
flex-direction: row;
}
`;

export const Nome = styled.h1`
font-size: 15px;
`;

export const Imagem = styled.img`
border-radius: 50%;
display: block;
margin: auto;
width: 100px;
height: 100px;
-webkit-filter: drop-shadow(2px 3px  6px #121212) ;
filter: drop-shadow(2px 3px  6px #121212);
object-fit: cover;
`;

export const AreaBotao = styled.div`
display:flex;
flex-direction: column;

`;

export const Botao = styled.button`
border: 0;
width: 100%;
background-color: #1a1a1a;
a{
    color: rgba(255, 255, 255, 0.7);
    display: flex;
    align-items: center;
    padding: 10px;
    flex-direction: row;
    transition: ease-in-out .4s;
    background-color: #1a1a1a;
}
a:hover{
    background-color: #151584;
    color: #fff;
    border-radius: 10px;
}
`;

