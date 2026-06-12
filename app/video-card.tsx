import { ChevronDown, FileLock, Globe, ShieldCheck } from "lucide-react";
import { rhymesDisplay } from "./fonts";
import CardActions from "./card-actions";
import CallCtaMenu from "./call-cta-menu";

// The hero card: green-grid background with Mycroft branding, top-row nav,
// supporting copy, and CTA buttons layered on top.
export default function VideoCard({
  onGoToSite,
}: {
  // Dismisses the intro overlay to reveal the embedded main site behind it.
  onGoToSite?: () => void;
}) {
  return (
    <div className="relative mx-auto flex aspect-[1080/1920] w-full max-w-[min(100%,calc((100vh_-_10rem_-_8px)*9/16))] items-center justify-center overflow-hidden rounded-4xl text-[clamp(2rem,8vw,6rem)] font-bold text-[#111] min-[1080px]:aspect-[1920/1080] min-[1080px]:max-w-[min(100%,calc((100vh_-_10rem_-_8px)*16/9))]">
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
        className="absolute left-6 top-6 w-32 min-[1080px]:left-8 min-[1080px]:top-8 min-[1080px]:w-40"
      />
      {/* Center top: jump to the embedded main site behind the overlay. */}
      <button
        type="button"
        onClick={onGoToSite}
        className="absolute left-1/2 top-6 hidden -translate-x-1/2 items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-3 text-base font-normal text-white shadow-lg shadow-black/10 backdrop-blur-md transition-colors hover:bg-white/20 min-[1080px]:top-8 min-[1080px]:flex"
      >
        Go to main site
      </button>
      {/* Desktop: full call + CTA pills. Mobile: a single circular dropdown. */}
      <div className="absolute right-6 top-6 hidden items-center gap-3 min-[1080px]:right-8 min-[1080px]:top-8 min-[1080px]:flex">
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
      <div className="absolute right-6 top-6 min-[1080px]:hidden">
        <CallCtaMenu />
      </div>
      {/* Center search section, moved over from the chat card. */}
      <div className="relative z-10 flex w-full max-w-3xl flex-col items-center gap-6 px-8 text-white">
        <h2
          className={`text-center text-3xl font-medium leading-tight text-white min-[1080px]:text-4xl ${rhymesDisplay.className}`}
        >
          Security automated. Compliance solved.
        </h2>
        <div className="flex w-full items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-3 text-white shadow-lg shadow-black/10 backdrop-blur-md">
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
          <input
            type="text"
            placeholder="Ask us about anything..."
            className="w-full bg-transparent text-base font-normal text-white placeholder:text-white/70 focus:outline-none"
          />
        </div>

        <div className="hidden w-full flex-wrap items-center justify-center gap-3 min-[1080px]:flex">
          {[
            { icon: ShieldCheck, label: "SOC 2" },
            { icon: Globe, label: "GDPR" },
            { icon: FileLock, label: "HIPAA" },
          ].map(({ icon: Icon, label }) => (
            <button
              key={label}
              type="button"
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
      </div>
      {/* Desktop-only customer testimonial pinned bottom-left, glass styled. */}
      <figure className="absolute bottom-8 left-8 hidden h-24 max-w-[520px] items-center gap-4 rounded-3xl border border-white/30 bg-white/10 px-6 text-left text-white shadow-lg shadow-black/10 backdrop-blur-md min-[1080px]:flex">
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
