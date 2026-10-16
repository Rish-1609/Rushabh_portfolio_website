"use client";

import { FormEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import {
  Bot,
  CalendarDays,
  FileText,
  Loader2,
  MessageCircle,
  Mic,
  Paperclip,
  Send,
  Sparkles,
  Trash2,
  UploadCloud,
  Volume2,
  VolumeX,
  X,
} from "lucide-react";
import { profile } from "@/data/profile";

type MessageRole = "assistant" | "user";

interface ChatMessage {
  id: string;
  role: MessageRole;
  content: string;
}

interface ChatAttachment {
  id: string;
  name: string;
  type: string;
  size: number;
  text?: string;
  dataUrl?: string;
}

interface SpeechResultLike {
  0?: { transcript?: string };
}

interface SpeechRecognitionEventLike {
  results: ArrayLike<SpeechResultLike>;
}

interface SpeechRecognitionLike {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  onstart: (() => void) | null;
  onend: (() => void) | null;
  onerror: (() => void) | null;
  onresult: ((event: SpeechRecognitionEventLike) => void) | null;
  start: () => void;
  stop: () => void;
}

type SpeechRecognitionConstructor = new () => SpeechRecognitionLike;

type WindowWithSpeechRecognition = Window &
  typeof globalThis & {
    SpeechRecognition?: SpeechRecognitionConstructor;
    webkitSpeechRecognition?: SpeechRecognitionConstructor;
  };

const quickPrompts = [
  "What is Rushabh's current AI security work?",
  "Tell me about pharma commercial analytics.",
  "What work relates to retail analytics?",
  "Can I request a meeting with Rushabh?",
  "Summarize his research and education.",
];

const welcomeMessage: ChatMessage = {
  id: "welcome",
  role: "assistant",
  content:
    "Hi, I’m Rushabh’s portfolio assistant. Ask about his current AI security work, pharma commercial analytics, agentic AI, or education. Use Book time with Rushabh below to open Calendly.",
};

const MAX_FILES = 3;
const MAX_FILE_SIZE = 10 * 1024 * 1024;
const TEXT_LIMIT = 9000;

function createId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function formatBytes(size: number) {
  if (size < 1024) return `${size} B`;
  if (size < 1024 * 1024) return `${Math.round(size / 1024)} KB`;
  return `${(size / (1024 * 1024)).toFixed(1)} MB`;
}

function isTextLike(file: File) {
  const name = file.name.toLowerCase();
  return (
    file.type.startsWith("text/") ||
    [".txt", ".md", ".csv", ".json", ".log", ".xml", ".yaml", ".yml"].some(
      (extension) => name.endsWith(extension),
    )
  );
}

function readFileAsText(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || "").slice(0, TEXT_LIMIT));
    reader.onerror = () => reject(reader.error);
    reader.readAsText(file);
  });
}

function readFileAsDataUrl(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

function speak(text: string) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text.replace(/\s+/g, " "));
  utterance.rate = 0.95;
  utterance.pitch = 1;
  window.speechSynthesis.speak(utterance);
}

export function PortfolioChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([welcomeMessage]);
  const [input, setInput] = useState("");
  const [attachments, setAttachments] = useState<ChatAttachment[]>([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [listening, setListening] = useState(false);
  const [soundOn, setSoundOn] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<SpeechRecognitionLike | null>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, busy, open]);

  useEffect(() => {
    return () => {
      recognitionRef.current?.stop?.();
      if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    };
  }, []);

  async function addFiles(fileList: FileList | File[]) {
    setError(null);
    const incoming = Array.from(fileList).slice(0, MAX_FILES - attachments.length);

    if (attachments.length >= MAX_FILES) {
      setError(`You can attach up to ${MAX_FILES} files per message.`);
      return;
    }

    const parsed: ChatAttachment[] = [];

    for (const file of incoming) {
      if (file.size > MAX_FILE_SIZE) {
        setError(`${file.name} is larger than 10 MB. Please upload a smaller file.`);
        continue;
      }

      const item: ChatAttachment = {
        id: createId(),
        name: file.name,
        type: file.type || "application/octet-stream",
        size: file.size,
      };

      try {
        if (file.type.startsWith("image/")) {
          item.dataUrl = await readFileAsDataUrl(file);
        } else if (isTextLike(file)) {
          item.text = await readFileAsText(file);
        } else {
          item.text = `Uploaded file metadata only. Name: ${file.name}. Type: ${item.type}. Size: ${formatBytes(file.size)}. If this is a PDF, DOCX, spreadsheet, or presentation, ask the user to paste the key text if detailed content is required.`;
        }

        parsed.push(item);
      } catch {
        setError(`Could not read ${file.name}. Try a different file or paste the text.`);
      }
    }

    if (parsed.length) setAttachments((current) => [...current, ...parsed].slice(0, MAX_FILES));
  }

  async function sendMessage(messageText = input) {
    const trimmed = messageText.trim();
    if ((!trimmed && attachments.length === 0) || busy) return;

    const userMessage: ChatMessage = {
      id: createId(),
      role: "user",
      content: trimmed || "Please review the uploaded file and tell me how it relates to Rushabh's background.",
    };
    const nextMessages = [...messages, userMessage];

    setMessages(nextMessages);
    setInput("");
    setError(null);
    setBusy(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages, attachments }),
      });

      const data = (await response.json()) as { answer?: string; error?: string };

      if (!response.ok) throw new Error(data.error || "The assistant could not answer.");

      const assistantMessage: ChatMessage = {
        id: createId(),
        role: "assistant",
        content: data.answer || "I could not generate a response. Please try again.",
      };

      setMessages((current) => [...current, assistantMessage]);
      setAttachments([]);
      if (soundOn) speak(assistantMessage.content);
    } catch (chatError) {
      setError(chatError instanceof Error ? chatError.message : "The assistant is unavailable.");
    } finally {
      setBusy(false);
    }
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void sendMessage();
  }

  function onInputKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      void sendMessage();
    }
  }

  function startListening() {
    const browserWindow = window as WindowWithSpeechRecognition;
    const SpeechRecognition =
      browserWindow.SpeechRecognition || browserWindow.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setError("Voice input is not supported in this browser. You can still type your question.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.lang = "en-US";

    recognition.onstart = () => setListening(true);
    recognition.onend = () => setListening(false);
    recognition.onerror = () => {
      setListening(false);
      setError("Voice input stopped. Please try again or type your question.");
    };
    recognition.onresult = (event: SpeechRecognitionEventLike) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0]?.transcript || "")
        .join(" ")
        .trim();
      setInput(transcript);
    };

    recognitionRef.current = recognition;
    recognition.start();
  }

  return (
    <div className="fixed bottom-5 right-5 z-[80] sm:bottom-6 sm:right-6">
      {open ? (
        <section
          aria-label="Rushabh portfolio AI assistant"
          className="flex h-[min(720px,calc(100vh-2rem))] w-[calc(100vw-2rem)] max-w-[27rem] flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl shadow-ink/20 sm:w-[27rem]"
        >
          <header className="border-b border-border bg-ink px-4 py-3 text-white">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-white/10">
                  <Sparkles size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold">Ask about Rushabh</p>
                  <p className="text-xs text-white/70">AI architecture, research, resumes, fit checks</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setSoundOn((value) => !value)}
                  className="rounded-lg p-2 text-white/70 transition hover:bg-white/10 hover:text-white"
                  aria-label={soundOn ? "Turn read aloud off" : "Turn read aloud on"}
                >
                  {soundOn ? <Volume2 size={17} /> : <VolumeX size={17} />}
                </button>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-lg p-2 text-white/70 transition hover:bg-white/10 hover:text-white"
                  aria-label="Close assistant"
                >
                  <X size={18} />
                </button>
              </div>
            </div>
          </header>

          <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto bg-background px-4 py-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-2 ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {message.role === "assistant" ? (
                  <div className="mt-1 flex size-7 shrink-0 items-center justify-center rounded-full bg-ink text-white">
                    <Bot size={15} />
                  </div>
                ) : null}
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                    message.role === "user"
                      ? "bg-ink text-white"
                      : "border border-border bg-surface text-foreground"
                  }`}
                >
                  {message.content.split("\n").map((line, index) => (
                    <p key={`${message.id}-${index}`} className={index ? "mt-2" : ""}>
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {busy ? (
              <div className="flex items-center gap-2 text-sm text-muted">
                <Loader2 size={16} className="animate-spin" />
                Thinking through Rushabh&apos;s profile...
              </div>
            ) : null}
          </div>

          <div className="border-t border-border bg-surface p-3">
            <div className="mb-3 flex gap-2 overflow-x-auto pb-1">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => void sendMessage(prompt)}
                  disabled={busy}
                  className="shrink-0 rounded-full border border-border bg-background px-3 py-1.5 text-xs text-muted transition hover:border-ink/30 hover:text-ink disabled:opacity-50"
                >
                  {prompt}
                </button>
              ))}
            </div>

            <a
              href={profile.calendly}
              target="_blank"
              rel="noreferrer"
              className="mb-3 inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 text-xs font-medium text-ink transition-colors hover:border-ink/30"
            >
              <CalendarDays size={14} /> Book time with Rushabh
            </a>

            {attachments.length ? (
              <div className="mb-3 space-y-2 rounded-xl border border-border bg-background p-2">
                {attachments.map((file) => (
                  <div key={file.id} className="flex items-center justify-between gap-2 text-xs text-muted">
                    <span className="flex min-w-0 items-center gap-2">
                      <FileText size={14} className="shrink-0" />
                      <span className="truncate">{file.name}</span>
                      <span className="shrink-0">{formatBytes(file.size)}</span>
                    </span>
                    <button
                      type="button"
                      onClick={() => setAttachments((current) => current.filter((item) => item.id !== file.id))}
                      className="rounded-md p-1 transition hover:bg-border/60 hover:text-ink"
                      aria-label={`Remove ${file.name}`}
                    >
                      <X size={14} />
                    </button>
                  </div>
                ))}
              </div>
            ) : null}

            {error ? <p className="mb-2 text-xs text-red-600">{error}</p> : null}

            <form
              onSubmit={onSubmit}
              onDragOver={(event) => event.preventDefault()}
              onDrop={(event) => {
                event.preventDefault();
                void addFiles(event.dataTransfer.files);
              }}
              className="rounded-2xl border border-border bg-background p-2 focus-within:border-ink/40"
            >
              <textarea
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={onInputKeyDown}
                placeholder="Ask a question or drop a job description here..."
                rows={2}
                className="max-h-28 w-full resize-none bg-transparent px-2 py-1 text-sm text-foreground outline-none placeholder:text-muted"
              />
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-1">
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    className="hidden"
                    onChange={(event) => {
                      if (event.target.files) void addFiles(event.target.files);
                      event.currentTarget.value = "";
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="rounded-lg p-2 text-muted transition hover:bg-border/60 hover:text-ink"
                    aria-label="Attach files"
                  >
                    <Paperclip size={17} />
                  </button>
                  <button
                    type="button"
                    onClick={startListening}
                    className={`rounded-lg p-2 transition hover:bg-border/60 ${
                      listening ? "text-accent" : "text-muted hover:text-ink"
                    }`}
                    aria-label="Use voice input"
                  >
                    <Mic size={17} />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setMessages([welcomeMessage]);
                      setAttachments([]);
                      setError(null);
                    }}
                    className="rounded-lg p-2 text-muted transition hover:bg-border/60 hover:text-ink"
                    aria-label="Clear chat"
                  >
                    <Trash2 size={17} />
                  </button>
                </div>
                <button
                  type="submit"
                  disabled={busy || (!input.trim() && attachments.length === 0)}
                  className="inline-flex items-center gap-2 rounded-xl bg-ink px-3 py-2 text-sm font-medium text-white transition hover:bg-ink/90 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {busy ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                  Send
                </button>
              </div>
            </form>

            <div className="mt-2 flex items-center justify-between gap-2 text-[11px] text-muted">
              <span className="inline-flex items-center gap-1">
                <UploadCloud size={13} /> Drag files here. Images and text are read directly.
              </span>
              <span>Verify critical details.</span>
            </div>
          </div>
        </section>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="group relative flex size-16 items-center justify-center rounded-full bg-ink text-white shadow-2xl shadow-ink/25 transition hover:-translate-y-1 hover:bg-ink/95"
          aria-label="Open Rushabh AI assistant"
        >
          <span className="absolute inset-0 rounded-full bg-accent/30 opacity-75 blur-md transition group-hover:opacity-100" />
          <MessageCircle size={27} className="relative" />
          <span className="absolute -right-1 -top-1 flex size-6 items-center justify-center rounded-full border-2 border-background bg-accent text-[10px] font-bold">
            AI
          </span>
        </button>
      )}
    </div>
  );
}