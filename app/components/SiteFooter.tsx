import Image from "next/image";
import {
  FIRM_NAME,
  FIRM_NAME_PRIMARY,
  FIRM_NAME_SUFFIX,
  PHONE_DISPLAY,
  PHONE_TEL_HREF,
} from "@/lib/constants";

export default function SiteFooter() {
  return (
    <footer className="bg-ink text-cream mt-auto pb-20 md:pb-0">
      <div className="mx-auto max-w-[1200px] px-6 py-12 grid gap-8 md:grid-cols-3">
        <div className="flex items-center gap-3">
          <Image
            src="/zipkin-logo.png"
            alt="Zipkin Whiting logo"
            width={40}
            height={40}
            className="shrink-0"
          />
          <div>
            <p className="font-serif text-h3">
              {FIRM_NAME_PRIMARY} <span className="text-orange-light">{FIRM_NAME_SUFFIX}</span>
            </p>
            <p className="text-small text-cream/70 mt-1">Cleveland, Ohio</p>
            <a
              href={PHONE_TEL_HREF}
              className="text-body text-orange-light hover:text-orange-lightest mt-2 inline-block"
            >
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>

        <div className="text-small text-cream/70 leading-relaxed md:col-span-2">
          <p>
            Attorney advertising. Prior results do not guarantee a similar outcome. This
            website is a draft prototype; case results, testimonials, and legal disclaimers
            shown here are placeholders pending final review and approval by {FIRM_NAME}.
          </p>
          <p className="mt-3">
            © {new Date().getFullYear()} {FIRM_NAME}. Preview build — content and images to
            be finalized.
          </p>
        </div>
      </div>
    </footer>
  );
}
