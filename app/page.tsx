import Link from "next/link";
import { ALL_PRACTICE_AREAS, DIFFERENTIATORS, PRIMARY_FOCUS } from "@/lib/content";
import { FOUNDED_YEAR, PHONE_DISPLAY, PHONE_SMS_HREF, PHONE_TEL_HREF } from "@/lib/constants";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ink-soft text-cream">
        <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
          <p className="eyebrow text-orange-light">
            Wrongful death · Auto &amp; truck · Machine injury
          </p>
          <h1 className="font-serif text-display leading-[1.15] mt-4 max-w-3xl">
            Cleveland trial attorneys who answer their own phone.
          </h1>
          <p className="text-body text-cream/80 mt-6 max-w-xl leading-relaxed">
            When your case matters this much, you deserve your attorney&apos;s direct cell
            number — not a call center. We return calls within 24 hours and represent every
            client as an individual, never as a file number in a mass settlement.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              href="/contact"
              className="bg-orange hover:bg-orange-dark text-white text-body font-medium px-6 py-3 rounded-full transition-colors"
            >
              Request a case review
            </Link>
            <a
              href={PHONE_TEL_HREF}
              className="border border-cream/40 hover:border-cream text-cream text-body font-medium px-6 py-3 rounded-full transition-colors"
            >
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      <div className="h-1 bg-orange" />

      {/* Results strip */}
      <section id="results" className="bg-ink text-cream">
        <div className="mx-auto max-w-[1200px] px-6 py-14">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
            <div>
              <p className="font-serif text-display text-orange-light">$30M</p>
              <p className="text-small text-cream/70 mt-1">Recovered for clients</p>
            </div>
            <div>
              <p className="font-serif text-display text-orange-light">{FOUNDED_YEAR}</p>
              <p className="text-small text-cream/70 mt-1">Founded in Cleveland</p>
            </div>
            <div>
              <p className="font-serif text-display text-orange-light">24 hrs</p>
              <p className="text-small text-cream/70 mt-1">Callback commitment</p>
            </div>
          </div>
          <p className="text-small text-cream/50 mt-10 border-t border-cream/10 pt-4 max-w-2xl">
            [Placeholder disclaimer] Prior results do not guarantee a similar outcome. Final
            wording to be confirmed by the firm.
          </p>
        </div>
      </section>

      {/* Primary focus */}
      <section id="practice-areas" className="bg-cream">
        <div className="mx-auto max-w-[1200px] px-6 py-20">
          <p className="eyebrow text-orange-dark">Our Focus</p>
          <h2 className="font-serif text-h1 mt-3">What We Handle Most</h2>
          <div className="grid gap-6 md:grid-cols-3 mt-10">
            {PRIMARY_FOCUS.map((area) => (
              <div
                key={area.title}
                className="border border-ink/10 rounded-2xl p-8 bg-white/40"
              >
                <h3 className="font-serif text-h3">{area.title}</h3>
                <p className="text-body text-ink-soft/80 mt-3 leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full range of practice areas */}
      <section className="bg-cream">
        <div className="mx-auto max-w-[1200px] px-6 pb-20">
          <p className="eyebrow text-orange-dark">Full range of practice</p>
          <h2 className="font-serif text-h2 mt-3">Our Areas of Practice</h2>
          <ul className="flex flex-wrap gap-3 mt-8">
            {ALL_PRACTICE_AREAS.map((area) => (
              <li
                key={area}
                className="text-small border bg-orange border-ink/14 rounded-full px-4 py-2 text-white hover:bg-orange-light hover:text-ink"
              >
                {area}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-[1200px] px-6 py-20">
          <p className="eyebrow text-orange-light">Why choose us</p>
          <h2 className="font-serif text-h1 mt-3 max-w-2xl">
            A litigation firm, not a settlement mill.
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 mt-10">
            {DIFFERENTIATORS.map((item) => (
              <div key={item.title} className="border-l-2 border-orange pl-5">
                <h3 className="font-serif text-h3">{item.title}</h3>
                <p className="text-body text-cream/75 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA band */}
      <section className="bg-cream">
        <div className="mx-auto max-w-[1200px] px-6 py-20 text-center">
          <h2 className="font-serif text-h1">Talk to your attorney directly.</h2>
          <p className="text-body text-ink-soft/80 mt-4 max-w-xl mx-auto leading-relaxed">
            Call, text, or request a case review. We respond within 24 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link
              href="/contact"
              className="bg-orange hover:bg-orange-dark text-white text-body font-medium px-6 py-3 rounded-full transition-colors"
            >
              Request a case review
            </Link>
            <a
              href={PHONE_TEL_HREF}
              className="border border-ink/20 hover:border-ink/50 text-ink-soft text-body font-medium px-6 py-3 rounded-full transition-colors"
            >
              Call {PHONE_DISPLAY}
            </a>
            <a
              href={PHONE_SMS_HREF}
              className="border border-ink/20 hover:border-ink/50 text-ink-soft text-body font-medium px-6 py-3 rounded-full transition-colors"
            >
              Text us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
