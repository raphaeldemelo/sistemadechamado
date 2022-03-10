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
    Titulo,
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
                <Titulo>Menu</Titulo>
                <Botao >
                    <Link
                        style={{ marginRight: 10, display: 'flex', flexDirection: 'row' }}
                        to='/dashboard'>
                        <FaHome size={20} color="#fff" style={{ marginRight: 10 }} />
                        Chamados
                    </Link>
                </Botao>


                <Botao >
                    <Link
                        style={{ marginRight: 10, display: 'flex', flexDirection: 'row' }}
                        to='/clientes'>
                        <FaUserFriends size={20} color="#fff" style={{ marginRight: 10 }} />
                        Clientes
                    </Link>
                </Botao>

                <Botao >
                    <Link
                        style={{
                            marginRight: 10,
                            display: 'flex',
                            flexDirection: 'row',
                        }}
                        to='/perfil'>
                        <RiSettings3Fill size={20} color="#fff" style={{ marginRight: 10 }} />
                        Perfil
                    </Link>
                </Botao>
            </AreaBotao>
        </Container >
    );
}