import { InputStyled } from "./Input.styled";

interface InputInterface extends React.HTMLProps<HTMLInputElement> {
  className?: string;
}

export const Input = ({ className, value, onChange }: InputInterface) => {
  return (
    <InputStyled className={className} value={value} onChange={onChange} />
  );
};
