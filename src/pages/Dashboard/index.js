import React, { useState, useEffect } from 'react';
import firebase from '../../services/firebaseConnection';
import './dashboard.css';
import { Link } from 'react-router-dom';
import {
    Container,
    Conteudo,
    AreaDashboard,
    Texto,
    Botao,
    AreaTabela,
} from './styles';
import { BsFillChatFill } from 'react-icons/bs';
import { FiPlus, FiSearch, FiEdit2 } from 'react-icons/fi';
import Header from '../../components/Header';
import Title from '../../components/Title';
import { toast } from 'react-toastify';
import { format } from 'date-fns'

export default function Dashboard() {

    const listRef = firebase.firestore().collection('chamados').orderBy('created', 'desc')

    const [chamados, setChamados] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);
    const [isEmpty, setIsEmpty] = useState(false);
    const [lastDocs, setLastDocs] = useState();


    async function carregaChamados() {
        await listRef.limit(5)
            .get()
            .then((snapshot) => {
                updateState(snapshot)
            })
            .catch((error) => {
                toast.error('algo deu errado!', error)
                setLoadingMore(false);
            })

        setLoading(false)
    }

    async function updateState(snapshot) {
        const isCollectionEmpty = snapshot.size === 0;

        if (!isCollectionEmpty) {
            let lista = [];

            snapshot.forEach((doc) => {
                lista.push({
                    id: doc.id,
                    assunto: doc.data().assunto,
                    cliente: doc.data().cliente,
                    clienteId: doc.data().clienteId,
                    created: doc.data().created,

                    createdFormated: format(doc.data().created.toDate(), 'dd/MM/yyyy'),
                    status: doc.data().status,
                    complemento: doc.data().complemento,
                })
            })

            const lastDoc = snapshot.docs[snapshot.docs.length - 1];//pegando o ultimo documento buscado

            setChamados(chamados => [...chamados, ...lista]);
            setLastDocs(lastDoc);
        } else {
            setIsEmpty(true);
        }

        setLoadingMore(false);
    }

    useEffect(() => {

        carregaChamados();

        return () => {

        }
    }, [])

    if (loading) {
        return (
            <Container>
                <Header />
                <Title name='Atendimentos'>
                    <BsFillChatFill size={25} />
                </Title>

                <AreaDashboard>
                    <Texto>Buscando chamados...</Texto>
                </AreaDashboard>
            </Container>
        )
    }

    return (
        <Container>
            <Header />
            <Title name='Atendimentos'>
                <BsFillChatFill size={25} />
            </Title>
            <Conteudo>

                {chamados.length === 0 ? (
                    <AreaDashboard>

                        <Texto>Nenhum chamado registrado...</Texto>

                        <Botao>
                            <Link
                                to='/novochamado'
                                style={{
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                <FiPlus size={15} color='#fff' style={{ marginRight: 10 }} />
                                Novo Chamado
                            </Link>
                        </Botao>
                    </AreaDashboard>
                ) : (
                    <AreaDashboard style={{padding: 30}}>
                        <Botao>
                            <Link
                                to='/novochamado'
                                style={{
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                <FiPlus size={15} color='#fff' style={{ marginRight: 10 }} />
                                Novo Chamado
                            </Link>
                        </Botao>


                        <table style={{ margin: 0 }}>
                            <thead>
                                <tr>
                                    <th scope='col'>Cliente</th>
                                    <th scope='col'>Assunto</th>
                                    <th scope='col'>Status</th>
                                    <th scope='col'>Cadastrado</th>
                                    <th scope='col'>#</th>
                                </tr>
                            </thead>
                            <tbody>
                                {chamados.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td data-label='Cliente'>{item.cliente}</td>
                                            <td data-label='Assunto'>{item.assunto}</td>
                                            <td data-label='Status'>
                                                <span className='bagde' style={{ backgroundColor: item.status === 'Aberto' ? '#5cb85c' : '#999', borderRadius: 7, padding: 5 }}>
                                                    {item.status}
                                                </span>
                                            </td>
                                            <td data-label='Cadastrado'>{item.createdFormated}</td>
                                            <td data-label='#'>
                                                <button className='action' style={{ backgroundColor: '#3583f6' }}>
                                                    <FiSearch color='#fff' size={17} />
                                                </button>

                                                <button className='action' style={{ backgroundColor: '#f6a935' }}>
                                                    <FiEdit2 color='#fff' size={17} />
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })}

                            </tbody>
                        </table>
                    </AreaDashboard>
                )}
            </Conteudo>
        </Container >
    );
}