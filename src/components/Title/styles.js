import styled from 'styled-components';

export const Container = styled.div`
display: flex ;
flex-direction: row;
align-items: center;
margin: 10px 10px 10px 10px; 
border-radius: 5px;
background-color: #303030;
padding: 10px;

@media (min-width: 720px){
    margin-left: 310px;
}

`;

export const Titulo = styled.h1`
margin-left: 1em;
font-size: 15px;
`;