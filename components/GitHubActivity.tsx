"use client";

import { useEffect, useState } from "react";
import CountUp from "react-countup";

const GITHUB_USERNAME = "olexey27";

// ── Types ──────────────────────────────────────────────────────────
type Commit = {
  repo: string;
  message: string;
  date: string;
  url: string;
};

type DayData = {
  date: string;
  count: number;
};

// ── Helpers ────────────────────────────────────────────────────────
function getColor(count: number) {
  if (count === 0) return "#2a2a32";
  if (count <= 2)  return "#00ff9930";
  if (count <= 5)  return "#00ff9960";
  if (count <= 9)  return "#00ff9990";
  return "#00ff99";
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric", month: "short", year: "numeric",
  });
}

// ── Stats (static) ─────────────────────────────────────────────────
const STATIC_STATS = [
  { num: 3,  text: "Years coding" },
  { num: 6,  text: "Projects completed" },
  { num: 8,  text: "Technologies" },
];

// ── Component ──────────────────────────────────────────────────────
export default function GitHubActivity() {
  const [commits, setCommits]   = useState<Commit[]>([]);
  const [days, setDays]         = useState<DayData[]>([]);
  const [totalCommits, setTotal] = useState(0);
  const [loading, setLoading]   = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch repos
        const reposRes = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=10&sort=pushed`
        );
        const repos = await reposRes.json();

        // Fetch commits from each repo
        const allCommits: Commit[] = [];
        await Promise.all(
          repos.slice(0, 5).map(async (repo: any) => {
            const res = await fetch(
              `https://api.github.com/repos/${GITHUB_USERNAME}/${repo.name}/commits?per_page=5`
            );
            if (!res.ok) return;
            const data = await res.json();
            if (!Array.isArray(data)) return;
            data.forEach((c: any) => {
              allCommits.push({
                repo: repo.name,
                message: c.commit.message.split("\n")[0].slice(0, 60),
                date: c.commit.author.date,
                url: c.html_url,
              });
            });
          })
        );

        // Sort by date
        allCommits.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        setCommits(allCommits.slice(0, 8));
        setTotal(allCommits.length);

        // Build contribution grid (last 24 weeks = 168 days)
        const dayMap: Record<string, number> = {};
        allCommits.forEach((c) => {
          const day = c.date.slice(0, 10);
          dayMap[day] = (dayMap[day] || 0) + 1;
        });

        const grid: DayData[] = [];
        for (let i = 167; i >= 0; i--) {
          const d = new Date();
          d.setDate(d.getDate() - i);
          const key = d.toISOString().slice(0, 10);
          grid.push({ date: key, count: dayMap[key] || 0 });
        }
        setDays(grid);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const C = {
    surface: "#232329",
    border:  "#2a2a32",
    accent:  "#00ff99",
    text2:   "rgba(255,255,255,0.6)",
    text3:   "rgba(255,255,255,0.25)",
  };

  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">

        {/* ── Static Stats ── */}
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none mb-16">
          {STATIC_STATS.map((item, index) => (
            <div key={index} className="flex-1 flex gap-4 items-center justify-center xl:justify-start">
              <CountUp
                end={item.num}
                duration={5}
                delay={2}
                className="text-4xl xl:text-6xl font-extrabold"
              />
              <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>
                {item.text}
              </p>
            </div>
          ))}
          {/* Live commit count */}
          <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start">
            <span className="text-4xl xl:text-6xl font-extrabold text-white">
              {loading ? "—" : totalCommits + "+"}
            </span>
            <p className="max-w-[100px] leading-snug text-white/80">Code commits</p>
          </div>
        </div>

        {/* ── GitHub Section ── */}
        <div style={{
            background: C.surface, border: `1px solid ${C.border}`,
            borderRadius: 16, padding: "24px",
            marginTop: 48,
            display: "flex", flexDirection: "column", gap: 24,
        }}>

          {/* Header */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="rgba(255,255,255,0.6)">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, fontWeight: 600 }}>
                {GITHUB_USERNAME}
              </span>
              <a
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank" rel="noopener noreferrer"
                style={{
                  fontSize: 11, color: C.accent, textDecoration: "none",
                  border: `1px solid ${C.accent}30`, borderRadius: 999,
                  padding: "2px 10px", fontWeight: 700, letterSpacing: "0.06em",
                }}
              >
                View Profile ↗
              </a>
            </div>
            {!loading && (
              <span style={{ fontSize: 11, color: C.text3 }}>
                Last 24 weeks
              </span>
            )}
          </div>

          {/* Contribution Graph */}
          {loading ? (
            <div style={{ height: 80, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: C.text3, fontSize: 12 }}>Loading activity...</span>
            </div>
          ) : (
            <div style={{ overflowX: "auto" }}>
              <div style={{
                display: "grid",
                gridTemplateRows: "repeat(7, 12px)",
                gridAutoFlow: "column",
                gap: 3,
                width: "max-content",
              }}>
                {days.map((day, i) => (
                  <div
                    key={i}
                    title={`${day.date}: ${day.count} commit${day.count !== 1 ? "s" : ""}`}
                    style={{
                      width: 12, height: 12, borderRadius: 3,
                      background: getColor(day.count),
                      transition: "background 0.2s",
                      cursor: day.count > 0 ? "pointer" : "default",
                    }}
                  />
                ))}
              </div>

              {/* Legend */}
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 8 }}>
                <span style={{ fontSize: 10, color: C.text3 }}>Less</span>
                {[0, 2, 5, 9, 12].map((n) => (
                  <div key={n} style={{
                    width: 12, height: 12, borderRadius: 3, background: getColor(n),
                  }} />
                ))}
                <span style={{ fontSize: 10, color: C.text3 }}>More</span>
              </div>
            </div>
          )}

          {/* Divider */}
          <div style={{ height: 1, background: C.border }} />

          {/* Recent Commits */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em",
              textTransform: "uppercase", color: C.text3, marginBottom: 12 }}>
              Recent Commits
            </p>
            {loading ? (
              <span style={{ color: C.text3, fontSize: 12 }}>Loading commits...</span>
            ) : commits.length === 0 ? (
              <span style={{ color: C.text3, fontSize: 12 }}>No public commits found.</span>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {commits.map((c, i) => (
                  <a
                    key={i}
                    href={c.url}
                    target="_blank" rel="noopener noreferrer"
                    style={{
                      display: "flex", alignItems: "flex-start", gap: 12,
                      padding: "10px 14px", borderRadius: 8,
                      background: "#1c1c22", border: `1px solid ${C.border}`,
                      textDecoration: "none", transition: "border-color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#00ff9940")}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = C.border)}
                  >
                    <span style={{
                      fontSize: 10, color: C.accent, fontWeight: 700,
                      background: "rgba(0,255,153,0.08)", border: "1px solid #00ff9930",
                      borderRadius: 4, padding: "2px 8px", whiteSpace: "nowrap", flexShrink: 0,
                      marginTop: 1,
                    }}>
                      {c.repo.length > 12 ? c.repo.slice(0, 12) + "…" : c.repo}
                    </span>
                    <span style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", flex: 1, lineHeight: 1.5 }}>
                      {c.message}
                    </span>
                    <span style={{ fontSize: 10, color: C.text3, whiteSpace: "nowrap", flexShrink: 0, marginTop: 2 }}>
                      {formatDate(c.date)}
                    </span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}