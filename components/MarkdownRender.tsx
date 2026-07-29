"use client";

import Link from "next/link";
import type React from "react";
import ReactMarkdown from "react-markdown";
import rehypeFormat from "rehype-format";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import remarkDirective from "remark-directive";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";

import { cn } from "@/lib/utils";

const components = {
  h1: ({ children }: { children: React.ReactNode }) => (
    <h1 className="mb-6 mt-8 text-4xl font-bold">{children}</h1>
  ),

  h2: ({ children }: { children: React.ReactNode }) => (
    <h2 className="mb-4 mt-8 text-3xl font-bold">{children}</h2>
  ),

  h3: ({ children }: { children: React.ReactNode }) => (
    <h3 className="mb-3 mt-6 text-2xl font-semibold">{children}</h3>
  ),

  p: ({ children }: { children: React.ReactNode }) => (
    <p className="mb-4 leading-7">{children}</p>
  ),

  ul: ({ children }: { children: React.ReactNode }) => (
    <ul className="mb-4 list-disc space-y-2 pl-6">{children}</ul>
  ),

  ol: ({ children }: { children: React.ReactNode }) => (
    <ol className="mb-4 list-decimal space-y-2 pl-6">{children}</ol>
  ),

  li: ({ children }: { children: React.ReactNode }) => (
    <li className="leading-7">{children}</li>
  ),

  blockquote: ({ children }: { children: React.ReactNode }) => (
    <blockquote className="my-6 border-l-4 pl-4 italic">{children}</blockquote>
  ),

  a: ({ href, children }: { href: URL; children: React.ReactNode }) => (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="underline"
    >
      {children}
    </Link>
  ),

  pre: ({ children }: { children: React.ReactNode }) => (
    <pre className="overflow-x-auto rounded-md p-4 bg-accent">{children}</pre>
  ),

  code: ({
    className,
    children,
    ...props
  }: {
    children: React.ReactNode;
    className: string;
  }) => (
    <code className={cn(className, "font-mono", "text-sm")} {...props}>
      {children}
    </code>
  ),

  table: ({ children }: { children: React.ReactNode }) => (
    <div className="my-6 overflow-x-auto">
      <table className="w-full border-collapse">{children}</table>
    </div>
  ),

  th: ({ children }: { children: React.ReactNode }) => (
    <th className="border px-4 py-2 text-left font-semibold">{children}</th>
  ),

  td: ({ children }: { children: React.ReactNode }) => (
    <td className="border px-4 py-2">{children}</td>
  ),
};

export default function MarkdownRenderer({ content }: { content: string }) {
  return (
    <div className="max-w-none">
      <ReactMarkdown
        remarkPlugins={[
          remarkGfm,
          remarkDirective,
          remarkFrontmatter,
          remarkMath,
          remarkParse,
          remarkRehype,
        ]}
        rehypePlugins={[
          rehypeFormat,
          rehypeKatex,
          rehypeRaw,
          rehypeSanitize,
          rehypeStringify,
        ]}
        components={components}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
