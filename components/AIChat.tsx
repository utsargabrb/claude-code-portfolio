"use client";

import { useEffect, useRef, useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const STARTER_PROMPTS = [
  "Tell me about your AI Operations & Project Management experience",
  "What projects have you built?",
  "What skills & CRM tools do you use?",
];

export function AIChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hello — I'm the portfolio assistant. Ask me anything about the work, skills, or background shown on this site.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    const userMessage: Message = { role: "user", content: trimmed };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const history = messages
        .filter((m) => m.role === "user" || m.role === "assistant")
        .map((m) => ({ role: m.role, content: m.content }));

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed, history }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            error instanceof Error
              ? error.message
              : "Sorry, I couldn't respond right now. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    sendMessage(input);
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-label={open ? "Close AI assistant" : "Open AI assistant"}
        className="fixed bottom-6 right-6 z-50 flex h-14 items-center gap-3 rounded-full border border-accent/30 bg-accent px-6 text-sm font-medium text-foreground shadow-[0_0_30px_rgba(196,92,38,0.3)] transition-all duration-300 hover:bg-accent-bright md:bottom-8 md:right-8"
      >
        <span className="font-display text-base">Ask AI</span>
        <span
          className={`inline-block transition-transform duration-300 ${open ? "rotate-45" : ""}`}
        >
          +
        </span>
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 flex w-[calc(100vw-3rem)] max-w-md flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-2xl md:bottom-28 md:right-8">
          <div className="border-b border-border px-5 py-4">
            <p className="font-display text-lg font-semibold text-foreground">
              Portfolio Assistant
            </p>
            <p className="text-xs text-muted">Powered by NVIDIA NIM</p>
          </div>

          <div className="flex max-h-80 flex-1 flex-col gap-4 overflow-y-auto px-5 py-4">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`max-w-[90%] text-sm leading-relaxed ${
                  message.role === "user"
                    ? "ml-auto rounded-2xl rounded-br-sm bg-accent px-4 py-3 text-white"
                    : "rounded-2xl rounded-bl-sm bg-accent-soft px-4 py-3 text-foreground"
                }`}
              >
                {message.content}
              </div>
            ))}
            {loading && (
              <p className="text-sm italic text-muted">Thinking…</p>
            )}
            <div ref={messagesEndRef} />
          </div>

          {messages.length === 1 && (
            <div className="flex flex-wrap gap-2 border-t border-border px-5 py-3">
              {STARTER_PROMPTS.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => sendMessage(prompt)}
                  className="rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted transition-colors duration-300 hover:border-accent hover:text-accent"
                >
                  {prompt}
                </button>
              ))}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="flex gap-2 border-t border-border p-4"
          >
            <input
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about my work…"
              disabled={loading}
              className="flex-1 rounded-full border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors duration-300 placeholder:text-muted/60 focus:border-accent disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors duration-300 hover:bg-accent disabled:opacity-40"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
}
