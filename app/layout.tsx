"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <title>Abdulbasit Hussain - Portfolio</title>
      <ThemeProvider attribute="class">
        <body className="dark:bg-primary">{children}</body>
      </ThemeProvider>
    </html>
  );
}
