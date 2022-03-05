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

export default function Signin() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function handleSubmit(e){
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
          <Titulo>Entrar</Titulo>
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
          <Botao type="submit">Acessar</Botao>
        </AreaFormulario>

        <Link style={{ margin: 20, color: '#000', cursor: 'pointer' }}
          to='/cadastrar'>Criar uma conta
        </Link>

      </AreaLogin>
    </Container >
  );
}

