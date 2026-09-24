import DashboardShell from "@/components/dashboard/DashboardShell";
import CertificatesBanner from "@/components/certificates/CertificatesBanner";
import CertStats from "@/components/certificates/CertStats";
import CertificatesTable from "@/components/certificates/CertificatesTable";
import RenewalCard from "@/components/certificates/RenewalCard";
import ComplianceDonut from "@/components/certificates/ComplianceDonut";
import QuickLinks from "@/components/certificates/QuickLinks";
import CertificatesFooter from "@/components/certificates/CertificatesFooter";

export default function CertificatesPage() {
  return (
    <DashboardShell>
      <CertificatesBanner />

      <CertStats />

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-[1fr_300px]">
        <CertificatesTable />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:flex xl:flex-col">
          <RenewalCard />
          <ComplianceDonut />
          <QuickLinks />
        </div>
      </div>

      <CertificatesFooter />
    </DashboardShell>
  );
}
