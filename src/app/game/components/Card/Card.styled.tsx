import styled from "styled-components";

export const CardStyled = styled.div<{ $isOpen: boolean }>`
  position: relative;
  width: 60px;
  height: 60px;

  transform: ${({ $isOpen }) => $isOpen && "rotateY(180deg)"};
  transition: 0.3s;
  transform-style: preserve-3d;

  @media (min-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

export const FrontFaceStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background-color: white;
  color: black;
  border: 1px solid darkgray;
  box-shadow: 2px 2px 2px lightgray;
  transform: rotateY(180deg);
  backface-visibility: hidden;
  overflow: hidden;
`;

export const BackFaceStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  border-radius: 5px;
  background-color: #042e53;
  color: whitesmoke;
  font-size: 36px;
  font-weight: bold;
  box-shadow: 2px 2px 2px lightgray;
  backface-visibility: hidden;
`;
