"use client";

import { useState, useEffect } from "react";

// ─── YOUR DATA ────────────────────────────────────────────────────
const DATA = {
  firstName: "Alexej",
  lastName: "Krasnokutskij",
  title: "Mobile & Web Developer",
  tagline: "Building iOS apps with SwiftUI & full-stack web apps with Angular and ASP.NET Core.",
  email: "alexeykrasnokutskiy@googlemail.com",
  phone: "+49 160 1869831",
  location: "Dortmund, Germany / Lisbon, Portugal",
  website: "olexey27.space",
  about:
    "Self-driven Mobile & Web Developer with a strong foundation in iOS (Swift, SwiftUI) and full-stack web development (Angular, ASP.NET Core, Next.js). Completed 200+ hours of hands-on courses and a certified professional qualification in App Development. Multilingual communicator with hands-on experience in fast-paced customer-facing environments. Passionate about clean code, modern design, and continuously levelling up.",
  skills: [
    { name: "Swift / SwiftUI",          level: 4 },
    { name: "Angular / TypeScript",     level: 4 },
    { name: "ASP.NET Core / .NET MVC",  level: 4 },
    { name: "React / Next.js",          level: 4 },
    { name: "HTML / CSS / Tailwind",    level: 4 },
    { name: "Android / Kotlin",         level: 3 },
    { name: "Git / GitHub",             level: 3 },
    { name: "Figma / UX Design",        level: 3 },
  ],
  softSkills: [
    "Fast learner in new environments",
    "Working under pressure",
    "Teamwork & Collaboration",
    "Problem-solving on the fly",
  ],
  languages: [
    { lang: "German",     level: "C2" },
    { lang: "Russian",    level: "C1" },
    { lang: "English",    level: "B2" },
    { lang: "Portuguese", level: "A1" },
  ],
  hobbies: [
    "Programming open-source projects",
    "Artificial intelligence & automation",
    "Fitness & outdoor activities",
  ],
  awards: [
    {
      year: "2026",
      title: "iOS Development Masterclass 2026",
      desc: "Completed advanced SwiftUI & SwiftData course with Apple Intelligence and iOS 26. 37.5 hrs.",
    },
    {
      year: "2024",
      title: "iOS & Swift Bootcamp",
      desc: "Completed 60.5-hour iOS bootcamp by Dr. Angela Yu — built 25+ apps with SwiftUI, ARKit & CoreML.",
    },
    {
      year: "2024",
      title: "Portfolio Website Launch",
      desc: "Launched personal portfolio at olexey27.space with Next.js, TypeScript and Tailwind CSS.",
    },
    {
      year: "2023",
      title: "IT-Fachkraft App-Entwicklung",
      desc: "Certified by Syntax Institut after 2.300 teaching units covering iOS, Android, UX/UI and web fundamentals.",
    },
  ],
  education: [
    {
      year: "Feb 2022 – Feb 2023",
      degree: "IT-Fachkraft für App-Entwicklung (iOS & Android)",
      institution: "Syntax Institut · Remote · Berlin, Germany",
    },
    {
      year: "until 2015",
      degree: "Secondary Education (Intermediate Diploma)",
      institution: "Comprehensive School Kierspe · Germany",
    },
  ],
  experience: [
    {
      period: "Mar 2025 – Present",
      role: "Content Manager",
      company: "Teleperformance Portugal",
      bullets: [
        "Analysis and moderation of online content following established guidelines",
        "Support in maintaining a safe online environment",
        "Documentation and forwarding of guideline violations",
      ],
    },
    {
      period: "Mar 2022 – Mar 2025",
      role: "Service Employee (Part-Time)",
      company: "Stückwerk Lüdenscheid",
      bullets: [
        "Customer service and order acceptance in a restaurant",
        "Cash register duties and coordination of orders",
        "Support in food service and daily restaurant operations",
      ],
    },
    {
      period: "May 2019 – Feb 2022",
      role: "Store Manager",
      company: "Alles Taco GmbH & Blubber Botschaft UG",
      bullets: [
        "Responsible for daily operations and team management",
        "Planning for staff, inventory, and sales goals",
        "Ensuring service, quality, and revenue standards",
      ],
    },
    {
      period: "Jun 2018 – Feb 2022",
      role: "Process Mechanic",
      company: "Erwin Seckelmann Kunststofftechnik",
      bullets: [
        "Setup, operation, and monitoring of production facilities",
        "Quality control of manufactured products",
        "Maintenance and minor repairs of machines",
      ],
    },
    {
      period: "Aug 2015 – Apr 2018",
      role: "Commissioning",
      company: "ESCHA GmbH & Co.KG",
      bullets: [
        "Support with inventories and warehouse organization",
        "Control of quantities and quality of products",
        "Compilation of customer orders from stock",
      ],
    },
  ],
}
// ──────────────────────────────────────────────────────────────────

function DotRating({ level, max = 5 }: { level: number; max?: number }) {
  return (
    <span style={{ display: "flex", gap: 6 }}>
      {Array.from({ length: max }).map((_, i) => (
        <span key={i} style={{
          width: 9, height: 9, borderRadius: "50%", display: "inline-block",
          background: i < level ? "#00ff99" : "#2a2a32",
          boxShadow: i < level ? "0 0 5px #00ff99aa" : "none",
          border: i < level ? "none" : "1px solid #3a3a44",
          transition: "all 0.2s",
        }} />
      ))}
    </span>
  );
}

export default function CVPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 1800);
    return () => clearTimeout(t);
  }, []);

  if (!mounted) return null;

  const C = {
    bg:       "#1c1c22",
    surface:  "#232329",
    border:   "#2a2a32",
    accent:   "#00ff99",
    text:     "#ffffff",
    text2:    "rgba(255,255,255,0.6)",
    text3:    "rgba(255,255,255,0.25)",
  };

  const sectionLabel = (label: string) => (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
      <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.15em",
        textTransform: "uppercase", color: C.text3 }}>
        {label}
      </span>
      <div style={{ flex: 1, height: 1, background: C.border }} />
    </div>
  );

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.25; }
        }
        .cv-root * { box-sizing: border-box; margin: 0; padding: 0; }
        .exp-card {
          background: #232329;
          border: 1px solid #2a2a32;
          border-radius: 12px;
          padding: 20px;
          margin-bottom: 12px;
          position: relative;
          overflow: hidden;
          transition: border-color 0.3s, transform 0.3s;
        }
        .exp-card::before {
          content: '';
          position: absolute; left: 0; top: 0; bottom: 0; width: 3px;
          background: linear-gradient(180deg, #00ff99, #00e187);
          opacity: 0; transition: opacity 0.3s;
        }
        .exp-card:hover { border-color: #00ff9940; transform: translateX(5px); }
        .exp-card:hover::before { opacity: 1; }
        .surface-card {
          background: #232329;
          border: 1px solid #2a2a32;
          border-radius: 10px;
          padding: 16px;
          margin-bottom: 10px;
          transition: border-color 0.2s;
        }
        .surface-card:hover { border-color: #00ff9940; }
        .skill-row {
          background: #232329;
          border: 1px solid #2a2a32;
          border-radius: 8px;
          padding: 10px 14px;
          margin-bottom: 8px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          transition: border-color 0.2s;
        }
        .skill-row:hover { border-color: #00ff9960; }
        .link-row {
          background: #232329;
          border: 1px solid #2a2a32;
          border-radius: 8px;
          padding: 10px 14px;
          margin-bottom: 8px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          text-decoration: none;
          transition: all 0.2s;
        }
        .link-row:hover { border-color: #00ff9960; background: #00ff9909; }
        .pulse-dot { animation: pulse 2s ease-in-out infinite; }
        .cv-body {
          display: grid;
          grid-template-columns: 1fr 280px;
          gap: 44px;
        }
        .cv-left  { order: 1; }
        .cv-right { order: 2; }
        .cv-header-inner {
          display: flex;
          flex-wrap: wrap;
          align-items: flex-end;
          justify-content: space-between;
          gap: 32px;
        }
        .cv-header-contacts {
          display: flex;
          flex-direction: column;
          gap: 8px;
          align-items: flex-end;
        }
        @media (max-width: 768px) {
          .cv-body {
            grid-template-columns: 1fr;
            gap: 0;
          }
          .cv-left  { order: 1; }
          .cv-right { order: 2; }
          .cv-header-inner {
            flex-direction: column;
            align-items: flex-start;
          }
          .cv-header-contacts {
            align-items: flex-start;
            width: 100%;
          }
          .exp-card:hover { transform: none; }
        }
      `}</style>

      <div className="cv-root" style={{
        background: C.bg,
        minHeight: "100vh",
        padding: "64px 24px 80px",
        fontFamily: "var(--font-jetbrainsMono), 'JetBrains Mono', monospace",
        animation: "fadeUp 0.7s ease both",
      }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>

          {/* ── HEADER ── */}
          <div className="cv-header-inner" style={{
            paddingBottom: 40, marginBottom: 48,
            borderBottom: `1px solid ${C.border}`,
          }}>
            {/* Name */}
            <div>
              <h1 style={{
                fontSize: "clamp(42px, 6vw, 72px)", fontWeight: 700,
                lineHeight: 1, letterSpacing: "-2px", color: C.text,
              }}>
                {DATA.firstName}<br />
                <span style={{ color: C.accent }}>{DATA.lastName}</span>
              </h1>

              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                marginTop: 16, padding: "5px 14px", borderRadius: 999,
                background: C.surface, border: `1px solid ${C.border}`,
                color: C.accent, fontSize: 11, fontWeight: 700,
                letterSpacing: "0.1em", textTransform: "uppercase",
              }}>
                <span className="pulse-dot" style={{
                  width: 7, height: 7, borderRadius: "50%",
                  background: C.accent, boxShadow: `0 0 6px ${C.accent}`,
                  display: "inline-block",
                }} />
                {DATA.title}
              </div>

              <p style={{ marginTop: 10, color: C.text2, fontSize: 13,
                maxWidth: 360, lineHeight: 1.7 }}>
                {DATA.tagline}
              </p>
            </div>

            {/* Contacts */}
            <div className="cv-header-contacts">
              {[
                { icon: "✉️", text: DATA.email },
                { icon: "📞", text: DATA.phone },
                { icon: "📍", text: DATA.location },
                { icon: "🌐", text: DATA.website },
              ].map((c) => (
                <div key={c.text} style={{ display: "flex", alignItems: "center", gap: 8,
                  fontSize: 12, color: C.text2 }}>
                  <span style={{
                    width: 28, height: 28, borderRadius: 7, display: "flex",
                    alignItems: "center", justifyContent: "center", fontSize: 12,
                    background: C.surface, border: `1px solid ${C.border}`,
                  }}>{c.icon}</span>
                  {c.text}
                </div>
              ))}
            </div>
          </div>

          {/* ── BODY ── */}
          <div className="cv-body">

            {/* LEFT */}
            <div className="cv-left">
              {/* About */}
              <div style={{ marginBottom: 40 }}>
                {sectionLabel("About me")}
                <p style={{ fontSize: 13, color: C.text2, lineHeight: 1.8 }}>{DATA.about}</p>
              </div>

              {/* Experience */}
              <div style={{ marginBottom: 40 }}>
                {sectionLabel("Experience")}
                {DATA.experience.map((exp, i) => (
                  <div key={i} className="exp-card">
                    <div style={{ display: "flex", justifyContent: "space-between",
                      alignItems: "flex-start", gap: 12, marginBottom: 4 }}>
                      <span style={{ color: C.text, fontWeight: 700, fontSize: 14 }}>
                        {exp.company}
                      </span>
                      <span style={{
                        fontSize: 11, color: C.text3, whiteSpace: "nowrap",
                        background: C.bg, border: `1px solid ${C.border}`,
                        borderRadius: 999, padding: "3px 10px",
                      }}>{exp.period}</span>
                    </div>
                    <div style={{ color: C.accent, fontSize: 12, fontWeight: 600,
                      marginBottom: 12 }}>{exp.role}</div>
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 6 }}>
                      {exp.bullets.map((b, j) => (
                        <li key={j} style={{ fontSize: 12, color: C.text2,
                          lineHeight: 1.6, paddingLeft: 16, position: "relative" }}>
                          <span style={{ position: "absolute", left: 0,
                            color: C.accent, fontSize: 10, top: 2 }}>▸</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="cv-right">
              {/* Skills */}
              <div style={{ marginBottom: 40 }}>
                {sectionLabel("Skills")}
                {DATA.skills.map((s) => (
                  <div key={s.name} className="skill-row">
                    <span style={{ fontSize: 12, color: C.text2 }}>{s.name}</span>
                    <DotRating level={s.level} />
                  </div>
                ))}
              </div>

              {/* Awards */}
              <div style={{ marginBottom: 40 }}>
                {sectionLabel("Awards")}
                {DATA.awards.map((a, i) => (
                  <div key={i} className="surface-card">
                    <div style={{ fontSize: 10, color: C.text3, fontWeight: 600,
                      letterSpacing: "0.08em", marginBottom: 4 }}>{a.year}</div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: C.text,
                      marginBottom: 5 }}>{a.title}</div>
                    <div style={{ fontSize: 11, color: C.text2, lineHeight: 1.6 }}>{a.desc}</div>
                  </div>
                ))}
              </div>

              {/* Education */}
              <div style={{ marginBottom: 40 }}>
                {sectionLabel("Education")}
                {DATA.education.map((e, i) => (
                  <div key={i} className="surface-card">
                    <div style={{ fontSize: 13, fontWeight: 700, color: C.text,
                      marginBottom: 4, lineHeight: 1.4 }}>{e.degree}</div>
                    <div style={{ fontSize: 12, color: C.accent, marginBottom: 5 }}>{e.institution}</div>
                    <div style={{ fontSize: 11, color: C.text3 }}>{e.year}</div>
                  </div>
                ))}
              </div>

              {/* Languages */}
              <div style={{ marginBottom: 40 }}>
                {sectionLabel("Languages")}
                {DATA.languages.map((l) => (
                  <div key={l.lang} className="skill-row">
                    <span style={{ fontSize: 12, color: C.text2 }}>{l.lang}</span>
                    <span style={{
                      fontSize: 11, fontWeight: 700, color: C.accent,
                      background: "rgba(0,255,153,0.08)", border: "1px solid #00ff9930",
                      borderRadius: 999, padding: "2px 10px",
                    }}>{l.level}</span>
                  </div>
                ))}
              </div>

              {/* Soft Skills */}
              <div style={{ marginBottom: 40 }}>
                {sectionLabel("Soft Skills")}
                {DATA.softSkills.map((s, i) => (
                  <div key={i} style={{
                    display: "flex", alignItems: "center", gap: 8,
                    fontSize: 12, color: C.text2,
                    padding: "8px 0", borderBottom: `1px solid ${C.border}`,
                  }}>
                    <span style={{ color: C.accent, fontSize: 10 }}>▸</span>
                    {s}
                  </div>
                ))}
              </div>

              {/* Hobbies */}
              <div style={{ marginBottom: 40 }}>
                {sectionLabel("Hobbies")}
                {DATA.hobbies.map((h, i) => (
                  <div key={i} style={{
                    display: "flex", alignItems: "center", gap: 8,
                    fontSize: 12, color: C.text2,
                    padding: "8px 0", borderBottom: `1px solid ${C.border}`,
                  }}>
                    <span style={{ color: C.accent, fontSize: 10 }}>▸</span>
                    {h}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}