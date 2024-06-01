'use client';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ThirdwebProvider } from "@thirdweb-dev/react"
import { Sepolia } from "@thirdweb-dev/chains"
import { Toaster } from "react-hot-toast"
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: process.env.NEXT_PUBLIC_SUBGRAPH_URL,
});


const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Dex Your Meme",
//   description: "Dex Your Meme (DYM) is a platform for issuing memecoins on DEX, once their popularity is recognized by supporters.",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const clientId = process.env.CLIENT_ID || ""
  const activeChain = Sepolia
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100`}>
        <ThirdwebProvider clientId={clientId} activeChain={activeChain} supportedChains={[activeChain]}>
          <ApolloProvider client={client}>
            <Navbar />
            {children}
            <Footer />
          </ApolloProvider>
        </ThirdwebProvider>
      </body>
    </html>
  );
}
