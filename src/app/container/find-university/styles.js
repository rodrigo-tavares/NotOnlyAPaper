import styled from 'styled-components';
import SearchSVG from './../../../assets/images/search-icon.svg';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem 0;
`;

export const Title = styled.h2`
  font-weight: bold;
  font-size: 55px;
  line-height: 60px;
  margin-bottom: 15px;
  text-align: center;
`;

export const SubTitle = styled.p`
  font-size: 16px;
  margin-bottom: 25px;
  text-align: center;
`;

export const FormSearch = styled.div`
  margin: 0 auto;
  display: flex;
`;

export const ButtonSearch = styled.button`
  font-size: 16px;
  padding: 1rem 0rem;
  font-weight: bold;
  width: 170px;
  border-radius: 5px;
  margin: 40px auto 0;
  background: #ffffff;
  border: 1px solid #f4cc18 !important;
  color: #f4cc18;
  border: none;
  text-transform: capitalize;
  transition: all 400ms;
  &:hover {
    color: #ffffff;
    border: 1px solid;
    background: #f4cc18;
  }
`;

export const LabelSearch = styled.div`
  position: relative;
  width: auto;
  &::before {
    content: url(${SearchSVG});
    width: 15px;
    height: 15px;
    position: absolute;
    left: 20px;
    top: 15px;
    z-index: 1;
  }
`;

export const SearchInput = styled.input`
  color: #858585;
  font-size: 16px;
  width: 420px;
  padding: 15px 0 15px 55px;
  border: none;
  border-radius: 5px;
  box-shadow: 2px 5px 8px 0 rgba(0, 0, 0, 0.1);
  position: relative;
  margin-right: 25px;
`;

export const SelectSearch = styled.select`
  color: #858585;
  background: #fff;
  font-size: 16px;
  width: 220px;
  padding: 15px 35px;
  border: none;
  border-radius: 5px;
  box-shadow: 2px 5px 8px 0 rgba(0, 0, 0, 0.1);
`;
