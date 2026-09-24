"use client";

import { BadgeCheck, ShieldCheck, Leaf } from "lucide-react";

import CertificateRow from "./CertificateRow";
import { certificates } from "@/data/dashboard";
import { useI18n } from "@/i18n/I18nProvider";

const icons = [BadgeCheck, ShieldCheck, Leaf];

export default function Certificates() {
  const { t } = useI18n();

  return (
    <section className="glass motion hover-lift rounded-2xl p-4 sm:p-6">
      <div className="flex items-center justify-between gap-2">
        <h2 className="text-[15px] font-semibold text-[#163b5b]">
          {t("Certificates")}</h2>

        <button className="shrink-0 rounded-full px-3 py-1 text-[12px] font-medium text-teal transition-colors hover:bg-teal/10">
          {t("View All")}</button>
      </div>

      <div className="mt-4 flex flex-col gap-2 sm:gap-3">
        {certificates.map((certificate, index) => {
          const Icon = icons[index];

          return (
            <CertificateRow
              key={certificate.id}
              certificate={certificate}
              icon={<Icon size={20} />}
            />
          );
        })}
      </div>
    </section>
  );
}
