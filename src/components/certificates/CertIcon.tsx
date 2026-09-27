import {
  Globe,
  Leaf,
  ShieldCheck,
  Cloud,
  BarChart3,
  Link2,
  type LucideIcon,
} from "lucide-react";

import type { CertificateKind } from "@/types/dashboard";

const configByKind: Record<
  CertificateKind,
  { icon: LucideIcon; style: string }
> = {
  quality: { icon: Globe, style: "bg-primary/25 text-primary-dark" },
  environment: { icon: Leaf, style: "bg-emerald-100/80 text-emerald-600" },
  safety: { icon: ShieldCheck, style: "bg-amber-100/80 text-amber-600" },
  carbon: { icon: Cloud, style: "bg-primary-dark/15 text-primary-dark" },
  esg: { icon: BarChart3, style: "bg-accent-dark/15 text-accent-dark" },
  supply: { icon: Link2, style: "bg-primary/25 text-primary-dark" },
};

export default function CertIcon({ kind }: { kind: CertificateKind }) {
  const { icon: Icon, style } = configByKind[kind];

  return (
    <div
      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ring-1 ring-inset ring-white/50 ${style}`}
    >
      <Icon size={17} />
    </div>
  );
}
