"use client";
import { BackFaceStyled, CardStyled, FrontFaceStyled } from "./Card.styled";

interface CardInterface {
  isFlipped: boolean;
  image: string;
  onClick: () => void;
}

export const Card = ({ isFlipped, image, onClick }: CardInterface) => {
  return (
    <CardStyled isFlipped={isFlipped}>
      <FrontFaceStyled isFlipped={isFlipped} onClick={onClick}>
        {image}
      </FrontFaceStyled>
      <BackFaceStyled isFlipped={isFlipped} onClick={onClick}>
        ?
      </BackFaceStyled>
    </CardStyled>
  );
};
