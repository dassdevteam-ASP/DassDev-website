"use client";

import ReactMarkdown from "react-markdown";
import { cn } from "@/lib/utils";

export function ChatMessage({ message, className }) {
  const isUser = message.role === "user";

  // Handle both old and new AI SDK message formats
  const content = message.content || message.text || "";

  return (
    <div
      className={cn(
        "flex w-full",
        isUser ? "justify-end" : "justify-start",
        className,
      )}
    >
      <div
        className={cn(
          "max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed",
          isUser
            ? "bg-primary text-primary-foreground rounded-tr-none"
            : "bg-muted text-foreground rounded-tl-none",
          "animate-in fade-in slide-in-from-bottom-2 duration-300",
        )}
      >
        {isUser ? (
          <div className="whitespace-pre-wrap break-words">{content}</div>
        ) : (
          <div className="prose prose-sm dark:prose-invert max-w-none">
            <ReactMarkdown
              components={{
                // Customize markdown components for better styling
                p: ({ children }) => (
                  <p className="mb-2 last:mb-0">{children}</p>
                ),
                ul: ({ children }) => (
                  <ul className="mb-2 ml-4 list-disc">{children}</ul>
                ),
                ol: ({ children }) => (
                  <ol className="mb-2 ml-4 list-decimal">{children}</ol>
                ),
                li: ({ children }) => <li className="mb-1">{children}</li>,
                strong: ({ children }) => (
                  <strong className="font-semibold">{children}</strong>
                ),
                a: ({ children, href }) => (
                  <a
                    href={href}
                    className="text-primary underline hover:text-primary/80"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {children}
                  </a>
                ),
                code: ({ children, className }) => {
                  const isInline = !className;
                  return isInline ? (
                    <code className="bg-muted-foreground/10 px-1.5 py-0.5 rounded text-xs font-mono">
                      {children}
                    </code>
                  ) : (
                    <code className="block bg-muted-foreground/10 p-3 rounded text-xs font-mono overflow-x-auto">
                      {children}
                    </code>
                  );
                },
                pre: ({ children }) => (
                  <pre className="bg-muted-foreground/10 p-3 rounded-lg overflow-x-auto mb-2">
                    {children}
                  </pre>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-2 border-border pl-3 italic my-2">
                    {children}
                  </blockquote>
                ),
                h1: ({ children }) => (
                  <h1 className="text-lg font-bold mb-2">{children}</h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-base font-semibold mb-2">{children}</h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-sm font-medium mb-2">{children}</h3>
                ),
              }}
            >
              {content}
            </ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}
