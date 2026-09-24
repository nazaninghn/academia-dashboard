import DashboardShell from "@/components/dashboard/DashboardShell";
import CompanyBanner from "@/components/company/CompanyBanner";
import CompanyIdentity from "@/components/company/CompanyIdentity";
import CompanyStats from "@/components/company/CompanyStats";
import CompanyProfileClient from "@/components/company/CompanyProfileClient";

export default function CompanyProfilePage() {
  return (
    <DashboardShell>
      <CompanyBanner />

      <CompanyIdentity />

      <CompanyStats />

      <CompanyProfileClient />
    </DashboardShell>
  );
}
