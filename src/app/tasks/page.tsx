import DashboardShell from "@/components/dashboard/DashboardShell";
import TasksBanner from "@/components/tasks/TasksBanner";
import TaskStats from "@/components/tasks/TaskStats";
import TasksBoard from "@/components/tasks/TasksBoard";
import TaskHelpBanner from "@/components/tasks/TaskHelpBanner";

export default function TasksPage() {
  return (
    <DashboardShell>
      <TasksBanner />

      <TaskStats />

      <TasksBoard />

      <TaskHelpBanner />
    </DashboardShell>
  );
}
