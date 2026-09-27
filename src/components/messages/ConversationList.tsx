"use client";

import { useMemo, useState } from "react";
import {
  Search,
  SlidersHorizontal,
  Plus,
  Users,
  Headphones,
  Bell,
  type LucideIcon,
} from "lucide-react";

import { conversationFilters, conversations } from "@/data/dashboard";
import type { Conversation, ConversationKind } from "@/types/dashboard";
import ConsultantAvatar from "@/components/projects/ConsultantAvatar";
import { useI18n } from "@/i18n/I18nProvider";

/** Group avatars for non-person conversations. */
const groupIcon: Partial<Record<ConversationKind, { icon: LucideIcon; style: string }>> = {
  team: { icon: Users, style: "bg-primary-dark/15 text-primary-dark" },
  support: { icon: Headphones, style: "bg-primary/25 text-primary-dark" },
  system: { icon: Bell, style: "bg-rose-100/80 text-rose-500" },
};

function ConversationAvatar({ conversation }: { conversation: Conversation }) {
  const group = groupIcon[conversation.kind];

  if (conversation.kind === "consultant" || !group) {
    return <ConsultantAvatar name={conversation.name} />;
  }

  const Icon = group.icon;
  return (
    <div
      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ring-2 ring-white/60 ${group.style}`}
    >
      <Icon size={16} />
    </div>
  );
}

type ConversationListProps = {
  activeId: string;
  onSelect: (id: string) => void;
};

export default function ConversationList({
  activeId,
  onSelect,
}: ConversationListProps) {
  const { t } = useI18n();

  const [activeFilter, setActiveFilter] = useState("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return conversations.filter((c) => {
      const matchesFilter =
        activeFilter === "all" || c.kind === activeFilter;
      const matchesQuery =
        !q ||
        c.name.toLowerCase().includes(q) ||
        c.subject.toLowerCase().includes(q) ||
        c.preview.toLowerCase().includes(q);
      return matchesFilter && matchesQuery;
    });
  }, [activeFilter, query]);

  return (
    <div className="glass flex h-full flex-col rounded-2xl p-3">
      {/* Filters */}
      <div className="flex flex-wrap items-center gap-1.5">
        {conversationFilters.map((filter) => {
          const isActive = filter.key === activeFilter;
          return (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] transition-colors ${
                isActive
                  ? "bg-primary font-bold text-white shadow-sm"
                  : "font-medium border border-white/60 bg-white/60 text-slate-600 hover:bg-white/90"
              }`}
            >
              {t(filter.label)}
              <span
                className={`flex h-3.5 min-w-3.5 items-center justify-center rounded-full px-1 text-[9px] ${
                  isActive ? "bg-white/25 text-white" : "bg-slate-200/80 text-slate-500"
                }`}
              >
                {filter.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Search + actions */}
      <div className="mt-2.5 flex items-center gap-2">
        <div className="flex flex-1 items-center gap-2 rounded-full border border-white/60 bg-white/70 px-3 py-1.5 shadow-sm">
          <Search size={14} className="shrink-0 text-slate-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t("Search conversations...")}
            className="w-full bg-transparent text-[11.5px] outline-none placeholder:text-slate-400"
          />
        </div>
        <button
          aria-label={t("Filter conversations")}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/60 bg-white/70 text-slate-500 shadow-sm transition-colors hover:bg-white/90"
        >
          <SlidersHorizontal size={14} />
        </button>
        <button
          aria-label={t("New message")}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-white shadow-sm transition-colors hover:bg-primary-dark"
        >
          <Plus size={16} />
        </button>
      </div>

      {/* Conversation items */}
      <div className="mt-2.5 flex-1 space-y-1 overflow-y-auto pr-1">
        {filtered.map((c) => {
          const isActive = c.id === activeId;
          return (
            <button
              key={c.id}
              onClick={() => onSelect(c.id)}
              className={`flex w-full items-start gap-2.5 rounded-xl p-2.5 text-left transition-colors ${
                isActive ? "bg-white/80 shadow-sm" : "hover:bg-white/50"
              }`}
            >
              <div className="relative shrink-0">
                <ConversationAvatar conversation={c} />
                {c.online && (
                  <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
                )}
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <p className="truncate text-[12px] font-semibold text-ink">
                    {t(c.name)}
                  </p>
                  <span className="shrink-0 text-[10px] text-slate-400">
                    {t(c.time)}
                  </span>
                </div>
                <p className="truncate text-[10.5px] text-slate-500">
                  {t(c.subject)}
                </p>
                <p className="truncate text-[10.5px] text-slate-400">
                  {t(c.preview)}
                </p>
              </div>

              {c.unread > 0 && (
                <span className="mt-1 flex h-4 min-w-4 shrink-0 items-center justify-center rounded-full bg-primary px-1 text-[9px] font-semibold text-white">
                  {c.unread}
                </span>
              )}
            </button>
          );
        })}

        {filtered.length === 0 && (
          <p className="px-2 py-8 text-center text-[11.5px] text-slate-400">
            {t("No conversations found.")}</p>
        )}
      </div>
    </div>
  );
}
