import React from 'react';

import {
    Container,
    Conteudo,
    AreaFormulario,
    Label,
    Select,
    Option,
    AreaStatus,
    Input,
    TextoStatus,
    TextoArea,
    AreaBotao,
    Botao,
} from './styles';

import Header from '../../components/Header';
import Title from '../../components/Title';
import { FiPlus } from 'react-icons/fi';

export default function NovoChamado() {

    function handleRegistrar(e) {
        e.preventDefault();
        alert('Registrou')
    }

    return (
        <Container>
            <Header />

            <Title name='Editar Cadastro'>
                <FiPlus size={25} />
            </Title>

            <Conteudo>
                <AreaFormulario>
                    <Label>Clientes</Label>
                    <Select>
                        <Option key={1} value={1}>
                            Sujeito Programador
                        </Option>
                    </Select>

                    <Label>Assunto</Label>
                    <Select>
                        <Option value={'Suporte'}>Suporte</Option>
                        <Option value={'Visita Tecnica'}>Visita Técnica</Option>
                        <Option value={'Financeiro'}>Financeiro</Option>
                    </Select>

                    <Label>Status</Label>
                    <AreaStatus>
                        <Input
                            type="radio"
                            name='radio'
                            value='Aberto'
                        />
                        <TextoStatus>Em Aberto</TextoStatus>

                        <Input
                            type="radio"
                            name='radio'
                            value='Progresso'
                        />
                        <TextoStatus>Progresso</TextoStatus>

                        <Input
                            type="radio"
                            name='radio'
                            value='Atendido'
                        />
                        <TextoStatus>Atendido</TextoStatus>
                    </AreaStatus>

                    <Label>Complemento</Label>

                    <TextoArea
                        type='text'
                        placeholder="Descreva seu problema(opcional)"
                    >
                    </TextoArea>

                    <AreaBotao>
                        <Botao onClick={handleRegistrar}>Registrar</Botao>
                    </AreaBotao>

                </AreaFormulario>
            </Conteudo>
        </Container >
    );
}