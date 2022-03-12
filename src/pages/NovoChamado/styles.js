import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
`;

export const Conteudo = styled.div`
margin-left: 310px;
margin-right:10px;

@media screen and (max-width: 720px){
width: 100%;
border-radius: 5px;
margin-left:10px;
margin-right:10px; 
}
`;

export const AreaFormulario = styled.div`
background-color: #292929;
border-radius: 7px;
display: flex;
flex-direction: column;
padding-left: 10%;
padding-right: 10%;
padding-bottom: 50px;
`;

export const Label = styled.h1`
margin-top: 10px;
`;

export const Select = styled.select`
  width: 100%;
  height: 35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  border-radius: 7px;


@media screen and (max-width: 720px){
width: 95%;
border-radius: 5px; 
}
`;

export const Option = styled.option`
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
`;

export const AreaStatus = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
padding-right: 10px;
margin-top: 10px;
`;

export const Input = styled.input`
:not(:first-child){
margin-left: 15px;
}
`;

export const TextoStatus = styled.h6`

`;

export const TextoArea = styled.textarea`
min-width: 100%;
margin-right: 10px;
border-radius: 7px;
min-height: 100px;
resize: none;
padding: 10px;


@media screen and (max-width: 720px){
min-width: 95%;
margin-right: 10px;
min-height: 100px;
}
`;

export const Botao = styled.button`
border: 0;
background-color: red;
color: white;
font-weight: bold;
border-radius: 7px;
padding: 10px;
display: flex;
width: 100%;
margin-right: 10px;
align-items: center;
justify-content: center;

`;

export const AreaBotao = styled.div`
margin-top: 20px;
width: 100%;
margin-right: 100px;

@media screen and (max-width: 720px){
width: 98%;
margin-right: 10px;
}
`;

export const TextoBotao = styled.h2`

`;