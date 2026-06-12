import ClonedSite from "./cloned-site";
import Overlay from "./overlay";

// Self-contained snapshot of the live homepage, captured by scripts/clone.mjs
// and served as a static file from /public so it never bloats this page.
export default function Home() {
  return (
    <>
      <ClonedSite src="/clone.html" title="Mycroft" />
      <Overlay />
    </>
  );
}
