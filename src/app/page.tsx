"use client";
import { useRouter } from "next/navigation";
import { PlayButton } from "./components";
import { HeaderStyled, PageContainer } from "./page.styled";

export default function Home() {
  const router = useRouter();

  return (
    <PageContainer>
      <HeaderStyled>Play memo game</HeaderStyled>
      <PlayButton />
    </PageContainer>
  );
}
