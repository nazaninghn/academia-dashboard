"use client";

import { UploadCloud, HardDrive } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

export default function UploadPanel() {
  const { t } = useI18n();

  const usedGb = 2.4;
  const totalGb = 10;
  const usedPercent = Math.round((usedGb / totalGb) * 100);

  return (
    <div className="flex flex-col gap-4">
      {/* Upload card */}
      <section className="glass rounded-2xl p-4 sm:p-5">
        <h3 className="text-[13px] font-semibold text-ink">
          {t("Upload Document")}</h3>

        <div className="mt-3 flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-primary/50 bg-primary/30 px-4 py-7 text-center transition-colors hover:border-primary-dark/60 hover:bg-primary/50">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/70 text-primary-dark ring-1 ring-inset ring-white/60">
            <UploadCloud size={24} />
          </div>
          <p className="mt-3 text-[12px] font-medium text-slate-600">
            {t("Drag & drop your files here")}</p>
          <p className="text-[11px] text-slate-400">{t("or click to browse")}</p>

          <button className="mt-3 rounded-full bg-primary px-5 py-2 text-[12px] font-bold text-white shadow-sm transition-colors hover:bg-primary-dark">
            {t("Browse Files")}</button>
        </div>

        <p className="mt-3 text-[10px] leading-4 text-slate-400">
          {t("Max file size: 50 MB")}<br />
          {t("Supported formats: PDF, DOC, DOCX, XLS, XLSX, PNG, JPG")}</p>
      </section>

      {/* Storage usage card */}
      <section className="glass rounded-2xl p-4 sm:p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-dark/15 text-primary-dark ring-1 ring-inset ring-white/50">
              <HardDrive size={18} />
            </div>
            <div>
              <p className="text-[12px] font-semibold text-ink">
                {t("Storage Usage")}</p>
              <p className="text-[10px] text-slate-400">
                {t("{used} GB of {total} GB used", { used: usedGb, total: totalGb })}
              </p>
            </div>
          </div>

          <span className="text-[13px] font-bold text-primary-dark">
            {usedPercent}%
          </span>
        </div>

        <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-slate-200/70">
          <div
            className="h-full rounded-full bg-gradient-to-r from-primary-dark to-primary"
            style={{ width: `${usedPercent}%` }}
          />
        </div>
      </section>
    </div>
  );
}
