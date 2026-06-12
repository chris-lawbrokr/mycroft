"use client";

import {
  ChevronDown,
  FileLock,
  Globe,
  Landmark,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import { useState } from "react";
import { rhymesDisplay } from "./fonts";
import CardActions from "./card-actions";
import CallCtaMenu from "./call-cta-menu";

// Compliance example chips shown below the search input. Clicking one opens the
// chat dialogue seeded with that framework as the topic.
const CHIPS = [
  { icon: Landmark, label: "CMMC" },
  { icon: ShieldCheck, label: "SOC 2" },
  { icon: Globe, label: "GDPR" },
  { icon: FileLock, label: "HIPAA" },
];

// The hero card: green-grid background with Mycroft branding, top-row nav,
// supporting copy, and CTA buttons layered on top.
export default function VideoCard({
  onGoToSite,
}: {
  // Dismisses the intro overlay to reveal the embedded main site behind it.
  onGoToSite?: () => void;
}) {
  // Which compliance chip opened the chat, or null when the intro search view
  // is showing. Setting a topic grows the search input into a chat dialogue.
  const [chatTopic, setChatTopic] = useState<string | null>(null);

  return (
    <div className="relative mx-auto flex aspect-[1080/1920] w-full max-w-[min(100%,calc((100vh_-_10rem_-_8px)*9/16))] items-center justify-center overflow-hidden rounded-4xl text-[clamp(2rem,8vw,6rem)] font-bold text-[#111] min-[1150px]:aspect-[1920/1080] min-[1150px]:max-w-[min(100%,calc((100vh_-_10rem_-_8px)*16/9))]">
      {/* Mycroft green grid hero background. */}
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src="/bg.png"
        alt=""
        aria-hidden
      />
      {/* Mycroft wordmark, pinned top-left in place of the search bar. */}
      <img
        src="/images/mycroft-logo.svg"
        alt="Mycroft"
        className="absolute left-6 top-6 w-32 min-[1150px]:left-8 min-[1150px]:top-8 min-[1150px]:w-40"
      />
      {/* Center top: jump to the embedded main site behind the overlay. */}
      <button
        type="button"
        onClick={onGoToSite}
        className="absolute left-1/2 top-6 hidden -translate-x-1/2 items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-3 text-base font-normal text-white shadow-lg shadow-black/10 backdrop-blur-md transition-colors hover:bg-white/20 min-[1150px]:top-8 min-[1150px]:flex"
      >
        Go to main site
      </button>
      {/* Desktop: full call + CTA pills. Mobile: a single circular dropdown. */}
      <div className="absolute right-6 top-6 hidden items-center gap-3 min-[1150px]:right-8 min-[1150px]:top-8 min-[1150px]:flex">
        <button
          type="button"
          className="flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-3 text-base font-normal text-white shadow-lg shadow-black/10 backdrop-blur-md transition-colors hover:bg-white/20"
        >
          Book a Demo
        </button>
        <button
          type="button"
          className="flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-3 text-base font-normal text-white shadow-lg shadow-black/10 backdrop-blur-md transition-colors hover:bg-white/20"
        >
          Login
        </button>
      </div>
      <div className="absolute right-6 top-6 min-[1150px]:hidden">
        <CallCtaMenu />
      </div>
      {/* Center search section, moved over from the chat card. Clicking a
          compliance chip swaps this for a chat dialogue (see ChatBox). */}
      <div className="relative z-10 flex w-full max-w-3xl flex-col items-center gap-6 px-8 text-white">
        {chatTopic === null ? (
          <>
            <h2
              className={`text-center text-2xl font-medium leading-tight text-white min-[1150px]:text-4xl ${rhymesDisplay.className}`}
            >
              Security automated. Compliance solved.
            </h2>
            <div className="flex w-full items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-3 text-white shadow-lg shadow-black/10 backdrop-blur-md">
              <SearchGlyph />
              <input
                type="text"
                placeholder="Ask us about anything..."
                className="w-full bg-transparent text-base font-normal text-white placeholder:text-white/70 focus:outline-none"
              />
            </div>

            <div className="hidden w-full flex-wrap items-center justify-center gap-3 min-[1150px]:flex">
              {CHIPS.map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => setChatTopic(label)}
                  className="flex min-w-32 cursor-pointer items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-2 text-sm font-normal text-white shadow-lg shadow-black/10 backdrop-blur-md transition-colors hover:bg-white/20"
                >
                  <Icon className="size-4 text-white/80" />
                  {label}
                </button>
              ))}
            </div>
            <button
              type="button"
              className="flex cursor-pointer flex-col items-center gap-1 text-sm font-normal text-white/70 transition-colors hover:text-white"
            >
              I&apos;m looking for something else
              <ChevronDown className="size-4" />
            </button>
          </>
        ) : (
          <ChatBox topic={chatTopic} onClose={() => setChatTopic(null)} />
        )}
      </div>
      {/* Desktop-only customer testimonial pinned bottom-left, glass styled. */}
      <figure className="absolute bottom-8 left-8 hidden h-24 max-w-[520px] items-center gap-4 rounded-3xl border border-white/30 bg-white/10 px-6 text-left text-white shadow-lg shadow-black/10 backdrop-blur-md min-[1150px]:flex">
        <img
          src="/images/testimonial-icon.png"
          alt=""
          aria-hidden
          className="size-12 shrink-0 rounded-xl"
        />
        <div className="flex flex-col gap-1">
          <blockquote className="max-w-[300px] text-sm font-normal">
            Mycroft&apos;s 5-in-1 platform seamlessly consolidated our entire
            security stack.
          </blockquote>
          <button
            type="button"
            className="text-left text-xs font-medium text-white/70 transition-colors hover:text-white"
          >
            Read more
          </button>
        </div>
      </figure>
      <CardActions />
    </div>
  );
}

// The magnifier glyph used inside the search input and chat composer.
function SearchGlyph() {
  return (
    <svg
      className="h-5 w-5 shrink-0 text-white/80"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

// The grown-up search input: a glass chat dialogue seeded with the chosen
// compliance topic, with an X to collapse back to the search view.
function ChatBox({ topic, onClose }: { topic: string; onClose: () => void }) {
  // While closing, play the shrink animation; unmount once it finishes so the
  // fade-out mirrors the fade-in instead of vanishing instantly.
  const [closing, setClosing] = useState(false);

  return (
    <div
      onAnimationEnd={(e) => {
        // Only react to this element's own shrink, not the grow or any child.
        if (closing && e.target === e.currentTarget) onClose();
      }}
      className={`mx-auto flex h-[clamp(15rem,34vh,20rem)] w-full max-w-xl flex-col overflow-hidden rounded-3xl border border-white/30 bg-white/10 text-left text-white shadow-lg shadow-black/10 backdrop-blur-md ${
        closing ? "animate-chat-shrink" : "animate-chat-grow"
      }`}
    >
      {/* Header: topic + close. */}
      <div className="flex items-center justify-between border-b border-white/15 px-4 py-3">
        <div className="flex items-center gap-2 text-sm font-medium text-white/90">
          <Sparkles className="size-4 text-white/80" />
          {topic} compliance
        </div>
        <button
          type="button"
          onClick={() => setClosing(true)}
          aria-label="Close chat"
          className="flex size-7 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white/80 transition-colors hover:bg-white/20 hover:text-white"
        >
          <X className="size-4" />
        </button>
      </div>

      {/* Conversation. Seeded with an assistant greeting about the topic. */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        <div className="flex items-start gap-2.5">
          <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/15">
            <Sparkles className="size-3.5 text-white/80" />
          </span>
          <p className="max-w-sm rounded-2xl rounded-tl-sm border border-white/20 bg-white/10 px-3.5 py-2.5 text-sm font-normal leading-relaxed text-white/90">
            Hi — I can help you get {topic} compliant. Ask me about controls,
            evidence, or where you stand today.
          </p>
        </div>
      </div>

      {/* Composer: the search input, now docked at the bottom of the dialogue. */}
      <div className="border-t border-white/15 px-3 py-3">
        <div className="flex w-full items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2.5 text-white">
          <SearchGlyph />
          <input
            type="text"
            autoFocus
            placeholder={`Ask about ${topic}...`}
            className="w-full bg-transparent text-sm font-normal text-white placeholder:text-white/70 focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
}
