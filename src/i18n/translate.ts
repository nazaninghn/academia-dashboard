import type { Locale } from "./config";
import { tr } from "./tr";

export type TranslateValues = Record<string, string | number>;

/**
 * Translates an English source string into the given locale.
 *
 * Source text doubles as the key (gettext style), so English needs no
 * dictionary and any string without a Turkish entry falls back to English.
 * `{name}` placeholders are filled from `values` after translation.
 */
export function translate(
  locale: Locale,
  text: string,
  values?: TranslateValues,
): string {
  const translated = locale === "en" ? text : translateToTurkish(text);

  if (!values) return translated;

  return translated.replace(/\{(\w+)\}/g, (match, name: string) =>
    name in values ? String(values[name]) : match,
  );
}

const trMonths: Record<string, string> = {
  Jan: "Oca",
  Feb: "Şub",
  Mar: "Mar",
  Apr: "Nis",
  May: "May",
  Jun: "Haz",
  Jul: "Tem",
  Aug: "Ağu",
  Sep: "Eyl",
  Oct: "Eki",
  Nov: "Kas",
  Dec: "Ara",
};

const monthPattern = Object.keys(trMonths).join("|");

/** Patterns for data strings that carry numbers or dates. */
const trPatterns: [RegExp, (...groups: string[]) => string][] = [
  // "25 Sep 2026", "25 Sep 2026, 10:30"
  [
    new RegExp(`^(\\d{1,2}) (${monthPattern}) (\\d{4})([,\\s\\d:]*)$`),
    (day, month, year, time) => `${day} ${trMonths[month]} ${year}${time}`,
  ],
  // "10 Sep"
  [
    new RegExp(`^(\\d{1,2}) (${monthPattern})$`),
    (day, month) => `${day} ${trMonths[month]}`,
  ],
  // "1.2 MB · 10 Sep 2026" — translate each side independently
  [/^(.+) · (.+)$/, (left, right) => `${translateToTurkish(left)} · ${translateToTurkish(right)}`],
  // "Sep 10"
  [new RegExp(`^(${monthPattern}) (\\d{1,2})$`), (month, day) => `${day} ${trMonths[month]}`],
  [/^(\d+) days? left$/, (n) => `${n} gün kaldı`],
  [/^(\d+) days? overdue$/, (n) => `${n} gün gecikti`],
  [/^(\d+) days? ago$/, (n) => `${n} gün önce`],
  [/^(\d+) hours? ago$/, (n) => `${n} saat önce`],
  [/^(\d+) minutes? ago$/, (n) => `${n} dakika önce`],
  [/^(\d+) min ago$/, (n) => `${n} dk önce`],
  [/^(\d+) weeks? ago$/, (n) => `${n} hafta önce`],
  [/^(\d+) months? ago$/, (n) => `${n} ay önce`],
  [/^in (\d+) days?$/, (n) => `${n} gün içinde`],
  [/^(\d+) days?$/, (n) => `${n} gün`],
  [/^(\d+) weeks?$/, (n) => `${n} hafta`],
  [/^(\d+) months?$/, (n) => `${n} ay`],
  [/^(\d+)[–-](\d+) weeks$/, (a, b) => `${a}–${b} hafta`],
  [/^(\d+)[–-](\d+) months$/, (a, b) => `${a}–${b} ay`],
  [/^(\d+) members?$/, (n) => `${n} üye`],
  [/^(\d+) files?$/, (n) => `${n} dosya`],
  [/^(\d+) reports?$/, (n) => `${n} rapor`],
  [/^Yesterday, (.+)$/, (time) => `Dün, ${time}`],
  [/^Today, (.+)$/, (time) => `Bugün, ${time}`],
];

function translateToTurkish(text: string): string {
  const exact = tr[text];
  if (exact !== undefined) return exact;

  for (const [pattern, build] of trPatterns) {
    const match = pattern.exec(text);
    if (match) return build(...match.slice(1));
  }

  if (process.env.NODE_ENV === "development") reportMissing(text);

  return text;
}

const reported = new Set<string>();

/** Logs each untranslated string once so gaps are easy to spot in dev. */
function reportMissing(text: string) {
  // Skip things that are never translated: codes, initials, files, URLs, e-mails.
  const untranslatable = /[@_/]|\.\w{2,4}$|^[A-Z]{1,3}$|^[A-Z]+-\d+$|^ISO \d+$|^[\d.]+ ?[KMG]B$/;
  if (!/[A-Za-z]{2}/.test(text) || untranslatable.test(text) || reported.has(text)) return;
  reported.add(text);
  console.warn(`[i18n] missing tr: ${JSON.stringify(text)}`);
}
