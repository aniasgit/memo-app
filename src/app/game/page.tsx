"use client";
import { useState } from "react";
import { Card } from "./components";
import {
  CardContainer,
  GamePageContainer,
  ResultsContainer,
} from "./page.styled";

export default function Game() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    console.log("kliknięto kartę");
    setIsFlipped(!isFlipped);
  };

  let children: string[] = [];
  for (let i = 0; i < 16; i++) {
    children.push(i.toString());
  }

  return (
    <GamePageContainer>
      <CardContainer>
        {children.map((child, index) => (
          <Card
            key={index}
            isFlipped={isFlipped}
            onClick={() => handleCardClick()}
            image={child}
          />
        ))}
      </CardContainer>
      <ResultsContainer>jakieś rezultaty</ResultsContainer>
    </GamePageContainer>
  );
}
