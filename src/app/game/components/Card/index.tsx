"use client";
import Image from "next/image";
import { BackFaceStyled, CardStyled, FrontFaceStyled } from "./Card.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";

interface CardInterface {
  id: number;
  isFlipped: boolean;
  image: string;
  onClick: (id: number) => void;
}

export const Card = ({ id, isFlipped, image, onClick }: CardInterface) => {
  return (
    <CardStyled isFlipped={isFlipped}>
      <FrontFaceStyled>
        <Image src={image} alt="" width={50} height={50} />
      </FrontFaceStyled>
      <BackFaceStyled onClick={() => onClick(id)}>
        <FontAwesomeIcon icon={faQuestion} />
      </BackFaceStyled>
    </CardStyled>
  );
};
