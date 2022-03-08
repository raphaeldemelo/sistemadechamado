import React, { useState, useContext } from 'react';
import { RiSettings3Fill } from 'react-icons/ri';
import { FiCamera } from 'react-icons/fi';
import {
    Container,
    Conteudo,
    AreaPerfil,
    AreaAvatar,
    BotaoUpload,
    Input,
    ImagemPerfil,
    AreaFormulario,
    Texto,
    Botao,
} from './styles';
import { AuthContext } from '../../contexts/auth';
import avatar from '../../assets/avatar.png'

import Header from '../../components/Header';
import Title from '../../components/Title';

export default function Profile() {

    const { user, signOut } = useContext(AuthContext);
    const [nome, setNome] = useState(user && user.nome);
    const [email, setEmail] = useState(user && user.email);
    const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl);


    return (
        <Container>
            <Header />
            <Title name='Meu Perfil'>
                <RiSettings3Fill size={25} />
            </Title>
            <Conteudo>
                <AreaPerfil>
                    <AreaAvatar>
                        <BotaoUpload>
                            <Input type='file' accept='image/*' style={{ opacity: 0, height: 100, width: 100 }} />
                        </BotaoUpload>

                        {
                            avatarUrl === null ?
                                <ImagemPerfil src={avatar} alt='foto de perfil' />
                                :
                                <ImagemPerfil src={avatarUrl} alt='foto de perfil' />
                        }
                    </AreaAvatar>
                </AreaPerfil>

                <AreaFormulario>
                    <Texto>Nome</Texto>
                    <Input type='text' value={nome} onChange={(e) => setNome(e.target.value)} />

                    <Texto>Email</Texto>
                    <Input type='text' value={email} disabled={true} style={{ cursor: 'not-allowed' }} />

                    <Botao>Salvar</Botao>
                    <Botao
                        onClick={() => signOut()}
                        style={{ backgroundColor: 'red' }}
                    >Sair
                    </Botao>
                </AreaFormulario>
            </Conteudo>
        </Container>
    );
}