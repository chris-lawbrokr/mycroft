import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mycroft",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        {/* Real Boxii widget. Loaded afterInteractive (post-hydration) — the
            widget mutates <html>/<body> and injects PostHog, so running it
            before hydration (beforeInteractive) causes hydration mismatches. */}
        <Script
          src="https://cdn.lawbrokr.com/js/latest/boxii.min.js"
          data-site-id="mycroft"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
