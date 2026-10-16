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

export interface ClientItem {
  name: string;
  logo: string;
}

export interface TechnologyItem {
  name: string;
  logo?: string;
}

export interface TechnologyGroup {
  label: string;
  technologies: TechnologyItem[];
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

export const profile = {
  name: "Rushabh S. Shah",
  shortName: "Rushabh Shah",
  title: "Senior Manager, Generative AI",
  subtitle: "Agentic AI · AI Security · Pharma Commercial Analytics",
  location: "Boston, MA",
  email: "rushabh1609rs@gmail.com",
  phone: "(617) 991-4109",
  linkedin: "https://www.linkedin.com/in/rushabh96/",
  linkedinLabel: "linkedin.com/in/rushabh96",
  scholar: "https://scholar.google.com/citations?user=9ViRkh8AAAAJ&hl=en",
  calendly: "https://calendly.com/rushabh1609rs",
  positioning:
    "I lead generative and agentic AI work at Cognizant, including current AI-security work for TD Bank. Across 8+ years, I have built RAG assistants and agentic workflows over SAP, Salesforce, SharePoint, and cloud data. In pharma, my work connects HCP, patient, claims, and commercial data to governed analytics, AI-assisted quality checks, and exception workflows.",
  shortPitch:
    "Cognizant Senior Manager, Generative AI. Agentic workflows, enterprise AI security, and pharma commercial analytics across 8+ years.",
} as const;

export const heroAchievements: Achievement[] = [
  { value: "8+", label: "Years across AI, data & enterprise platforms" },
  { value: "15", label: "Cross-functional engineers & analysts led" },
  { value: "$10M+", label: "Business impact & revenue opportunity" },
  { value: "7+", label: "Multinational clients deployed" },
];

export const roleLenses: RoleLens[] = [
  {
    slug: "ai-engineering",
    label: "Agentic AI & Security",
    shortLabel: "Agentic AI",
    accent: "#2563eb",
    icon: BrainCircuit,
    headline: "I build agentic AI into enterprise workflows, with security in scope.",
    tagline: "RAG, multi-agent workflows, human review, and governed delivery.",
    summary:
      "Built RAG assistants and agentic workflows across SAP, Salesforce, SharePoint, and cloud data. The work includes data profiling, anomaly review, exception routing, governance tasks, human review, and build-to-release readiness. Current Cognizant work includes AI security for TD Bank.",
    strengths: [
      "Agentic workflows for profiling, reconciliation, and exception routing",
      "RAG assistants grounded in ERP, CRM, and document repositories",
      "MCP/A2A orchestration with human review and governance checkpoints",
      "AI security, IAM, testing, and production-readiness planning",
    ],
    highlights: [
      "Built RAG assistants over SAP, Salesforce, SharePoint, and cloud data for natural-language access to enterprise knowledge.",
      "Designed agentic workflows for data profiling, reconciliation, anomaly review, and exception routing using MCP/A2A patterns.",
      "Added human-review and governance checkpoints to AI workflows handling regulated enterprise data.",
      "Currently working on AI security for TD Bank in Cognizant's Generative AI practice.",
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
    industries: ["Pharma", "Financial Services", "Healthcare", "Manufacturing"],
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
  },
  {
    slug: "business-intelligence",
    label: "Business Intelligence & Analytics",
    shortLabel: "Business Intelligence",
    accent: "#d97706",
    icon: LineChart,
    headline: "I connect pharma commercial data to decision-ready analytics.",
    tagline: "HCP, patient, claims, and commercial performance reporting.",
    summary:
      "Integrated ERP, CRM, claims, and supply-chain data into analytics for HCP, patient, and commercial performance. Built Tableau and Power BI reporting on Snowflake and Databricks, with KPI definitions, source-to-report reconciliation, and AI-assisted anomaly checks.",
    strengths: [
      "Analytics strategy, KPI standardization, and metric governance",
      "Executive dashboards, operational and self-service reporting",
      "Source-to-report validation, reconciliation, and dashboard QA",
      "Trend, variance, and root-cause analysis on large datasets",
    ],
    highlights: [
      "Integrated ERP, CRM, claims, and supply-chain data into analytics layers for HCP, patient, and commercial performance.",
      "Built Tableau and Power BI dashboards on Snowflake and Databricks, reducing reporting latency by ~25%.",
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
    industries: ["Pharma Commercial", "Retail", "Healthcare", "Manufacturing"],
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
  },
  {
    slug: "life-sciences",
    label: "Pharma Commercial, Analytics & AI",
    shortLabel: "Pharma Commercial",
    accent: "#db2777",
    icon: Truck,
    headline: "I connect pharma commercial data, analytics, and AI.",
    tagline: "Commercial performance, governed data, and agentic workflows.",
    summary:
      "Pharma experience spans HCP, patient, claims, ERP/CRM, and supply-chain data; commercial dashboards; GxP-aligned governance; and AI-assisted data operations. Built RAG assistants and agentic workflows for enterprise knowledge, profiling, and exception review.",
    strengths: [
      "Commercial analytics across HCP, patient, claims, and operational data",
      "Agentic AI for profiling, quality checks, and exception review",
      "GxP governance and FDA 21 CFR Part 11 data controls",
      "Pharma MDM, LIMS, and ERP/CRM data integration",
    ],
    highlights: [
      "Integrated ERP, CRM, claims, and supply-chain data into analytics for HCP, patient, and commercial performance.",
      "Applied agentic AI and RAG patterns to data profiling, quality review, exception routing, and enterprise knowledge access.",
      "Established GxP-aligned governance and quality controls for regulated life-sciences data.",
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
    industries: ["Pharma Commercial", "Medical Device", "Healthcare", "Life Sciences"],
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "Senior Manager, Generative AI",
    company: "Cognizant",
    location: "Boston, MA",
    period: "Jul 2026 – Present",
    summary:
      "Senior Manager in Cognizant's Generative AI practice, currently working on AI security for TD Bank.",
    points: [
      "Contribute to AI security work for TD Bank as part of Cognizant's generative AI practice.",
    ],
  },
  {
    role: "Senior Manager Consultant",
    company: "Genpact LLC",
    location: "Boston, MA",
    period: "Jun 2025 – Jun 2026",
    summary:
      "Led AI-led data transformation programs focused on agentic AI, data quality automation, enterprise governance, and MDM modernization for global clients.",
    points: [
      "Led a 15-member cross-functional team across data engineering, analytics, AI/ML, and business functions, embedding with client teams to turn unclear problems into production-ready workflows.",
      "Designed and deployed Data Lighthouse, an AI-powered data quality and governance platform, reducing manual effort by ~40% and improving data accuracy by ~30%.",
      "Built RAG-based assistants and agentic workflows over SAP, Salesforce, SharePoint, and cloud data using MCP and A2A patterns.",
    ],
  },
  {
    role: "Manager Consultant",
    company: "Genpact LLC",
    location: "Boston, MA",
    period: "Jun 2023 – Jun 2025",
    summary:
      "Led enterprise data, MDM, and AI transformation initiatives across manufacturing, life sciences, healthcare, pharma, and energy clients.",
    points: [
      "Established MDM, data quality, lineage, and stewardship frameworks across customer, vendor, material, and finance domains aligned with GDPR and GxP.",
      "Delivered cloud-native data solutions across AWS, Azure, and GCP, reducing reporting latency by ~25%.",
      "Supported AI opportunity assessments across multinational clients, contributing to business impact and revenue opportunities.",
    ],
  },
  {
    role: "Business Analyst",
    company: "Cognizant",
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
    school: "University of the Cumberlands",
    credential: "Doctorate in Artificial Intelligence (in progress)",
    detail: "Doctoral studies",
    location: "United States",
    period: "Jul 2026 – Dec 2029",
  },
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
  "Claude Certified Architect - Professional (Anthropic)",
  "Databricks Certified Generative AI Engineer Associate",
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
    name: "AI Security for TD Bank",
    tagline: "Generative AI · Financial services",
    description:
      "Current work at Cognizant focused on AI security for TD Bank. Details are intentionally kept high-level.",
    impact: [
      "Current Senior Manager, Generative AI engagement",
      "AI security work in a financial-services context",
    ],
    tags: ["Generative AI", "AI Security", "Financial Services"],
  },
  {
    name: "Pharma Commercial Analytics & AI",
    tagline: "HCP, patient, claims, and commercial performance",
    description:
      "Integrated ERP, CRM, claims, and supply-chain data for HCP, patient, and commercial analytics. Related AI delivery includes RAG knowledge access, AI-assisted quality checks, and agentic workflows for profiling and exception review.",
    impact: [
      "Commercial dashboards across HCP, patient, claims, and operational data",
      "AI-assisted profiling, anomaly review, and exception workflows",
      "Governed data foundations aligned with regulated life sciences",
    ],
    tags: ["Pharma", "Commercial Analytics", "HCP", "Patient Data", "Claims"],
  },
  {
    name: "Retail Performance Analytics",
    tagline: "Sales, customer, product, and inventory insights",
    description:
      "Retail analytics focus across sales, customer, product, and inventory data: category and channel performance, customer segmentation, KPI definitions, and demand trends.",
    impact: [
      "Category and channel performance reporting",
      "Customer segmentation and product analytics",
      "Inventory visibility and demand trends",
    ],
    tags: ["Retail", "Business Analytics", "Customer Data", "KPIs"],
  },
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
  "Pharma Commercial",
  "Healthcare",
  "Life Sciences",
  "Retail",
  "Financial Services",
  "Manufacturing",
  "Energy / Oil & Gas",
  "BFSI",
  "Supply Chain & Logistics",
];

export const clients: ClientItem[] = [
  { name: "Kenvue", logo: "/images/clients/kenvue.svg" },
  { name: "Medtronic", logo: "/images/clients/medtronic.png" },
  { name: "Takeda", logo: "/images/clients/takeda.svg" },
  {
    name: "Boehringer Ingelheim",
    logo: "/images/clients/boehringer-ingelheim.svg",
  },
  { name: "TD Bank", logo: "/images/clients/td-bank.png" },
  { name: "Walmart", logo: "/images/clients/walmart.svg" },
  { name: "Heineken", logo: "/images/clients/heineken.png" },
  { name: "HESS", logo: "/images/clients/hess.png" },
];

export const technologyGroups: TechnologyGroup[] = [
  {
    label: "Cloud",
    technologies: [
      { name: "AWS", logo: "/images/technology/aws.png" },
      { name: "Azure", logo: "/images/technology/azure.svg" },
      { name: "Google Cloud", logo: "/images/technology/google-cloud.svg" },
    ],
  },
  {
    label: "Data platforms",
    technologies: [
      { name: "Databricks", logo: "/images/technology/databricks.svg" },
      { name: "Snowflake", logo: "/images/technology/snowflake.svg" },
    ],
  },
  {
    label: "Analytics",
    technologies: [
      { name: "Tableau", logo: "/images/technology/tableau.png" },
      { name: "Power BI", logo: "/images/technology/power-bi.png" },
    ],
  },
  {
    label: "Languages",
    technologies: [
      { name: "Python", logo: "/images/technology/python.svg" },
      { name: "R", logo: "/images/technology/r.svg" },
      { name: "SQL" },
    ],
  },
  {
    label: "AI tools",
    technologies: [
      { name: "OpenAI", logo: "/images/technology/openai.png" },
      { name: "Anthropic", logo: "/images/technology/anthropic.svg" },
      { name: "FastAPI", logo: "/images/technology/fastapi.svg" },
      { name: "RAG" },
      { name: "MCP / A2A" },
    ],
  },
  {
    label: "Enterprise systems",
    technologies: [
      { name: "SAP", logo: "/images/technology/sap.svg" },
      { name: "Salesforce", logo: "/images/technology/salesforce.svg" },
      { name: "SharePoint" },
    ],
  },
];

export function getRoleLens(slug: string): RoleLens | undefined {
  return roleLenses.find((lens) => lens.slug === slug);
}
