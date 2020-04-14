import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #464646;
  padding: 4rem 0;
`;

export const Title = styled.h2`
  font-weight: bold;
  font-size: 55px;
  line-height: 60px;
  margin-bottom: 15px;
  color: #ffffff;
  text-align: center;
`;

export const ContainerUniversities = styled.div`
  width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
`;

export const ItemUniversity = styled.div`
  background: #fff;
  cursor: pointer;
  height: 140px;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0 2rem;

  &:hover {
    box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.1);
  }

  img {
    width: 89px;
    height: 89px;
    margin-right: 25px;
  }
`;

export const UniversityInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const UniversityInfoTitle = styled.h3`
  font-size: 40px;
  font-weight: bold;
`;

export const RatingContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 260px;
  margin-bottom: 10px;
`;

export const RatingCountText = styled.span`
  font-family: 'Poppins';
  font-size: 16px;
  color: #b1aaaa;
  font-weight: 600;
`;
