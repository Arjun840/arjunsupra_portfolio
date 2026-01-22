'use client';

import { useState, useEffect } from "react";

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  async function handleSend() {
    if (!prompt.trim()) return;
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt })
      });
      const data = await res.json();
      setReply(data.reply || "I will update this with a real answer soon.");
    } catch (error) {
      console.error(error);
      setReply("Something went wrong. Try again in a moment.");
    } finally {
      setLoading(false);
    }
  }

  if (!isOpen) return null;

  return (
    <>
      <div 
        className="command-overlay"
        onClick={() => setIsOpen(false)}
      />
      <div className="command-palette">
        <div className="command-header">
          <span className="muted" style={{ fontSize: "13px" }}>Ask me anything</span>
          <button 
            onClick={() => setIsOpen(false)}
            style={{ 
              background: "none", 
              border: "none", 
              fontSize: "20px", 
              cursor: "pointer",
              color: "var(--muted)",
              padding: 0,
              width: "24px",
              height: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            ×
          </button>
        </div>
        <textarea
          value={prompt}
          placeholder="Ask me anything about my previous work, hobbies, and interests"
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
              e.preventDefault();
              handleSend();
            }
          }}
          autoFocus
          className="command-input"
        />
        <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginTop: "0.75rem" }}>
          <button className="button" onClick={handleSend} disabled={loading}>
            {loading ? "..." : "Send"}
          </button>
          <span className="muted" style={{ fontSize: "12px" }}>
            Press ⌘+Enter to send, Esc to close
          </span>
        </div>
        {reply && (
          <div className="chat-response" style={{ marginTop: "1rem" }}>
            <p style={{ margin: 0, fontSize: "15px" }}>{reply}</p>
          </div>
        )}
      </div>
    </>
  );
}
