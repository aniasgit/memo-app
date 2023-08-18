"use client";
import { useEffect, useRef, useState } from "react";
import { Card, ImageInterface } from "./components";
import {
  CardContainer,
  GamePageContainer,
  InputStyled,
  MovesParagraphStyled,
  ResultsContainer,
} from "./page.styled";
import { MainStyled } from "../page.styled";
import { Button, Modal } from "../components";
import { Result } from "../libs";

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");

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
    setIsModalOpen(false);
    setName("");
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

  const compareResults = (a: Result, b: Result) => {
    if (a.moves > b.moves) {
      return 1;
    } else if (a.moves < b.moves) {
      return -1;
    }
    return 0;
  };

  const handleSaveRestultBtnClick = () => {
    let results: Result[] = JSON.parse(localStorage.getItem("results") || "[]");
    console.log(results);
    results.push({ name, moves });
    results.sort(compareResults);
    if (results.length > 10) {
      results = results.slice(0, 10);
    }
    localStorage.setItem("results", JSON.stringify(results));
    restartGame();
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
      setIsModalOpen(true);
    }
  }, [blockedCards]);

  return (
    <MainStyled>
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
          <MovesParagraphStyled>{`Moves: ${moves}`}</MovesParagraphStyled>
          <Button onClick={restartGame}>Restart game</Button>
        </ResultsContainer>

        <Modal isOpen={isModalOpen}>
          <h1>Congratulation!</h1>
          <MovesParagraphStyled>{`You found all pairs in ${moves} moves.`}</MovesParagraphStyled>
          <p>Enter your name:</p>
          <InputStyled
            value={name}
            onChange={(event) => setName(event.currentTarget.value)}
          />
          <Button onClick={handleSaveRestultBtnClick} type="primary">
            Save the result
          </Button>
        </Modal>
      </GamePageContainer>
    </MainStyled>
  );
}
