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

export default function Signup() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');
  const { signUp } = useContext(AuthContext);

  function handleSubmit(e) {
    e.preventDefault();

    if (nome !== '' && email !== '' && senha !== '') {
      signUp(email, senha, nome)
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
          <Botao type="submit" onClick={handleSubmit}>Cadastrar</Botao>
        </AreaFormulario>

        <Link style={{ margin: 20, color: '#000', cursor: 'pointer' }}
          to='/'>Já tenho uma conta
        </Link>

      </AreaLogin>
    </Container >
  );
}

