import React, { useState } from 'react';
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

    function handleAdd(e) {
        e.preventDefault();
        alert('clicooou')
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