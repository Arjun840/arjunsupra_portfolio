import { NextResponse } from "next/server";

const systemPrompt =
  "You are a concise, friendly portfolio assistant. Answer only with facts the student provided about themselves. If you lack details, reply that you'll update soon.";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();
    if (!prompt) {
      return NextResponse.json(
        { reply: "Please add a prompt about me to get a response." },
        { status: 400 }
      );
    }

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({
        reply:
          "AI is in demo mode. Add your OPENAI_API_KEY in Vercel and I'll answer with your details."
      });
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: prompt }
        ],
        max_tokens: 180,
        temperature: 0.2
      })
    });

    if (!response.ok) {
      return NextResponse.json(
        { reply: "AI is unavailable right now. Try again soon." },
        { status: 500 }
      );
    }

    const data = await response.json();
    const reply =
      data?.choices?.[0]?.message?.content ??
      "I'll add my details here once configured.";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { reply: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
