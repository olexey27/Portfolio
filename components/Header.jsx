"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";

// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const languages = [
  { code: "en", label: "EN" },
  { code: "de", label: "DE" },
  { code: "ru", label: "RU" },
];

const Header = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale) => {
    // Replace current locale prefix with new one
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
  };

  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href={`/${locale}`}>
          <h1 className="text-4xl font-semibold">
            易码<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* desktop nav, language switcher & hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />

          {/* Language Switcher */}
          <div className="flex items-center gap-1">
            {languages.map((lang, idx) => (
              <span key={lang.code} className="flex items-center">
                <button
                  onClick={() => switchLocale(lang.code)}
                  className={`text-sm font-bold tracking-widest transition-all duration-300 px-1
                    ${locale === lang.code
                      ? "text-accent"
                      : "text-white/40 hover:text-white"
                    }`}
                >
                  {lang.label}
                </button>
                {idx < languages.length - 1 && (
                  <span className="text-white/20 text-xs mx-1">|</span>
                )}
              </span>
            ))}
          </div>

          <Link href={`/${locale}/contact`}>
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden flex items-center gap-4">
          {/* Language Switcher Mobile */}
          <div className="flex items-center gap-1">
            {languages.map((lang, idx) => (
              <span key={lang.code} className="flex items-center">
                <button
                  onClick={() => switchLocale(lang.code)}
                  className={`text-xs font-bold tracking-widest transition-all duration-300 px-1
                    ${locale === lang.code
                      ? "text-accent"
                      : "text-white/40 hover:text-white"
                    }`}
                >
                  {lang.label}
                </button>
                {idx < languages.length - 1 && (
                  <span className="text-white/20 text-xs mx-1">|</span>
                )}
              </span>
            ))}
          </div>
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;