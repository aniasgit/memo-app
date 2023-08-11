import { InputStyled } from "./Input.styled";

interface InputInterface {
  className?: string;
}

export const Input = ({ className }: InputInterface) => {
  return <InputStyled className={className} />;
};
