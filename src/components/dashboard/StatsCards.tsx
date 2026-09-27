import {
  Layers,
  ClipboardCheck,
  CheckCircle2,
  Award,
  CalendarDays,
} from "lucide-react";

import StatCard from "./StatCard";
import { stats } from "@/data/dashboard";

const icons = [Layers, ClipboardCheck, CheckCircle2, Award, CalendarDays];

const accents = [
  { bg: "bg-primary/25", color: "text-primary-dark" },
  { bg: "bg-accent-dark/15", color: "text-accent-dark" },
  { bg: "bg-primary-dark/15", color: "text-primary-dark" },
  { bg: "bg-accent/20", color: "text-accent" },
  { bg: "bg-primary/40", color: "text-primary-dark" },
];

export default function StatsCards() {
  return (
    <section className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-5">
      {stats.map((stat, index) => {
        const Icon = icons[index];
        const accent = accents[index];

        return (
          <StatCard
            key={stat.id}
            value={stat.value}
            label={stat.label}
            icon={<Icon size={22} />}
            iconBg={accent.bg}
            iconColor={accent.color}
          />
        );
      })}
    </section>
  );
}
