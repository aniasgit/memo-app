"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar, Footer } from "./components";
import { MainStyled } from "./page.styled";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Memo App",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <MainStyled>{children}</MainStyled>
        <Footer />
      </body>
    </html>
  );
}
