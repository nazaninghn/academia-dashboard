import type {
  StatItem,
  Project,
  Task,
  DocumentRequest,
  Certificate,
} from "@/types/dashboard";

export const stats: StatItem[] = [
  {
    id: "active-projects",
    value: 4,
    label: "Active Projects",
  },
  {
    id: "documents-required",
    value: 7,
    label: "Documents Required",
  },
  {
    id: "tasks-due",
    value: 3,
    label: "Tasks Due",
  },
  {
    id: "certificates",
    value: 5,
    label: "Certificates",
  },
  {
    id: "expiring-soon",
    value: 1,
    label: "Expiring Soon",
  },
];

export const projects: Project[] = [
  {
    id: "iso-14001",
    name: "ISO 14001",
    category: "Environmental Management",
    progress: 80,
    currentPhase: "Internal Audit",
    deadline: "25 Sep 2026",
    progressColor: "#4e97a7",
  },
  {
    id: "iso-9001",
    name: "ISO 9001",
    category: "Quality Management",
    progress: 65,
    currentPhase: "Implementation",
    deadline: "12 Oct 2026",
    progressColor: "#85d5f6",
  },
  {
    id: "carbon-footprint",
    name: "Carbon Footprint",
    category: "Carbon Management",
    progress: 50,
    currentPhase: "Data Collection",
    deadline: "10 Oct 2026",
    progressColor: "#fa880d",
  },
  {
    id: "esg",
    name: "ESG Assessment",
    category: "Sustainability",
    progress: 30,
    currentPhase: "Gap Analysis",
    deadline: "30 Nov 2026",
    progressColor: "#edb55e",
  },
];

export const tasks: Task[] = [
  {
    id: "task-1",
    title: "Upload environmental records",
    project: "ISO 14001",
    dueDate: "25 Sep 2026",
    priority: "High",
  },
  {
    id: "task-2",
    title: "Provide energy consumption data",
    project: "Carbon Footprint",
    dueDate: "28 Sep 2026",
    priority: "High",
  },
  {
    id: "task-3",
    title: "Review draft policy",
    project: "ISO 9001",
    dueDate: "1 Oct 2026",
    priority: "Medium",
  },
  {
    id: "task-4",
    title: "Complete ESG questionnaire",
    project: "ESG Assessment",
    dueDate: "5 Oct 2026",
    priority: "Medium",
  },
];

export const documents: DocumentRequest[] = [
  {
    id: "doc-1",
    name: "Environmental Risk Assessment",
    project: "ISO 14001",
    dueDate: "25 Sep 2026",
    status: "Missing",
  },
  {
    id: "doc-2",
    name: "Energy Consumption Data",
    project: "Carbon Footprint",
    dueDate: "28 Sep 2026",
    status: "Missing",
  },
  {
    id: "doc-3",
    name: "Waste Records",
    project: "ISO 14001",
    dueDate: "30 Sep 2026",
    status: "Pending",
  },
  {
    id: "doc-4",
    name: "Training Records",
    project: "ISO 9001",
    dueDate: "5 Oct 2026",
    status: "Pending",
  },
];

export const certificates: Certificate[] = [
  {
    id: "cert-1",
    name: "ISO 9001",
    category: "Quality Management",
    status: "Valid",
    expires: "14 May 2027",
  },
  {
    id: "cert-2",
    name: "ISO 45001",
    category: "Occupational Health & Safety",
    status: "Valid",
    expires: "20 Jan 2027",
  },
  {
    id: "cert-3",
    name: "ISO 14001",
    category: "Environmental Management",
    status: "Expiring Soon",
    expires: "15 Nov 2026",
  },
];

// ---- Projects page data ----

export const projectSummaryStats: import("@/types/dashboard").ProjectSummaryStat[] =
  [
    { id: "active", value: 4, label: "Active Projects", tone: "teal" },
    { id: "planning", value: 1, label: "Planning", tone: "sky" },
    { id: "at-risk", value: 2, label: "At Risk", tone: "orange" },
    { id: "completed", value: 1, label: "Completed", tone: "green" },
    { id: "on-hold", value: 2, label: "On Hold", tone: "slate" },
  ];

export const projectFilters: import("@/types/dashboard").ProjectFilter[] = [
  { key: "all", label: "All", count: 8 },
  { key: "active", label: "Active", count: 4 },
  { key: "planning", label: "Planning", count: 1 },
  { key: "on-hold", label: "On Hold", count: 2 },
  { key: "completed", label: "Completed", count: 1 },
];

export const projectList: import("@/types/dashboard").ProjectListItem[] = [
  {
    id: "prj-001",
    code: "PRJ-001",
    name: "ISO 14001 Implementation",
    service: "ISO 14001",
    serviceCategory: "Environmental Management",
    progress: 80,
    progressColor: "#4e97a7",
    currentPhase: "Internal Audit",
    deadline: "25 Sep 2026",
    deadlineNote: "2 days left",
    status: "On Track",
    consultant: { name: "Ahmet Yılmaz", role: "Senior Consultant" },
  },
  {
    id: "prj-002",
    code: "PRJ-002",
    name: "ISO 9001 Certification",
    service: "ISO 9001",
    serviceCategory: "Quality Management",
    progress: 65,
    progressColor: "#85d5f6",
    currentPhase: "Implementation",
    deadline: "12 Oct 2026",
    deadlineNote: "20 days left",
    status: "At Risk",
    consultant: { name: "Sara Demir", role: "Consultant" },
  },
  {
    id: "prj-003",
    code: "PRJ-003",
    name: "Carbon Footprint Assessment",
    service: "Carbon Footprint",
    serviceCategory: "Carbon Management",
    progress: 50,
    progressColor: "#fa880d",
    currentPhase: "Data Collection",
    deadline: "10 Oct 2026",
    deadlineNote: "7 days left",
    status: "Delayed",
    consultant: { name: "Mehmet Kaya", role: "Sustainability Expert" },
  },
  {
    id: "prj-004",
    code: "PRJ-004",
    name: "ESG Assessment",
    service: "ESG Assessment",
    serviceCategory: "Sustainability",
    progress: 30,
    progressColor: "#94a3b8",
    currentPhase: "Gap Analysis",
    deadline: "30 Nov 2026",
    deadlineNote: "78 days left",
    status: "On Track",
    consultant: { name: "Elif Arslan", role: "ESG Consultant" },
  },
  {
    id: "prj-005",
    code: "PRJ-005",
    name: "ISO 45001 Implementation",
    service: "ISO 45001",
    serviceCategory: "Occupational Health & Safety",
    progress: 20,
    progressColor: "#85d5f6",
    currentPhase: "Planning",
    deadline: "15 Dec 2026",
    deadlineNote: "93 days left",
    status: "Planning",
    consultant: { name: "Ahmet Yılmaz", role: "Senior Consultant" },
  },
  {
    id: "prj-006",
    code: "PRJ-006",
    name: "Supplier Audit Program",
    service: "Supplier Audit",
    serviceCategory: "Supply Chain",
    progress: 90,
    progressColor: "#4e97a7",
    currentPhase: "Final Review",
    deadline: "20 Sep 2026",
    deadlineNote: "7 days left",
    status: "On Track",
    consultant: { name: "Zeynep Koç", role: "Supply Chain Expert" },
  },
  {
    id: "prj-007",
    code: "PRJ-007",
    name: "Sustainability Training",
    service: "Training",
    serviceCategory: "Capacity Building",
    progress: 40,
    progressColor: "#fa880d",
    currentPhase: "Content Development",
    deadline: "5 Nov 2026",
    deadlineNote: "53 days left",
    status: "On Hold",
    consultant: { name: "Deniz Çetin", role: "Training Specialist" },
  },
  {
    id: "prj-008",
    code: "PRJ-008",
    name: "AI Governance (Pilot)",
    service: "AI Governance",
    serviceCategory: "Responsible AI",
    progress: 10,
    progressColor: "#94a3b8",
    currentPhase: "Initial Assessment",
    deadline: "20 Dec 2026",
    deadlineNote: "98 days left",
    status: "On Hold",
    consultant: { name: "Mert Yıldız", role: "AI Governance Expert" },
  },
];

// ---- Tasks page data ----

export const taskSummaryStats: import("@/types/dashboard").TaskSummaryStat[] = [
  { id: "total", value: 12, label: "Total Tasks", tone: "teal" },
  { id: "overdue", value: 3, label: "Overdue", tone: "rose" },
  {
    id: "due-soon",
    value: 4,
    label: "Due Soon",
    sublabel: "(within 14 days)",
    tone: "orange",
  },
  { id: "in-progress", value: 4, label: "In Progress", tone: "green" },
  { id: "completed", value: 1, label: "Completed", tone: "slate" },
];

export const taskFilters: import("@/types/dashboard").TaskFilter[] = [
  { key: "all", label: "All", count: 12 },
  { key: "mine", label: "My Tasks", count: 8 },
  { key: "overdue", label: "Overdue", count: 3 },
  { key: "due-soon", label: "Due Soon", count: 4 },
  { key: "in-progress", label: "In Progress", count: 4 },
  { key: "completed", label: "Completed", count: 1 },
];

export const taskList: import("@/types/dashboard").TaskListItem[] = [
  {
    id: "tsk-1",
    title: "Upload environmental records",
    description:
      "Provide the latest waste management data for ISO 14001 documentation.",
    project: "ISO 14001",
    projectCategory: "Environmental Management",
    dueDate: "25 Sep 2026",
    dueNote: "2 days left",
    priority: "High",
    status: "Overdue",
    assignee: { name: "Sara Demir", role: "Consultant" },
    isMine: true,
    commentsCount: 3,
    filesCount: 2,
    subtasks: [
      { id: "s1", label: "Prepare waste data summary", done: true },
      { id: "s2", label: "Upload disposal certificates", done: true },
      { id: "s3", label: "Add recycling records", done: false },
      { id: "s4", label: "Submit final documents", done: false },
    ],
  },
  {
    id: "tsk-2",
    title: "Provide energy consumption data",
    description:
      "Upload electricity and fuel usage records for the reporting period.",
    project: "Carbon Footprint",
    projectCategory: "Carbon Management",
    dueDate: "28 Sep 2026",
    dueNote: "5 days left",
    priority: "High",
    status: "In Progress",
    assignee: { name: "Ahmet Yılmaz", role: "Senior Consultant" },
    isMine: true,
    commentsCount: 1,
    filesCount: 0,
    subtasks: [
      { id: "s1", label: "Collect electricity bills", done: true },
      { id: "s2", label: "Collect fuel receipts", done: false },
    ],
  },
  {
    id: "tsk-3",
    title: "Review draft policy",
    description: "Check and review the environmental policy draft.",
    project: "ISO 9001",
    projectCategory: "Quality Management",
    dueDate: "1 Oct 2026",
    dueNote: "8 days left",
    priority: "Medium",
    status: "Open",
    assignee: { name: "Mehmet Kaya", role: "Sustainability Expert" },
    isMine: true,
    commentsCount: 0,
    filesCount: 1,
    subtasks: [],
  },
  {
    id: "tsk-4",
    title: "Complete ESG questionnaire",
    description: "Fill in the ESG assessment form.",
    project: "ESG Assessment",
    projectCategory: "Sustainability",
    dueDate: "5 Oct 2026",
    dueNote: "12 days left",
    priority: "Medium",
    status: "Open",
    assignee: { name: "Zeynep Koç", role: "ESG Consultant" },
    isMine: true,
    commentsCount: 2,
    filesCount: 0,
    subtasks: [],
  },
  {
    id: "tsk-5",
    title: "Attend training session",
    description: "Join the ISO 14001 training.",
    project: "ISO 14001",
    projectCategory: "Environmental Management",
    dueDate: "10 Oct 2026",
    dueNote: "17 days left",
    priority: "Low",
    status: "Not Started",
    assignee: { name: "Deniz Çetin", role: "Training Specialist" },
    isMine: false,
    commentsCount: 0,
    filesCount: 0,
    subtasks: [],
  },
  {
    id: "tsk-6",
    title: "Prepare audit documents",
    description: "Gather required documents.",
    project: "ISO 45001",
    projectCategory: "Occupational Health & Safety",
    dueDate: "15 Oct 2026",
    dueNote: "22 days left",
    priority: "Medium",
    status: "In Progress",
    assignee: { name: "Elif Arslan", role: "ESG Consultant" },
    isMine: true,
    commentsCount: 1,
    filesCount: 3,
    subtasks: [],
  },
  {
    id: "tsk-7",
    title: "Update supplier information",
    description: "Review and update supplier list.",
    project: "Supplier Audit",
    projectCategory: "Supply Chain",
    dueDate: "20 Oct 2026",
    dueNote: "27 days left",
    priority: "Low",
    status: "Open",
    assignee: { name: "Ahmet Yılmaz", role: "Senior Consultant" },
    isMine: true,
    commentsCount: 0,
    filesCount: 0,
    subtasks: [],
  },
  {
    id: "tsk-8",
    title: "Submit training certificates",
    description: "Upload completed certificates.",
    project: "Sustainability Training",
    projectCategory: "Capacity Building",
    dueDate: "5 Nov 2026",
    dueNote: "43 days left",
    priority: "Low",
    status: "Open",
    assignee: { name: "Mert Yıldız", role: "AI Governance Expert" },
    isMine: true,
    commentsCount: 0,
    filesCount: 1,
    subtasks: [],
  },
];

// ---- Documents page data ----

export const docSummaryStats: import("@/types/dashboard").DocSummaryStat[] = [
  { id: "total", value: 24, label: "Total Documents", tone: "teal" },
  { id: "required", value: 8, label: "Required", tone: "orange" },
  { id: "approved", value: 7, label: "Approved", tone: "green" },
  { id: "pending", value: 3, label: "Pending Review", tone: "amber" },
  { id: "missing", value: 4, label: "Missing", tone: "rose" },
  { id: "rejected", value: 2, label: "Rejected", tone: "slate" },
];

export const docFilters: import("@/types/dashboard").DocFilter[] = [
  { key: "all", label: "All", count: 24 },
  { key: "required", label: "Required", count: 8 },
  { key: "submitted", label: "Submitted", count: 7 },
  { key: "approved", label: "Approved", count: 7 },
  { key: "rejected", label: "Rejected", count: 2 },
];

export const documentItems: import("@/types/dashboard").DocumentItem[] = [
  {
    id: "d1",
    name: "Environmental Policy",
    fileName: "environmental_policy.pdf",
    fileKind: "pdf",
    project: "ISO 14001",
    projectCategory: "Environmental Management",
    type: "Policy",
    status: "Approved",
    uploadedDate: "12 Sep 2026",
    uploadedBy: "John Smith",
  },
  {
    id: "d2",
    name: "Energy Consumption Data",
    fileName: "energy_data_2026.xlsx",
    fileKind: "xls",
    project: "Carbon Footprint",
    projectCategory: "Carbon Management",
    type: "Data",
    status: "Pending",
    uploadedDate: "10 Sep 2026",
    uploadedBy: "Sarah Demir",
  },
  {
    id: "d3",
    name: "Waste Management Plan",
    fileName: "waste_management.docx",
    fileKind: "doc",
    project: "ISO 14001",
    projectCategory: "Carbon Footprint",
    type: "Plan",
    status: "Required",
    uploadedDate: null,
    uploadedBy: null,
  },
  {
    id: "d4",
    name: "Training Records",
    fileName: "training_records.pdf",
    fileKind: "pdf",
    project: "ISO 9001",
    projectCategory: "Quality Management",
    type: "Record",
    status: "Approved",
    uploadedDate: "5 Sep 2026",
    uploadedBy: "Mehmet Kaya",
  },
  {
    id: "d5",
    name: "Audit Report",
    fileName: "audit_report.pdf",
    fileKind: "pdf",
    project: "ISO 45001",
    projectCategory: "Occupational Health & Safety",
    type: "Report",
    status: "Rejected",
    uploadedDate: "28 Aug 2026",
    uploadedBy: "Elif Arslan",
  },
  {
    id: "d6",
    name: "Supplier Questionnaire",
    fileName: "supplier_questionnaire.xlsx",
    fileKind: "xls",
    project: "Supplier Audit",
    projectCategory: "Supply Chain",
    type: "Form",
    status: "Required",
    uploadedDate: null,
    uploadedBy: null,
  },
  {
    id: "d7",
    name: "ESG Assessment Form",
    fileName: "esg_assessment.pdf",
    fileKind: "pdf",
    project: "ESG Assessment",
    projectCategory: "Sustainability",
    type: "Form",
    status: "Approved",
    uploadedDate: "15 Aug 2026",
    uploadedBy: "Zeynep Koç",
  },
  {
    id: "d8",
    name: "Certificate of Incorporation",
    fileName: "company_certificate.pdf",
    fileKind: "pdf",
    project: "Company Profile",
    projectCategory: "General",
    type: "Legal",
    status: "Approved",
    uploadedDate: "1 Aug 2026",
    uploadedBy: "Ahmet Yılmaz",
  },
];

export const recentActivity: import("@/types/dashboard").ActivityItem[] = [
  {
    id: "a1",
    person: "Sarah Demir",
    action: "uploaded",
    target: "Energy consumption data",
    time: "2 hours ago",
  },
  {
    id: "a2",
    person: "Ahmet Yılmaz",
    action: "approved",
    target: "Training records",
    time: "5 hours ago",
  },
  {
    id: "a3",
    person: "Mehmet Kaya",
    action: "rejected",
    target: "Audit report",
    time: "1 day ago",
  },
  {
    id: "a4",
    person: "Elif Arslan",
    action: "uploaded",
    target: "ESG assessment form",
    time: "2 days ago",
  },
];

// ---- Certificates page data ----

export const certificateSummaryStats: import("@/types/dashboard").CertificateSummaryStat[] =
  [
    { id: "total", value: 6, label: "Total Certificates", tone: "teal" },
    { id: "valid", value: 4, label: "Valid", tone: "green" },
    {
      id: "expiring",
      value: 1,
      label: "Expiring Soon",
      sublabel: "(within 90 days)",
      tone: "amber",
    },
    { id: "expired", value: 1, label: "Expired", tone: "rose" },
  ];

export const certificateFilters: import("@/types/dashboard").CertificateFilter[] =
  [
    { key: "all", label: "All", count: 6 },
    { key: "valid", label: "Valid", count: 4 },
    { key: "expiring", label: "Expiring Soon", count: 1 },
    { key: "expired", label: "Expired", count: 1 },
  ];

export const certificateItems: import("@/types/dashboard").CertificateItem[] = [
  {
    id: "cert-9001",
    name: "ISO 9001",
    system: "Quality Management System",
    standard: "ISO 9001",
    issueDate: "14 May 2024",
    expiryDate: "14 May 2027",
    status: "Valid",
    statusNote: null,
    kind: "quality",
  },
  {
    id: "cert-14001",
    name: "ISO 14001",
    system: "Environmental Management System",
    standard: "ISO 14001",
    issueDate: "18 Mar 2024",
    expiryDate: "18 Mar 2027",
    status: "Valid",
    statusNote: null,
    kind: "environment",
  },
  {
    id: "cert-45001",
    name: "ISO 45001",
    system: "Occupational Health & Safety",
    standard: "ISO 45001",
    issueDate: "10 Jan 2023",
    expiryDate: "10 Jan 2026",
    status: "Expiring Soon",
    statusNote: "32 days left",
    kind: "safety",
  },
  {
    id: "cert-carbon",
    name: "Carbon Footprint Verification",
    system: "Greenhouse Gas Verification",
    standard: "GHG Protocol",
    issueDate: "5 Jun 2024",
    expiryDate: "5 Jun 2027",
    status: "Valid",
    statusNote: null,
    kind: "carbon",
  },
  {
    id: "cert-esg",
    name: "ESG Assessment",
    system: "Sustainability Performance",
    standard: "Custom Standard",
    issueDate: "20 Feb 2023",
    expiryDate: "20 Feb 2026",
    status: "Expired",
    statusNote: "Expired 12 days ago",
    kind: "esg",
  },
  {
    id: "cert-supplier",
    name: "Supplier Audit Certification",
    system: "Supply Chain Compliance",
    standard: "Custom Standard",
    issueDate: "12 Sep 2024",
    expiryDate: "12 Sep 2027",
    status: "Valid",
    statusNote: null,
    kind: "supply",
  },
];

export const complianceSegments: import("@/types/dashboard").ComplianceSegment[] =
  [
    { id: "valid", label: "Valid", value: 4, color: "#10b981" },
    { id: "expiring", label: "Expiring Soon", value: 1, color: "#f59e0b" },
    { id: "expired", label: "Expired", value: 1, color: "#ef4444" },
  ];

// ---- Reports page data ----

export const reportSummaryStats: import("@/types/dashboard").ReportSummaryStat[] =
  [
    {
      id: "total",
      value: 24,
      label: "Total Reports",
      tone: "teal",
      trend: "12%",
      trendNote: "vs last 6 months",
    },
    { id: "completed", value: 18, label: "Completed", tone: "green", percent: "75%" },
    { id: "in-progress", value: 4, label: "In Progress", tone: "amber", percent: "17%" },
    { id: "pending", value: 2, label: "Pending", tone: "rose", percent: "8%" },
  ];

export const reportFilters: import("@/types/dashboard").ReportFilter[] = [
  { key: "all", label: "All Reports", count: 24 },
  { key: "project", label: "Project Reports", count: 8 },
  { key: "audit", label: "Audit Reports", count: 5 },
  { key: "compliance", label: "Compliance Reports", count: 4 },
  { key: "sustainability", label: "Sustainability Reports", count: 4 },
  { key: "certificate", label: "Certificate Reports", count: 3 },
];

export const reportItems: import("@/types/dashboard").ReportItem[] = [
  {
    id: "r1",
    name: "ISO 14001 Internal Audit Report",
    subtitle: "Internal audit results and findings",
    project: "ISO 14001",
    projectCategory: "Environmental Management",
    type: "Audit Report",
    date: "12 Sep 2026",
    status: "Completed",
    fileKind: "pdf",
  },
  {
    id: "r2",
    name: "Management Review Report",
    subtitle: "Annual management review",
    project: "ISO 9001",
    projectCategory: "Quality Management",
    type: "Compliance",
    date: "5 Sep 2026",
    status: "Completed",
    fileKind: "doc",
  },
  {
    id: "r3",
    name: "Carbon Footprint Assessment",
    subtitle: "GHG emissions assessment results",
    project: "Carbon Footprint",
    projectCategory: "Carbon Management",
    type: "Sustainability",
    date: "28 Aug 2026",
    status: "Completed",
    fileKind: "xls",
  },
  {
    id: "r4",
    name: "ESG Performance Report",
    subtitle: "Environmental, Social and Governance",
    project: "ESG Assessment",
    projectCategory: "Sustainability",
    type: "Sustainability",
    date: "15 Aug 2026",
    status: "In Progress",
    fileKind: "pdf",
  },
  {
    id: "r5",
    name: "Training Effectiveness Report",
    subtitle: "Training results and participation",
    project: "Training",
    projectCategory: "Capacity Building",
    type: "Project Report",
    date: "1 Aug 2026",
    status: "Completed",
    fileKind: "chart",
  },
  {
    id: "r6",
    name: "Supplier Audit Report",
    subtitle: "Supplier compliance assessment",
    project: "Supplier Audit",
    projectCategory: "Supply Chain",
    type: "Audit Report",
    date: "20 Jul 2026",
    status: "Pending",
    fileKind: "doc",
  },
  {
    id: "r7",
    name: "Waste Management Analysis",
    subtitle: "Waste data analysis and trends",
    project: "ISO 14001",
    projectCategory: "Environmental Management",
    type: "Project Report",
    date: "10 Jul 2026",
    status: "Completed",
    fileKind: "xls",
  },
  {
    id: "r8",
    name: "Certificate Summary Report",
    subtitle: "All active certificates overview",
    project: "Company Profile",
    projectCategory: "General",
    type: "Certificate Report",
    date: "1 Jul 2026",
    status: "Completed",
    fileKind: "pdf",
  },
];

export const reportCategories: import("@/types/dashboard").ReportCategory[] = [
  {
    id: "project",
    label: "Project Reports",
    description: "Project progress and deliverables",
    count: 8,
    kind: "pdf",
  },
  {
    id: "audit",
    label: "Audit Reports",
    description: "Internal and external audit results",
    count: 5,
    kind: "doc",
  },
  {
    id: "compliance",
    label: "Compliance Reports",
    description: "Regulatory compliance and standards",
    count: 4,
    kind: "xls",
  },
  {
    id: "sustainability",
    label: "Sustainability Reports",
    description: "Environmental and social impact",
    count: 4,
    kind: "chart",
  },
  {
    id: "certificate",
    label: "Certificate Reports",
    description: "Certificate status and summaries",
    count: 3,
    kind: "pdf",
  },
];

export const recentDownloads: import("@/types/dashboard").RecentDownload[] = [
  { id: "rd1", name: "ISO 14001 Internal Audit Report", date: "12 Sep 2026", fileKind: "pdf" },
  { id: "rd2", name: "Management Review Report", date: "5 Sep 2026", fileKind: "doc" },
  { id: "rd3", name: "Carbon Footprint Assessment", date: "28 Aug 2026", fileKind: "xls" },
  { id: "rd4", name: "ESG Performance Report", date: "15 Aug 2026", fileKind: "pdf" },
  { id: "rd5", name: "Training Effectiveness Report", date: "1 Aug 2026", fileKind: "chart" },
];

// ---- Messages page data ----

export const conversationFilters: import("@/types/dashboard").ConversationFilter[] =
  [
    { key: "all", label: "All", count: 12 },
    { key: "consultant", label: "Consultants", count: 4 },
    { key: "team", label: "Project Team", count: 3 },
    { key: "support", label: "Support", count: 2 },
    { key: "system", label: "System", count: 3 },
  ];

export const conversations: import("@/types/dashboard").Conversation[] = [
  {
    id: "c1",
    name: "Ahmet Yılmaz",
    role: "Senior Consultant",
    kind: "consultant",
    subject: "ISO 14001 Project",
    preview: "Here is the updated audit plan for your review.",
    time: "10:24",
    unread: 2,
    online: true,
    email: "ahmet.yilmaz@academia.com",
    phone: "+90 532 123 45 67",
    relatedProject: { name: "ISO 14001 Implementation", code: "PRJ-001" },
    messages: [
      {
        id: "m1",
        fromMe: false,
        text: "Hello, I hope you are doing well. Could you please upload the latest environmental records for the ISO 14001 project?",
        time: "09:15",
      },
      {
        id: "m2",
        fromMe: true,
        text: "Hello Ahmet, Sure, I will prepare the documents and upload them today. Is there a specific format you need?",
        time: "09:42",
      },
      {
        id: "m3",
        fromMe: false,
        text: "Yes, please use the template we provided. I'm attaching it here for your convenience.",
        time: "10:03",
        attachment: {
          id: "a1",
          name: "Environmental_Records_Template.pdf",
          size: "245 KB",
          fileKind: "pdf",
        },
      },
      {
        id: "m4",
        fromMe: true,
        text: "Here are the updated documents.",
        time: "10:24",
        attachment: {
          id: "a2",
          name: "Environmental_Records_Q3_2026.xlsx",
          size: "1.2 MB",
          fileKind: "xls",
        },
      },
      {
        id: "m5",
        fromMe: false,
        text: "Perfect! Thank you. I will review them and get back to you soon.",
        time: "10:25",
      },
    ],
  },
  {
    id: "c2",
    name: "Project Team",
    role: "ISO 9001",
    kind: "team",
    subject: "ISO 9001",
    preview: "The documentation has been approved.",
    time: "Yesterday",
    unread: 1,
    online: false,
    messages: [
      {
        id: "m1",
        fromMe: false,
        text: "The documentation has been approved. Great work everyone!",
        time: "16:30",
      },
    ],
  },
  {
    id: "c3",
    name: "Mehmet Kaya",
    role: "Sustainability Program",
    kind: "consultant",
    subject: "Sustainability Program",
    preview: "Let's schedule a call next week.",
    time: "12 Sep",
    unread: 0,
    online: false,
    email: "mehmet.kaya@academia.com",
    messages: [
      {
        id: "m1",
        fromMe: false,
        text: "Let's schedule a call next week to review the roadmap.",
        time: "11:00",
      },
    ],
  },
  {
    id: "c4",
    name: "Academia Support",
    role: "Support",
    kind: "support",
    subject: "Support",
    preview: "Your request has been received.",
    time: "10 Sep",
    unread: 0,
    online: true,
    messages: [
      {
        id: "m1",
        fromMe: false,
        text: "Your request has been received. Our team will respond within 24 hours.",
        time: "09:00",
      },
    ],
  },
  {
    id: "c5",
    name: "Sara Demir",
    role: "Carbon Footprint",
    kind: "team",
    subject: "Carbon Footprint",
    preview: "Please upload the latest energy data.",
    time: "8 Sep",
    unread: 0,
    online: false,
    email: "sara.demir@academia.com",
    messages: [
      {
        id: "m1",
        fromMe: false,
        text: "Please upload the latest energy data when you get a chance.",
        time: "14:20",
      },
    ],
  },
  {
    id: "c6",
    name: "Training Team",
    role: "Training",
    kind: "team",
    subject: "Training",
    preview: "New training session is available.",
    time: "5 Sep",
    unread: 0,
    online: false,
    messages: [
      {
        id: "m1",
        fromMe: false,
        text: "A new training session is available. Register now to reserve your spot.",
        time: "10:15",
      },
    ],
  },
  {
    id: "c7",
    name: "System Notifications",
    role: "System",
    kind: "system",
    subject: "System",
    preview: "Your certificate is expiring in 90 days.",
    time: "3 Sep",
    unread: 1,
    online: false,
    messages: [
      {
        id: "m1",
        fromMe: false,
        text: "Reminder: Your ISO 45001 certificate is expiring in 90 days. Please start the renewal process.",
        time: "08:00",
      },
    ],
  },
  {
    id: "c8",
    name: "Zeynep Koç",
    role: "ESG Assessment",
    kind: "team",
    subject: "ESG Assessment",
    preview: "Here are the ESG assessment results.",
    time: "1 Sep",
    unread: 0,
    online: false,
    email: "zeynep.koc@academia.com",
    messages: [
      {
        id: "m1",
        fromMe: false,
        text: "Here are the ESG assessment results for your review.",
        time: "13:45",
      },
    ],
  },
];

export const messageSharedFiles: import("@/types/dashboard").MessageAttachment[] =
  [
    { id: "sf1", name: "Audit_Plan_2026.pdf", size: "1.1 MB · 10 Sep 2026", fileKind: "pdf" },
    {
      id: "sf2",
      name: "Environmental_Records_Q3_2026.xlsx",
      size: "1.2 MB · 10 Sep 2026",
      fileKind: "xls",
    },
    {
      id: "sf3",
      name: "Gap_Analysis_Report.docx",
      size: "856 KB · 5 Sep 2026",
      fileKind: "doc",
    },
  ];

// ---- Services page data ----

export const serviceHighlights: import("@/types/dashboard").ServiceHighlight[] =
  [
    {
      id: "global",
      title: "Global Standards",
      subtitle: "International best practices",
      iconKind: "leaf",
    },
    {
      id: "team",
      title: "Expert Team",
      subtitle: "Experienced consultants",
      iconKind: "users",
    },
    {
      id: "tailored",
      title: "Tailored Solutions",
      subtitle: "For your industry",
      iconKind: "shield",
    },
    {
      id: "growth",
      title: "Sustainable Growth",
      subtitle: "Long-term value",
      iconKind: "chart",
    },
  ];

export const serviceFilters: import("@/types/dashboard").ServiceFilter[] = [
  { key: "all", label: "All Services" },
  { key: "certification", label: "Certification" },
  { key: "sustainability", label: "Sustainability" },
  { key: "training", label: "Training" },
  { key: "audit", label: "Audit" },
  { key: "consulting", label: "Consulting" },
];

export const serviceCards: import("@/types/dashboard").ServiceCard[] = [
  {
    id: "iso",
    title: "ISO Certification",
    tagline: "Quality, Environmental, Safety and more.",
    description:
      "Get certified with international standards such as ISO 9001, ISO 14001, ISO 45001 and more.",
    tags: ["ISO 9001", "ISO 14001", "ISO 45001", "+3"],
    category: "certification",
    iconKind: "shield",
    gradient: "from-sky/60 via-teal/40 to-[#0f3552]/70",
  },
  {
    id: "carbon",
    title: "Carbon Footprint",
    tagline: "Measure. Reduce. Report.",
    description:
      "Calculate your carbon footprint, develop reduction strategies, and meet global reporting requirements.",
    tags: ["GHG Protocol", "Carbon Management", "Net Zero"],
    category: "sustainability",
    iconKind: "leaf",
    gradient: "from-emerald-400/60 via-teal/40 to-emerald-700/60",
  },
  {
    id: "esg",
    title: "ESG Assessment",
    tagline: "Build a Sustainable Business",
    description:
      "Assess and improve your environmental, social, and governance performance.",
    tags: ["ESG Strategy", "Materiality", "Reporting"],
    category: "consulting",
    iconKind: "users",
    gradient: "from-lime-400/50 via-emerald-400/40 to-teal/60",
  },
  {
    id: "training",
    title: "Training",
    tagline: "Build Your Team's Knowledge",
    description:
      "Professional training programs on standards, compliance, sustainability and more.",
    tags: ["In-house", "Online", "Customized"],
    category: "training",
    iconKind: "cap",
    gradient: "from-sky/60 via-slate-400/30 to-slate-600/50",
  },
  {
    id: "supplier",
    title: "Supplier Audit",
    tagline: "Strengthen Your Supply Chain",
    description:
      "Assess your suppliers for compliance, sustainability, and risk management.",
    tags: ["Supplier Evaluation", "Risk Assessment"],
    category: "audit",
    iconKind: "search",
    gradient: "from-amber-300/50 via-orange/30 to-teal/50",
  },
  {
    id: "ai",
    title: "AI Governance",
    tagline: "Responsible AI for a Better Future",
    description:
      "Get guidance on AI governance, risk management, and compliance with global regulations.",
    tags: ["AI Ethics", "Risk Management", "Compliance"],
    category: "consulting",
    iconKind: "chip",
    gradient: "from-teal/60 via-[#0f3552]/50 to-slate-800/70",
  },
];

export const processSteps: import("@/types/dashboard").ProcessStep[] = [
  {
    id: "consult",
    step: 1,
    title: "Consult",
    description: "Discuss your needs",
  },
  {
    id: "plan",
    step: 2,
    title: "Plan",
    description: "Receive a tailored solution",
  },
  {
    id: "implement",
    step: 3,
    title: "Implement",
    description: "Work with our experts",
  },
  {
    id: "achieve",
    step: 4,
    title: "Achieve",
    description: "Get measurable results",
  },
];

// ---- Company Profile page data ----

export const companyStats: import("@/types/dashboard").CompanyStat[] = [
  { id: "employees", value: "12", label: "Employees", kind: "employees" },
  { id: "projects", value: "4", label: "Active Projects", kind: "projects" },
  { id: "certificates", value: "3", label: "Certificates", kind: "certificates" },
  { id: "locations", value: "5", label: "Locations", kind: "locations" },
  { id: "established", value: "2010", label: "Established", kind: "established" },
];

export const profileTabs: import("@/types/dashboard").ProfileTab[] = [
  { key: "general", label: "General Information" },
  { key: "addresses", label: "Addresses" },
  { key: "contacts", label: "Contacts" },
  { key: "documents", label: "Documents" },
];

export const companyProfile: import("@/types/dashboard").CompanyProfile = {
  name: "ABC Manufacturing",
  tagline: "Building a cleaner, safer, and more sustainable future.",
  industry: "Manufacturing",
  established: "Established 2010",
  website: "www.abcmanufacturing.com",
  info: [
    { label: "Company Name", value: "ABC Manufacturing" },
    { label: "Industry", value: "Manufacturing" },
    { label: "Company Size", value: "51 - 200 employees" },
    { label: "Established", value: "2010" },
    { label: "Website", value: "https://www.abcmanufacturing.com", isLink: true },
    {
      label: "Company Description",
      value:
        "ABC Manufacturing is a leading manufacturer of industrial components, committed to quality, sustainability, and continuous improvement.",
    },
  ],
  primaryIndustry: "Manufacturing",
  focusAreas: [
    { id: "quality", label: "Quality Management", tone: "amber" },
    { id: "environmental", label: "Environmental Management", tone: "green" },
    { id: "ohs", label: "Occupational Health & Safety", tone: "amber" },
    { id: "sustainability", label: "Sustainability", tone: "green" },
    { id: "supply", label: "Supply Chain", tone: "sky" },
  ],
  socials: [
    { id: "li", platform: "linkedin", url: "https://www.linkedin.com/company/abc-manufacturing" },
    { id: "yt", platform: "youtube", url: "https://www.youtube.com/@abcmanufacturing" },
    { id: "x", platform: "x", url: "https://x.com/abcmanufacturing" },
  ],
};

// ---- Team page data ----

export const teamSummaryStats: import("@/types/dashboard").TeamSummaryStat[] = [
  { id: "total", value: 12, label: "Total Members", tone: "teal" },
  { id: "admins", value: 3, label: "Company Admins", tone: "green" },
  { id: "active", value: 7, label: "Active Members", tone: "sky" },
  { id: "pending", value: 2, label: "Pending Invitations", tone: "slate" },
];

export const teamMembers: import("@/types/dashboard").TeamMember[] = [
  {
    id: "tm1",
    name: "Ahmet Yılmaz",
    title: "Senior Consultant",
    role: "Company Admin",
    department: "Consulting",
    email: "ahmet.yilmaz@academia.com",
    status: "Active",
    lastActive: "Today, 10:24",
  },
  {
    id: "tm2",
    name: "Ayşe Demir",
    title: "Project Manager",
    role: "Manager",
    department: "Project Management",
    email: "ayse.demir@abc.com",
    status: "Active",
    lastActive: "Today, 09:15",
  },
  {
    id: "tm3",
    name: "Burak Kaya",
    title: "Compliance Specialist",
    role: "User",
    department: "Compliance",
    email: "burak.kaya@abc.com",
    status: "Active",
    lastActive: "Yesterday",
  },
  {
    id: "tm4",
    name: "Elif Şahin",
    title: "Sustainability Lead",
    role: "Manager",
    department: "Sustainability",
    email: "elif.sahin@abc.com",
    status: "Active",
    lastActive: "Today, 08:42",
  },
  {
    id: "tm5",
    name: "Mehmet Arslan",
    title: "Operations",
    role: "User",
    department: "Operations",
    email: "mehmet.arslan@abc.com",
    status: "Active",
    lastActive: "2 days ago",
  },
  {
    id: "tm6",
    name: "Nazlı Çelik",
    title: "Document Controller",
    role: "User",
    department: "Compliance",
    email: "nazli.celik@abc.com",
    status: "Active",
    lastActive: "Today, 11:03",
  },
  {
    id: "tm7",
    name: "Okan Yıldız",
    title: "Viewer",
    role: "Viewer",
    department: "Finance",
    email: "okan.yildiz@abc.com",
    status: "Active",
    lastActive: "3 days ago",
  },
  {
    id: "tm8",
    name: "Selin Arıcı",
    title: "HR Manager",
    role: "Company Admin",
    department: "Human Resources",
    email: "selin.arici@abc.com",
    status: "Active",
    lastActive: "Today, 12:01",
  },
  {
    id: "tm9",
    name: "Tuna Ersoy",
    title: "IT Support",
    role: "User",
    department: "IT",
    email: "tuna.ersoy@abc.com",
    status: "Pending",
    lastActive: "—",
  },
  {
    id: "tm10",
    name: "Zeynep Koç",
    title: "ESG Specialist",
    role: "User",
    department: "Sustainability",
    email: "zeynep.koc@abc.com",
    status: "Pending",
    lastActive: "—",
  },
  {
    id: "tm11",
    name: "Deniz Çetin",
    title: "Training Specialist",
    role: "User",
    department: "Training",
    email: "deniz.cetin@abc.com",
    status: "Active",
    lastActive: "Today, 07:30",
  },
  {
    id: "tm12",
    name: "Mert Yıldız",
    title: "AI Governance Expert",
    role: "Manager",
    department: "Responsible AI",
    email: "mert.yildiz@abc.com",
    status: "Active",
    lastActive: "Yesterday",
  },
];

export const teamRoles: import("@/types/dashboard").TeamRoleInfo[] = [
  {
    id: "admin",
    role: "Company Admin",
    description: "Full access to all features",
    iconKind: "crown",
  },
  {
    id: "manager",
    role: "Manager",
    description: "Manage projects and team members",
    iconKind: "users",
  },
  {
    id: "user",
    role: "User",
    description: "Access to assigned projects and documents",
    iconKind: "user",
  },
  {
    id: "viewer",
    role: "Viewer",
    description: "Read-only access",
    iconKind: "eye",
  },
];

// ---- Notifications page data ----

export const notificationFilters: import("@/types/dashboard").NotificationFilter[] =
  [
    { key: "all", label: "All", count: 3 },
    { key: "projects", label: "Projects", count: 2 },
    { key: "tasks", label: "Tasks", count: 1 },
    { key: "documents", label: "Documents", count: 4 },
    { key: "certificates", label: "Certificates", count: 1 },
    { key: "team", label: "Team", count: 1 },
    { key: "system", label: "System", count: 2 },
  ];

export const notifications: import("@/types/dashboard").NotificationItem[] = [
  {
    id: "n1",
    title: "Document Approved",
    message:
      'Your document "Environmental Management Plan" has been approved by Ahmet Yılmaz.',
    time: "10:24",
    group: "Today",
    category: "documents",
    unread: true,
    iconKind: "document",
  },
  {
    id: "n2",
    title: "Task Completed",
    message: 'Elif Şahin marked the task "Data Collection" as completed.',
    time: "09:15",
    group: "Today",
    category: "tasks",
    unread: true,
    iconKind: "check",
  },
  {
    id: "n3",
    title: "New Message",
    message: "You have a new message from Mehmet Kaya.",
    time: "08:42",
    group: "Today",
    category: "system",
    unread: true,
    iconKind: "message",
  },
  {
    id: "n4",
    title: "New Team Member",
    message: "Zeynep Koç has been added to your team.",
    time: "Yesterday, 16:30",
    group: "Yesterday",
    category: "team",
    unread: false,
    iconKind: "team",
  },
  {
    id: "n5",
    title: "Certificate Update",
    message: "Your ISO 14001 certificate is due for renewal in 30 days.",
    time: "Yesterday, 14:12",
    group: "Yesterday",
    category: "certificates",
    unread: false,
    iconKind: "certificate",
  },
  {
    id: "n6",
    title: "Project Update",
    message: 'The project "Carbon Footprint Assessment" has been updated.',
    time: "Yesterday, 11:05",
    group: "Yesterday",
    category: "projects",
    unread: false,
    iconKind: "project",
  },
  {
    id: "n7",
    title: "System Notification",
    message: "Scheduled maintenance will take place on Sep 15, 2026, at 02:00 AM (UTC).",
    time: "12 Sep 2026",
    group: "Earlier",
    category: "system",
    unread: false,
    iconKind: "system",
  },
  {
    id: "n8",
    title: "Report Ready",
    message: "Your monthly sustainability report is ready to download.",
    time: "10 Sep 2026",
    group: "Earlier",
    category: "documents",
    unread: false,
    iconKind: "report",
  },
  {
    id: "n9",
    title: "Reminder",
    message: "You have 2 pending tasks due this week.",
    time: "9 Sep 2026",
    group: "Earlier",
    category: "tasks",
    unread: false,
    iconKind: "reminder",
  },
];

export const notificationPreferences: import("@/types/dashboard").NotificationPreference[] =
  [
    { id: "project-updates", label: "Project updates", enabled: true },
    { id: "task-assignments", label: "Task assignments", enabled: true },
    { id: "document-activities", label: "Document activities", enabled: true },
    { id: "certificate-alerts", label: "Certificate alerts", enabled: true },
    { id: "team-activities", label: "Team activities", enabled: true },
    { id: "messages", label: "Messages", enabled: true },
    { id: "system-notifications", label: "System notifications", enabled: true },
  ];

// ---- Settings page data ----

export const settingsNav: import("@/types/dashboard").SettingsNavItem[] = [
  { key: "general", label: "General", description: "Basic information and preferences", iconKind: "general" },
  { key: "account", label: "Account", description: "Manage your account", iconKind: "account" },
  { key: "security", label: "Security", description: "Password, 2FA, and access", iconKind: "security" },
  { key: "notifications", label: "Notifications", description: "Choose what to be notified about", iconKind: "notifications" },
  { key: "appearance", label: "Appearance", description: "Theme and display settings", iconKind: "appearance" },
  { key: "language", label: "Language", description: "Select your language", iconKind: "language" },
  { key: "integrations", label: "Integrations", description: "Connect with other tools", iconKind: "integrations" },
  { key: "billing", label: "Billing", description: "Subscription and payments", iconKind: "billing" },
  { key: "privacy", label: "Data & Privacy", description: "Manage your data", iconKind: "privacy" },
  { key: "help", label: "Help & Support", description: "Get help or contact us", iconKind: "help" },
];

export const settingsPreferences: import("@/types/dashboard").SettingsSelectField[] =
  [
    {
      id: "landing",
      label: "Default Landing Page",
      value: "Dashboard",
      options: ["Dashboard", "Projects", "Tasks", "Documents"],
    },
    {
      id: "date-format",
      label: "Date Format",
      value: "DD / MM / YYYY",
      options: ["DD / MM / YYYY", "MM / DD / YYYY", "YYYY-MM-DD"],
    },
    {
      id: "timezone",
      label: "Time Zone",
      value: "(GMT+03:00) Tehran",
      options: [
        "(GMT+03:00) Tehran",
        "(GMT+00:00) London",
        "(GMT+03:00) Istanbul",
        "(GMT-05:00) New York",
      ],
    },
    {
      id: "language",
      label: "Language",
      value: "English",
      options: ["English", "Türkçe", "فارسی", "Deutsch"],
    },
  ];

export const settingsIndustry: import("@/types/dashboard").SettingsSelectField = {
  id: "industry",
  label: "Industry",
  value: "Manufacturing",
  options: ["Manufacturing", "Technology", "Healthcare", "Finance", "Retail"],
};

export const settingsCompanySize: import("@/types/dashboard").SettingsSelectField =
  {
    id: "company-size",
    label: "Company Size",
    value: "51 - 200 employees",
    options: [
      "1 - 10 employees",
      "11 - 50 employees",
      "51 - 200 employees",
      "201 - 500 employees",
      "500+ employees",
    ],
  };

export const profileSummary: import("@/types/dashboard").ProfileSummary = {
  name: "Ahmet Yılmaz",
  role: "Senior Consultant",
  email: "ahmet.yilmaz@academia.com",
  phone: "+90 532 123 45 67",
  timeZone: "(GMT+03:00) Tehran",
  language: "English",
};

export const securityToggles: import("@/types/dashboard").SecurityToggle[] = [
  {
    id: "2fa",
    label: "Two-Factor Authentication",
    description: "Add an extra layer of security to your account.",
    enabled: true,
  },
  {
    id: "login-notif",
    label: "Login Notifications",
    description: "Get notified about new login attempts.",
    enabled: true,
  },
];
