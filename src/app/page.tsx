"use client";
import { PlayButton } from "./components";
import { HeaderStyled, MainStyled } from "./page.styled";

export default function Home() {
  return (
    <MainStyled>
      <HeaderStyled>Play memo game</HeaderStyled>
      <PlayButton />
    </MainStyled>
  );
}
