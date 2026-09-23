"use client";

import { useEffect, useRef } from "react";
import { ChatMessage } from "./ChatMessage";
import { cn } from "@/lib/utils";

export function ChatMessages({ messages, isLoading, className }) {
  const hasMessages = messages.length > 0;
  const messagesEndRef = useRef(null);
  const scrollContainerRef = useRef(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current && scrollContainerRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading]);

  return (
    <div
      ref={scrollContainerRef}
      className={cn(
        "flex flex-col gap-4 overflow-y-auto px-5 py-4 h-full",
        "scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent",
        className,
      )}
    >
      {!hasMessages ? (
        <div className="flex flex-col items-center justify-center gap-4 py-8 text-center">
          <div className="flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary">
            <svg
              viewBox="0 0 100 100"
              className="size-8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Agent/AI circuit background */}
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="currentColor"
                opacity="0.08"
              />

              {/* Neural network lines */}
              <path
                d="M25 50 L40 35 L60 35 L75 50"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                opacity="0.3"
                strokeLinecap="round"
              />
              <path
                d="M25 50 L40 65 L60 65 L75 50"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                opacity="0.3"
                strokeLinecap="round"
              />
              <path
                d="M40 35 L40 65"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                opacity="0.3"
                strokeLinecap="round"
              />
              <path
                d="M60 35 L60 65"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                opacity="0.3"
                strokeLinecap="round"
              />

              {/* Central AI brain */}
              <circle
                cx="50"
                cy="50"
                r="18"
                fill="currentColor"
                opacity="0.15"
              />
              <circle
                cx="50"
                cy="50"
                r="14"
                fill="currentColor"
                opacity="0.25"
              />
              <circle cx="50" cy="50" r="10" fill="currentColor" />

              {/* AgentDD text */}
              <text
                x="50"
                y="52"
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="9"
                fontWeight="bold"
                fill="var(--primary)"
                fontFamily="system-ui, sans-serif"
                letterSpacing="0.5"
              >
                DD
              </text>
            </svg>
          </div>
          <div className="space-y-2">
            <div className="text-lg font-semibold text-foreground">
              Hi! I'm AgentDD
            </div>
            <div className="text-sm text-muted-foreground max-w-xs">
              Your AI assistant for DASS DEV. Ask about our services, websites,
              AI solutions, or how we can help with your project.
            </div>
          </div>
        </div>
      ) : (
        messages.map((message, index) => (
          <ChatMessage key={index} message={message} />
        ))
      )}
      {isLoading && (
        <div className="flex w-full justify-start">
          <div className="rounded-2xl rounded-tl-none bg-muted px-4 py-3 text-sm text-foreground">
            <div className="flex gap-1.5">
              <div
                className="size-2 rounded-full bg-foreground animate-pulse"
                style={{ animationDelay: "0ms" }}
              />
              <div
                className="size-2 rounded-full bg-foreground animate-pulse"
                style={{ animationDelay: "150ms" }}
              />
              <div
                className="size-2 rounded-full bg-foreground animate-pulse"
                style={{ animationDelay: "300ms" }}
              />
            </div>
          </div>
        </div>
      )}
      <div ref={messagesEndRef} />
    </div>
  );
}
