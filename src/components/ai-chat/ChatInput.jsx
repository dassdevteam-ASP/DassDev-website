"use client";

import { useState } from "react";
import { Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function ChatInput({ onSend, disabled, className }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() && !disabled) {
      onSend(input.trim());
      setInput("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={cn("flex gap-2", className)}>
      <div className="relative flex-1">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask AgentDD..."
          disabled={disabled}
          className="pr-8 h-10"
          aria-label="AgentDD chat input"
        />
        {input && (
          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            onClick={() => setInput("")}
            className="absolute right-1 top-1/2 -translate-y-1/2 size-6 hover:bg-muted"
            aria-label="Clear input"
          >
            <X className="size-3" />
          </Button>
        )}
      </div>
      <Button
        type="submit"
        variant="default"
        size="icon"
        disabled={disabled || !input.trim()}
        aria-label="Send message"
        className="size-10 shrink-0"
      >
        <Send className="size-4" />
      </Button>
    </form>
  );
}
