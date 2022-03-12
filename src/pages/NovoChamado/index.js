import React, { useState } from 'react';

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
    TextoBotao,
} from './styles';

import Header from '../../components/Header';
import Title from '../../components/Title';
import { FiPlus } from 'react-icons/fi';

export default function NovoChamado() {

    const [assunto, setAssunto] = useState('Suporte');
    const [status, setStatus] = useState('Aberto');
    const [complemento, setComplemento] = useState('');

    function handleRegistrar(e) {
        e.preventDefault();
        alert('Registrou')
    }

    //chama quando troca o assunto
    function handleChangeSelect(e) {
        setAssunto(e.target.value);
        console.log(e.target.value)
    }

    // chamado quando troca os status
    function handleOptionChange(e) {
        setStatus(e.target.value)
        console.log(e.target.value)
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
                    <Select value={assunto} onChange={handleChangeSelect}>
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
                            onChange={handleOptionChange}
                            checked={status === 'Aberto'}
                        />
                        <TextoStatus>Em Aberto</TextoStatus>

                        <Input
                            type="radio"
                            name='radio'
                            value='Progresso'
                            onChange={handleOptionChange}
                            checked={status === 'Progresso'}
                        />
                        <TextoStatus>Progresso</TextoStatus>

                        <Input
                            type="radio"
                            name='radio'
                            value='Atendido'
                            onChange={handleOptionChange}
                            checked={status === 'Atendido'}
                        />
                        <TextoStatus>Atendido</TextoStatus>
                    </AreaStatus>

                    <Label>Complemento</Label>

                    <TextoArea
                        type='text'
                        placeholder="Descreva seu problema(opcional)"
                        value={complemento}
                        onchange={(e) => setComplemento(e.target.value)}
                    >
                    </TextoArea>

                    <AreaBotao>
                        <Botao onClick={handleRegistrar}>
                            <TextoBotao>Registrar</TextoBotao>
                        </Botao>
                    </AreaBotao>

                </AreaFormulario>
            </Conteudo>
        </Container >
    );
}