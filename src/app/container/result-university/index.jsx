import React from 'react';
import { lighten, withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import { LinearProgress } from '@material-ui/core';
import {
  Container,
  Title,
  ContainerUniversities,
  ItemUniversity,
  UniversityInfo,
  UniversityInfoTitle,
  RatingCountText,
  RatingContent,
} from './styles';
import FiapLogo from './../../../assets/images/fiap-logo.png';

const BorderLinearProgress = withStyles({
  root: {
    width: 100,
    height: 10,
    borderRadius: 10,
    backgroundColor: lighten('#F6CE00', 0.5),
  },
  bar: {
    borderRadius: 10,
    backgroundColor: '#F6CE00',
  },
})(LinearProgress);

const ResultUniversity = () => (
  <Container>
    <Title>Top 10 Universidades</Title>
    <ContainerUniversities>
      <ItemUniversity>
        <img src={FiapLogo} alt="FIAP" />

        <UniversityInfo>
          <UniversityInfoTitle>FIAP</UniversityInfoTitle>
          <RatingContent>
            <Rating name="read-only" value={4} readOnly />
            <RatingCountText>280 avaliações</RatingCountText>
          </RatingContent>
          <RatingCountText>
            76% dos usuários aprovam esta universidade
          </RatingCountText>
        </UniversityInfo>
        <UniversityInfo>
          Localização
          <BorderLinearProgress
            variant="determinate"
            color="secondary"
            value={70}
          />
        </UniversityInfo>
      </ItemUniversity>
    </ContainerUniversities>
  </Container>
);

export default ResultUniversity;
