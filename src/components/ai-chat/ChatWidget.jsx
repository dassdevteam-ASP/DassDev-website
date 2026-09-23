"use client";

import { useState, useEffect, useRef } from "react";
import { ChatLauncher } from "./ChatLauncher";
import { ChatWindow } from "./ChatWindow";

const POPUP_MESSAGES = [
  "Hey! How can I assist you today?",
  "Need help with your project?",
  "I'm here to help you succeed!",
  "Got questions? I've got answers!",
  "Let's build something amazing together!",
];

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [currentPopup, setCurrentPopup] = useState(0);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const popupTimerRef = useRef(null);
  const popupIntervalRef = useRef(null);

  // Popup notification logic
  useEffect(() => {
    if (!isOpen) {
      popupTimerRef.current = setTimeout(() => {
        setShowPopup(true);
      }, 3000);

      popupIntervalRef.current = setInterval(() => {
        setCurrentPopup((prev) => (prev + 1) % POPUP_MESSAGES.length);
        setShowPopup(true);
      }, 8000);
    }

    return () => {
      if (popupTimerRef.current) clearTimeout(popupTimerRef.current);
      if (popupIntervalRef.current) clearInterval(popupIntervalRef.current);
    };
  }, [isOpen]);

  // Handle escape key to close chat
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape" && isOpen) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const handleSendMessage = async (content) => {
    if (!content?.trim()) {
      return;
    }

    const userMessage = { role: "user", content: content.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/ai/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to get response");
      }

      const data = await response.json();
      const assistantMessage = {
        role: "assistant",
        content: data.content || data.answer || data,
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      console.error("Chat error:", err);
      setError(err.message);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry, I couldn't reach AgentDD right now. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setShowPopup(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
    setShowPopup(false);
  };

  const handlePopupClick = () => {
    handleOpen();
  };

  return (
    <>
      <ChatLauncher
        isOpen={isOpen}
        onClick={isOpen ? handleClose : handleOpen}
      />

      {showPopup && !isOpen && (
        <div
          onClick={handlePopupClick}
          role="button"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              handlePopupClick();
            }
          }}
          className="fixed bottom-28 right-6 z-40 max-w-xs cursor-pointer animate-in fade-in slide-in-from-bottom-4 duration-500 md:bottom-32 md:right-8"
        >
          <div className="rounded-lg border border-border bg-card px-4 py-3 shadow-lg transition-colors hover:bg-accent">
            <p className="text-sm font-medium text-foreground">
              {POPUP_MESSAGES[currentPopup]}
            </p>
          </div>
        </div>
      )}

      {isOpen && (
        <ChatWindow
          messages={messages}
          onSendMessage={handleSendMessage}
          onClose={handleClose}
          isLoading={isLoading}
          error={error}
          setMessages={setMessages}
        />
      )}
    </>
  );
}
