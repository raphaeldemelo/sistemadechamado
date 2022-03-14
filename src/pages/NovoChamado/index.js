import React, { useState, useEffect, useContext } from 'react';
import firebase from '../../services/firebaseConnection';
import { toast } from 'react-toastify';

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
import { AuthContext } from '../../contexts/auth';

import Header from '../../components/Header';
import Title from '../../components/Title';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function NovoChamado() {

    const [clientes, setClientes] = useState([]);
    const [carregaCliente, setCarregaCliente] = useState(true);
    const [clienteSelecionado, setClienteSelecionado] = useState(0);
    const [assunto, setAssunto] = useState('Suporte');
    const [status, setStatus] = useState('Aberto');
    const [complemento, setComplemento] = useState('');

    const { user } = useContext(AuthContext);

    useEffect(() => {
        async function loadCustomers() {
            await firebase.firestore().collection('customers')
                .get()
                .then((snapshot) => {
                    let lista = [];


                    snapshot.forEach((doc) => {
                        lista.push({
                            id: doc.id,
                            nomeFantasia: doc.data().nomeFantasia
                        })
                    })

                    if (lista.length === 0) {
                        console.log('nenhuma empresa encontrada');
                        setClientes([{ id: '1', nomeFantasia: 'Freela' }])
                        setCarregaCliente(false)
                        return;
                    }

                    setClientes(lista);
                    setCarregaCliente(false);
                })
                .catch((error) => {
                    console.error('Deu alguma coisa errada!', error);
                    setCarregaCliente(false);
                    setClientes([{ id: '1', nomeFantasia: '' }])
                })
        }

        loadCustomers();
    }, [])

    async function handleRegistrar(e) {
        e.preventDefault();

        await firebase.firestore().collection('chamados')
            .add({
                created: new Date(),
                cliente: clientes[clienteSelecionado].nomeFantasia,
                clienteId: clientes[clienteSelecionado].id,
                assunto: assunto,
                status: status,
                complemento: complemento,
                userId: user.uid,
            })
            .then(() => {
                toast.success('Chamado criado com sucesso!')
                setComplemento('');
                setClienteSelecionado(0);
            })
            .catch((error) => {
                toast.error('ops... Erro ao registrar!');
                console.error(error);
            })


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

    //chama quando troca de cliente
    function handleChangeClientes(e) {
        console.log('Index do cliente selecionado', e.target.value);
        console.log('Cliente selecionado', clientes[e.target.value])
        setClienteSelecionado(e.target.value)
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

                    {
                        carregaCliente ?
                            (
                                <Input type="text" disabled value='Carregando clientes..' />
                            ) :
                            (
                                <Select value={clienteSelecionado} onChange={handleChangeClientes}>
                                    {clientes.map((item, index) => {
                                        return (
                                            <option key={item.id} value={index}>
                                                {item.nomeFantasia}
                                            </option>
                                        )
                                    })}
                                </Select>
                            )
                    }



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
                        type="text"
                        placeholder="Descreva seu problema (opcional)."
                        value={complemento}
                        onChange={(e) => setComplemento(e.target.value)}
                    />

                    <AreaBotao>
                        <Botao onClick={handleRegistrar}>
                            <Link to='/dashboard'>
                                <TextoBotao>Registrar</TextoBotao>
                            </Link>
                        </Botao>
                    </AreaBotao>

                </AreaFormulario>
            </Conteudo>
        </Container >
    );
}