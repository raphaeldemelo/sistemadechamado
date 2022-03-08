import React from 'react';
import { RiSettings3Fill } from 'react-icons/ri';
import {
    Container,
    Conteudo,
} from './styles';

import Header from '../../components/Header';
import Title from '../../components/Title';

export default function Profile() {
    return (
        <Container>
            <Header />
            <Conteudo>
                <Title name='Meu Perfil'>
                    <RiSettings3Fill size={25} />
                </Title>
            </Conteudo>
        </Container>
    );
}