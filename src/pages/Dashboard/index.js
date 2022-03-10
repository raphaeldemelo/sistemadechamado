import React, { useState } from 'react';
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

export default function Dashboard() {

    const [chamados, setChamados] = useState([1]);

    return (
        <Container>
            <Header />
            <Conteudo>
                <Title name='Atendimentos'>
                    <BsFillChatFill size={25} />
                </Title>


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
                    <>
                        <Botao
                            style={{
                                position: 'absolute',
                                right: 10,
                                marginTop: 20,
                            }}>
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

                            <>
                                <table>
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
                                        <tr>
                                            <td data-label='Cliente'>Curso Sujeito</td>
                                            <td data-label='Assunto'>Suporte</td>
                                            <td data-label='Status'>
                                                <span className='bagde' style={{ backgroundColor: '#5cb85c' }}>
                                                    Em Aberto
                                                </span>
                                            </td>
                                            <td data-label='Cadastrado'>22/06/2021</td>
                                            <td data-label='#'>
                                                <button className='action' style={{ backgroundColor: '#3583f6' }}>
                                                    <FiSearch color='#fff' size={17} />
                                                </button>

                                                <button className='action' style={{ backgroundColor: '#f6a935' }}>
                                                    <FiEdit2 color='#fff' size={17} />
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </>
                    </>
                )}


            </Conteudo>

        </Container >
    );
}