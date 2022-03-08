import styled from 'styled-components';

export const Container = styled.div`
margin: 0;
padding: 0;
width: 300px;
background-color: #292929;
position: fixed;
height: 100%;
overflow: auto;
align-items: center;
display: inline-block;

@media screen and (max-width: 720px){
    width: 100%;
    height: auto;
    position: relative; 
}
`;

export const HeaderProfile = styled.div`
width: 100%;
height: 150px;
display:flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin-top: 50px;

@media screen and (max-width: 720px){
    display: none;
    height: auto;
    position: relative;
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
-webkit-filter: drop-shadow(2px 3px  6px #222831) ;
filter: drop-shadow(2px 3px  6px #222831);
object-fit: cover;
`;

export const AreaBotao = styled.div`
margin-top: 10px;
display:flex;
flex-direction: column;
background-color: #292929;
align-items: center;

@media screen and (max-width: 720px){
    padding: 10px;
    width: 100%;
    height: auto;
    position: relative;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    display: flex;
}
`;

export const Botao = styled.button`
border: 0;
width: 100%;
background-color: #292929;

a{
    color: rgba(255, 255, 255, 0.7);
    display: flex;
    align-items: center;
    padding: 10px;
    transition: ease-in-out .4s;
    background-color: #292929;
}
a:hover{
    background-color: #404040;
    color: #fff;
    border-radius: 10px;
}

@media screen and (max-width: 375px){
a{
    font-size: 12px;
    padding: 5px;
}
}

`;

