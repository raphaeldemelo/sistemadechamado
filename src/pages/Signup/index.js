import { useState } from 'react';
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';

import {
  Container,
  AreaLogin,
  AreaLogo,
  AreaFormulario,
  Botao,
  Imagem,
  Titulo,
  Input,
} from './styles';

export default function Signup() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    alert('clicou')
  }

  return (
    <Container>
      <AreaLogin>
        <AreaLogo>
          <Imagem
            src={logo} alt='Sistema Logo'
          />
        </AreaLogo>

        <AreaFormulario onSubmit={handleSubmit}>
          <Titulo>Cadastrar uma conta</Titulo>
          <Input
            type="text"
            placeholder='seu nome'
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <Input
            type="text"
            placeholder='email@email.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder='*******'
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <Botao type="submit">Cadastrar</Botao>
        </AreaFormulario>

        <Link style={{ margin: 20, color: '#000', cursor: 'pointer' }}
          to='/'>Já tenho uma conta
        </Link>

      </AreaLogin>
    </Container >
  );
}

