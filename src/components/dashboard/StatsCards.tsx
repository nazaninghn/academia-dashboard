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
  { bg: "bg-sky/25", color: "text-teal" },
  { bg: "bg-orange/15", color: "text-orange" },
  { bg: "bg-teal/15", color: "text-teal" },
  { bg: "bg-gold/20", color: "text-gold" },
  { bg: "bg-sky-light/40", color: "text-teal" },
];

export default function StatsCards() {
  return (
    <section className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
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
