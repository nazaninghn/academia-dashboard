"use client";

import { FileText } from "lucide-react";

import DocumentRow from "./DocumentRow";
import { documents } from "@/data/dashboard";
import { useI18n } from "@/i18n/I18nProvider";

export default function DocumentRequests() {
  const { t } = useI18n();

  return (
    <section className="glass motion hover-lift rounded-2xl p-4 sm:p-6">
      <div className="flex items-center justify-between gap-2">
        <h2 className="text-[15px] font-semibold text-[#163b5b]">
          {t("Document Requests")}</h2>

        <button className="shrink-0 rounded-full px-3 py-1 text-[12px] font-medium text-teal transition-colors hover:bg-teal/10">
          {t("View All")}</button>
      </div>

      <div className="mt-4 flex flex-col gap-2 sm:gap-3">
        {documents.map((document) => (
          <DocumentRow
            key={document.id}
            document={document}
            icon={<FileText size={20} />}
          />
        ))}
      </div>
    </section>
  );
}
