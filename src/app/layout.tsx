import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

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
        <nav>
          <a href="/">Home</a>
          <a href="/settings">Ustawienia</a>
        </nav>
        {children}
        <footer>
          <a href="/about">O mnie</a>
        </footer>
      </body>
    </html>
  );
}
