import { styled } from "styled-components";

export const ButtonStyled = styled.button<{
  type: "primary" | "secondary";
}>`
  padding: 5px;
  background-color: ${({ type }) =>
    type === "primary" ? "#042e53" : "whitesmoke"};
  color: ${({ type }) => type === "primary" && "whitesmoke"};
  border: 2px solid #042e53;
  border-radius: 8px;
`;
