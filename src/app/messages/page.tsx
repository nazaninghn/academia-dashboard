import DashboardShell from "@/components/dashboard/DashboardShell";
import MessagesBanner from "@/components/messages/MessagesBanner";
import MessagesClient from "@/components/messages/MessagesClient";

export default function MessagesPage() {
  return (
    <DashboardShell>
      <MessagesBanner />

      <MessagesClient />
    </DashboardShell>
  );
}
