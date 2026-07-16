import { PHONE_TEL_HREF, PHONE_DISPLAY } from "@/lib/constants";

export default function MobileCallBar() {
  return (
    <a
      href={PHONE_TEL_HREF}
      className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-orange text-white text-center py-3.5 text-body font-medium"
    >
      Call now — {PHONE_DISPLAY}
    </a>
  );
}
