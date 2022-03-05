import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';

import {
    Container,
    Texto,
    BotaoSair,
} from './styles';

export default function Dashboard() {

    const { signOut } = useContext(AuthContext)

    return (
        <Container>
            <Texto>página dashboard</Texto>
            <BotaoSair onClick={() => signOut()}>
                Sair
            </BotaoSair>
        </Container>
    );
}