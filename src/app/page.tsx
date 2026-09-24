import DashboardShell from "@/components/dashboard/DashboardShell";
import WelcomeBanner from "@/components/dashboard/WelcomeBanner";
import StatsCards from "@/components/dashboard/StatsCards";
import Projects from "@/components/dashboard/Projects";
import TasksDue from "@/components/dashboard/TasksDue";
import DocumentRequests from "@/components/dashboard/DocumentRequests";
import Certificates from "@/components/dashboard/Certificates";
import ConsultantCard from "@/components/dashboard/ConsultantCard";
import RequestService from "@/components/dashboard/RequestService";

export default function DashboardPage() {
  return (
    <DashboardShell>
      <WelcomeBanner />

      <StatsCards />

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-[1.6fr_1fr]">
        <Projects />
        <TasksDue />
      </div>

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-[1.6fr_1fr]">
        <DocumentRequests />
        <Certificates />
      </div>

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-[1.6fr_1fr]">
        <RequestService />
        <ConsultantCard />
      </div>
    </DashboardShell>
  );
}
