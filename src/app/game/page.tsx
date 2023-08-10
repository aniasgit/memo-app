"use client";
import { useEffect, useRef, useState } from "react";
import { Card, ImageInterface } from "./components";
import {
  CardContainer,
  GamePageContainer,
  ResultsContainer,
} from "./page.styled";
import { Button } from "../components";

const images = [
  { src: "/img/elephant.png", alt: "elephant" },
  { src: "/img/giraffe.png", alt: "giraffe" },
  { src: "/img/owl.png", alt: "owl" },
  { src: "/img/panda.png", alt: "panda" },
  { src: "/img/penguin.png", alt: "penguin" },
  { src: "/img/pig.png", alt: "pig" },
  { src: "/img/snake.png", alt: "snake" },
  { src: "/img/narwhal.png", alt: "narwhal" },
];

export default function Game() {
  const [cards, setCards] = useState<ImageInterface[]>([]);
  const [openCards, setOpenCards] = useState<number[]>([]);
  const [blockedCards, setBlockedCards] = useState<number[]>([]);

  const [moves, setMoves] = useState(0);
  const [text, setText] = useState("");

  const timeout = useRef<NodeJS.Timeout | null>(null);

  const shuffleCards = (entryCards: ImageInterface[]) => {
    let cards: ImageInterface[] = [];
    cards = entryCards;

    // Fisher–Yates shuffle algorithm
    for (let i = cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    return cards;
  };

  const restartGame = () => {
    setOpenCards([]);
    setBlockedCards([]);
    setMoves(0);
    setText("");
    setTimeout(() => setCards(shuffleCards([...images, ...images])), 300);
  };

  const handleCardClick = (index: number) => {
    if (openCards.length === 1) {
      setOpenCards([...openCards, index]);
    } else {
      setOpenCards([index]);
      clearTimeout(timeout.current as NodeJS.Timeout);
    }
  };

  const clearOpenCards = () => {
    setOpenCards([]);
  };

  const checkIsOpen = (index: number) => {
    return openCards.includes(index) || blockedCards.includes(index);
  };

  useEffect(() => {
    setCards(shuffleCards([...images, ...images]));
  }, []);

  useEffect(() => {
    if (openCards.length === 2) {
      setMoves(moves + 1);
      if (cards[openCards[0]] === cards[openCards[1]]) {
        setBlockedCards([...blockedCards, ...openCards]);
        clearOpenCards();
        clearTimeout(timeout.current as NodeJS.Timeout);
      } else {
        timeout.current = setTimeout(clearOpenCards, 1500);
      }
    }
  }, [openCards]);

  useEffect(() => {
    if (blockedCards.length === cards.length && blockedCards.length !== 0) {
      setText("Gratulacje, wygrana!");
    }
  }, [blockedCards]);

  return (
    <GamePageContainer>
      <CardContainer>
        {cards.map((card, index) => (
          <Card
            key={index}
            id={index}
            isOpen={checkIsOpen(index)}
            onClick={handleCardClick}
            image={card}
          />
        ))}
      </CardContainer>
      <ResultsContainer>
        <p>{`Moves: ${moves}`}</p>
        {text && <p>{"You found all pairs. Congrats!"}</p>}
        <Button onClick={restartGame}>Play again</Button>
      </ResultsContainer>
    </GamePageContainer>
  );
}
