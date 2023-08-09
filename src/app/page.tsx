"use client";
import { useRouter } from "next/navigation";
import { PlayButton } from "./components";
import { HeaderStyled, MainStyled } from "./page.styled";

export default function Home() {
  const router = useRouter();

  return (
    <MainStyled>
      <HeaderStyled>Play memo game</HeaderStyled>
      <PlayButton />
    </MainStyled>
  );
}
