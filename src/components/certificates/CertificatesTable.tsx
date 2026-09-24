"use client";

import { useMemo, useState } from "react";
import {
  Search,
  SlidersHorizontal,
  ArrowUpDown,
  Eye,
  Download,
  MoreHorizontal,
} from "lucide-react";

import { certificateFilters, certificateItems } from "@/data/dashboard";
import type { CertificateItem } from "@/types/dashboard";
import CertIcon from "./CertIcon";
import CertStatusBadge from "./CertStatusBadge";
import { useI18n } from "@/i18n/I18nProvider";

/** Maps a filter key to a predicate over a certificate. */
const matchers: Record<string, (c: CertificateItem) => boolean> = {
  all: () => true,
  valid: (c) => c.status === "Valid",
  expiring: (c) => c.status === "Expiring Soon",
  expired: (c) => c.status === "Expired",
};

export default function CertificatesTable() {
  const { t } = useI18n();

  const [activeFilter, setActiveFilter] = useState("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const matches = matchers[activeFilter] ?? matchers.all;
    const q = query.trim().toLowerCase();

    return certificateItems.filter((cert) => {
      const matchesFilter = matches(cert);
      const matchesQuery =
        !q ||
        cert.name.toLowerCase().includes(q) ||
        cert.system.toLowerCase().includes(q) ||
        cert.standard.toLowerCase().includes(q);

      return matchesFilter && matchesQuery;
    });
  }, [activeFilter, query]);

  return (
    <section className="glass rounded-2xl p-4 sm:p-5">
      {/* Toolbar: filters + search + sort */}
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap items-center gap-2">
          {certificateFilters.map((filter) => {
            const isActive = filter.key === activeFilter;

            return (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[12px] font-medium transition-colors ${
                  isActive
                    ? "bg-teal text-white shadow-sm"
                    : "border border-white/60 bg-white/60 text-slate-600 hover:bg-white/90"
                }`}
              >
                {t(filter.label)}
                <span
                  className={`flex h-4 min-w-4 items-center justify-center rounded-full px-1 text-[10px] ${
                    isActive
                      ? "bg-white/25 text-white"
                      : "bg-slate-200/80 text-slate-500"
                  }`}
                >
                  {filter.count}
                </span>
              </button>
            );
          })}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <div className="flex w-full items-center gap-2 rounded-full border border-white/60 bg-white/70 px-3 py-2 shadow-sm backdrop-blur-md sm:w-[190px]">
            <Search size={15} className="shrink-0 text-slate-400" />
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={t("Search certificates...")}
              className="w-full bg-transparent text-[12px] outline-none placeholder:text-slate-400"
            />
          </div>

          <button className="flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-3.5 py-2 text-[12px] font-medium text-slate-600 shadow-sm transition-colors hover:bg-white/90">
            <SlidersHorizontal size={14} />
            {t("Filter")}</button>

          <button className="flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-3.5 py-2 text-[12px] font-medium text-slate-600 shadow-sm transition-colors hover:bg-white/90">
            <ArrowUpDown size={14} />
            {t("Sort")}</button>
        </div>
      </div>

      {/* Table */}
      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[760px] border-collapse">
          <thead>
            <tr className="border-b border-white/60 text-left text-[11px] font-semibold uppercase tracking-wide text-slate-400">
              <th className="px-3 py-3 font-semibold">{t("Certificate")}</th>
              <th className="px-3 py-3 font-semibold">{t("Standard")}</th>
              <th className="px-3 py-3 font-semibold">{t("Issue Date")}</th>
              <th className="px-3 py-3 font-semibold">{t("Expiry Date")}</th>
              <th className="px-3 py-3 font-semibold">{t("Status")}</th>
              <th className="px-3 py-3 text-right font-semibold">{t("Actions")}</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((cert) => (
              <tr
                key={cert.id}
                className="group border-b border-white/40 transition-colors hover:bg-white/50"
              >
                {/* Certificate */}
                <td className="px-3 py-3">
                  <div className="flex items-center gap-2.5">
                    <CertIcon kind={cert.kind} />
                    <div className="min-w-0">
                      <p className="truncate text-[12.5px] font-semibold text-[#163b5b]">
                        {t(cert.name)}
                      </p>
                      <p className="truncate text-[10px] text-slate-400">
                        {t(cert.system)}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Standard */}
                <td className="px-3 py-3 text-[11.5px] text-slate-600">
                  {t(cert.standard)}
                </td>

                {/* Issue Date */}
                <td className="px-3 py-3 text-[11.5px] text-slate-600">
                  {t(cert.issueDate)}
                </td>

                {/* Expiry Date */}
                <td className="px-3 py-3 text-[11.5px] text-slate-600">
                  {t(cert.expiryDate)}
                </td>

                {/* Status */}
                <td className="px-3 py-3">
                  <CertStatusBadge status={cert.status} note={cert.statusNote} />
                </td>

                {/* Actions */}
                <td className="px-3 py-3">
                  <div className="flex items-center justify-end gap-1">
                    <button className="inline-flex items-center gap-1 rounded-lg px-2 py-1 text-[11px] font-medium text-teal transition-colors hover:bg-white/70">
                      <Eye size={14} />
                      {t("View")}</button>
                    <button className="inline-flex items-center gap-1 rounded-lg px-2 py-1 text-[11px] font-medium text-slate-500 transition-colors hover:bg-white/70 hover:text-teal">
                      <Download size={14} />
                      {t("Download")}</button>
                    <button
                      aria-label={t("More actions")}
                      className="inline-flex h-7 w-7 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-white/70 hover:text-slate-600"
                    >
                      <MoreHorizontal size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {filtered.length === 0 && (
              <tr>
                <td
                  colSpan={6}
                  className="px-3 py-10 text-center text-[12px] text-slate-400"
                >
                  {t("No certificates match your filters.")}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
