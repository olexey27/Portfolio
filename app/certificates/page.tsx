"use client";

import { useState, useEffect } from "react";

// ─── CERTIFICATES ─────────────────────────────────────────────────
// Nimm den Google Drive Link: https://drive.google.com/file/d/FILE_ID/view
// und trag nur die FILE_ID ein.

const CERTIFICATES = [
  {
    id: 1,
    title: "App Development (iOS & Android)",
    issuer: "Syntax Institut",
    date: "Feb 2023",
    fileId: "10nYGt_lYx7sdMr5NvOnJY3XeeRf_cMJP",
    description: "Professional qualification in Mobile App Development covering UX/UI Design, Android (Kotlin) and iOS (Swift). 2.300 teaching units, completed February 2023.",
  },
  {
    id: 2,
    title: "Complete Angular Course 2024 – Master Angular in only 6 days",
    issuer: "Udemy",
    date: "Jul 2024",
    fileId: "1aOzw9SSvkAMz3OiHGa90fdVmb2JtlGy3",
    description: "In-depth Angular course covering components, services, NgRx, signals, unit testing and REST API communication. 9.5 hours. Instructors: Denis Panjuta, Jannick Leismann.",
  },
  {
    id: 3,
    title: "Build an app with ASPNET Core and Angular from scratch",
    issuer: "Udemy",
    date: "Apr 2024",
    fileId: "1MUZh3Wpn7IOEHhNYW6zG4US8wtyV-yob",
    description: "Full-stack course building a complete web app with ASP.NET Core API and Angular from scratch. 35 hours. Instructor: Neil Cummings.",
  },
  {
    id: 4,
    title: ".NET Core MVC – The Complete Guide 2023 [E-commerce app]",
    issuer: "Udemy",
    date: "Sep 2023",
    fileId: "1blPZmy_qZ_wQNrp2ir0zwFAB7MARLZdh",
    description: "Complete ASP.NET Core MVC course building a full e-commerce app with Stripe payments, Identity Framework, Entity Framework and Azure deployment. 31 hours. Instructor: Bhrugen Patel.",
  },
  {
    id: 5,
    title: "iOS & Swift – The Complete iOS App Development Bootcamp",
    issuer: "Udemy",
    date: "Nov 2024",
    fileId: "1opWms5DdmoqVwJOh-wqiuBqUug-adniT",
    description: "Complete iOS development bootcamp covering Swift, SwiftUI, ARKit, CoreML and 25+ real-world apps. 60.5 hours. Instructor: Dr. Angela Yu.",
  },
  {
    id: 6,
    title: "iOS Development Masterclass 2026 – SwiftUI, SwiftData, AI",
    issuer: "Udemy",
    date: "Jan 2026",
    fileId: "1ns29u5GjGGZ1dFMQTdU1gW5oQS2k2551",
    description: "Advanced SwiftUI & SwiftData masterclass covering Apple Intelligence, on-device AI, Liquid Glass design and iOS 26. 37.5 hours. Instructor: Robert Petras.",
  },
];
// ──────────────────────────────────────────────────────────────────

type Certificate = (typeof CERTIFICATES)[number];

const ISSUER_ICONS: Record<string, string> = {
  Udemy:             "🎓",
  "Syntax Institut": "🏛️",
  default:           "🏅",
};

export default function CertificatesPage() {
  const [active, setActive]   = useState<Certificate | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 1800);
    return () => clearTimeout(t);
  }, []);

  if (!mounted) return null;

  const C = {
    bg:     "#1c1c22",
    surface:"#232329",
    border: "#2a2a32",
    accent: "#00ff99",
    text:   "#ffffff",
    text2:  "rgba(255,255,255,0.6)",
    text3:  "rgba(255,255,255,0.25)",
  };

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.96); }
          to   { opacity: 1; transform: scale(1); }
        }
        .cert-root * { box-sizing: border-box; margin: 0; padding: 0; }
        .cert-card {
          background: #232329;
          border: 1px solid #2a2a32;
          border-radius: 12px;
          padding: 24px;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          gap: 16px;
          transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
          animation: fadeUp 0.6s ease both;
        }
        .cert-card:hover {
          border-color: #00ff9960;
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0,255,153,0.07);
        }
        .close-btn {
          width: 36px; height: 36px; border-radius: 8px;
          background: #1c1c22; border: 1px solid #2a2a32;
          color: rgba(255,255,255,0.4);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; font-size: 16px; line-height: 1;
          transition: all 0.2s; flex-shrink: 0;
        }
        .close-btn:hover { border-color: #00ff99; color: #00ff99; }
        .open-btn {
          display: inline-flex; align-items: center; gap: 6px;
          border: 1px solid #00ff99; color: #00ff99;
          padding: 8px 18px; border-radius: 4px;
          font-size: 11px; font-weight: 700; letter-spacing: 0.08em;
          text-transform: uppercase; text-decoration: none;
          transition: all 0.3s; background: transparent; font-family: inherit;
        }
        .open-btn:hover { background: #00ff99; color: #1c1c22; }
        .cert-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 16px;
        }
      `}</style>

      <div className="cert-root" style={{
        background: C.bg,
        minHeight: "100vh",
        padding: "64px 24px 80px",
        fontFamily: "var(--font-jetbrainsMono), 'JetBrains Mono', monospace",
      }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>

          {/* ── HEADER ── */}
          <div style={{
            paddingBottom: 40, marginBottom: 48,
            borderBottom: `1px solid ${C.border}`,
            animation: "fadeUp 0.6s ease both",
          }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.16em",
              textTransform: "uppercase", color: C.text3 }}>
              Portfolio
            </span>
            <h1 style={{
              fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 700,
              lineHeight: 1, letterSpacing: "-2px", color: C.text, marginTop: 8,
            }}>
              My <span style={{ color: C.accent }}>Certificates</span>
            </h1>
            <p style={{ marginTop: 12, fontSize: 13, color: C.text2, maxWidth: 440, lineHeight: 1.7 }}>
              Verified credentials — click any card to preview.
            </p>
          </div>

          {/* ── GRID ── */}
          <div className="cert-grid">
            {CERTIFICATES.map((cert, idx) => (
              <div
                key={cert.id}
                className="cert-card"
                style={{ animationDelay: `${idx * 0.07}s` }}
                onClick={() => setActive(cert)}
              >
                {/* Top row */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    fontSize: 11, fontWeight: 600, color: C.text3,
                    background: C.bg, border: `1px solid ${C.border}`,
                    borderRadius: 999, padding: "3px 12px",
                  }}>
                    {ISSUER_ICONS[cert.issuer] ?? ISSUER_ICONS.default} {cert.issuer}
                  </span>
                  <span style={{ fontSize: 11, color: C.text3 }}>{cert.date}</span>
                </div>

                {/* Title */}
                <p style={{ fontSize: 14, fontWeight: 700, color: C.text, lineHeight: 1.4, flex: 1 }}>
                  {cert.title}
                </p>

                {/* Bottom row */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{
                    display: "inline-flex", alignItems: "center", gap: 5,
                    fontSize: 10, fontWeight: 700, letterSpacing: "0.08em",
                    textTransform: "uppercase", padding: "3px 10px", borderRadius: 999,
                    background: "rgba(0,255,153,0.08)",
                    border: "1px solid #00ff9930",
                    color: C.accent,
                  }}>
                    📄 Preview
                  </span>
                  <span style={{
                    width: 34, height: 34, borderRadius: 8, fontSize: 16,
                    background: C.bg, border: `1px solid ${C.border}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    {ISSUER_ICONS[cert.issuer] ?? ISSUER_ICONS.default}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── MODAL ── */}
      {active && (
        <div
          style={{
            position: "fixed", inset: 0, zIndex: 100,
            background: "rgba(0,0,0,0.88)", backdropFilter: "blur(12px)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: 24, animation: "fadeUp 0.2s ease both",
          }}
          onClick={() => setActive(null)}
        >
          <div
            style={{
              background: "#232329", border: "1px solid #2a2a32",
              borderRadius: 16, width: "min(900px, 100%)", maxHeight: "90vh",
              display: "flex", flexDirection: "column", overflow: "hidden",
              animation: "scaleIn 0.25s ease both",
              boxShadow: "0 40px 100px rgba(0,0,0,0.7)",
              fontFamily: "var(--font-jetbrainsMono), 'JetBrains Mono', monospace",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              padding: "18px 24px", borderBottom: "1px solid #2a2a32", flexShrink: 0,
            }}>
              <div>
                <p style={{ color: "#fff", fontWeight: 700, fontSize: 14 }}>{active.title}</p>
                <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 12, marginTop: 3 }}>
                  {ISSUER_ICONS[active.issuer] ?? ISSUER_ICONS.default} {active.issuer} · {active.date}
                </p>
              </div>
              <button className="close-btn" onClick={() => setActive(null)}>✕</button>
            </div>

            {/* Body — Google Drive iframe */}
            <div style={{ flex: 1, overflow: "hidden" }}>
              <iframe
                src={`https://drive.google.com/file/d/${active.fileId}/preview`}
                title={active.title}
                style={{ width: "100%", height: "100%", border: "none", minHeight: 480 }}
                allow="autoplay"
              />
            </div>

            {/* Footer */}
            <div style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              padding: "14px 24px", borderTop: "1px solid #2a2a32", flexShrink: 0,
            }}>
              <span style={{ fontSize: 11, color: "rgba(255,255,255,0.2)" }}>Click outside to close</span>
              <a
                href={`https://drive.google.com/file/d/${active.fileId}/view`}
                target="_blank" rel="noopener noreferrer"
                className="open-btn"
              >
                Open in Google Drive ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}