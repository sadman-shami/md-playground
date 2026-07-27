import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type React from "react";

import "@/app/globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

interface ILayout {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Markdown Playground",
  description: "Next.js Markdown Playground.",
};

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", "h-full", "font-sans", inter.variable)}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
};

export default Layout;
