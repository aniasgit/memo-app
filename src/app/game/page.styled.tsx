import styled from "styled-components";
import { Input } from "../components";

export const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  overflow: auto;

  @media (min-width: 769px) {
    justify-content: center;
  }
`;

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  min-height: 100%;
  width: 100%;
  max-width: 1200px;
  overflow: hidden;

  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 36px;
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  align-content: center;
  grid-template-columns: repeat(4, calc(25% - (3 * 15px) / 4));
  gap: 15px;
  padding: 20px;

  @media (min-width: 769px) {
    grid-template-columns: repeat(4, calc(25% - (3 * 20px) / 4));
    gap: 20px;
    width: 70%;
    max-width: 80vh;
    min-height: 100%;
  }
`;

export const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 20px;

  @media (min-width: 769px) {
    width: 30%;
    height: 100%;
    padding: 20px;
    flex-direction: column;
    justify-content: center;
  }
`;

export const Results = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const InputStyled = styled(Input)`
  width: 80%;
  margin-bottom: 12px;
`;

export const MovesParagraphStyled = styled.p`
  margin-bottom: 8px;
  font-size: 24px;
`;
