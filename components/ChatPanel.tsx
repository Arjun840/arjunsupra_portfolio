'use client';

import { useState } from "react";

export default function ChatPanel() {
  const [prompt, setPrompt] = useState("");
  const [reply, setReply] = useState(
    "Ask me about my projects, coursework, or what I'm exploring next."
  );
  const [loading, setLoading] = useState(false);

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

  return (
    <div className="chat">
      <textarea
        value={prompt}
        placeholder="Ask me anything..."
        onChange={(e) => setPrompt(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
            handleSend();
          }
        }}
      />
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <button className="button" onClick={handleSend} disabled={loading}>
          {loading ? "..." : "Send"}
        </button>
        <span className="muted" style={{ fontSize: "13px" }}>
          Press ⌘+Enter to send
        </span>
      </div>
      {reply && (
        <div className="chat-response" style={{ marginTop: "1rem" }}>
          <p style={{ margin: 0, fontSize: "15px" }}>{reply}</p>
        </div>
      )}
    </div>
  );
}
