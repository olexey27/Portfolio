"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

const languages = [
  { code: "en", label: "EN" },
  { code: "de", label: "DE" },
  { code: "ru", label: "RU" },
];

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const locale = useLocale();
  const router = useRouter();
  const t = useTranslations("nav");

  const links = [
    { name: t("home"),     path: `/${locale}` },
    { name: t("services"), path: `/${locale}/services` },
    { name: t("resume"),   path: `/${locale}/resume` },
    { name: t("work"),     path: `/${locale}/work` },
    { name: t("contact"),  path: `/${locale}/contact` },
  ];

  const switchLocale = (newLocale) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
    setOpen(false);
  };

  // Prevent scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Burger Button */}
      <button
        onClick={() => setOpen(true)}
        className="flex justify-center items-center"
        aria-label="Open menu"
      >
        <CiMenuFries className="text-[32px] text-accent" />
      </button>

      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        style={{
          position: "fixed", inset: 0, zIndex: 98,
          background: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(4px)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "all" : "none",
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Drawer */}
      <div
        style={{
          position: "fixed", top: 0, right: 0, bottom: 0, zIndex: 99,
          width: "min(320px, 85vw)",
          background: "var(--drawer-bg, #1c1c22)",
          borderLeft: "1px solid rgba(255,255,255,0.08)",
          display: "flex", flexDirection: "column",
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
          boxShadow: open ? "-20px 0 60px rgba(0,0,0,0.4)" : "none",
        }}
      >
        {/* Header */}
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          padding: "24px 24px 0",
        }}>
          <Link href={`/${locale}`} onClick={() => setOpen(false)}>
            <h1 style={{
              fontSize: 28, fontWeight: 700,
              color: "var(--drawer-text, #fff)",
              fontFamily: "var(--font-jetbrainsMono), monospace",
            }}>
              易码<span style={{ color: "#00ff99" }}>.</span>
            </h1>
          </Link>
          <button
            onClick={() => setOpen(false)}
            style={{
              width: 36, height: 36, borderRadius: 8,
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.5)",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", transition: "all 0.2s",
              fontSize: 20,
            }}
          >
            <IoClose />
          </button>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "rgba(255,255,255,0.06)", margin: "24px 0" }} />

        {/* Nav Links */}
        <nav style={{ flex: 1, display: "flex", flexDirection: "column", padding: "0 16px", gap: 4 }}>
          {links.map((link, index) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={index}
                href={link.path}
                onClick={() => setOpen(false)}
                style={{
                  display: "flex", alignItems: "center", gap: 12,
                  padding: "14px 16px", borderRadius: 10,
                  textDecoration: "none",
                  background: isActive ? "rgba(0,255,153,0.08)" : "transparent",
                  border: `1px solid ${isActive ? "rgba(0,255,153,0.2)" : "transparent"}`,
                  color: isActive ? "#00ff99" : "rgba(255,255,255,0.7)",
                  fontSize: 15, fontWeight: isActive ? 700 : 500,
                  letterSpacing: "0.02em", textTransform: "capitalize",
                  transition: "all 0.2s",
                  opacity: open ? 1 : 0,
                  transform: open ? "translateX(0)" : "translateX(20px)",
                  transitionDelay: open ? `${index * 0.06}s` : "0s",
                  fontFamily: "var(--font-jetbrainsMono), monospace",
                }}
              >
                <span style={{
                  width: 6, height: 6, borderRadius: "50%",
                  background: isActive ? "#00ff99" : "rgba(255,255,255,0.2)",
                  flexShrink: 0,
                  boxShadow: isActive ? "0 0 8px #00ff99" : "none",
                }} />
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Bottom Section */}
        <div style={{ padding: "16px 24px 32px", display: "flex", flexDirection: "column", gap: 16 }}>

          {/* Divider */}
          <div style={{ height: 1, background: "rgba(255,255,255,0.06)" }} />

          {/* Language Switcher */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)",
              fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase",
              fontFamily: "var(--font-jetbrainsMono), monospace",
            }}>
              Language
            </span>
            <div style={{ display: "flex", gap: 4 }}>
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => switchLocale(lang.code)}
                  style={{
                    padding: "5px 12px", borderRadius: 6, fontSize: 12, fontWeight: 700,
                    letterSpacing: "0.08em", cursor: "pointer",
                    background: locale === lang.code ? "rgba(0,255,153,0.12)" : "transparent",
                    border: `1px solid ${locale === lang.code ? "#00ff9940" : "rgba(255,255,255,0.1)"}`,
                    color: locale === lang.code ? "#00ff99" : "rgba(255,255,255,0.4)",
                    transition: "all 0.2s",
                    fontFamily: "var(--font-jetbrainsMono), monospace",
                  }}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;