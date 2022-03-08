import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import { Link } from 'react-router-dom';

import {
    Container,
    HeaderProfile,
    Nome,
    Imagem,
    AreaBotao,
    Botao,
} from './styles';
import { FaHome, FaUserFriends } from 'react-icons/fa'
import { RiSettings3Fill } from 'react-icons/ri';
import avatar from '../../assets/avatar.png'

export default function Header() {

    const { user } = useContext(AuthContext);

    return (
        <Container>
            <HeaderProfile>
                <Imagem
                    src={user.avatarUrl === null ? avatar : user.avatarUrl} alt='foto do avatar'
                />
                <Nome>{user.nome}</Nome>
                <Nome style={{ fontSize: 10, fontWeight: 'normal' }}>{user.email}</Nome>
            </HeaderProfile>

            <AreaBotao>
                <Botao>
                    <Link to='/dashboard'>
                        <FaHome size={25} style={{ marginRight: 10 }} />
                        Chamados
                    </Link>
                </Botao>

                <Botao>
                    <Link to='/clientes'>
                        <FaUserFriends size={25} style={{ marginRight: 10 }} />
                        Clientes
                    </Link>
                </Botao>

                <Botao>
                    <Link to='/perfil'>
                        < RiSettings3Fill size={25} style={{ marginRight: 10 }} />
                        Configurações
                    </Link>
                </Botao>
            </AreaBotao>
        </Container >
    );
}