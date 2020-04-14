import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem 0;
  border-top: 50px solid #333333;

  .menu,
  .copyright {
    display: flex;
    margin: 0 auto;
    flex-direction: row;

    li {
      color: #333333;
      font-size: 16px;
      text-transform: capitalize;
      margin-right: 30px;
      &:first-child {
        margin-left: 30px;
      }
    }
  }

  .copyright {
    margin-top: 45px;
    li {
      opacity: 0.75;
      color: #999999;
    }
  }
`;
