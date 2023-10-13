import Image from "next/image";
import {
  BackFaceStyled,
  CardStyled,
  FrontFaceStyled,
  ImageContainer,
} from "./Card.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";

export interface ImageInterface {
  src: string;
  alt: string;
}

interface CardInterface {
  id: number;
  isOpen: boolean;
  image: ImageInterface;
  onClick: (id: number) => void;
}

export const Card = ({ id, isOpen, image, onClick }: CardInterface) => {
  return (
    <CardStyled $isOpen={isOpen}>
      <FrontFaceStyled>
        <ImageContainer>
          <Image src={image.src} alt={image.alt} fill />
        </ImageContainer>
      </FrontFaceStyled>
      <BackFaceStyled onClick={() => onClick(id)}>
        <FontAwesomeIcon icon={faQuestion} />
      </BackFaceStyled>
    </CardStyled>
  );
};
