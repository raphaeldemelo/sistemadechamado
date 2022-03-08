import React from 'react';
import {
  Container,
  Titulo,
} from './styles';

export default function Title({ children, name }) {
  return (
    <Container>
      {children}
      <Titulo>{name}</Titulo>
    </Container>
  );
}