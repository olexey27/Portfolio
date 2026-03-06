"use client";
import { useState, useEffect } from "react";
// ─── YOUR DATA ────────────────────────────────────────────────────
const DATA = {
  firstName: "Alexej",
  lastName: "Krasnokutskij",
  title: "Junior Developer",
  tagline: "Building modern, responsive web apps with Next.js, React & TypeScript.",
  email: "alexeykrasnokutskiy@gmail.com",
  phone: "+XXX XXX XXXXXXX",
  location: "Portugal",
  website: "olexey27.space",
  about:
    "Junior Developer with passion for web development. Focused on creating modern, responsive applications using Next.js, React, and TypeScript. Always eager to learn new technologies and solve complex problems.",
  skills: [
    { name: "React / Next.js",         level: 4 },
    { name: "JavaScript / TypeScript", level: 4 },
    { name: "HTML / CSS",              level: 4 },
    { name: "Tailwind CSS",            level: 4 },
    { name: "Git / GitHub",            level: 3 },
  ],
  awards: [
    {
      year: "2024",
      title: "Portfolio Launch",
      desc: "Successfully launched professional portfolio website with modern tech stack.",
    },
    {
      year: "2023",
      title: "Certification",
      desc: "Completed web development certification / course.",
    },
  ],
  education: [
    {
      year: "2020 – 2024",
      degree: "Computer Science / Web Development",
      institution: "Your University / School, Location",
    },
  ],
  experience: [
    {
      period: "2024 – Present",
      role: "Junior Developer",
      company: "Freelance",
      bullets: [
        "Developed responsive web applications using React and Next.js",
        "Implemented modern UI/UX designs with Tailwind CSS",
        "Maintained clean, documented code following best practices",
      ],
    },
    {
      period: "2023 – 2024",
      role: "Web Development Projects",
      company: "Personal",
      bullets: [
        "Built portfolio website with advanced animations",
        "Created interactive user interfaces with React",
      ],
    },
  ],
};
// ──────────────────────────────────────────────────────────────────
function DotRating({ level, max = 5 }: { level: number; max?: number }) {
  return (
    <span style={{ display: "flex", gap: 6 }}>
      {Array.from({ length: max }).map((_, i) => (
        <span
          key={i}
          style={{
            width: 9, height: 9, borderRadius: "50%",
            background: i < level ? "var(--accent)" : "var(--border)",
            boxShadow: i < level ? "0 0 6px var(--accent)" : "none",
            display: "inline-block",
            transition: "all 0.2s",
          }}
        />
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
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Outfit:wght@300;400;500;600&display=swap');
        :root {
          --bg:       #080b10;
          --surface:  #0e1117;
          --surface2: #141821;
          --border:   #1e2433;
          --accent:   #5cffb0;
          --accent2:  #3d7aff;
          --text:     #e2e8f0;
          --text2:    #8892a4;
          --text3:    #505a6e;
        }
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        .cv-bg {
          min-height: 100vh;
          background: var(--bg);
          font-family: 'Outfit', sans-serif;
          color: var(--text);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 48px 20px 72px;
          position: relative;
        }
        .cv-bg::before {
          content: '';
          position: fixed; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none; z-index: 0; opacity: 0.35;
        }
        .cv-root {
          position: relative; z-index: 1;
          width: min(980px, 100%);
          animation: fadeUp 0.7s ease both;
        }
        /* ── HEADER ── */
        .cv-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 36px;
          padding-bottom: 40px;
          border-bottom: 1px solid var(--border);
          margin-bottom: 48px;
          flex-wrap: wrap;
        }
        .header-right {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 24px;
          flex-wrap: wrap;
        }
        .cv-name {
          font-family: 'Syne', sans-serif;
          font-size: clamp(44px, 6.5vw, 76px);
          font-weight: 800;
          line-height: 0.92;
          letter-spacing: -3px;
          color: #fff;
        }
        .cv-name span {
          display: block;
          background: linear-gradient(135deg, var(--accent) 0%, var(--accent2) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .cv-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--surface2); border: 1px solid var(--border);
          border-radius: 999px; padding: 5px 14px;
          font-size: 12px; font-weight: 500; color: var(--accent);
          margin-top: 14px; letter-spacing: 0.05em;
        }
        .cv-badge::before {
          content: '';
          width: 7px; height: 7px; border-radius: 50%;
          background: var(--accent); box-shadow: 0 0 8px var(--accent);
          animation: pulse 2s ease-in-out infinite;
        }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.25} }
        .cv-tagline {
          font-size: 13px; color: var(--text2); font-weight: 300;
          max-width: 340px; line-height: 1.6; margin-top: 10px;
        }
        .cv-contacts { display: flex; flex-direction: column; gap: 8px; align-items: flex-end; }
        .cv-contact-item { display: flex; align-items: center; gap: 8px; font-size: 12px; color: var(--text2); }
        .contact-icon {
          width: 26px; height: 26px; border-radius: 7px;
          background: var(--surface2); border: 1px solid var(--border);
          display: flex; align-items: center; justify-content: center;
          font-size: 11px; flex-shrink: 0;
        }
        /* ── BODY ── */
        .cv-body { display: grid; grid-template-columns: 1fr 290px; gap: 44px; }
        .cv-section { margin-bottom: 40px; }
        .section-label {
          display: flex; align-items: center; gap: 12px;
          font-family: 'Syne', sans-serif;
          font-size: 10px; font-weight: 700;
          letter-spacing: 0.15em; text-transform: uppercase;
          color: var(--text3); margin-bottom: 22px;
        }
        .section-label::after { content: ''; flex: 1; height: 1px; background: var(--border); }
        .about-text { font-size: 14px; color: var(--text2); line-height: 1.8; font-weight: 300; }
        /* Experience */
        .exp-card {
          position: relative;
          padding: 22px; background: var(--surface);
          border: 1px solid var(--border); border-radius: 16px;
          margin-bottom: 14px;
          transition: border-color 0.3s, transform 0.3s;
          overflow: hidden;
        }
        .exp-card::before {
          content: '';
          position: absolute; left: 0; top: 0; bottom: 0; width: 3px;
          background: linear-gradient(180deg, var(--accent), var(--accent2));
          border-radius: 3px 0 0 3px;
          opacity: 0; transition: opacity 0.3s;
        }
        .exp-card:hover { border-color: #252d40; transform: translateX(5px); }
        .exp-card:hover::before { opacity: 1; }
        .exp-header { display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; margin-bottom: 4px; }
        .exp-company { font-family: 'Syne', sans-serif; font-size: 16px; font-weight: 700; color: #fff; }
        .exp-period {
          font-size: 11px; color: var(--text3); font-weight: 500; white-space: nowrap;
          background: var(--surface2); border: 1px solid var(--border);
          border-radius: 999px; padding: 3px 10px;
        }
        .exp-role { font-size: 12px; color: var(--accent); font-weight: 500; margin-bottom: 12px; }
        .exp-bullets { list-style: none; display: flex; flex-direction: column; gap: 7px; }
        .exp-bullets li {
          font-size: 12px; color: var(--text2); line-height: 1.6;
          padding-left: 16px; position: relative;
        }
        .exp-bullets li::before {
          content: '▸'; position: absolute; left: 0;
          color: var(--accent2); font-size: 10px; top: 2px;
        }
        /* Skills */
        .skill-row {
          display: flex; align-items: center; justify-content: space-between; gap: 12px;
          padding: 10px 14px; background: var(--surface);
          border: 1px solid var(--border); border-radius: 10px;
          margin-bottom: 8px; transition: border-color 0.2s;
        }
        .skill-row:hover { border-color: var(--accent); }
        .skill-name { font-size: 12px; font-weight: 500; color: var(--text); }
        /* Awards */
        .award-item {
          padding: 16px; background: var(--surface);
          border: 1px solid var(--border); border-radius: 12px;
          margin-bottom: 10px; transition: border-color 0.2s;
        }
        .award-item:hover { border-color: var(--accent2); }
        .award-year { font-size: 11px; color: var(--text3); font-weight: 600; letter-spacing: 0.06em; margin-bottom: 3px; }
        .award-title { font-family: 'Syne', sans-serif; font-size: 13px; font-weight: 700; color: #fff; margin-bottom: 5px; }
        .award-desc { font-size: 11px; color: var(--text2); line-height: 1.6; }
        /* Education */
        .edu-card { background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 18px; }
        .edu-degree { font-family: 'Syne', sans-serif; font-size: 13px; font-weight: 700; color: #fff; margin-bottom: 4px; line-height: 1.4; }
        .edu-inst { font-size: 12px; color: var(--accent2); margin-bottom: 6px; }
        .edu-year { font-size: 11px; color: var(--text3); }
        /* Links */
        .link-card {
          display: flex; align-items: center; justify-content: space-between; gap: 8px;
          padding: 11px 14px; background: var(--surface);
          border: 1px solid var(--border); border-radius: 11px;
          margin-bottom: 8px; text-decoration: none; transition: all 0.2s;
        }
        .link-card:hover { border-color: var(--accent2); background: rgba(61,122,255,0.05); }
        .link-label { font-size: 12px; font-weight: 500; color: var(--text); }
        .link-value { font-size: 11px; color: var(--text3); }
        .link-arrow {
          font-size: 13px; color: var(--accent2);
          opacity: 0; transform: translateX(-5px); transition: all 0.2s;
        }
        .link-card:hover .link-arrow { opacity: 1; transform: translateX(0); }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 720px) {
          .cv-header { grid-template-columns: 1fr; }
          .header-right { flex-direction: column; align-items: flex-start; }
          .cv-contacts { align-items: flex-start; }
          .cv-body { grid-template-columns: 1fr; }
        }
      `}</style>
      <div className="cv-bg">
        <div className="cv-root">
          {/* ── HEADER ── */}
          <header className="cv-header">
            <div>
              <h1 className="cv-name">
                  {DATA.firstName}
                  <span>{DATA.lastName}</span>
                </h1>
                <div className="cv-badge">{DATA.title}</div>
                <p className="cv-tagline">{DATA.tagline}</p>
            </div>
              <div className="cv-contacts">
                {[
                  { icon: "✉", text: DATA.email },
                  { icon: "📞", text: DATA.phone },
                  { icon: "📍", text: DATA.location },
                  { icon: "🌐", text: DATA.website },
                ].map((c) => (
                  <div key={c.text} className="cv-contact-item">
                    <span className="contact-icon">{c.icon}</span>
                    {c.text}
                  </div>
                ))}
              </div>
          </header>
          {/* ── BODY ── */}
          <div className="cv-body">
            {/* LEFT */}
            <div>
              <section className="cv-section">
                <div className="section-label">About me</div>
                <p className="about-text">{DATA.about}</p>
              </section>
              <section className="cv-section">
                <div className="section-label">Experience</div>
                {DATA.experience.map((exp, i) => (
                  <div key={i} className="exp-card">
                    <div className="exp-header">
                      <div className="exp-company">{exp.company}</div>
                      <div className="exp-period">{exp.period}</div>
                    </div>
                    <div className="exp-role">{exp.role}</div>
                    <ul className="exp-bullets">
                      {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
                    </ul>
                  </div>
                ))}
              </section>
            </div>
            {/* RIGHT */}
            <div>
              <section className="cv-section">
                <div className="section-label">Skills</div>
                {DATA.skills.map((s) => (
                  <div key={s.name} className="skill-row">
                    <span className="skill-name">{s.name}</span>
                    <DotRating level={s.level} />
                  </div>
                ))}
              </section>
              <section className="cv-section">
                <div className="section-label">Awards</div>
                {DATA.awards.map((a, i) => (
                  <div key={i} className="award-item">
                    <div className="award-year">{a.year}</div>
                    <div className="award-title">{a.title}</div>
                    <div className="award-desc">{a.desc}</div>
                  </div>
                ))}
              </section>
              <section className="cv-section">
                <div className="section-label">Education</div>
                {DATA.education.map((e, i) => (
                  <div key={i} className="edu-card">
                    <div className="edu-degree">{e.degree}</div>
                    <div className="edu-inst">{e.institution}</div>
                    <div className="edu-year">{e.year}</div>
                  </div>
                ))}
              </section>
              <section className="cv-section">
                <div className="section-label">Links</div>
                {[
                  { icon: "🌐", label: "Portfolio", value: DATA.website },
                  { icon: "✉",  label: "Email",     value: DATA.email },
                ].map((l) => (
                  <a key={l.label} className="link-card" href="#">
                    <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ fontSize: 13 }}>{l.icon}</span>
                      <span className="link-label">{l.label}</span>
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <span className="link-value">{l.value}</span>
                      <span className="link-arrow">→</span>
                    </span>
                  </a>
                ))}
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}