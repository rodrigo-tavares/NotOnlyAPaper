import styled from 'styled-components';
import RightSideSVG from './../../../assets/images/right-side.svg';
import LogoPng from './../../../assets/images/Logo.png';

export const Container = styled.div`
  width: 100%;
  background: linear-gradient(90deg, #fae681 50%, #ffffff 50%);
`;

export const SubContainer = styled.div`
  width: 100%;
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
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const BackHomeLink = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  font-family: 'Poppins';
  font-size: 16px;
  color: #707070;
`;

export const RightSide = styled.div`
  background: url(${RightSideSVG}) no-repeat;
  height: 100vh;
  width: 46%;
  background-position: center;
  background-size: 70%;
`;

export const SubTitle = styled.p`
  font-size: 18px;
  line-height: 29px;
  max-width: 90%;
  margin: 30px 0;
  color: #707070;
`;

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.div`
  background: url(${LogoPng}) no-repeat;
  width: 283px;
  height: 52px;
  margin-top: 0px;
  background-size: 87%;
  opacity: 0.85;
`;
