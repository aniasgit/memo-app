import { BackgroundStyled, ModalStyled } from "./Modal.styled";

interface ModalInterface {
  isOpen: boolean;
  children: React.ReactNode;
  closeModal?: () => void;
}

export const Modal = ({ isOpen, children, closeModal }: ModalInterface) => {
  return isOpen ? (
    <>
      <BackgroundStyled onClick={closeModal} />
      <ModalStyled>{children}</ModalStyled>
    </>
  ) : (
    <></>
  );
};
