"use client";

import Link from "next/link";
import { labels, labels_hi, getLocalizedProperty, type Property, type TypeSlug } from "@/data/properties";
import { site } from "@/data/site";
import { ContactButtons, Directions, Features, Icon, Photo, StickyContact } from "@/app/components";
import { useLanguage } from "@/app/language-context";

export function DetailView({ p, type }: { p: Property; type: TypeSlug }) {
  const { language, t } = useLanguage();
  const localized = getLocalizedProperty(p, language);
  const photos = localized.images.length ? localized.images : [undefined];
  const typeLabel = language === "hi" ? labels_hi[p.type] : labels[p.type];
  const allLabel = type === "rooms" ? t("allRooms") : t("allShops");
  const currentArea = language === "hi" ? site.area_hi : site.area;

  return (
    <div className="pb-24 md:pb-0">
      <Link
        href={`/#${type}`}
        className="inline-flex items-center gap-1 rounded-lg py-1 text-sm font-medium text-slate-600 hover:text-slate-900"
      >
        <Icon name="arrow" className="size-4 rotate-180" /> {allLabel}
      </Link>

      {!p.available && (
        <p className="mt-4 rounded-xl bg-amber-50 p-4 text-sm text-amber-800">
          {t("propertyRentedNotice")}{" "}
          <Link href={`/#${type}`} className="font-semibold underline">
            {t("seeAvailable")} {type === "rooms" ? t("rooms") : t("shops")}
          </Link>
        </p>
      )}

      <div className="mt-4 md:grid md:grid-cols-2 md:gap-8">
        <div className="enter">
          <div className="-mx-4 flex snap-x snap-mandatory gap-2 overflow-x-auto px-4 md:mx-0 md:px-0">
            {photos.map((src, i) => (
              <div key={i} className="w-full shrink-0 snap-center overflow-hidden rounded-2xl">
                <Photo src={src} alt={`${localized.title} photo ${i + 1}`} priority={i === 0} />
              </div>
            ))}
          </div>
          {photos.length > 1 && (
            <p className="mt-2 text-center text-xs text-slate-500">
              {t("swipePhotos", { count: photos.length })}
            </p>
          )}
        </div>

        <div className="enter mt-5 md:mt-0" style={{ "--d": "120ms" } as React.CSSProperties}>
          <div className="flex items-start justify-between gap-3">
            <div>
              <span className="inline-block rounded-md bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-600 mb-1">
                {typeLabel}
              </span>
              <h1 className="text-2xl font-bold">{localized.title}</h1>
            </div>
            <span
              className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium ${
                p.available ? "bg-emerald-50 text-emerald-700" : "bg-slate-200 text-slate-600"
              }`}
            >
              {p.available ? t("available") : t("rented")}
            </span>
          </div>

          <p className="mt-3 rounded-xl bg-emerald-50 p-3 text-emerald-900 ring-1 ring-emerald-200">
            {t("rentStatus")}
          </p>

          <p className="mt-4 text-slate-700">{localized.description}</p>

          {localized.size && (
            <p className="mt-4 text-sm">
              <span className="font-semibold">{t("size")}:</span> {localized.size}
            </p>
          )}

          {localized.features.length > 0 && <Features items={localized.features} />}

          <div className="reveal mt-6 rounded-2xl border border-slate-200 bg-white p-4">
            <p className="flex items-center gap-1.5 text-sm font-semibold">
              <Icon name="pin" className="size-4" /> {t("location")}
            </p>
            <p className="mt-1 text-slate-700">{currentArea}</p>
            <p className="text-sm text-slate-500">{localized.location}</p>
            <Directions href={p.mapLink} />
            <p className="mt-2 text-xs text-slate-500">{t("exactAddressNote")}</p>
          </div>

          <div className="mt-6 hidden md:block">
            <ContactButtons p={p} />
          </div>
        </div>
      </div>

      <StickyContact p={p} />
    </div>
  );
}
