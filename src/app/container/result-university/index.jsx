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
  RatingCategory,
  ViewUniversityDetail,
  ArrowLinkDetail,
} from './styles';
import FiapLogo from './../../../assets/images/fiap-logo.png';

const BorderLinearProgress = withStyles({
  root: {
    width: 150,
    height: 7,
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
        <UniversityInfo categories>
          <RatingCategory>Localização</RatingCategory>
          <BorderLinearProgress
            variant="determinate"
            color="secondary"
            value={85}
          />

          <RatingCategory>Corpo docente</RatingCategory>
          <BorderLinearProgress
            variant="determinate"
            color="secondary"
            value={50}
          />

          <RatingCategory>Mensalidade</RatingCategory>
          <BorderLinearProgress
            variant="determinate"
            color="secondary"
            value={75}
          />
        </UniversityInfo>

        <UniversityInfo detail>
          <ViewUniversityDetail>veja mais</ViewUniversityDetail>
          <ArrowLinkDetail />
        </UniversityInfo>
      </ItemUniversity>
    </ContainerUniversities>
  </Container>
);

export default ResultUniversity;
