import styled from "styled-components";

export const GamePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const CardContainer = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  grid-template-columns: repeat(4, 60px);
  grid-template-rows: repeat(4, 60px);
  gap: 10px;
  flex-grow: 1;
  padding: 20px;
  width: 100%;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 80px);
    grid-template-rows: repeat(4, 80px);
    width: 70%;
    min-height: 100%;
  }
`;

export const ResultsContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;

  @media (min-width: 768px) {
    width: 30%;
    height: 100%;
  }
`;
