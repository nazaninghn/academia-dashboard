"use client";

import { useMemo, useState } from "react";
import { Search, ChevronDown } from "lucide-react";

import { serviceCards, serviceFilters } from "@/data/dashboard";
import ServiceCard from "./ServiceCard";
import { useI18n } from "@/i18n/I18nProvider";

export default function ServicesGrid() {
  const { t } = useI18n();

  const [activeFilter, setActiveFilter] = useState("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return serviceCards.filter((service) => {
      const matchesFilter =
        activeFilter === "all" || service.category === activeFilter;
      const matchesQuery =
        !q ||
        service.title.toLowerCase().includes(q) ||
        service.tagline.toLowerCase().includes(q) ||
        service.description.toLowerCase().includes(q) ||
        service.tags.some((tag) => tag.toLowerCase().includes(q));

      return matchesFilter && matchesQuery;
    });
  }, [activeFilter, query]);

  return (
    <div className="space-y-4">
      {/* Toolbar */}
      <section className="glass rounded-2xl px-4 py-3">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-1 flex-wrap items-center gap-2">
            <div className="flex w-full items-center gap-2 rounded-full border border-white/60 bg-white/70 px-3 py-1.5 shadow-sm sm:w-[180px]">
              <Search size={14} className="shrink-0 text-slate-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t("Search services...")}
                className="w-full bg-transparent text-[11.5px] outline-none placeholder:text-slate-400"
              />
            </div>

            {serviceFilters.map((filter) => {
              const isActive = filter.key === activeFilter;
              return (
                <button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`rounded-full px-3 py-1.5 text-[11.5px] transition-colors ${
                    isActive
                      ? "bg-primary font-bold text-white shadow-sm"
                      : "font-medium border border-white/60 bg-white/60 text-slate-600 hover:bg-white/90"
                  }`}
                >
                  {t(filter.label)}
                </button>
              );
            })}
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <span className="text-[11px] text-slate-400">{t("Sort by")}</span>
            <button className="flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-3 py-1.5 text-[11.5px] font-medium text-slate-600 shadow-sm transition-colors hover:bg-white/90">
              {t("Most Popular")}<ChevronDown size={13} className="text-slate-400" />
            </button>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </section>

      {filtered.length === 0 && (
        <p className="glass rounded-2xl px-4 py-10 text-center text-[12px] text-slate-400">
          {t("No services match your search.")}</p>
      )}
    </div>
  );
}
