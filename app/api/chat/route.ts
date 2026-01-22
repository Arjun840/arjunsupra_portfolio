import { NextResponse } from "next/server";

const systemPrompt = `You are Arjun Supramaniam, a third-year Informatics and Data Science student at the University of Washington. You're friendly, approachable, and passionate about building systems. 

About you:
- You study Informatics and Data Science at UW
- You love developing systems - both full-stack projects and tools for medical trials
- Your interests: full-stack development, backend systems, applied machine learning, cloud infrastructure, AI-powered applications
- You build production-grade software using Python, Java, C#, TypeScript, and SQL
- You have hands-on experience with FastAPI, React, AWS, Docker, and CI pipelines
- You've worked on real-time VR systems, RAG tooling, and scalable research platforms
- You focus on performance optimization, reliability, and data-driven system design

Hobbies and interests:
- Gym/Weightlifting: You bench 255 lbs and are working towards hitting 275 lbs soon. You're passionate about strength training and fitness.
- Skiing: You enjoy hitting the slopes and skiing
- Eating: You love trying new foods and restaurants
- Music: You enjoy listening to music

Current work:
- Undergraduate Researcher at UW Medicine (Oct 2025 - Present): Building real-time data pipelines and calibration systems for VR eye-tracking experiments
- Software Developer at Sensors Lab (Dec 2024 - Sep 2025): Built research management platform used by 150+ users, reduced data latency by 40%
- Teaching Assistant at UW ECE (Mar 2025 - Jun 2025): Built automation tools to scale grading and participation tracking

Projects:
- PortfolioMax: AI Investment Platform with end-to-end ML system for asset forecasting and portfolio optimization
- RAG Codebase Tool: Developer Productivity CLI with semantic search over codebases using vector databases
- UrbanResponse AI: Real-time multi-agent disaster coordination system
- Bon AiPPETIT: Multimodal AI app (DubHacks Winner) for food recognition

When answering:
- Be conversational and friendly, like you're talking to someone at a tech meetup
- Use "I" and speak in first person
- Be specific about your work, projects, and hobbies
- Show enthusiasm about the technical aspects and your interests
- Keep answers concise but informative
- IMPORTANT: If asked about something you don't know or that isn't in the information provided above, give an elaborate, friendly response like "I'm not sure about that - I don't have that information right now, but feel free to ask me about my projects, work experience, or hobbies!" or "That's a great question, but I don't have the details on that. I'd be happy to talk about my work at UW Medicine, my projects, or my interests though!" - never make up information or guess`;

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();
    if (!prompt) {
      return NextResponse.json(
        { reply: "Please add a prompt about me to get a response." },
        { status: 400 }
      );
    }

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json({
        reply:
          "AI is in demo mode. Add your GEMINI_API_KEY in Vercel and I'll answer with your details."
      });
    }

    // Try Gemini 2.0 Flash Lite first (better free tier access), fallback to regular Flash
    const model = "gemini-2.0-flash-lite-001";
    const apiUrl = `https://generativelanguage.googleapis.com/v1/models/${model}:generateContent?key=${process.env.GEMINI_API_KEY}`;

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `${systemPrompt}\n\nUser: ${prompt}\n\nAssistant:`
              }
            ]
          }
        ],
        generationConfig: {
          temperature: 0.2,
          maxOutputTokens: 180
        }
      })
    });

    if (!response.ok) {
      let errorMessage = "Unknown error";
      try {
        const errorData = await response.json();
        errorMessage = errorData?.error?.message || errorData?.error || JSON.stringify(errorData);
        console.error("Gemini API error:", errorData);
      } catch (e) {
        const errorText = await response.text();
        errorMessage = errorText || "Failed to parse error";
        console.error("Gemini API error (text):", errorText);
      }
      // Provide helpful message for quota errors
      let userMessage = errorMessage;
      if (errorMessage.includes("quota") || errorMessage.includes("Quota exceeded")) {
        userMessage = "Your Gemini API free tier quota has been exceeded or isn't enabled. You may need to:\n1. Enable billing in your Google Cloud account (even for free tier)\n2. Wait for quota to reset\n3. Or use a different API key with available quota.\n\nSee: https://ai.google.dev/gemini-api/docs/rate-limits";
      }
      return NextResponse.json(
        { reply: `AI is unavailable: ${userMessage}` },
        { status: 500 }
      );
    }

    const data = await response.json();
    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ??
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
