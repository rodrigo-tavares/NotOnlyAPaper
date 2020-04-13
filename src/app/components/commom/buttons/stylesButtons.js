import styled, { css } from 'styled-components';

const ButtonDefault = css`
  font-size: 16px;
  padding: 1rem 0rem;
  font-weight: bold;
  width: 170px;
  border-radius: 5px;
  text-transform: capitalize;
  transition: all 400ms;
  &:hover {
    color: #ffffff;
    background: #333333;
  }
`;

export const ButtonPrimary = styled.button`
  ${ButtonDefault}
  background: #ffffff;
  border: none;
`;

export const ButtonSecundary = styled.button`
  ${ButtonDefault}
  background: transparent;
  border: 1px solid #d6d6d6;
  &:hover {
    border: 1px solid #333;
  }
`;
