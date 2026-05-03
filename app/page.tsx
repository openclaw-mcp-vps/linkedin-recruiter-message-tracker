export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Recruiters & Talent Teams
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop Guessing.<br />
          <span className="text-[#58a6ff]">Track What Gets Replies.</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          RecruiterTrack analyzes your LinkedIn outreach, measures response rates by message type and send time, and surfaces AI-driven strategies so every message lands better.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Optimizing — $17/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">CSV upload or browser extension · Cancel anytime</p>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { stat: "3.2×", label: "Average reply rate lift after 30 days" },
            { stat: "AI", label: "Message categorization & pattern detection" },
            { stat: "Real-time", label: "Dashboard updated with every import" }
          ].map((item) => (
            <div key={item.stat} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl font-bold text-[#58a6ff] mb-1">{item.stat}</div>
              <div className="text-sm text-[#8b949e]">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-16">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-xs font-semibold text-[#58a6ff] uppercase tracking-widest mb-3">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$17<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to dominate outreach</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited message imports via CSV",
              "Response rate analytics by type & timing",
              "AI message categorization",
              "Optimal send-time recommendations",
              "Weekly performance digest email",
              "Browser extension (Chrome/Edge)"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">✓</span>{f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Get Started Now
          </a>
          <p className="mt-3 text-xs text-[#6e7681]">Secure checkout via Lemon Squeezy · Cancel anytime</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How do I import my LinkedIn messages?",
              a: "You can upload a CSV export from LinkedIn's data download, or use our Chrome/Edge browser extension to sync messages automatically in the background."
            },
            {
              q: "How does the AI categorize messages?",
              a: "Our AI classifies each message by type (cold outreach, follow-up, referral, etc.), detects tone and length patterns, and correlates them with response outcomes to surface what works."
            },
            {
              q: "Is my data kept private?",
              a: "Yes. Your message data is encrypted at rest, never sold or shared, and you can delete your account and all associated data at any time from your dashboard."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-sm text-[#8b949e]">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#6e7681] pb-8">
        © {new Date().getFullYear()} RecruiterTrack · Built for talent teams who move fast
      </footer>
    </main>
  );
}
