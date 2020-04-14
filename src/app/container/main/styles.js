import styled from 'styled-components';
import RightSideSVG from './../../../assets/images/right-side.svg';

export const Container = styled.div`
  width: 100%;
  background: linear-gradient(90deg, #f2ca35 50%, #ffffff 50%);
`;

export const SubContainer = styled.div`
  width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const LeftSide = styled.div`
  height: 100vh;
  width: 46%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  max-width: 90%;
  margin-bottom: 30px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 70%;
`;

export const RightSide = styled.div`
  background: url(${RightSideSVG}) no-repeat;
  height: 100vh;
  width: 46%;
  background-position: center;
  background-size: 70%;
`;
