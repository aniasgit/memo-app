import { InputStyled } from "./Input.styled";

interface InputInterface {
  className?: string;
  initialValue: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  className,
  initialValue,
  onChange,
}: InputInterface) => {
  return (
    <InputStyled
      className={className}
      value={initialValue}
      onChange={onChange}
    />
  );
};
