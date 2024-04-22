import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Modal from "./components/modal";
import { StoreProvider } from "./store/provider";

export const metadata: Metadata = {
  title: "DnD Companion App",
  description: "Created by Mike Wissa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <Navbar />
          {children}
          <Footer />
          <Modal />
        </StoreProvider>
      </body>
    </html>
  );
}
