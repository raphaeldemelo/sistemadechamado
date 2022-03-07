import { useState, useContext } from 'react';
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';

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
  const { signIn, loadingAuth } = useContext(AuthContext);

  function handleSubmit(e) {
    e.preventDefault();
    if (email !== '' && senha !== '') {
      signIn(email, senha);
    }
  }

  return (
    <Container>
      <AreaLogin>
        <AreaLogo>
          <Imagem
            src={logo} alt='Sistema Logo'
          />
        </AreaLogo>

        <AreaFormulario>
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
          <Botao type="submit" onClick={handleSubmit}>{loadingAuth ? 'Carregando...' : 'Acessar'}</Botao>
        </AreaFormulario>

        <Link style={{ margin: 20, color: '#000', cursor: 'pointer' }}
          to='/cadastrar'>Criar uma conta
        </Link>

      </AreaLogin>
    </Container >
  );
}

