"use client";

import { useState, useEffect } from "react";

const LINES = [
  "const developer = {",
  "  name: 'Alexej Krasnokutskij',",
  "  role: 'Mobile & Web Developer',",
  "  stack: ['Swift', 'Angular', '.NET'],",
  "};",
];

export default function SplashScreen({ onDone }: { onDone: () => void }) {
  const [displayed, setDisplayed] = useState("");
  const [showName, setShowName]   = useState(false);
  const [progress, setProgress]   = useState(0);
  const [visible, setVisible]     = useState(true);

  useEffect(() => {
    let lineIdx = 0;
    let charIdx = 0;
    let current = "";

    const type = () => {
      if (lineIdx >= LINES.length) {
        // Typing done → show name + progress bar
        setTimeout(() => {
          setShowName(true);
          let p = 0;
          const bar = setInterval(() => {
            p += 1;
            setProgress(p);
            if (p >= 100) {
              clearInterval(bar);
              // Fade out
              setTimeout(() => {
                setVisible(false);
                setTimeout(onDone, 600);
              }, 300);
            }
          }, 18);
        }, 300);
        return;
      }

      const line = LINES[lineIdx];
      if (charIdx < line.length) {
        current =
          LINES.slice(0, lineIdx).join("\n") +
          (lineIdx > 0 ? "\n" : "") +
          line.slice(0, charIdx + 1);
        setDisplayed(current);
        charIdx++;
        setTimeout(type, 35);
      } else {
        lineIdx++;
        charIdx = 0;
        setTimeout(type, 120);
      }
    };

    setTimeout(type, 400);
  }, [onDone]);

  return (
    <div
      style={{
        position:       "fixed",
        inset:          0,
        zIndex:         9999,
        background:     "#1c1c22",
        display:        "flex",
        flexDirection:  "column",
        alignItems:     "center",
        justifyContent: "center",
        gap:            32,
        opacity:        visible ? 1 : 0,
        transition:     "opacity 0.6s ease",
        pointerEvents:  visible ? "all" : "none",
        fontFamily:     "var(--font-jetbrainsMono), 'JetBrains Mono', monospace",
      }}
    >
      {/* Typed code */}
      <div style={{ textAlign: "left", minHeight: 120 }}>
        <pre
          style={{
            fontSize:    14,
            color:       "#00ff99",
            lineHeight:  1.7,
            margin:      0,
            whiteSpace:  "pre-wrap",
          }}
        >
          {displayed}
          <span
            style={{
              display:    "inline-block",
              width:      2,
              height:     16,
              background: "#00ff99",
              marginLeft: 2,
              verticalAlign: "middle",
              animation:  "blink 0.8s infinite",
            }}
          />
        </pre>
      </div>

      {/* Name */}
      <div
        style={{
          textAlign:  "center",
          opacity:    showName ? 1 : 0,
          transform:  showName ? "translateY(0)" : "translateY(12px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        <div
          style={{
            fontSize:      "clamp(32px, 5vw, 56px)",
            fontWeight:    700,
            color:         "#ffffff",
            letterSpacing: "-2px",
            lineHeight:    1,
          }}
        >
          Alexej
        </div>
        <div
          style={{
            fontSize:      "clamp(32px, 5vw, 56px)",
            fontWeight:    700,
            color:         "#00ff99",
            letterSpacing: "-2px",
            lineHeight:    1,
          }}
        >
          Krasnokutskij
        </div>
      </div>

      {/* Progress bar */}
      <div
        style={{
          width:      200,
          height:     2,
          background: "#2a2a32",
          borderRadius: 999,
          opacity:    showName ? 1 : 0,
          transition: "opacity 0.5s ease",
        }}
      >
        <div
          style={{
            height:       "100%",
            width:        `${progress}%`,
            background:   "#00ff99",
            borderRadius: 999,
            transition:   "width 0.05s linear",
          }}
        />
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
