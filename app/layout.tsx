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
  title: "React and Next.js Playground",
  description:
    "Learn React and Next.js with an interactive browser-based tutorial",
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
        <ResizablePanelGroup
          direction="horizontal"
          className="min-h-[200px] border"
        >
          <ResizablePanel defaultSize={35} className="h-[calc(100vh-64px)]">
            <div className="flex h-full items-center justify-center font-semibold">
              Content
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={65}>
            <div className="flex h-full items-center justify-center">
              {children}
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </body>
    </html>
  );
}
