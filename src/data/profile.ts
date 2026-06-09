import type { LucideIcon } from "lucide-react";
import {
  Boxes,
  BrainCircuit,
  Database,
  LineChart,
  ShieldCheck,
  Truck,
  Wallet,
} from "lucide-react";

export type RoleSlug =
  | "ai-engineering"
  | "program-management"
  | "data-governance"
  | "business-intelligence"
  | "master-data"
  | "finance-data-quality"
  | "life-sciences";

export interface Achievement {
  value: string;
  label: string;
}

export interface RoleLens {
  slug: RoleSlug;
  label: string;
  shortLabel: string;
  accent: string; // hex used for subtle per-domain accent
  icon: LucideIcon;
  headline: string;
  tagline: string;
  summary: string;
  strengths: string[];
  highlights: string[];
  achievements: Achievement[];
  tools: string[];
  industries: string[];
  resumeFile: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  summary: string;
  points: string[];
}

export interface EducationItem {
  school: string;
  credential: string;
  detail: string;
  location: string;
  period: string;
}

export interface ProjectItem {
  name: string;
  tagline: string;
  description: string;
  impact: string[];
  tags: string[];
}

export interface ResearchPaper {
  title: string;
  authors: string;
  venue: string;
  year: string;
  field: string;
  url: string;
  citedBy?: number;
}

export interface ResumeVariant {
  label: string;
  description: string;
  file: string;
  group: string;
}

export const profile = {
  name: "Rushabh S. Shah",
  shortName: "Rushabh Shah",
  title: "AI & Data Transformation Leader",
  subtitle: "AI Solutions Architect · Data & Governance Leader · Researcher",
  location: "Boston, MA",
  email: "rushabh1609rs@gmail.com",
  phone: "(617) 991-4109",
  linkedin: "https://www.linkedin.com/in/rushabh96/",
  linkedinLabel: "linkedin.com/in/rushabh96",
  scholar: "https://scholar.google.com/citations?user=9ViRkh8AAAAJ&hl=en",
  masterResume: "/resumes/Rushabh-Shah-Resume.pdf",
  positioning:
    "I architect AI and enterprise-data systems — from ambiguous problem to production-grade solution, and the governance to run it. Across 7+ years in pharma, healthcare, manufacturing, and energy, I have designed AI-powered data quality platforms, agentic workflows, and governance frameworks, alongside peer-reviewed research spanning health equity and the life sciences.",
  shortPitch:
    "AI solutions architect, data and governance leader, and published researcher who designs production systems and the trust to run them.",
} as const;

export const heroAchievements: Achievement[] = [
  { value: "7+", label: "Years across AI, data & enterprise platforms" },
  { value: "15", label: "Cross-functional engineers & analysts led" },
  { value: "$10M+", label: "Business impact & revenue opportunity" },
  { value: "7+", label: "Multinational clients deployed" },
];

export const roleLenses: RoleLens[] = [
  {
    slug: "ai-engineering",
    label: "AI Solution Architecture",
    shortLabel: "AI Architecture",
    accent: "#2563eb",
    icon: BrainCircuit,
    headline: "I architect AI that works inside real enterprise workflows.",
    tagline: "From ambiguous problem to production-ready agentic architecture.",
    summary:
      "AI solutions architect who embeds with client teams to move unclear AI problems into tested prototypes, reference architectures, adoption plans, and production workflows. Hands-on across Python, SQL, RAG pipelines, agent orchestration, and cloud delivery.",
    strengths: [
      "Client discovery, workflow mapping, and rapid prototyping",
      "LLM apps, RAG pipelines, vector search, and prompt design",
      "Agent orchestration with MCP and A2A patterns plus human review",
      "Build-to-release: APIs, CI/CD concepts, IAM, and production readiness",
    ],
    highlights: [
      "Embedded with client teams to turn unclear AI and data problems into working prototypes, delivery plans, and production-ready workflows.",
      "Built RAG-based assistants that search SAP, Salesforce, SharePoint, cloud data, and policy documents through natural language.",
      "Developed agentic workflow patterns using MCP and A2A concepts for data profiling, anomaly review, exception routing, and governance tasks.",
      "Defined build-to-release steps for AI prototypes including backlog items, test cases, UAT scripts, IAM, and CI/CD-ready handoffs.",
    ],
    achievements: [
      { value: "~40%", label: "Less manual effort via Data Lighthouse" },
      { value: "~30%", label: "Higher data accuracy" },
      { value: "7+", label: "Clients with deployed AI workflows" },
    ],
    tools: [
      "Python",
      "SQL",
      "RAG",
      "Vector search",
      "MCP / A2A",
      "FastAPI",
      "Snowflake",
      "Databricks",
      "Azure OpenAI",
      "AWS Bedrock",
      "Vertex AI",
    ],
    industries: ["Pharma", "Healthcare", "Manufacturing", "Energy"],
    resumeFile: "/resumes/Rushabh-Shah-AI-Engineering.pdf",
  },
  {
    slug: "program-management",
    label: "Technical Program & Product Management",
    shortLabel: "Program Management",
    accent: "#7c3aed",
    icon: Boxes,
    headline: "I lead cross-functional delivery from scope to release.",
    tagline: "Roadmaps, dependencies, and decisions that keep delivery moving.",
    summary:
      "Technical program and data transformation leader experienced in requirements intake, defect triage, release readiness, and executive reporting across engineering, data, security, and business teams.",
    strengths: [
      "Program scoping, roadmaps, dependencies, and release schedules",
      "Risk, blocker, and status reporting for executive stakeholders",
      "Defect triage, structured backlogs, and root-cause reviews",
      "Agile delivery, UAT, and requirements workshops",
    ],
    highlights: [
      "Owned delivery from scoping to release by defining requirements, building work plans, tracking dependencies, and resolving blockers across engineering, data, security, and business teams.",
      "Managed a 15-member cross-functional team, keeping priorities, risks, decisions, and production readiness visible across multiple workstreams.",
      "Converted stakeholder feedback and recurring issues into structured backlogs using defect logs, root-cause analysis, and release checklists.",
      "Built executive-ready updates covering program status, open risks, blocked work, milestones, and business impact.",
    ],
    achievements: [
      { value: "15", label: "Member cross-functional team led" },
      { value: "Multi", label: "Concurrent client workstreams" },
      { value: "$10M+", label: "Business impact supported" },
    ],
    tools: [
      "Roadmaps",
      "Backlogs",
      "Jira",
      "Confluence",
      "UAT",
      "SQL",
      "Python",
      "AWS",
      "Salesforce",
      "SAP S/4HANA",
      "Snowflake",
      "Databricks",
    ],
    industries: ["Pharma", "Healthcare", "Manufacturing", "Energy"],
    resumeFile: "/resumes/Rushabh-Shah-Program-Management.pdf",
  },
  {
    slug: "data-governance",
    label: "Data Governance & Quality",
    shortLabel: "Data Governance",
    accent: "#0d9488",
    icon: ShieldCheck,
    headline: "I build governance that earns trust and passes audits.",
    tagline: "Ownership, stewardship, and controls aligned to DAMA-DMBOK.",
    summary:
      "Data governance and delivery leader who builds practical operating models, stewardship processes, and quality controls that improve reporting trust and audit readiness across regulated industries.",
    strengths: [
      "Governance operating models aligned to DAMA-DMBOK principles",
      "Policies for quality, metadata, lineage, classification, and access",
      "Governance councils, domain working groups, and decision rights",
      "Controls aligned with GDPR, SOX, GxP, and ISO requirements",
    ],
    highlights: [
      "Built governance operating models that clarified the responsibilities of data owners, stewards, custodians, and delivery teams across business domains.",
      "Developed policies and standards for data quality, metadata, lineage, classification, access, retention, and issue management.",
      "Established governance councils and domain working groups that approved standards, resolved ownership gaps, and tracked remediation.",
      "Reviewed downstream impact of source, schema, pipeline, and reporting changes and coordinated business sign-off before release.",
    ],
    achievements: [
      { value: "~25%", label: "Fewer duplicate records" },
      { value: "~30%", label: "Higher data accuracy" },
      { value: "100%", label: "Audit-ready stewardship workflows" },
    ],
    tools: [
      "DAMA-DMBOK",
      "Collibra",
      "SAP MDG",
      "Informatica MDM",
      "Reltio",
      "Stibo",
      "Snowflake",
      "Databricks",
      "GDPR / SOX / GxP",
      "SQL",
      "Python",
    ],
    industries: ["Pharma", "Healthcare", "Manufacturing", "Energy"],
    resumeFile: "/resumes/Rushabh-Shah-Data-Governance.pdf",
  },
  {
    slug: "business-intelligence",
    label: "Business Intelligence & Analytics",
    shortLabel: "Business Intelligence",
    accent: "#d97706",
    icon: LineChart,
    headline: "I turn complex data into reporting leaders can trust.",
    tagline: "KPIs, dashboards, and reconciliation from source to release.",
    summary:
      "BI and reporting leader who builds trusted dashboards, defines KPIs, and improves reporting quality for enterprise clients using SQL, Python, Tableau, Power BI, Snowflake, and Databricks.",
    strengths: [
      "Analytics strategy, KPI standardization, and metric governance",
      "Executive dashboards, operational and self-service reporting",
      "Source-to-report validation, reconciliation, and dashboard QA",
      "Trend, variance, and root-cause analysis on large datasets",
    ],
    highlights: [
      "Translated business questions into clear KPIs, dashboards, and recurring reports across pharma, healthcare, manufacturing, and energy clients.",
      "Built and oversaw Tableau and Power BI dashboards on Snowflake and Databricks, improving reporting speed and reducing data latency by ~25%.",
      "Established reporting controls from source data through dashboard release, reducing spreadsheet dependence and preventing defects from reaching users.",
      "Introduced AI-assisted checks that flag anomalies and mismatches before reports are published.",
    ],
    achievements: [
      { value: "~25%", label: "Lower reporting latency" },
      { value: "~40%", label: "Less manual reporting effort" },
      { value: "15", label: "Member analytics team led" },
    ],
    tools: [
      "Tableau",
      "Power BI",
      "SQL",
      "Python",
      "R",
      "Snowflake",
      "Databricks",
      "SAP",
      "Salesforce",
      "Advanced Excel",
    ],
    industries: ["Pharma", "Healthcare", "Manufacturing", "Energy"],
    resumeFile: "/resumes/Rushabh-Shah-Business-Intelligence.pdf",
  },
  {
    slug: "master-data",
    label: "Master Data & Supplier / Procurement",
    shortLabel: "Master Data",
    accent: "#dc2626",
    icon: Database,
    headline: "I make master and supplier data clean, governed, and reliable.",
    tagline: "MDM, P2P controls, and golden records across the enterprise.",
    summary:
      "Master data and procurement data leader who improves supplier, vendor, customer, finance, and material data across regulated environments with MDM, P2P controls, duplicate prevention, and AI-enabled data operations.",
    strengths: [
      "Supplier and vendor master data, onboarding, and P2P controls",
      "MDM frameworks across customer, vendor, material, and finance",
      "Entity resolution, fuzzy matching, and golden record creation",
      "Stewardship workflows, approval controls, and audit readiness",
    ],
    highlights: [
      "Implemented supplier and vendor MDM and governance frameworks using SAP MDG, Informatica MDM, Reltio, and Stibo, reducing duplicate records by ~25%.",
      "Built supplier and P2P data controls for onboarding, required fields, tax and payment details, duplicate detection, and approval workflows.",
      "Built AI-enabled entity resolution, fuzzy matching, and golden-record frameworks across ERP and CRM systems.",
      "Supported P2P system modernization by mapping source-to-target flows, validating migration outputs, and identifying control gaps.",
    ],
    achievements: [
      { value: "~25%", label: "Fewer duplicate records" },
      { value: "~25%", label: "Lower reporting latency" },
      { value: "5", label: "Master data domains governed" },
    ],
    tools: [
      "SAP MDG",
      "SAP S/4HANA",
      "SAP Ariba",
      "Coupa",
      "Informatica MDM",
      "Reltio",
      "Stibo",
      "Snowflake",
      "Databricks",
      "SQL",
      "Python",
    ],
    industries: ["Pharma", "Healthcare", "Manufacturing", "Energy"],
    resumeFile: "/resumes/Rushabh-Shah-Master-Data.pdf",
  },
  {
    slug: "finance-data-quality",
    label: "Finance Data Quality",
    shortLabel: "Finance Data Quality",
    accent: "#0891b2",
    icon: Wallet,
    headline: "I raise financial data reliability from source to report.",
    tagline: "Reconciliation, controls, and freshness for finance teams.",
    summary:
      "Data quality and transformation leader who improves financial and enterprise data reliability across billing, revenue, customer, vendor, finance, and operational reporting domains using AI to streamline data operations.",
    strengths: [
      "Cost center, profit center, GL, intercompany, and order-to-cash data",
      "Validation, completeness, freshness, and exception reporting",
      "Reconciliation logic, lineage, and business sign-off workflows",
      "Audit readiness aligned to ISO and GDPR standards",
    ],
    highlights: [
      "Led enterprise data quality programs spanning customer, vendor, billing, revenue, cost center, GL, and operational reporting data.",
      "Built finance-focused data quality controls for accuracy, completeness, consistency, and freshness with reconciliation and exception reporting.",
      "Partnered with Finance and GTM teams to standardize metrics and deliver dashboards, curated datasets, and API-ready data products.",
      "Supported system modernization by mapping source-to-target flows and reducing reliance on manual spreadsheets.",
    ],
    achievements: [
      { value: "~30%", label: "Higher data accuracy" },
      { value: "~25%", label: "Lower reporting latency" },
      { value: "~25%", label: "Fewer duplicate records" },
    ],
    tools: [
      "SQL",
      "Python",
      "Snowflake",
      "Databricks",
      "SAP S/4HANA",
      "SAP MDG",
      "Salesforce",
      "Informatica MDM",
      "Reltio",
      "Tableau",
      "Power BI",
    ],
    industries: ["Pharma", "Healthcare", "Manufacturing", "Energy"],
    resumeFile: "/resumes/Rushabh-Shah-Finance-Data-Quality.pdf",
  },
  {
    slug: "life-sciences",
    label: "Pharma & Life Sciences",
    shortLabel: "Life Sciences",
    accent: "#db2777",
    icon: Truck,
    headline: "I bring AI and data rigor to regulated life sciences.",
    tagline: "GxP-aligned data, MDM, and analytics for pharma and healthcare.",
    summary:
      "Life sciences data leader who runs enterprise MDM and governance for pharma, medical device, and healthcare organizations with compliance to FDA 21 CFR Part 11 and GxP requirements.",
    strengths: [
      "Enterprise MDM for pharma, medical device, and life sciences",
      "Data governance aligned to GxP and FDA 21 CFR Part 11",
      "LIMS implementation and regulated data capture",
      "Patient, HCP, commercial, and operational analytics",
    ],
    highlights: [
      "Led enterprise MDM programs across customer, vendor, material, and finance domains for large-scale pharma and global life sciences organizations.",
      "Defined data governance and quality frameworks aligned with GxP standards, ensuring integrity, traceability, and audit readiness.",
      "Integrated data across ERP, CRM, claims, and supply chain systems into unified dashboards for patient, HCP, and commercial performance.",
      "Supported a global LIMS implementation across 7+ sites, driving standardization and regulatory compliance.",
    ],
    achievements: [
      { value: "$20M+", label: "New business growth supported" },
      { value: "7+", label: "LIMS sites standardized" },
      { value: "21 CFR", label: "Part 11 & GxP aligned" },
    ],
    tools: [
      "SAP MDG",
      "Reltio",
      "Informatica MDM",
      "Databricks",
      "Tableau",
      "Power BI",
      "GxP",
      "FDA 21 CFR Part 11",
      "LIMS",
    ],
    industries: ["Pharma", "Medical Device", "Healthcare", "Life Sciences"],
    resumeFile: "/resumes/Rushabh-Shah-Life-Sciences.pdf",
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "Manager Consultant — SME Business Data Services",
    company: "Genpact LLC",
    location: "Boston, MA",
    period: "Jun 2023 – Present",
    summary:
      "Lead AI, data, analytics, and governance programs for enterprise clients across pharma, healthcare, manufacturing, and energy.",
    points: [
      "Led a 15-member cross-functional team across data engineering, analytics, AI/ML, and business functions, embedding with client teams to turn unclear problems into production-ready workflows.",
      "Designed and deployed Data Lighthouse, an AI-powered data quality and governance platform, reducing manual effort by ~40% and improving data accuracy by ~30%.",
      "Established MDM, data quality, lineage, and stewardship frameworks across customer, vendor, material, and finance domains aligned with GDPR and GxP, reducing duplicate records by ~25%.",
      "Built RAG-based assistants and agentic workflows over SAP, Salesforce, SharePoint, and cloud data using MCP and A2A patterns.",
      "Delivered cloud-native data solutions across AWS, Azure, and GCP, reducing reporting latency by ~25%.",
      "Supported AI opportunity assessments and demos across 7+ multinational clients, contributing to $10M+ in business impact and revenue opportunities.",
    ],
  },
  {
    role: "Business Analyst",
    company: "Cognizant Pvt. Ltd.",
    location: "Mumbai, India",
    period: "May 2021 – Jul 2022",
    summary:
      "Supported digital and data transformation programs for global life sciences clients in regulated environments.",
    points: [
      "Played a key role in a global LIMS implementation across 7+ sites, enabling standardized processes and regulatory compliance.",
      "Led requirement gathering and solution design for enterprise data initiatives, improving reporting accuracy and operational visibility.",
      "Owned requirements documentation, issue tracking, UAT support, validation evidence, and go-live readiness.",
      "Conducted process improvement and gap analysis to streamline workflows and strengthen data-driven decisions.",
    ],
  },
  {
    role: "Co-Founder",
    company: "Trueno Electric Vehicle Pvt. Ltd.",
    location: "Mumbai, India",
    period: "May 2018 – May 2020",
    summary:
      "Co-founded a data-driven EV logistics startup focused on last-mile fleet optimization.",
    points: [
      "Built a technology-enabled logistics platform to optimize fleet operations, improving route efficiency and reducing operational costs.",
      "Raised and executed a fund utilization plan and financial model for a $400k seed investment.",
      "Led product strategy, financial planning, customer discovery, and early go-to-market execution.",
    ],
  },
];

export const education: EducationItem[] = [
  {
    school: "Arizona State University — W. P. Carey School of Business",
    credential: "Master of Science in Business Analytics (MSBA)",
    detail: "GPA 4.0",
    location: "Tempe, AZ",
    period: "Aug 2022 – May 2023",
  },
  {
    school: "Narsee Monjee Institute of Management Studies",
    credential: "Master of Business Administration (MBA)",
    detail: "GPA 3.54 · Dean's List · Gold Medalist · Bayer Scholarship",
    location: "Mumbai, India",
    period: "Jun 2019 – Apr 2021",
  },
  {
    school: "Bombay College of Pharmacy, Mumbai University",
    credential: "Bachelor of Pharmacy",
    detail: "GPA 6.98 · General Secretary, Student Council",
    location: "Mumbai, India",
    period: "May 2014 – May 2018",
  },
];

export const certifications: string[] = [
  "AWS Certified Cloud Practitioner",
  "Lean Six Sigma Green Belt",
  "Snowflake Partner Technical Foundations",
];

export const researchPapers: ResearchPaper[] = [
  {
    title:
      "Bridging the divide: barriers and facilitators to equitable community-academic partnerships in health research",
    authors: "M Khatib, R Shah, S Mendhe, C Whisner, M Buman",
    venue: "Frontiers in Public Health",
    year: "2025",
    field: "Health equity",
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=9ViRkh8AAAAJ&citation_for_view=9ViRkh8AAAAJ:u-x6o8ySG0sC",
    citedBy: 6,
  },
  {
    title:
      "Rethinking participation: design studios for health as a scalable co-design framework for health equity",
    authors: "M Khatib, R Shah, E Azugbene, MP Buman",
    venue: "Frontiers in Public Health",
    year: "2025",
    field: "Health equity",
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=9ViRkh8AAAAJ&citation_for_view=9ViRkh8AAAAJ:9yKSN-GCB0IC",
    citedBy: 2,
  },
  {
    title:
      "Empowerment and integration of refugee women: a transdisciplinary approach",
    authors: "M Khatib, T Purwar, R Shah, M Vizcaino, L Castillo",
    venue: "Humanities and Social Sciences Communications",
    year: "2024",
    field: "Social impact",
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=9ViRkh8AAAAJ&citation_for_view=9ViRkh8AAAAJ:d1gkVwhDpl0C",
    citedBy: 23,
  },
  {
    title:
      "Antidiarrheal activity of aqueous extract of leaves of Euphorbia hirta L.",
    authors: "RS Shah, J Ravat, MA Momin, AP Mukne",
    venue: "Journal of Pharmacy & Pharmacognosy Research",
    year: "2021",
    field: "Pharmacology",
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=9ViRkh8AAAAJ&citation_for_view=9ViRkh8AAAAJ:u5HHmVD_uO8C",
    citedBy: 2,
  },
];

export const projects: ProjectItem[] = [
  {
    name: "Data Lighthouse",
    tagline: "AI-powered data quality & governance platform",
    description:
      "A cloud-agnostic, agentic AI platform that automates profiling, validation, reconciliation, enrichment, stewardship, and remediation across regulated data environments.",
    impact: [
      "~40% reduction in manual effort",
      "~30% improvement in data accuracy",
      "Deployed across 7+ multinational clients",
      "Linked to $10M+ in business impact",
    ],
    tags: ["Agentic AI", "Data Quality", "Governance", "RAG", "Snowflake", "Databricks"],
  },
  {
    name: "D4 Workspace",
    tagline: "Forward-deployed agentic AI workspace in production",
    description:
      "An AI workspace running in production to automate manufacturing, S&OP, and finance workflows through enterprise search, RAG-based Q&A, data profiling, and operational automation.",
    impact: [
      "Production deployment automating manufacturing processes",
      "Agentic workflows for S&OP and finance",
      "Self-serve Q&A over enterprise systems",
    ],
    tags: ["Agentic AI", "Manufacturing", "S&OP", "Automation", "Enterprise Search"],
  },
  {
    name: "Enterprise AI Assistants",
    tagline: "RAG over ERP, CRM, and document systems",
    description:
      "Assistants that connect business users to SAP, Salesforce, SharePoint, cloud data, and reporting workflows through natural language.",
    impact: [
      "Natural-language access to enterprise knowledge",
      "Grounded in SAP, Salesforce, and SharePoint",
      "Reduced manual search and reporting effort",
    ],
    tags: ["RAG", "LLM Apps", "SAP", "Salesforce", "Knowledge Access"],
  },
  {
    name: "Enterprise Data Governance Operating Model",
    tagline: "Reusable governance framework",
    description:
      "A reusable operating model covering ownership, stewardship, policies, issue management, governance forums, delivery controls, and executive reporting across data domains.",
    impact: [
      "Clear ownership and decision rights",
      "Aligned to DAMA-DMBOK, GDPR, SOX, and GxP",
      "Audit-ready stewardship and reporting",
    ],
    tags: ["Governance", "DAMA-DMBOK", "Stewardship", "Compliance"],
  },
];

export interface SkillGroup {
  title: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "AI & Machine Learning",
    skills: [
      "Large Language Models",
      "Agentic AI",
      "RAG pipelines",
      "Vector search",
      "Prompt engineering",
      "MCP & A2A",
      "Knowledge graphs",
      "Entity resolution",
      "Anomaly detection",
    ],
  },
  {
    title: "Engineering & Platforms",
    skills: [
      "Python",
      "SQL",
      "R",
      "FastAPI",
      "Git & GitHub",
      "CI/CD concepts",
      "Snowflake",
      "Databricks",
      "AWS",
      "Azure",
      "GCP",
    ],
  },
  {
    title: "Data Governance & MDM",
    skills: [
      "SAP MDG",
      "Informatica MDM",
      "Reltio",
      "Stibo",
      "Collibra",
      "SAP Ariba",
      "Coupa",
      "Data lineage & metadata",
      "Stewardship workflows",
    ],
  },
  {
    title: "Analytics & Enterprise Systems",
    skills: [
      "Tableau",
      "Power BI",
      "Advanced Excel",
      "SAP S/4HANA",
      "Salesforce",
      "SharePoint",
      "ERP / CRM integration",
    ],
  },
  {
    title: "Compliance & Frameworks",
    skills: [
      "GDPR",
      "SOX",
      "GxP",
      "FDA 21 CFR Part 11",
      "ISO",
      "DAMA-DMBOK",
      "Lean Six Sigma",
    ],
  },
];

export const industries: string[] = [
  "Pharmaceutical",
  "Healthcare",
  "Life Sciences",
  "Manufacturing",
  "Energy / Oil & Gas",
  "BFSI",
  "Supply Chain & Logistics",
];

export const resumeVariants: ResumeVariant[] = [
  {
    label: "General Resume",
    description: "Latest all-round resume covering AI, data, and delivery.",
    file: "/resumes/Rushabh-Shah-Resume.pdf",
    group: "Featured",
  },
  {
    label: "AI Solution Architecture",
    description: "Hands-on AI architecture, RAG, and agentic deployment focus.",
    file: "/resumes/Rushabh-Shah-AI-Engineering.pdf",
    group: "By role",
  },
  {
    label: "Technical Program & Product Management",
    description: "Cross-functional delivery, roadmaps, and release management.",
    file: "/resumes/Rushabh-Shah-Program-Management.pdf",
    group: "By role",
  },
  {
    label: "Data Governance & Quality",
    description: "Governance operating models, policies, and stewardship.",
    file: "/resumes/Rushabh-Shah-Data-Governance.pdf",
    group: "By role",
  },
  {
    label: "Business Intelligence & Analytics",
    description: "KPIs, dashboards, and trusted reporting foundations.",
    file: "/resumes/Rushabh-Shah-Business-Intelligence.pdf",
    group: "By role",
  },
  {
    label: "Master Data & Supplier / Procurement",
    description: "MDM, supplier/P2P controls, and golden records.",
    file: "/resumes/Rushabh-Shah-Master-Data.pdf",
    group: "By role",
  },
  {
    label: "Finance Data Quality",
    description: "Financial data reliability, reconciliation, and controls.",
    file: "/resumes/Rushabh-Shah-Finance-Data-Quality.pdf",
    group: "By role",
  },
  {
    label: "Pharma & Life Sciences",
    description: "GxP-aligned MDM, governance, and analytics for life sciences.",
    file: "/resumes/Rushabh-Shah-Life-Sciences.pdf",
    group: "By industry",
  },
];

export function getRoleLens(slug: string): RoleLens | undefined {
  return roleLenses.find((lens) => lens.slug === slug);
}
