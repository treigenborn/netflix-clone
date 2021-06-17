import styled from 'styled-components/macro';

export const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  flex-direction: ${({ direction }) => direction};
  margin: auto;
  width: 100%;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;
export const Item = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
  color: white;
  overflow: hidden;
`;

export const Pane = styled.div`
  width: 50%;

  @media screen and (max-width: 1000px) {
    width: 100%;
    padding: 0 45px;
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-size: 50px;
  line-heigth: 1.1;
  margin-bottom: 8px;

  @media screen and (max-width: 600px) {
    font-size: 35px;
  }
`;

export const SubTitle = styled.h2`
  font-size: 26px;
  font-weight: normal;
  line-height: normal;

  @media screen and (max-width: 600px) {
    font-size: 18px;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  heigth: auto;
`;

export const Container = styled.div`
  @media screen and (max-width: 1000px) {
    ${Item}: last-of-type h2 {
      margin-bottom: 50px;
    }
  }
`;
