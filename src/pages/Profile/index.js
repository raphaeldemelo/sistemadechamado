import React, { useState, useContext } from 'react';
import { RiSettings3Fill } from 'react-icons/ri';
import firebase from '../../services/firebaseConnection';

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

    const { user, signOut, setUser, storageUser } = useContext(AuthContext);
    const [nome, setNome] = useState(user && user.nome);
    const [email, setEmail] = useState(user && user.email);
    const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl);
    const [imagemAvatar, setImagemAvatar] = useState(null);

    function handleFile(e) {

        if (e.target.files[0]) {
            const image = e.target.files[0];

            if (image.type === 'image/jpeg' || image.type === 'image/png') {

                setImagemAvatar(image);
                setAvatarUrl(URL.createObjectURL(e.target.files[0]))

            } else {
                alert('Envie uma imagem do tipo PNG ou JPEG');
                setImagemAvatar(null);
                return null;
            }

        }

    }

    async function handleUpload() {
        const currentUid = user.uid;

        const uploadTask = await firebase.storage()
            .ref(`images/${currentUid}/${imagemAvatar.name}`)
            .put(imagemAvatar)
            .then(async () => {
                console.log('FOTO ENVIADA COM SUCESSO!');
                await firebase.storage().ref(`images/${currentUid}`)
                    .child(imagemAvatar.name).getDownloadURL()
                    .then(async (url) => {
                        let urlFoto = url;

                        await firebase.firestore().collection('users')
                            .doc(user.uid)
                            .update({
                                avatarUrl: urlFoto,
                                nome: nome,
                            })
                            .then(() => {
                                let data = {
                                    ...user,
                                    avatarUrl: urlFoto,
                                    nome: nome,
                                };
                                setUser(data);
                                storageUser(data);
                            })
                    })
            });
    }

    async function handleSave(e) {
        e.preventDefault();

        if (imagemAvatar === null && nome !== '') {
            await firebase.firestore().collection('users')
                .doc(user.uid)
                .update({
                    nome: nome,
                })
                .then(() => {
                    let data = {
                        ...user,
                        nome: nome,
                    }
                    setUser(data);
                    storageUser(data);
                })
        }
        else if (nome !== '' && imagemAvatar !== null) {
            handleUpload();
        }
    }

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
                            <Input
                                type='file'
                                accept='image/*'
                                onChange={handleFile}
                                style={{ opacity: 0, height: 100, width: 100 }} />
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

                    <Botao onClick={handleSave}>Salvar</Botao>
                    <Botao
                        onClick={() => signOut()}
                        style={{ backgroundColor: 'red' }}>
                        Sair
                    </Botao>
                </AreaFormulario>
            </Conteudo>
        </Container>
    );
}