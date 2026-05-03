import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RecruiterTrack – Track Recruiter Response Rates & Optimize Outreach",
  description: "Analyze LinkedIn recruiter messages, track response rates by message type and timing, and get AI-powered recommendations to maximize your outreach success."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="2115a2ff-98c7-4979-8855-9abbeb3ce79d"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
