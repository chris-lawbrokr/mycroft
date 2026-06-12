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
      <span
        className={`relative px-10 text-center text-[clamp(2.25rem,11vw,3.5rem)] leading-[1.1] text-[#e3d9bf] min-[1080px]:px-0 min-[1080px]:text-[clamp(2rem,8vw,6rem)] ${rhymesDisplay.className}`}
      >
        The People's
        <br className="min-[1080px]:hidden" /> Attorney
      </span>
      {/* Supporting copy is desktop-only; the mobile card stays uncluttered. */}
      <div className="absolute bottom-8 left-8 hidden max-w-[55%] text-left text-white min-[1080px]:block">
        <p className="mb-4 text-sm font-normal">
          <b>Top-Reviewed Lawyers Serving Oklahoma City</b>
        </p>
        <p className="mt-2 max-w-[400px] text-sm font-normal leading-tight">
          We’re different from other law firms in OKC. Younger, more innovative,
          and with the dynamic energy that your complex legal matter needs.
          We’re tough on the opposition and fiercely dedicated to your rights.
        </p>
      </div>
      <CardActions />
    </div>
  );
}
