import styled from "styled-components";

export const ModalStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  padding: 50px 20px;
  gap: 8px;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 8px;
  box-shadow: 2px 2px 2px lightgray;
  z-index: 10;

  @media (min-width: 768px) {
    width: 500px;
    padding: 50px;
  }
`;

export const BackgroundStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
`;
