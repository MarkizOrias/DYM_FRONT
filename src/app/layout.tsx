import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ThirdwebProvider } from "thirdweb/react";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dex Your Meme",
  description: "Dex Your Meme (DYM) is a platform for issuing memecoins on DEX, once their popularity is recognized by supporters.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100`}>
        {/* <ThirdwebProvider> */}
        <Navbar />
        {children}
        <Footer />
        {/* </ThirdwebProvider> */}
      </body>
    </html>
  );
}
