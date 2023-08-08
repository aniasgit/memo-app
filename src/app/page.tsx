"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main>
      <h1>Strona główna</h1>
      <button onClick={() => router.push("/game")}>Graj</button>
    </main>
  );
}
