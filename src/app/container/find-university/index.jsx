import React from 'react';
import {
  Container,
  Title,
  SubTitle,
  FormSearch,
  ButtonSearch,
  SearchInput,
  LabelSearch,
  SelectSearch,
} from './styles';

const FindUniversity = () => (
  <Container>
    <Title>Busque por universidades</Title>
    <SubTitle>Aqui você pode buscar por nome ou por cidade</SubTitle>
    <FormSearch>
      <LabelSearch>
        <SearchInput
          name="search"
          type="text"
          placeholder="Digite o nome da universidade ou curso"
        />
      </LabelSearch>

      <SelectSearch name="city">
        <option>Selecione</option>
        <option>São Paulo</option>
      </SelectSearch>
    </FormSearch>
    <ButtonSearch>Buscar</ButtonSearch>
  </Container>
);

export default FindUniversity;
