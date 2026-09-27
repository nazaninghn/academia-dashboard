"use client";

import { useMemo, useState } from "react";
import {
  Search,
  SlidersHorizontal,
  ArrowUpDown,
  Eye,
  Download,
  Upload,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { docFilters, documentItems } from "@/data/dashboard";
import type { DocumentItem } from "@/types/dashboard";
import DocFileIcon from "./DocFileIcon";
import DocStatusBadge from "./DocStatusBadge";
import { useI18n } from "@/i18n/I18nProvider";

/** Maps a filter key to a predicate over a document. */
const matchers: Record<string, (d: DocumentItem) => boolean> = {
  all: () => true,
  required: (d) => d.status === "Required",
  submitted: (d) => d.uploadedDate != null,
  approved: (d) => d.status === "Approved",
  rejected: (d) => d.status === "Rejected",
};

export default function DocumentsTable() {
  const { t } = useI18n();

  const [activeFilter, setActiveFilter] = useState("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const matches = matchers[activeFilter] ?? matchers.all;
    const q = query.trim().toLowerCase();

    return documentItems.filter((doc) => {
      const matchesFilter = matches(doc);
      const matchesQuery =
        !q ||
        doc.name.toLowerCase().includes(q) ||
        doc.fileName.toLowerCase().includes(q) ||
        doc.project.toLowerCase().includes(q) ||
        doc.type.toLowerCase().includes(q);

      return matchesFilter && matchesQuery;
    });
  }, [activeFilter, query]);

  return (
    <section className="glass rounded-2xl p-4 sm:p-5">
      {/* Toolbar: filters + search + sort */}
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="-mx-4 flex items-center gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0 [&::-webkit-scrollbar]:hidden">
          {docFilters.map((filter) => {
            const isActive = filter.key === activeFilter;

            return (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-[12px] transition-colors ${
                  isActive
                    ? "bg-primary font-bold text-white shadow-sm"
                    : "font-medium border border-white/60 bg-white/60 text-slate-600 hover:bg-white/90"
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
          <div className="flex w-full items-center gap-2 rounded-full border border-white/60 bg-white/70 px-3 py-2 shadow-sm backdrop-blur-md sm:w-[200px]">
            <Search size={15} className="shrink-0 text-slate-400" />
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={t("Search documents...")}
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

      {/* Phones: stacked cards instead of the wide table */}
      <ul className="mt-4 space-y-2 md:hidden">
        {filtered.map((doc) => {
          const isUploaded = doc.uploadedDate != null;

          return (
            <li
              key={doc.id}
              className="rounded-xl border border-white/60 bg-white/50 p-3"
            >
              <div className="flex items-start gap-2.5">
                <DocFileIcon kind={doc.fileKind} />
                <div className="min-w-0 flex-1">
                  <p className="text-[13px] font-semibold text-ink">
                    {t(doc.name)}
                  </p>
                  <p className="truncate text-[11px] text-slate-500">
                    {t(doc.project)} · {t(doc.type)}
                  </p>
                </div>
                <DocStatusBadge status={doc.status} />
              </div>

              <div className="mt-3 flex items-center justify-between gap-2 border-t border-white/60 pt-2">
                <p className="min-w-0 truncate text-[11px] text-slate-500">
                  {isUploaded ? (
                    <>
                      {t(doc.uploadedDate ?? "")} ·{" "}
                      {t("by {name}", { name: doc.uploadedBy ?? "" })}
                    </>
                  ) : (
                    <span className="italic text-slate-400">
                      {t("Not uploaded")}
                    </span>
                  )}
                </p>

                <div className="flex shrink-0 items-center gap-1">
                  {isUploaded ? (
                    <>
                      <button aria-label={t("View document")} className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-white/70 hover:text-primary-dark">
                        <Eye size={15} />
                      </button>
                      <button aria-label={t("Download document")} className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-white/70 hover:text-primary-dark">
                        <Download size={15} />
                      </button>
                    </>
                  ) : (
                    <button aria-label={t("Upload document")} className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-white/70 hover:text-primary-dark">
                      <Upload size={15} />
                    </button>
                  )}
                </div>
              </div>
            </li>
          );
        })}

        {filtered.length === 0 && (
          <li className="py-10 text-center text-[12px] text-slate-400">
            {t("No documents match your filters.")}
          </li>
        )}
      </ul>

      {/* Table (tablet and up) */}
      <div className="mt-4 hidden overflow-x-auto md:block">
        <table className="w-full min-w-[820px] border-collapse">
          <thead>
            <tr className="border-b border-white/60 text-left text-[11px] font-semibold uppercase tracking-wide text-slate-400">
              <th className="w-8 px-3 py-3">
                <input
                  type="checkbox"
                  aria-label={t("Select all documents")}
                  className="h-3.5 w-3.5 rounded border-slate-300 accent-primary-dark"
                />
              </th>
              <th className="px-3 py-3 font-semibold">{t("Name")}</th>
              <th className="px-3 py-3 font-semibold">{t("Project")}</th>
              <th className="px-3 py-3 font-semibold">{t("Type")}</th>
              <th className="px-3 py-3 font-semibold">{t("Status")}</th>
              <th className="px-3 py-3 font-semibold">{t("Uploaded")}</th>
              <th className="px-3 py-3 text-right font-semibold">{t("Actions")}</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((doc) => {
              const isUploaded = doc.uploadedDate != null;

              return (
                <tr
                  key={doc.id}
                  className="group border-b border-white/40 transition-colors hover:bg-white/50"
                >
                  {/* Checkbox */}
                  <td className="px-3 py-3">
                    <input
                      type="checkbox"
                      aria-label={t("Select {name}", { name: t(doc.name) })}
                      className="h-3.5 w-3.5 rounded border-slate-300 accent-primary-dark"
                    />
                  </td>

                  {/* Name */}
                  <td className="px-3 py-3">
                    <div className="flex items-center gap-2.5">
                      <DocFileIcon kind={doc.fileKind} />
                      <div className="min-w-0">
                        <p className="truncate text-[12.5px] font-semibold text-ink">
                          {t(doc.name)}
                        </p>
                        <p className="truncate text-[10px] text-slate-400">
                          {t(doc.fileName)}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Project */}
                  <td className="px-3 py-3">
                    <p className="text-[12px] font-medium text-slate-600">
                      {t(doc.project)}
                    </p>
                    <p className="mt-0.5 text-[10px] text-slate-400">
                      {t(doc.projectCategory)}
                    </p>
                  </td>

                  {/* Type */}
                  <td className="px-3 py-3 text-[11.5px] text-slate-600">
                    {t(doc.type)}
                  </td>

                  {/* Status */}
                  <td className="px-3 py-3">
                    <DocStatusBadge status={doc.status} />
                  </td>

                  {/* Uploaded */}
                  <td className="px-3 py-3">
                    {isUploaded ? (
                      <>
                        <p className="text-[11.5px] text-slate-600">
                          {t(doc.uploadedDate ?? "")}
                        </p>
                        <p className="mt-0.5 text-[10px] text-slate-400">
                          {t("by {name}", { name: doc.uploadedBy ?? "" })}
                        </p>
                      </>
                    ) : (
                      <p className="text-[11.5px] italic text-slate-400">
                        {t("Not uploaded")}</p>
                    )}
                  </td>

                  {/* Actions */}
                  <td className="px-3 py-3">
                    <div className="flex items-center justify-end gap-1">
                      {isUploaded ? (
                        <>
                          <button
                            aria-label={t("View document")}
                            className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-white/70 hover:text-primary-dark"
                          >
                            <Eye size={15} />
                          </button>
                          <button
                            aria-label={t("Download document")}
                            className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-white/70 hover:text-primary-dark"
                          >
                            <Download size={15} />
                          </button>
                        </>
                      ) : (
                        <button
                          aria-label={t("Upload document")}
                          className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-white/70 hover:text-primary-dark"
                        >
                          <Upload size={15} />
                        </button>
                      )}
                      <button
                        aria-label={t("More actions")}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-white/70 hover:text-slate-600"
                      >
                        <MoreHorizontal size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}

            {filtered.length === 0 && (
              <tr>
                <td
                  colSpan={7}
                  className="px-3 py-10 text-center text-[12px] text-slate-400"
                >
                  {t("No documents match your filters.")}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Footer: count + pagination */}
      <div className="mt-4 flex flex-col-reverse items-center justify-between gap-3 sm:flex-row">
        <p className="text-[11px] text-slate-400">
          {t("Showing 1-{shown} of {total} documents", {
            shown: filtered.length,
            total: documentItems.length,
          })}
        </p>

        <div className="flex items-center gap-1.5">
          <button
            aria-label={t("Previous page")}
            className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/60 bg-white/60 text-slate-400 transition-colors hover:bg-white/90"
          >
            <ChevronLeft size={15} />
          </button>
          <button className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-[12px] font-bold text-white">
            1
          </button>
          <button className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/60 bg-white/60 text-[12px] font-medium text-slate-500 transition-colors hover:bg-white/90">
            2
          </button>
          <button className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/60 bg-white/60 text-[12px] font-medium text-slate-500 transition-colors hover:bg-white/90">
            3
          </button>
          <button
            aria-label={t("Next page")}
            className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/60 bg-white/60 text-slate-400 transition-colors hover:bg-white/90"
          >
            <ChevronRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}
