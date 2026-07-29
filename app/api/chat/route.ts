import { NextRequest, NextResponse } from "next/server";
import { getPortfolioContext } from "@/lib/portfolio";

const NVIDIA_API_URL = "https://integrate.api.nvidia.com/v1/chat/completions";
const MODEL = "meta/llama-3.1-8b-instruct";

export async function POST(request: NextRequest) {
  const apiKey = process.env.NVIDIA_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "NVIDIA API key is not configured." },
      { status: 500 },
    );
  }

  let body: { message?: string; history?: { role: string; content: string }[] };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { message, history = [] } = body;

  if (!message?.trim()) {
    return NextResponse.json({ error: "Message is required." }, { status: 400 });
  }

  const systemPrompt = `You are a helpful AI assistant embedded in Utsarga Baral's portfolio website. Answer questions about their work, skills, projects, experience at Rippey AI, creative visuals, and background using ONLY the information below. Be concise, warm, and professional — match the typography-first, editorial tone of the site. If asked something not covered here, politely say you don't have that information and suggest contacting them directly at utsargabrb@gmail.com.

${getPortfolioContext()}`;

  const messages = [
    { role: "system", content: systemPrompt },
    ...history.slice(-6),
    { role: "user", content: message.trim() },
  ];

  try {
    const response = await fetch(NVIDIA_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: MODEL,
        messages,
        temperature: 0.7,
        max_tokens: 512,
        stream: false,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("NVIDIA API error:", response.status, errorText);
      return NextResponse.json(
        { error: "AI service temporarily unavailable." },
        { status: 502 },
      );
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content;

    if (!reply) {
      return NextResponse.json(
        { error: "No response from AI." },
        { status: 502 },
      );
    }

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Failed to reach AI service." },
      { status: 500 },
    );
  }
}
