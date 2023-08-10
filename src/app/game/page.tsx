"use client";
import { useEffect, useState } from "react";
import { Card } from "./components";
import {
  CardContainer,
  GamePageContainer,
  ResultsContainer,
} from "./page.styled";
import { Button } from "../components";

export default function Game() {
  const [cards, setCards] = useState<string[]>([]);
  const [openCards, setOpenCards] = useState<number[]>([]);
  const [blockedCards, setBlockedCards] = useState<number[]>([]);

  const [moves, setMoves] = useState(0);
  const [text, setText] = useState("");

  const images = [
    "/img/elephant.png",
    "/img/giraffe.png",
    "/img/owl.png",
    "/img/panda.png",
    "/img/penguin.png",
    "/img/pig.png",
    "/img/snake.png",
    "/img/narwhal.png",
  ];

  const restartGame = () => {
    shuffleCards();
    setOpenCards([]);
    setBlockedCards([]);
    setMoves(0);
    setText("");
  };

  const shuffleCards = () => {
    const cards = [...images, ...images];
    for (let i = cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

      // swap elements array[i] and array[j]
      // we use "destructuring assignment" syntax to achieve that
      // you'll find more details about that syntax in later chapters
      // same can be written as:
      // let t = array[i]; array[i] = array[j]; array[j] = t
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    setCards(cards);
  };

  const handleCardClick = (index: number) => {
    if (openCards.length < 2) setOpenCards([...openCards, index]);
  };

  const clearOpenCards = () => {
    setOpenCards([]);
  };

  const checkIsFlipped = (index: number) => {
    return openCards.includes(index) || blockedCards.includes(index);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  useEffect(() => {
    if (openCards.length === 2) {
      setMoves(moves + 1);
      if (cards[openCards[0]] === cards[openCards[1]]) {
        setBlockedCards([...blockedCards, ...openCards]);
        clearOpenCards();
      } else {
        setTimeout(clearOpenCards, 1500);
      }
    }
    console.log("open: " + openCards);
  }, [openCards]);

  useEffect(() => {
    if (blockedCards.length === cards.length && blockedCards.length !== 0) {
      setText("Gratulacje, wygrana!");
    }
  }, [blockedCards]);

  console.log("blocked: " + blockedCards);
  console.log("cards: " + cards);

  return (
    <GamePageContainer>
      <CardContainer>
        {cards.map((card, index) => (
          <Card
            key={index}
            id={index}
            isFlipped={checkIsFlipped(index)}
            onClick={handleCardClick}
            image={card.toString()}
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
