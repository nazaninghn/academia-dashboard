import DashboardShell from "@/components/dashboard/DashboardShell";
import ProjectsBanner from "@/components/projects/ProjectsBanner";
import ProjectStats from "@/components/projects/ProjectStats";
import ProjectsTable from "@/components/projects/ProjectsTable";
import ServicePromo from "@/components/projects/ServicePromo";

export default function ProjectsPage() {
  return (
    <DashboardShell>
      <ProjectsBanner />

      <ProjectStats />

      <ProjectsTable />

      <ServicePromo />
    </DashboardShell>
  );
}
