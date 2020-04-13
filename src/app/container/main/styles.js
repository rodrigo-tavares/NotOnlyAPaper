import styled from 'styled-components';
import RightSideSVG from './../../../assets/images/right-side.svg';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  justify-content: flex-start;
`;

export const LeftSide = styled.div`
  background: #f2ca35;
  height: 100vh;
  width: 46%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 0 0 5.5rem;
`;

export const MainTitle = styled.h1`
  font-weight: bold;
  font-size: 55px;
  line-height: 60px;
  margin-bottom: 15px;
`;

export const SubTitle = styled.p`
  font-size: 16px;
  line-height: 24px;
  max-width: 80%;
  margin-bottom: 30px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 63%;
`;

export const RightSide = styled.div`
  background: url(${RightSideSVG}) no-repeat;
  height: 100vh;
  width: 46%;
  background-position: center;
  background-size: 70%;
`;
