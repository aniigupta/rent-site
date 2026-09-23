"use client";

import { availableOf, types, type TypeSlug } from "@/data/properties";
import { PropertyCard, StickyContact } from "@/app/components";
import { useLanguage } from "@/app/language-context";

export function ListingView({ type }: { type: TypeSlug }) {
  const { language, t } = useLanguage();
  const list = availableOf(types[type]);

  const typeLabel = type === "rooms" ? t("rooms") : t("shops");
  const heading = language === "hi" 
    ? `${typeLabel} - किराए के लिए` 
    : `${typeLabel} for Rent`;

  return (
    <div className="pb-24 md:pb-0">
      <h1 className="text-2xl font-bold">{heading}</h1>
      <p className="mt-1 text-slate-600">
        {list.length} {t("availableNow")}
      </p>
      {list.length ? (
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <PropertyCard key={p.id} p={p} />
          ))}
        </div>
      ) : (
        <p className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 text-slate-600">
          {t("noPropertiesAvailable", { type: typeLabel.toLowerCase() })}
        </p>
      )}
      <StickyContact />
    </div>
  );
}
