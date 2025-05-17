// app/api/generate/route.ts (if you're using App Router)
import { NextResponse } from "next/server";
import { generateProfileContent } from "@/lib/gemini/generateContent";

export async function POST(req: Request) {
  const { role, summary, skills } = await req.json();

  const prompt = `
    Create a professional freelancer profile bio for the role "${role}".
    Include skills: ${skills.join(", ")}.
    Make it sound fluent, confident, and expert.
    Add a summary based on: ${summary}
  `;

  try {
    const generated = await generateProfileContent(prompt);

    return NextResponse.json({ result: generated });
  } catch (error) {
    return NextResponse.json({ error: "Failed to generate content" }, { status: 500 });
  }
}
