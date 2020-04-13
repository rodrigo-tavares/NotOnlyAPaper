import React from 'react';
import {
  Container,
  LeftSide,
  MainTitle,
  SubTitle,
  ButtonsContainer,
  RightSide,
} from './styles';
import {
  ButtonPrimary,
  ButtonSecundary,
} from '../../components/commom/buttons/stylesButtons';

const Main = () => (
  <Container>
    <LeftSide>
      <MainTitle>
        Veja as avaliações
        <br /> sobre universidades
      </MainTitle>
      <SubTitle>
        NotOnlyAPaper é uma plataforma para te ajudar a tomar uma das decisões
        mais importantes da sua vida e lembrar que não é apenas um papel. Avalie
        sua universidade. Conheça outras universidades.
      </SubTitle>
      <ButtonsContainer>
        <ButtonPrimary>contribua</ButtonPrimary>
        <ButtonSecundary>login</ButtonSecundary>
      </ButtonsContainer>
    </LeftSide>
    <RightSide />
  </Container>
);

export default Main;
