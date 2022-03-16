import styled from 'styled-components';

export const ModalContainer = styled.div`
position: fixed;
top: 0;
bottom: 0;
right: 0;
left: 0;
background-color: rgba(0, 0, 0, 0.5);
z-index: 99;
`;

export const Container = styled.div`
position: fixed;
max-width: 600px;
top: 15%;
left: 0;
right: 0;
margin: 0 auto;
padding: 5em 2rem;
background-color: #fff;
border-radius: 7px;
box-shadow: 0 0 20px  rgba(0, 0, 0, 0.8);
`;

export const Botao = styled.button`
background-color: #f65835;
border: 0;
color: #fff;
position: absolute;
top: 15px;
left: 15px;
display: flex;
justify-content: center;
align-items: center;
padding: 4px 15px;
border-radius: 5px;
`;

export const Conteudo = styled.div`
background-color: #fff;
color: #000;
`;

export const AreaLabel = styled.div`

`;

export const Label = styled.h2`
color: #000;
margin-bottom: 1em;
font-size: 15px;

a{
    font-weight: normal;
    color: #000;
}
`;