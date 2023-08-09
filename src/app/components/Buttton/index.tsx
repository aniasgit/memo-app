import { ButtonStyled } from "./ButtonStyled";

interface ButtonInterface {
  type?: "primary" | "secondary";
  disabled?: boolean;
  className?: string;
  onClick: () => void;
  children: React.ReactNode;
}

export const Button = ({
  type = "secondary",
  disabled = false,
  onClick,
  children,
  className,
}: ButtonInterface) => {
  return (
    <ButtonStyled
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={className}>
      {children}
    </ButtonStyled>
  );
};
