import React from 'react';
import {
    ModalContainer,
    Container,
    Botao,
    Conteudo,
    AreaLabel,
    Label,
} from './styles';
import { FiX } from 'react-icons/fi';


export default function Modal({ conteudo, close }) {
    return (
        <ModalContainer>
            <Container>
                <Botao onClick={close}>
                    <FiX size={23} color="#fff" />
                </Botao>

                <Conteudo>
                    <Label style={{fontSize: 25}}>Detalhes do chamado</Label>

                    <AreaLabel>
                        <Label>Cliente: <a>{conteudo.cliente}</a></Label>
                    </AreaLabel>

                    <AreaLabel>
                        <Label>Assunto: <a>{conteudo.assunto}</a></Label>
                        <Label>Cadastrado: <a>{conteudo.createdFormated}</a></Label>
                    </AreaLabel>


                    <AreaLabel>
                        <Label>Status: <a style={{ color: '#fff', backgroundColor: conteudo.status === 'Aberto' ? '#5cb85c' : '#999', borderRadius: 7, padding: 5 }}>{conteudo.status}</a></Label>
                    </AreaLabel>

                    {conteudo.complemento !== '' && (
                        <>
                            <h3>Complemento</h3>
                            <p>
                                {conteudo.complemento}
                            </p>
                        </>
                    )}

                </Conteudo>

            </Container>
        </ModalContainer>
    );
}