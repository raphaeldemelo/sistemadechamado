import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Container,
    Conteudo,
    AreaDashboard,
    Texto,
    Botao,
} from './styles';
import { BsFillChatFill } from 'react-icons/bs';
import { FiPlus } from 'react-icons/fi';
import Header from '../../components/Header';
import Title from '../../components/Title';

export default function Dashboard() {

    const [chamados, setChamados] = useState([]);

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
                        <Link
                            to='/novochamado'
                            style={{
                                display: 'flex',
                                alignItems: 'center'
                            }}>
                            <FiPlus size={15} color='#fff' style={{ marginRight: 10 }} />
                            Novo Chamado
                        </Link>
                    </>
                )}


            </Conteudo>

        </Container >
    );
}