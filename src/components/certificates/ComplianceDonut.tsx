"use client";

import { complianceSegments } from "@/data/dashboard";
import { useI18n } from "@/i18n/I18nProvider";

const SIZE = 120;
const STROKE = 14;
const RADIUS = (SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function ComplianceDonut() {
  const { t } = useI18n();

  const total = complianceSegments.reduce((sum, s) => sum + s.value, 0);
  const validSegment = complianceSegments.find((s) => s.id === "valid");
  const compliancePercent = total
    ? Math.round(((validSegment?.value ?? 0) / total) * 100)
    : 0;

  // Build stroke-dash offsets so segments sit end-to-end around the ring.
  const arcs = complianceSegments.map((segment, index) => {
    const fraction = total ? segment.value / total : 0;
    const before = complianceSegments
      .slice(0, index)
      .reduce((sum, s) => sum + (total ? s.value / total : 0), 0);

    return {
      segment,
      dash: fraction * CIRCUMFERENCE,
      offset: -before * CIRCUMFERENCE,
    };
  });

  return (
    <section className="glass motion hover-lift rounded-2xl p-4 sm:p-5">
      <h3 className="text-[13px] font-semibold text-[#163b5b]">
        {t("Compliance Status")}</h3>

      <div className="mt-3 flex items-center gap-5">
        {/* Donut */}
        <div className="relative shrink-0" style={{ width: SIZE, height: SIZE }}>
          <svg
            width={SIZE}
            height={SIZE}
            viewBox={`0 0 ${SIZE} ${SIZE}`}
            className="-rotate-90"
          >
            {/* Track */}
            <circle
              cx={SIZE / 2}
              cy={SIZE / 2}
              r={RADIUS}
              fill="none"
              stroke="#e2e8f0"
              strokeWidth={STROKE}
            />
            {/* Segments */}
            {arcs.map(({ segment, dash, offset }) => (
              <circle
                key={segment.id}
                cx={SIZE / 2}
                cy={SIZE / 2}
                r={RADIUS}
                fill="none"
                stroke={segment.color}
                strokeWidth={STROKE}
                strokeLinecap="round"
                strokeDasharray={`${dash} ${CIRCUMFERENCE - dash}`}
                strokeDashoffset={offset}
              />
            ))}
          </svg>

          {/* Center label */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-[22px] font-bold leading-none text-[#163b5b]">
              {compliancePercent}%
            </span>
          </div>
        </div>

        {/* Legend */}
        <ul className="flex flex-1 flex-col gap-2.5">
          {complianceSegments.map((segment) => (
            <li key={segment.id} className="flex items-center gap-2">
              <span
                className="h-2.5 w-2.5 shrink-0 rounded-full"
                style={{ backgroundColor: segment.color }}
              />
              <span className="text-[11.5px] text-slate-600">
                <span className="font-semibold text-[#163b5b]">
                  {segment.value}
                </span>{" "}
                {t(segment.label)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
