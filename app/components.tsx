"use client";

import Image from "next/image";
import Link from "next/link";
import { labels, labels_hi, getLocalizedProperty, pathOf, type Property } from "@/data/properties";
import { directionsLink, site, siteUrl } from "@/data/site";
import { useLanguage, LanguageSwitcher } from "@/app/language-context";

export { pathOf };


const icons = {
  chat: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.4-4 8-9 8a9.9 9.9 0 0 1-4.3-1L3 20l1.4-3.7A7.6 7.6 0 0 1 3 12c0-4.4 4-8 9-8s9 3.6 9 8Z",
  phone: "M3 5a2 2 0 0 1 2-2h3.3a1 1 0 0 1 .9.7l1.5 4.5a1 1 0 0 1-.5 1.2l-2.3 1.1a11 11 0 0 0 5.6 5.6l1.1-2.3a1 1 0 0 1 1.2-.5l4.5 1.5a1 1 0 0 1 .7.9V19a2 2 0 0 1-2 2h-1C9.7 21 3 14.3 3 6V5Z",
  pin: "M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Zm0-9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
  check: "m5 13 4 4L19 7",
  home: "M3 11 12 4l9 7M5 10v10h14V10M10 20v-6h4v6",
  arrow: "M5 12h14m-6-6 6 6-6 6",
  directions: "M3 11 22 2l-9 19-2-8-8-2Z",
};

export function Icon({ name, className = "size-5" }: { name: keyof typeof icons; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d={icons[name]} />
    </svg>
  );
}

export function Photo({ src, alt, priority }: { src?: string; alt: string; priority?: boolean }) {
  const { t } = useLanguage();
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
      {src ? (
        <Image src={src} alt={alt} fill priority={priority} sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
      ) : (
        <div className="flex h-full flex-col items-center justify-center gap-2 text-slate-400">
          <Icon name="home" className="size-10" />
          <span className="text-xs">{t("photosComingSoon")}</span>
        </div>
      )}
    </div>
  );
}

export function Features({ items }: { items: string[] }) {
  const { translateFeature } = useLanguage();
  if (!items.length) return null;
  return (
    <ul className="mt-3 flex flex-wrap gap-1.5">
      {items.map((f) => (
        <li key={f} className="flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-700">
          <Icon name="check" className="size-3.5 text-emerald-600" />
          {translateFeature(f)}
        </li>
      ))}
    </ul>
  );
}

export function PropertyCard({ p }: { p: Property }) {
  const { language, t } = useLanguage();
  const localized = getLocalizedProperty(p, language);
  const typeLabel = language === "hi" ? labels_hi[p.type] : labels[p.type];

  return (
    <Link href={pathOf(p)} className="reveal group block overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:shadow-lg active:scale-[0.99]">
      <div className="relative">
        <Photo src={localized.images[0]} alt={localized.title} />
        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-xs font-semibold text-slate-800 shadow-sm">{typeLabel}</span>
        {localized.images.length > 1 && (
          <span className="absolute bottom-3 right-3 rounded-full bg-black/60 px-2 py-0.5 text-xs text-white">
            {localized.images.length} {t("photosCount")}
          </span>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-lg font-semibold">{localized.title}</h3>
          <span className="flex items-center gap-1 text-xs font-medium text-emerald-700">
            <span className="size-2 rounded-full bg-emerald-500" /> {t("available")}
          </span>
        </div>
        <p className="mt-1 flex items-center gap-1 text-sm text-slate-500">
          <Icon name="pin" className="size-4 shrink-0" />
          <span className="truncate">{localized.location}</span>
        </p>
        <p className="mt-2 line-clamp-2 text-sm text-slate-600">{localized.description}</p>
        <Features items={[...(localized.size ? [localized.size] : []), ...localized.features].slice(0, 3)} />
        <p className="mt-4 flex items-center gap-1 text-sm font-semibold text-slate-900">
          {t("viewDetails")} <Icon name="arrow" className="size-4 transition group-hover:translate-x-1" />
        </p>
      </div>
    </Link>
  );
}

export function Directions({ href = directionsLink() }: { href?: string }) {
  const { t } = useLanguage();
  return (
    <a href={href} target="_blank" rel="noopener" className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-700 active:scale-95 active:bg-blue-800">
      <Icon name="directions" /> {t("getDirections")}
    </a>
  );
}

// With a property: the message names it. Without: a general enquiry.
export function ContactButtons({ p }: { p?: Property }) {
  const { language, t } = useLanguage();
  const phone = (p?.contact?.phone ?? site.phone).replace(/\s/g, "");
  const wa = p?.contact?.whatsapp ?? site.whatsapp;

  const typeLabel = p ? (language === "hi" ? labels_hi[p.type] : labels[p.type]) : "";
  const propTitle = p ? (language === "hi" ? (p.title_hi || p.title) : p.title) : "";

  const msg = language === "hi"
    ? (p
        ? `नमस्ते, मुझे ${propTitle} (${typeLabel}) में रुचि है - ${siteUrl}${pathOf(p)}। क्या यह उपलब्ध है? कृपया किराए का विवरण साझा करें।`
        : "नमस्ते, मैंने आपका किराए का पोस्टर देखा। कौन से कमरे/दुकानें उपलब्ध हैं और किराया कितना है?")
    : (p
        ? `Hi, I'm interested in ${p.title} (${labels[p.type]}) - ${siteUrl}${pathOf(p)}. Is it available? Please share the rent details.`
        : "Hi, I saw your rental poster. Which rooms/shops are available, and what is the rent?");

  return (
    <div className="grid grid-cols-2 gap-3">
      <a
        href={`https://wa.me/${wa}?text=${encodeURIComponent(msg)}`}
        target="_blank"
        rel="noopener"
        className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3.5 font-semibold text-white shadow-sm transition hover:bg-emerald-700 active:scale-95 active:bg-emerald-800"
      >
        <Icon name="chat" /> {t("whatsapp")}
      </a>
      <a href={`tel:${phone}`} className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3.5 font-semibold text-white shadow-sm transition hover:bg-slate-800 active:scale-95 active:bg-black">
        <Icon name="phone" /> {t("call")}
      </a>
    </div>
  );
}

// Fixed contact bar at the bottom of the screen on phones. Pages using it need bottom padding (pb-24).
export function StickyContact({ p }: { p?: Property }) {
  return (
    <div className="enter-bar fixed inset-x-0 bottom-0 z-10 border-t border-slate-200 bg-white/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur md:hidden">
      <ContactButtons p={p} />
    </div>
  );
}

// Navigation Header with bilingual brand and language switcher
export function HeaderNav() {
  const { language, t } = useLanguage();
  const brandName = language === "hi" ? site.name_hi : site.name;

  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-2 px-4 py-3">
        <Link href="/" className="font-bold text-slate-900 truncate max-w-[190px] sm:max-w-none text-base sm:text-lg">
          {brandName}
        </Link>
        <div className="flex items-center gap-1 sm:gap-2">
          <div className="flex gap-1 text-sm font-medium">
            <Link href="/#rooms" className="rounded-lg px-2.5 py-1.5 text-slate-700 hover:bg-slate-100 sm:px-3 sm:py-2">
              {t("rooms")}
            </Link>
            <Link href="/#shops" className="rounded-lg px-2.5 py-1.5 text-slate-700 hover:bg-slate-100 sm:px-3 sm:py-2">
              {t("shops")}
            </Link>
          </div>
          <LanguageSwitcher className="ml-1 sm:ml-2" />
        </div>
      </nav>
    </header>
  );
}

// Footer with bilingual labels
export function SiteFooter() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-slate-200 bg-white px-4 py-6 text-center text-sm text-slate-500">
      <p>
        {t("enquiries")}:{" "}
        <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="font-medium text-slate-700">
          {site.phone}
        </a>
      </p>
      <p className="mt-1">{t("footerRentNote")}</p>
    </footer>
  );
}
