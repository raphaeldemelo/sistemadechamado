import React from 'react';

import {
    Container,
    Texto,
} from './styles';
import Header from '../../components/Header';

export default function Dashboard() {

    return (
        <Container>
            <Header />
            <Texto>Bem-vindo a página dashboard</Texto>
        </Container>
    );
}