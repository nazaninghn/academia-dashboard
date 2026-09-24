import DashboardShell from "@/components/dashboard/DashboardShell";
import ServicesBanner from "@/components/services/ServicesBanner";
import ServiceHighlights from "@/components/services/ServiceHighlights";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesFooter from "@/components/services/ServicesFooter";

export default function ServicesPage() {
  return (
    <DashboardShell>
      <ServicesBanner />

      <ServiceHighlights />

      <ServicesGrid />

      <ServicesFooter />
    </DashboardShell>
  );
}
