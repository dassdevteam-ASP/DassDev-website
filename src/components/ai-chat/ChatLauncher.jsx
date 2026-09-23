"use client";

import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ChatLauncher({ isOpen, onClick, className }) {
  return (
    <Button
      onClick={onClick}
      variant="default"
      size="icon"
      className={cn(
        "fixed bottom-6 right-6 z-50 rounded-full shadow-lg size-16",
        "md:bottom-8 md:right-8 md:size-20",
        "transition-all duration-300 ease-in-out",
        "hover:scale-105 active:scale-95 focus-visible:ring-4 focus-visible:ring-ring/50",
        className,
      )}
      aria-label={isOpen ? "Close AgentDD assistant" : "Open AgentDD assistant"}
      aria-expanded={isOpen}
      aria-haspopup="dialog"
    >
      <MessageSquare className="size-8 md:size-10" aria-hidden="true" />
    </Button>
  );
}
