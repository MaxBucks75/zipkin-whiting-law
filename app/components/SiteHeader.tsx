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
  return (
    <header className="sticky top-0 z-40 bg-ink backdrop-blur border-b border-ink/10">
      <div className="mx-auto max-w-[1200px] px-6 h-20 flex items-center justify-between gap-4">
        <Link href="/" className="shrink-0 flex items-center gap-3">
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
          className="shrink-0 inline-flex items-center gap-2 bg-orange hover:bg-orange-dark text-white text-small font-medium px-4 py-2.5 rounded-full transition-colors"
        >
          Call {PHONE_DISPLAY}
        </a>
      </div>
    </header>
  );
}
