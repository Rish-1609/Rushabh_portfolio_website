import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import type { ChatCompletionMessageParam } from "openai/resources/chat/completions";
import {
  certifications,
  education,
  experience,
  heroAchievements,
  industries,
  profile,
  projects,
  researchPapers,
  resumeVariants,
  roleLenses,
  skillGroups,
} from "@/data/profile";

export const runtime = "nodejs";

type ChatRole = "user" | "assistant";

interface ChatMessage {
  role: ChatRole;
  content: string;
}

interface ChatAttachment {
  name: string;
  type: string;
  size: number;
  text?: string;
  dataUrl?: string;
}

interface ChatPayload {
  messages?: ChatMessage[];
  attachments?: ChatAttachment[];
}

const MAX_MESSAGES = 12;
const MAX_TEXT_CHARS = 6000;
const MAX_IMAGES = 3;

function truncate(value: string, maxLength = MAX_TEXT_CHARS) {
  return value.length > maxLength
    ? `${value.slice(0, maxLength)}\n...[truncated]`
    : value;
}

function buildKnowledgeBase() {
  return JSON.stringify(
    {
      profile,
      heroAchievements,
      roleLenses: roleLenses.map((role) => ({
        slug: role.slug,
        label: role.label,
        shortLabel: role.shortLabel,
        accent: role.accent,
        headline: role.headline,
        tagline: role.tagline,
        summary: role.summary,
        strengths: role.strengths,
        highlights: role.highlights,
        achievements: role.achievements,
        tools: role.tools,
        industries: role.industries,
        resumeFile: role.resumeFile,
      })),
      experience,
      education,
      certifications,
      researchPapers,
      projects,
      skillGroups,
      industries,
      resumeVariants,
      siteRoutes: {
        work: "/work",
        education: "/education",
        resume: "/resume",
        contact: "/contact",
      },
    },
    null,
    2,
  );
}

function systemPrompt() {
  return `You are the floating AI assistant for Rushabh Shah's personal portfolio website.

Your job:
- Answer questions about Rushabh Shah's background, work, education, research, resumes, projects, skills, and fit for roles.
- Be concise, polished, practical, and recruiter-friendly.
- Use only the portfolio knowledge base and user-provided uploaded context. Do not invent employers, degrees, metrics, publications, titles, or dates.
- If a user uploads a job description, resume, image, or note, compare it against Rushabh's profile and recommend the best matching resume or page.
- You are not Rushabh. Say "Rushabh" or "he" rather than pretending to be him.
- When useful, point users to /work, /education, /resume, or /contact, and mention relevant resume files by label.
- If information is not available, say so clearly and suggest contacting Rushabh through /contact.
- Do not provide legal, medical, immigration, or financial advice.
- Keep answers under 250 words unless the user asks for a detailed comparison.

Portfolio knowledge base:
${buildKnowledgeBase()}`;
}

function attachmentContext(attachments: ChatAttachment[] = []) {
  if (!attachments.length) return "";

  const details = attachments.map((file, index) => {
    const sizeKb = Math.max(1, Math.round(file.size / 1024));
    const extracted = file.text
      ? `\nExtracted text:\n${truncate(file.text)}`
      : file.dataUrl
        ? "\nImage attached for visual analysis."
        : "\nNo text could be extracted automatically; use the filename/type as context and ask the user to paste contents if needed.";

    return `Attachment ${index + 1}: ${file.name}\nType: ${file.type || "unknown"}\nSize: ${sizeKb} KB${extracted}`;
  });

  return `\n\nUploaded context:\n${details.join("\n\n")}`;
}

export async function POST(request: NextRequest) {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "OPENAI_API_KEY is not configured. Add it in .env.local and Vercel Environment Variables.",
      },
      { status: 500 },
    );
  }

  let payload: ChatPayload;

  try {
    payload = (await request.json()) as ChatPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request payload." }, { status: 400 });
  }

  const messages = (payload.messages || [])
    .filter(
      (message) =>
        (message.role === "user" || message.role === "assistant") &&
        typeof message.content === "string" &&
        message.content.trim().length > 0,
    )
    .slice(-MAX_MESSAGES);

  if (!messages.length) {
    return NextResponse.json({ error: "Send at least one message." }, { status: 400 });
  }

  const attachments = (payload.attachments || []).slice(0, MAX_IMAGES);
  const imageAttachments = attachments.filter(
    (file) => file.dataUrl && file.type.startsWith("image/"),
  );
  const lastUserIndex = messages.map((message) => message.role).lastIndexOf("user");

  const openaiMessages: ChatCompletionMessageParam[] = messages.map((message, index) => {
    const content =
      index === lastUserIndex
        ? `${message.content}${attachmentContext(attachments)}`
        : message.content;

    if (index === lastUserIndex && imageAttachments.length) {
      return {
        role: "user",
        content: [
          { type: "text" as const, text: content },
          ...imageAttachments.map((file) => ({
            type: "image_url" as const,
            image_url: { url: file.dataUrl as string },
          })),
        ],
      };
    }

    return message.role === "assistant"
      ? { role: "assistant", content }
      : { role: "user", content };
  });

  try {
    const client = new OpenAI({ apiKey });
    const completion = await client.chat.completions.create({
      model: process.env.OPENAI_MODEL || "gpt-4o-mini",
      temperature: 0.35,
      max_tokens: 900,
      messages: [{ role: "system", content: systemPrompt() }, ...openaiMessages],
    });

    const answer = completion.choices[0]?.message?.content?.trim();

    return NextResponse.json({
      answer:
        answer ||
        "I could not generate a response. Please try again or contact Rushabh directly through /contact.",
    });
  } catch (error) {
    console.error("Portfolio chatbot error", error);
    return NextResponse.json(
      { error: "The assistant is temporarily unavailable. Please try again soon." },
      { status: 500 },
    );
  }
}