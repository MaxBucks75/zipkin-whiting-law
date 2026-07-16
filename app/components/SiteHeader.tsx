"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FIRM_NAME_PRIMARY,
  FIRM_NAME_SUFFIX,
  NAV_LINKS,
  PHONE_TEL_HREF,
  PHONE_DISPLAY,
  TAGLINE,
} from "@/lib/constants";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-ink backdrop-blur border-b border-ink/10">
      <div className="mx-auto max-w-[1200px] px-6 h-20 flex items-center justify-between gap-4">
        <Link href="/" className="shrink-0 flex items-center gap-3" onClick={() => setMenuOpen(false)}>
          <Image
            src="/zipkin-logo.png"
            alt="Zipkin Whiting logo"
            width={40}
            height={40}
            className="shrink-0"
          />
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-h3 text-white whitespace-nowrap">
              {FIRM_NAME_PRIMARY} <span className="text-orange-light">{FIRM_NAME_SUFFIX}</span>
            </span>
            <span className="text-[10px] uppercase tracking-wider text-cream/70 whitespace-nowrap">
              {TAGLINE}
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-body text-white hover:text-orange-dark transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href={PHONE_TEL_HREF}
          className="hidden md:inline-flex shrink-0 items-center gap-2 bg-orange hover:bg-orange-dark text-white text-small font-medium px-4 py-2.5 rounded-full transition-colors"
        >
          Call {PHONE_DISPLAY}
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="md:hidden shrink-0 inline-flex items-center justify-center w-10 h-10 text-white"
        >
          {menuOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="6" y1="6" x2="18" y2="18" strokeLinecap="round" />
              <line x1="18" y1="6" x2="6" y2="18" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" strokeLinecap="round" />
              <line x1="3" y1="12" x2="21" y2="12" strokeLinecap="round" />
              <line x1="3" y1="18" x2="21" y2="18" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div id="mobile-menu" className="md:hidden border-t border-cream/10 bg-ink px-6 py-6">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-body text-white hover:text-orange-dark transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <a
            href={PHONE_TEL_HREF}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 bg-orange hover:bg-orange-dark text-white text-small font-medium px-4 py-3 rounded-full transition-colors"
          >
            Call {PHONE_DISPLAY}
          </a>
        </div>
      )}
    </header>
  );
}
