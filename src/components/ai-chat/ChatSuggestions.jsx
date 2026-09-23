"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SUGGESTED_QUESTIONS = [
  "What services does DASS DEV offer?",
  "I need a website for my business",
  "Tell me about your AI solutions",
  "How does DASS DEV work?",
];

export function ChatSuggestions({ onSelect, className }) {
  return (
    <div className={cn("grid grid-cols-1 gap-2", className)}>
      {SUGGESTED_QUESTIONS.map((question) => (
        <Button
          key={question}
          variant="outline"
          size="sm"
          onClick={() => onSelect(question)}
          className="justify-start text-left text-xs h-auto py-2.5 px-3 border-border/50 hover:border-primary/50 hover:bg-primary/5 hover:text-primary transition-all"
        >
          {question}
        </Button>
      ))}
    </div>
  );
}
