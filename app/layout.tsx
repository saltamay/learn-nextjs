import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/navbar";

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
      <body className={`${inter.className}  bg-gray-900 text-gray-100`}>
        <Navbar />
        <div className="flex h-[calc(100vh-64px)] flex-col md:flex-row md:overflow-hidden">
          <div className="w-full flex-none md:w-1/3 border md:p-12 border-gray-100">
            Content
          </div>
          <div className="flex-grow p-6 md:overflow-y-auto md:p-12 border border-gray-100">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
