import "@/app/globals.css";
import { type Metadata } from "next";
import React from "react";

import { font } from "@/app/font";

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
      lang="en-us"
      suppressHydrationWarning
      className={[font.className, "antialiased", "h-full"].join(" ")}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
};

export default Layout;
