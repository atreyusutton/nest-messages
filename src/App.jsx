import React from 'react'

const MessageCard = ({ author = "NEST", text = "You matter more than you know. One tiny step today is a win.", time = "3:11 PM", tone = "uplift" }) => {
  const toneStyles = {
    uplift: "bg-emerald-600/10 border-emerald-500/30",
    calm: "bg-sky-600/10 border-sky-500/30",
    affirm: "bg-violet-600/10 border-violet-500/30",
  };
  return (
    <div className={`border ${toneStyles[tone]} rounded-2xl p-4 backdrop-blur-sm`}> 
      <div className="text-xs opacity-70 mb-1">{author} • {time}</div>
      <p className="text-sm leading-relaxed">{text}</p>
    </div>
  );
};

const Stat = ({ value, label }) => (
  <div className="text-center">
    <div className="text-3xl font-semibold tracking-tight">{value}</div>
    <div className="text-sm opacity-70">{label}</div>
  </div>
);

const Section = ({ id, eyebrow, title, desc, children }) => (
  <section id={id} className="relative py-20 md:py-28">
    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950" />
    <div className="container mx-auto max-w-6xl px-6">
      <div className="max-w-3xl">
        {eyebrow && <div className="text-xs tracking-widest uppercase text-emerald-600 dark:text-emerald-400 mb-3">{eyebrow}</div>}
        <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-4">{title}</h2>
        {desc && <p className="text-slate-600 dark:text-slate-300 mb-10 max-w-2xl">{desc}</p>}
      </div>
      {children}
    </div>
  </section>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-emerald-200/60 dark:selection:bg-emerald-400/30">
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-slate-950/50 border-b border-slate-900/5 dark:border-slate-50/10">
        <div className="container mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 group">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0">
              <path d="M4 12c0-3 2-5.5 5-7.5S15 2 18 4s3 6 0 9-8 6-11 6 0-3 0-7z" className="fill-emerald-500/90 dark:fill-emerald-400/90"/>
              <circle cx="12" cy="12" r="3" className="fill-white/90 dark:fill-slate-950/90"/>
            </svg>
            <span className="font-semibold tracking-tight text-lg">NEST Messages</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#how" className="opacity-80 hover:opacity-100">How it works</a>
            <a href="#examples" className="opacity-80 hover:opacity-100">Message styles</a>
            <a href="#safety" className="opacity-80 hover:opacity-100">Safety</a>
            <a href="#faq" className="opacity-80 hover:opacity-100">FAQ</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="#signup" className="px-4 py-2 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:opacity-90 transition">Get started</a>
          </div>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute -top-40 -right-20 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="container mx-auto max-w-6xl px-6 py-24 md:py-32 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
              Gentle, timely messages that help youth feel seen—and keep going.
            </h1>
            <p className="mt-5 text-lg text-slate-600 dark:text-slate-300 max-w-xl">
              NEST Messages delivers short, evidence-informed nudges that normalize feelings, build skills, and point to real resources—without the phone-as-a-prop. 
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#signup" className="px-5 py-3 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition">Start free</a>
              <a href="#how" className="px-5 py-3 rounded-xl border border-slate-300/60 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900 transition">See how it works</a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6">
              <Stat value="92%" label="report feeling more supported" />
              <Stat value="3×" label="more check‑ins completed" />
              <Stat value="<30s" label="average message read time" />
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 p-6 bg-white/70 dark:bg-slate-950/60 backdrop-blur shadow-xl">
              <div className="text-sm font-medium mb-4">Today • Your feed</div>
              <div className="grid gap-3">
                <MessageCard tone="uplift" text="If today feels heavy, you don’t have to carry it alone. Try a 30‑second box breath with us." />
                <MessageCard tone="calm" text="New skill: A thought isn’t a fact. Practice saying: ‘I’m noticing the thought that…’ and let it pass." />
                <MessageCard tone="affirm" text="Reminder: Your worth isn’t measured by productivity. Rest is part of progress." />
                <div className="text-xs opacity-70 mt-2">Content reviewed by licensed clinicians. Crisis resources always one tap away.</div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 rotate-6" />
          </div>
        </div>
      </section>

      <Section
        id="how"
        eyebrow="How it works"
        title="Positive micro‑interventions, delivered where youth already are"
        desc="Choose message themes, pick when you want them, and we’ll deliver supportive nudges with optional check‑ins and simple practices. Educators and parents can create private groups to coordinate support."
      >
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "1) Set your vibe",
              body: "Select topics like stress, sleep, friendships, body image, or motivation. Update anytime.",
            },
            {
              title: "2) Pick your rhythm",
              body: "Daily, weekly, or just‑in‑time before tests, games, or big days—messages meet the moment.",
            },
            {
              title: "3) Build habits",
              body: "Each note pairs a tiny practice: breathe, reframe, move, check‑in, or reach out to a trusted person.",
            },
          ].map((f, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6 bg-white/70 dark:bg-slate-950/60">
              <h3 className="font-semibold mb-2">{f.title}</h3>
              <p className="text-slate-600 dark:text-slate-300">{f.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="examples"
        eyebrow="Message styles"
        title="A mix of tones that meet different needs"
        desc="Every feed blends validation, skills, and gentle action. Here are a few examples you can tailor to your audience."
      >
        <div className="grid md:grid-cols-3 gap-6">
          <MessageCard tone="uplift" author="NEST • Uplift" time="8:01 AM" text="You’re not behind. You’re on your path. Today, try one small thing you’ll be proud of at bedtime." />
          <MessageCard tone="calm" author="NEST • Calm" time="12:22 PM" text="Box breathe: In 4 • hold 4 • out 4 • hold 4. Repeat 3×. Notice your shoulders?" />
          <MessageCard tone="affirm" author="NEST • Affirm" time="9:47 PM" text="It’s okay to ask for help. Bravery isn’t doing it alone—it’s naming what you need." />
        </div>
      </Section>

      <Section
        id="safety"
        eyebrow="Safety first"
        title="Built with clinicians and educators, privacy by design"
        desc="NEST never sells data. Youth control their feed and can mute or pause at any time. Human‑vetted content, crisis links always visible, and optional school/org partnerships for wraparound support."
      >
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Clinical review", body: "All content reviewed with licensed professionals and aligned with best practices." },
            { title: "Privacy controls", body: "No tracking for ads. Clear settings for who sees what. Data minimization." },
            { title: "Real resources", body: "Direct links to local and national help lines. 24/7 crisis options in every view." },
          ].map((f, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6 bg-white/70 dark:bg-slate-950/60">
              <h3 className="font-semibold mb-2">{f.title}</h3>
              <p className="text-slate-600 dark:text-slate-300">{f.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="signup"
        eyebrow="Get started"
        title="Join the NEST—free for youth and educators"
        desc="Enter your email to get early access and a starter pack of message themes. We’ll follow up with setup details."
      >
        <form className="max-w-xl grid gap-4" onSubmit={(e)=>e.preventDefault()}>
          <label className="text-sm" htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="you@example.com" className="w-full rounded-xl border border-slate-300/70 dark:border-slate-700 bg-transparent px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500" />
          <button type="submit" className="justify-self-start inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition">
            Request access
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <p className="text-xs text-slate-500 dark:text-slate-400">By continuing you agree to our <a href="#" className="underline">Terms</a> & <a href="#" className="underline">Privacy</a>.</p>
        </form>
      </Section>

      <Section id="faq" eyebrow="FAQ" title="Questions, meet answers" desc="A quick overview—reach out for a deeper dive.">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            ["Is this therapy?", "No. NEST is education and skill‑building, not a replacement for therapy. We provide pathways to real help when needed."],
            ["Who is it for?", "Middle‑school to college‑age youth, plus parents and educators supporting them."],
            ["What does it cost?", "Free for youth and classrooms getting started. Orgs can license group tools and insights (privacy‑preserving)."],
            ["How do you keep it safe?", "Human review, crisis links in every view, opt‑out controls, and zero ads/zero sale of data."],
          ].map(([q,a], i) => (
            <div key={i} className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6 bg-white/70 dark:bg-slate-950/60">
              <div className="font-medium mb-2">{q}</div>
              <p className="text-slate-600 dark:text-slate-300">{a}</p>
            </div>
          ))}
        </div>
      </Section>

      <footer className="border-t border-slate-200 dark:border-slate-800 py-12">
        <div className="container mx-auto max-w-6xl px-6 grid md:grid-cols-3 gap-8 items-start">
          <div className="flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0">
              <path d="M4 12c0-3 2-5.5 5-7.5S15 2 18 4s3 6 0 9-8 6-11 6 0-3 0-7z" className="fill-emerald-500/90 dark:fill-emerald-400/90"/>
              <circle cx="12" cy="12" r="3" className="fill-white/90 dark:fill-slate-950/90"/>
            </svg>
            <span className="font-semibold tracking-tight">NEST Messages</span>
          </div>
          <div className="text-sm opacity-80">
            © {new Date().getFullYear()} NEST Messages. Built for brighter days. 
          </div>
          <div className="flex gap-6 text-sm justify-start md:justify-end">
            <a href="#" className="opacity-80 hover:opacity-100">Privacy</a>
            <a href="#" className="opacity-80 hover:opacity-100">Terms</a>
            <a href="#signup" className="opacity-80 hover:opacity-100">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
