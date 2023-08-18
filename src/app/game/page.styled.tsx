import styled from "styled-components";
import { Input } from "../components";

export const GamePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  height: 100%;
  width: 100%;
  max-width: 1000px;

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
  gap: 15px;
  flex-grow: 1;
  padding: 20px;
  width: 100%;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 80px);
    grid-template-rows: repeat(4, 80px);
    gap: 20px;
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
    flex-direction: column;
    justify-content: center;
  }
`;

export const InputStyled = styled(Input)`
  width: 80%;
  margin-bottom: 12px;
`;

export const MovesParagraphStyled = styled.p`
  margin-bottom: 24px;
`;
