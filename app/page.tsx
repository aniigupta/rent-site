"use client";

import { availableOf } from "@/data/properties";
import { site } from "@/data/site";
import { ContactButtons, Directions, Icon, PropertyCard, StickyContact } from "@/app/components";
import { useLanguage } from "@/app/language-context";

export default function Home() {
  const { language, t } = useLanguage();

  const sections = [
    {
      id: "rooms",
      type: "room" as const,
      label: t("rooms"),
      list: availableOf("room"),
    },
    {
      id: "shops",
      type: "shop" as const,
      label: t("shops"),
      list: availableOf("shop"),
    },
  ];

  const currentArea = language === "hi" ? site.area_hi : site.area;

  return (
    <div className="space-y-8 pb-24 md:pb-0">
      <section className="enter rounded-3xl bg-gradient-to-br from-slate-900 to-slate-700 px-6 py-8 text-white shadow-lg">
        <p style={{ "--d": "100ms" } as React.CSSProperties} className="enter inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-medium">
          <Icon name="pin" className="size-3.5" /> {currentArea}
        </p>
        <h1 style={{ "--d": "200ms" } as React.CSSProperties} className="enter mt-4 text-3xl font-bold leading-tight sm:text-4xl">
          {t("heroTitle")}
        </h1>
        <p style={{ "--d": "300ms" } as React.CSSProperties} className="enter mt-2 max-w-xl text-slate-300">
          {t("heroSubtitle")}
        </p>

        <div style={{ "--d": "400ms" } as React.CSSProperties} className="enter mt-6 grid grid-cols-2 gap-3">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/15 transition hover:-translate-y-0.5 hover:bg-white/15 active:scale-95"
            >
              <p className="text-3xl font-bold">{s.list.length}</p>
              <p className="text-sm text-slate-300">
                {s.label} {t("availableCount")}
              </p>
            </a>
          ))}
        </div>

        <div className="mt-6 hidden md:block md:max-w-sm">
          <ContactButtons />
        </div>
      </section>

      {sections.map((s) => (
        <section key={s.id} id={s.id} className="scroll-mt-20">
          <div className="reveal flex items-baseline justify-between">
            <h2 className="text-2xl font-bold">{s.label}</h2>
            <span className="text-sm text-slate-500">
              {s.list.length} {t("availableCount")}
            </span>
          </div>
          {s.list.length ? (
            <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {s.list.map((p) => (
                <PropertyCard key={p.id} p={p} />
              ))}
            </div>
          ) : (
            <p className="mt-4 rounded-2xl bg-white p-5 text-slate-600 ring-1 ring-slate-200">
              {t("noPropertiesAvailable", { type: s.label.toLowerCase() })}
            </p>
          )}
        </section>
      ))}

      <section className="reveal grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl bg-white p-5 ring-1 ring-slate-200">
          <p className="flex items-center gap-1.5 font-semibold">
            <Icon name="pin" className="size-4" /> {t("location")}
          </p>
          <p className="mt-1 text-sm text-slate-600">{currentArea}</p>
          <Directions />
        </div>
        <div className="rounded-2xl bg-white p-5 ring-1 ring-slate-200">
          <p className="font-semibold">{t("rentStatus")}</p>
          <p className="mt-1 text-sm text-slate-600">{t("rentNote")}</p>
        </div>
      </section>

      <StickyContact />
    </div>
  );
}
