export type StatItem = {
  id: string;
  value: number;
  label: string;
};

export type Project = {
  id: string;
  name: string;
  category: string;
  progress: number;
  currentPhase: string;
  deadline: string;
  progressColor: string;
};

export type TaskPriority = "High" | "Medium";

export type Task = {
  id: string;
  title: string;
  project: string;
  dueDate: string;
  priority: TaskPriority;
};

export type DocumentStatus = "Missing" | "Pending";

export type DocumentRequest = {
  id: string;
  name: string;
  project: string;
  dueDate: string;
  status: DocumentStatus;
};

export type CertificateStatus = "Valid" | "Expiring Soon";

export type Certificate = {
  id: string;
  name: string;
  category: string;
  status: CertificateStatus;
  expires: string;
};

export type ProjectStatus =
  | "On Track"
  | "At Risk"
  | "Delayed"
  | "Planning"
  | "On Hold"
  | "Completed";

export type ProjectListItem = {
  id: string;
  code: string;
  name: string;
  service: string;
  serviceCategory: string;
  progress: number;
  progressColor: string;
  currentPhase: string;
  deadline: string;
  deadlineNote: string;
  status: ProjectStatus;
  consultant: {
    name: string;
    role: string;
  };
};

export type ProjectFilter = {
  key: string;
  label: string;
  count: number;
};

export type ProjectSummaryStat = {
  id: string;
  value: number;
  label: string;
  tone: "teal" | "sky" | "orange" | "green" | "slate";
};

// ---- Tasks page ----

export type TaskStatus =
  | "Overdue"
  | "In Progress"
  | "Open"
  | "Not Started"
  | "Completed";

export type TaskUrgency = "High" | "Medium" | "Low";

export type Subtask = {
  id: string;
  label: string;
  done: boolean;
};

export type TaskListItem = {
  id: string;
  title: string;
  description: string;
  project: string;
  projectCategory: string;
  dueDate: string;
  dueNote: string;
  priority: TaskUrgency;
  status: TaskStatus;
  assignee: {
    name: string;
    role: string;
  };
  isMine: boolean;
  commentsCount: number;
  filesCount: number;
  subtasks: Subtask[];
};

export type TaskSummaryStat = {
  id: string;
  value: number;
  label: string;
  sublabel?: string;
  tone: "teal" | "rose" | "orange" | "green" | "slate";
};

export type TaskFilter = {
  key: string;
  label: string;
  count: number;
};

// ---- Documents page ----

export type DocFileKind = "pdf" | "doc" | "xls";

export type DocStatus =
  | "Approved"
  | "Pending"
  | "Required"
  | "Rejected"
  | "Submitted";

export type DocumentItem = {
  id: string;
  name: string;
  fileName: string;
  fileKind: DocFileKind;
  project: string;
  projectCategory: string;
  type: string;
  status: DocStatus;
  uploadedDate: string | null;
  uploadedBy: string | null;
};

export type DocSummaryStat = {
  id: string;
  value: number;
  label: string;
  tone: "teal" | "orange" | "green" | "amber" | "rose" | "slate";
};

export type DocFilter = {
  key: string;
  label: string;
  count: number;
};

export type ActivityItem = {
  id: string;
  person: string;
  action: "uploaded" | "approved" | "rejected";
  target: string;
  time: string;
};

// ---- Certificates page ----

export type CertificateItemStatus = "Valid" | "Expiring Soon" | "Expired";

export type CertificateKind = "quality" | "environment" | "safety" | "carbon" | "esg" | "supply";

export type CertificateItem = {
  id: string;
  name: string;
  system: string;
  standard: string;
  issueDate: string;
  expiryDate: string;
  status: CertificateItemStatus;
  statusNote: string | null;
  kind: CertificateKind;
};

export type CertificateSummaryStat = {
  id: string;
  value: number;
  label: string;
  sublabel?: string;
  tone: "teal" | "green" | "amber" | "rose";
};

export type CertificateFilter = {
  key: string;
  label: string;
  count: number;
};

export type ComplianceSegment = {
  id: string;
  label: string;
  value: number;
  color: string;
};

// ---- Reports page ----

export type ReportStatus = "Completed" | "In Progress" | "Pending";

export type ReportType =
  | "Audit Report"
  | "Compliance"
  | "Sustainability"
  | "Project Report"
  | "Certificate Report";

export type ReportKind = "pdf" | "doc" | "xls" | "chart";

export type ReportItem = {
  id: string;
  name: string;
  subtitle: string;
  project: string;
  projectCategory: string;
  type: ReportType;
  date: string;
  status: ReportStatus;
  fileKind: ReportKind;
};

export type ReportSummaryStat = {
  id: string;
  value: number;
  label: string;
  tone: "teal" | "green" | "amber" | "rose";
  trend?: string;
  trendNote?: string;
  percent?: string;
};

export type ReportFilter = {
  key: string;
  label: string;
  count: number;
};

export type ReportCategory = {
  id: string;
  label: string;
  description: string;
  count: number;
  kind: ReportKind;
};

export type RecentDownload = {
  id: string;
  name: string;
  date: string;
  fileKind: ReportKind;
};

// ---- Messages page ----

export type ConversationKind = "consultant" | "team" | "support" | "system";

export type MessageAttachment = {
  id: string;
  name: string;
  size: string;
  fileKind: "pdf" | "doc" | "xls";
};

export type ChatMessage = {
  id: string;
  fromMe: boolean;
  text?: string;
  time: string;
  attachment?: MessageAttachment;
};

export type Conversation = {
  id: string;
  name: string;
  role: string;
  kind: ConversationKind;
  subject: string;
  preview: string;
  time: string;
  unread: number;
  online: boolean;
  email?: string;
  phone?: string;
  relatedProject?: {
    name: string;
    code: string;
  };
  messages: ChatMessage[];
};

export type ConversationFilter = {
  key: string;
  label: string;
  count: number;
};

// ---- Services page ----

export type ServiceCategory =
  | "certification"
  | "sustainability"
  | "training"
  | "audit"
  | "consulting";

export type ServiceIconKind =
  | "shield"
  | "leaf"
  | "users"
  | "cap"
  | "search"
  | "chip";

export type ServiceCard = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  category: ServiceCategory;
  iconKind: ServiceIconKind;
  gradient: string;
};

export type ServiceFilter = {
  key: string;
  label: string;
};

export type ServiceHighlight = {
  id: string;
  title: string;
  subtitle: string;
  iconKind: "leaf" | "users" | "shield" | "chart";
};

export type ProcessStep = {
  id: string;
  step: number;
  title: string;
  description: string;
};

// ---- Company Profile page ----

export type CompanyStatKind =
  | "employees"
  | "projects"
  | "certificates"
  | "locations"
  | "established";

export type CompanyStat = {
  id: string;
  value: string;
  label: string;
  kind: CompanyStatKind;
};

export type CompanyInfoRow = {
  label: string;
  value: string;
  isLink?: boolean;
};

export type FocusArea = {
  id: string;
  label: string;
  tone: "amber" | "green" | "teal" | "sky";
};

export type SocialLink = {
  id: string;
  platform: "linkedin" | "youtube" | "x";
  url: string;
};

export type CompanyProfile = {
  name: string;
  tagline: string;
  industry: string;
  established: string;
  website: string;
  info: CompanyInfoRow[];
  primaryIndustry: string;
  focusAreas: FocusArea[];
  socials: SocialLink[];
};

export type ProfileTab = {
  key: string;
  label: string;
};

// ---- Team page ----

export type TeamRole = "Company Admin" | "Manager" | "User" | "Viewer";

export type TeamMemberStatus = "Active" | "Pending";

export type TeamMember = {
  id: string;
  name: string;
  title: string;
  role: TeamRole;
  department: string;
  email: string;
  status: TeamMemberStatus;
  lastActive: string;
};

export type TeamSummaryStat = {
  id: string;
  value: number;
  label: string;
  tone: "teal" | "green" | "sky" | "slate";
};

export type TeamRoleInfo = {
  id: string;
  role: TeamRole;
  description: string;
  iconKind: "crown" | "users" | "user" | "eye";
};

// ---- Notifications page ----

export type NotificationCategory =
  | "projects"
  | "tasks"
  | "documents"
  | "certificates"
  | "team"
  | "system";

export type NotificationGroup = "Today" | "Yesterday" | "Earlier";

export type NotificationItem = {
  id: string;
  title: string;
  message: string;
  time: string;
  group: NotificationGroup;
  category: NotificationCategory;
  unread: boolean;
  iconKind:
    | "document"
    | "check"
    | "message"
    | "team"
    | "certificate"
    | "project"
    | "system"
    | "report"
    | "reminder";
};

export type NotificationFilter = {
  key: string;
  label: string;
  count: number;
};

export type NotificationPreference = {
  id: string;
  label: string;
  enabled: boolean;
};

// ---- Settings page ----

export type SettingsNavItem = {
  key: string;
  label: string;
  description: string;
  iconKind:
    | "general"
    | "account"
    | "security"
    | "notifications"
    | "appearance"
    | "language"
    | "integrations"
    | "billing"
    | "privacy"
    | "help";
};

export type SettingsSelectField = {
  id: string;
  label: string;
  value: string;
  options: string[];
};

export type ProfileSummary = {
  name: string;
  role: string;
  email: string;
  phone: string;
  timeZone: string;
  language: string;
};

export type SecurityToggle = {
  id: string;
  label: string;
  description: string;
  enabled: boolean;
};
