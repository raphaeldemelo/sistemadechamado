import React, { useState } from 'react';
import firebase from '../../services/firebaseConnection';
import { toast } from 'react-toastify';
import {
    Container,
    Conteudo,
    AreaContainer,
    AreaFormulario,
    Texto,
    Input,
    Botao,
} from './styles';

import Header from '../../components/Header';
import Title from '../../components/Title';
import { FaUserFriends } from 'react-icons/fa'

export default function Customers() {

    const [nomeFantasia, setNomeFantasia] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [endereco, setEndereco] = useState('');

    async function handleAdd(e) {
        e.preventDefault();

        if (nomeFantasia !== '' && cnpj !== '' && endereco !== '') {
            await firebase.firestore().collection('customers')
                .add({
                    nomeFantasia: nomeFantasia,
                    cnpj: cnpj,
                    endereco: endereco,
                })
                .then(() => {
                    setNomeFantasia('');
                    setCnpj('');
                    setEndereco('');
                    toast.info('Empresa cadastrada com sucesso!')
                })
                .catch((error) => {
                    console.log(error);
                    toast.error('Erro ao cadastrar essa empresa');
                })
        }else{
            toast.error('Preencha todos os campos')
        }

    }

    return (
        <Container>
            <Header />

            <Conteudo>
                <Title name="Clientes">
                    <FaUserFriends size={25} />
                </Title>

                <AreaContainer>
                    <AreaFormulario>
                        <Texto>Nome Fantasia</Texto>
                        <Input
                            type="text"
                            placeholder="Digite nome da empresa"
                            value={nomeFantasia}
                            onChange={(e) => setNomeFantasia(e.target.value)}
                        />
                        <Texto>CNPJ</Texto>
                        <Input
                            type="text"
                            placeholder="Digite CNPJ da empresa"
                            value={cnpj}
                            onChange={(e) => setCnpj(e.target.value)}
                        />
                        <Texto>Endereço</Texto>
                        <Input
                            type="text"
                            placeholder="Digite endereço da empresa"
                            value={endereco}
                            onChange={(e) => setEndereco(e.target.value)}
                        />

                        <Botao onClick={handleAdd}>Cadastrar</Botao>
                    </AreaFormulario>
                </AreaContainer>

            </Conteudo>

        </Container>
    );
}