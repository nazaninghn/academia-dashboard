"use client";

import { useState } from "react";

import { conversations } from "@/data/dashboard";
import ConversationList from "./ConversationList";
import ChatWindow from "./ChatWindow";
import ContactPanel from "./ContactPanel";

export default function MessagesClient() {
  const [selectedId, setSelectedId] = useState(conversations[0]?.id ?? "");
  // Below `lg` only one pane is visible at a time: the list, or the open chat.
  const [isChatOpen, setIsChatOpen] = useState(false);

  const active =
    conversations.find((c) => c.id === selectedId) ?? conversations[0];

  const handleSelect = (id: string) => {
    setSelectedId(id);
    setIsChatOpen(true);
  };

  return (
    <div className="grid grid-cols-1 gap-4 lg:h-[calc(100vh-230px)] lg:min-h-[520px] lg:grid-cols-[280px_1fr] xl:grid-cols-[300px_1fr_270px]">
      <div
        className={`h-[calc(100dvh-230px)] min-h-[420px] lg:block lg:h-auto lg:min-h-0 ${
          isChatOpen ? "hidden" : "block"
        }`}
      >
        <ConversationList activeId={active.id} onSelect={handleSelect} />
      </div>

      <div
        className={`h-[calc(100dvh-230px)] min-h-[460px] lg:block lg:h-auto lg:min-h-0 ${
          isChatOpen ? "block" : "hidden"
        }`}
      >
        <ChatWindow conversation={active} onBack={() => setIsChatOpen(false)} />
      </div>

      <div className="hidden min-h-0 xl:block">
        <ContactPanel conversation={active} />
      </div>
    </div>
  );
}
