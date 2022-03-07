import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';

import {
    Container,
    Texto,
    BotaoSair,
} from './styles';
import Header from '../../components/Header';

export default function Dashboard() {

    const { signOut } = useContext(AuthContext)

    return (
        <Container>
            <Header />
            <Texto>página dashboard</Texto>
            <BotaoSair onClick={() => signOut()}>
                Sair
            </BotaoSair>
        </Container>
    );
}