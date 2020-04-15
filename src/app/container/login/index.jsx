import React from 'react';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import {
  Container,
  RightSide,
  SubContainer,
  BackHomeLink,
  LeftSide,
  Logo,
  SubTitle,
  FormLogin,
} from './styles';

const Login = () => (
  <Container>
    <SubContainer>
      <RightSide />
      <LeftSide>
        <BackHomeLink>
          <Link to="/">Voltar ao portal</Link>
        </BackHomeLink>
        <Logo />
        <SubTitle>
          Junte-se a nossa comunidade. Avalie sua universidade. Conheça outras
          universidades. Contribua para o futuro das universidades.
        </SubTitle>

        <SubTitle>Em construção</SubTitle>
      </LeftSide>
    </SubContainer>
  </Container>
);

export default Login;
