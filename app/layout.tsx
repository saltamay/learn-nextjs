import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Introduction - Welcome to React.js & Next.js Tutorial",
  description:
    "Learn React.js and Next.js with an interactive browser-based tutorial.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}  bg-[#23272f] text-gray-100`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
