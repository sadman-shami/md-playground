import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
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
      className={cn(
        "antialiased",
        "h-full",
        "font-sans",
        "dark",
        inter.variable,
      )}
    >
      <body
        className="min-h-full w-full"
        style={{
          height: "100%",
          width: "100%",
          backgroundImage:
            "radial-gradient(circle at 25px 25px, lightgray 1%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 1%, transparent 0%)",
          backgroundSize: "75px 75px",
        }}
      >
        {children}
        {/* Background */}
        <div
          aria-hidden="true"
          className="fixed bottom-[-10%] left-[-30%] z-[-100]"
        >
          <Image
            alt="docs left background"
            src="/images/docs-left.png"
            width={3000}
            height={3000}
            style={{
              width: "auto",
              height: "auto",
            }}
            quality={75}
            priority={true}
          />
        </div>
        <div
          aria-hidden="true"
          className="fixed top-[-10%] right-[-60%] 2xl:top-[-60%] 2xl:right-[-45%] z-[-100] rotate-12"
        >
          <Image
            alt="docs right background"
            src="/images/docs-right.png"
            width={3000}
            height={3000}
            style={{
              width: "auto",
              height: "auto",
            }}
            quality={75}
            priority={true}
          />
        </div>
      </body>
    </html>
  );
};

export default Layout;
