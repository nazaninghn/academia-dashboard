"use client";

import { useState } from "react";
import {
  ArrowLeft,
  Video,
  Phone,
  Search,
  MoreHorizontal,
  Paperclip,
  Smile,
  Send,
} from "lucide-react";

import type { Conversation } from "@/types/dashboard";
import ConsultantAvatar from "@/components/projects/ConsultantAvatar";
import MessageFileChip from "./MessageFileChip";
import { useI18n } from "@/i18n/I18nProvider";

// `mobile: false` actions are tucked away on narrow screens to save room.
const headerActions = [
  { icon: Video, label: "Start video call", mobile: false },
  { icon: Phone, label: "Start voice call", mobile: true },
  { icon: Search, label: "Search in conversation", mobile: false },
  { icon: MoreHorizontal, label: "More options", mobile: true },
];

export default function ChatWindow({
  conversation,
  onBack,
}: {
  conversation: Conversation;
  /** Returns to the conversation list (only shown below `lg`). */
  onBack?: () => void;
}) {
  const { t } = useI18n();

  const [draft, setDraft] = useState("");

  return (
    <div className="glass flex h-full flex-col rounded-2xl">
      {/* Header */}
      <div className="flex items-center justify-between gap-2 border-b border-white/50 px-3 py-3 sm:px-4">
        <div className="flex min-w-0 items-center gap-2.5">
          {onBack && (
            <button
              onClick={onBack}
              aria-label={t("Back to conversations")}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-white/70 hover:text-primary-dark lg:hidden"
            >
              <ArrowLeft size={17} />
            </button>
          )}
          <ConsultantAvatar name={conversation.name} />
          <div className="min-w-0">
            <p className="truncate text-[13px] font-semibold text-ink">
              {t(conversation.name)}
            </p>
            <p className="flex items-center gap-1.5 truncate text-[10.5px] text-slate-400">
              {t(conversation.role)}
              {conversation.online && (
                <span className="flex items-center gap-1 text-emerald-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  {t("Online")}</span>
              )}
            </p>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-0.5 sm:gap-1">
          {headerActions.map(({ icon: Icon, label, mobile }) => (
            <button
              key={label}
              aria-label={t(label)}
              className={`h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-white/70 hover:text-primary-dark ${
                mobile ? "flex" : "hidden sm:flex"
              }`}
            >
              <Icon size={16} />
            </button>
          ))}
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 space-y-3 overflow-y-auto px-3 py-4 sm:px-4">
        {/* Date pill */}
        <div className="flex justify-center">
          <span className="rounded-full bg-white/70 px-3 py-1 text-[10px] font-medium text-slate-400 shadow-sm">
            {t("10 Sep 2026")}</span>
        </div>

        {conversation.messages.map((message) => {
          const isMe = message.fromMe;

          return (
            <div
              key={message.id}
              className={`flex items-end gap-2 ${isMe ? "flex-row-reverse" : ""}`}
            >
              {!isMe && (
                <div className="mb-4 shrink-0">
                  <ConsultantAvatar name={conversation.name} />
                </div>
              )}

              <div
                className={`min-w-0 max-w-[85%] rounded-2xl sm:max-w-[78%] px-3.5 py-2.5 shadow-sm ${
                  isMe
                    ? "rounded-br-md bg-primary text-white"
                    : "rounded-bl-md bg-white/85 text-slate-700"
                }`}
              >
                {message.text && (
                  <p className="break-words text-[12px] leading-5">{t(message.text)}</p>
                )}

                {message.attachment && (
                  <div
                    className={`mt-2 rounded-xl p-2 ${
                      isMe ? "bg-white/15" : "bg-white/80 ring-1 ring-inset ring-white/60"
                    }`}
                  >
                    <MessageFileChip file={message.attachment} />
                  </div>
                )}

                <p
                  className={`mt-1 text-right text-[9.5px] ${
                    isMe ? "text-white/70" : "text-slate-400"
                  }`}
                >
                  {t(message.time)}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Input */}
      <div className="border-t border-white/50 p-3">
        <div className="flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-3 py-2 shadow-sm">
          <button
            aria-label={t("Attach file")}
            className="shrink-0 text-slate-400 transition-colors hover:text-primary-dark"
          >
            <Paperclip size={17} />
          </button>
          <input
            type="text"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder={t("Type a message...")}
            className="w-full bg-transparent text-[12px] outline-none placeholder:text-slate-400"
          />
          <button
            aria-label={t("Add emoji")}
            className="shrink-0 text-slate-400 transition-colors hover:text-primary-dark"
          >
            <Smile size={17} />
          </button>
          <button
            aria-label={t("Send message")}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-primary-dark"
          >
            <Send size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}
