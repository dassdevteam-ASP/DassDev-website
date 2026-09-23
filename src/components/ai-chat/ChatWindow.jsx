"use client";

import { X, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChatMessages } from "./ChatMessages";
import { ChatInput } from "./ChatInput";
import { ChatSuggestions } from "./ChatSuggestions";
import { cn } from "@/lib/utils";

export function ChatWindow({
  messages,
  onSendMessage,
  onClose,
  isLoading,
  error,
  setMessages,
  className,
}) {
  const hasMessages = messages.length > 0;

  return (
    <div
      className={cn(
        "fixed bottom-28 right-6 z-50 w-[calc(100vw-3rem)] max-w-sm",
        "md:bottom-32 md:right-8 md:max-w-md",
        "rounded-xl border border-border bg-card shadow-2xl",
        "flex flex-col transition-all duration-300 ease-in-out",
        "animate-in fade-in slide-in-from-bottom-4 zoom-in-95",
        className,
      )}
      style={{ height: "min(600px, calc(100vh - 14rem))" }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="chat-header"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border bg-gradient-to-r from-primary/10 to-primary/5 px-5 py-4">
        <div className="flex items-center gap-3">
          {/* Black and white D logo */}
          <div className="flex size-10 items-center justify-center rounded-lg bg-background border border-border">
            <svg
              viewBox="0 0 100 100"
              className="size-6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* Simple D letter in black and white */}
              <rect x="10" y="20" width="25" height="60" fill="currentColor" />
              <rect x="10" y="20" width="60" height="15" fill="currentColor" />
              <rect x="45" y="35" width="25" height="45" fill="currentColor" />
            </svg>
          </div>
          <div>
            <div className="font-semibold text-foreground" id="chat-header">
              AgentDD
            </div>
            <div className="text-xs text-muted-foreground">
              Your AI assistant for DASS DEV
            </div>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={onClose}
          aria-label="Close AgentDD assistant"
          className="hover:bg-destructive/10 hover:text-destructive"
        >
          <X className="size-4" aria-hidden="true" />
        </Button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-hidden">
        <ChatMessages messages={messages} isLoading={isLoading} />
      </div>

      {/* Suggestions (only show when no messages) */}
      {!hasMessages && (
        <div className="border-t border-border bg-muted/30 px-5 py-4">
          <div className="mb-3 text-sm font-medium text-foreground">
            Explore DASS DEV
          </div>
          <ChatSuggestions onSelect={onSendMessage} />
        </div>
      )}

      {/* Error display */}
      {error && (
        <div className="mx-4 mb-3 rounded-lg bg-destructive/10 px-4 py-2 text-sm text-destructive">
          Something went wrong. Please try again.
        </div>
      )}

      {/* Input */}
      <div className="border-t border-border bg-muted/30 px-4 py-4">
        <div className="flex gap-2">
          <div className="flex-1">
            <ChatInput onSend={onSendMessage} disabled={isLoading} />
          </div>
          {hasMessages && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMessages([])}
              disabled={isLoading}
              aria-label="Clear chat"
              className="size-10 shrink-0"
              title="Clear chat"
            >
              <RotateCcw className="size-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
