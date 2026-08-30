export const site = {
  name: "Utsarga",
  title: "AI Project Manager · Operations & Business Development Specialist",
  fullName: "Utsarga Baral",
  tagline:
    "Coordinating cross-functional workflows, leading AI project delivery, driving B2B sales pipelines, and optimizing operational processes.",
  email: "utsargabrb@gmail.com",
  phone: "+977 9840892555",
  location: "Kathmandu, Nepal",
  availability: "Currently Available for Work · Open to AI Project Management, Operations & Business Development roles",
  social: {
    github: "https://github.com/utsargabrb",
    linkedin: "https://linkedin.com/in/utsarga-baral-01691519a",
    website: "https://utsargabaral.netlify.app",
  },
  resumeUrl: "/resume/utsarga-baral-resume-tech.pdf",
} as const;

export const stats = [
  { value: "3+", label: "Years in AI Ops, PM & Business Development" },
  { value: "AI & Sales Ops", label: "Project Management, Multi-LLM & Outbound" },
  { value: "AI Content", label: "Prompt Architecture & Visual Generation" },
  { value: "Open", label: "Available for PM, Ops & BD Roles" },
] as const;

export const tools = [
  {
    name: "Apollo.io",
    logo: "/assets/tools/apollo-logo.png",
    category: "B2B Prospecting & Lead Gen",
    accent: "#eab308",
  },
  {
    name: "Instantly.ai",
    logo: "/assets/tools/instantly-logo.png",
    category: "Cold Email & Sales Automation",
    accent: "#0066ff",
  },
  {
    name: "ChatGPT",
    logo: "/assets/tools/chatgpt-logo.png",
    category: "LLM Workflow",
    accent: "#10a37f",
  },
  {
    name: "Claude",
    logo: "/assets/tools/claude-logo.png",
    category: "AI Writing & Analysis",
    accent: "#d97745",
  },
  {
    name: "Gemini",
    logo: "/assets/tools/gemini-logo.webp",
    category: "Multimodal AI",
    accent: "#4285f4",
  },
  {
    name: "Notion",
    logo: "/assets/tools/notion-logo.webp",
    category: "Docs & Trackers",
    accent: "#ffffff",
  },
  {
    name: "Jira",
    logo: "/assets/tools/jira-logo.jpg",
    category: "Project Tracking",
    accent: "#2684ff",
  },
  {
    name: "ClickUp",
    logo: "/assets/tools/clickup-logo.jpg",
    category: "Task Management",
    accent: "#a855f7",
  },
  {
    name: "Asana",
    logo: "/assets/tools/asana-logo.png",
    category: "Team Coordination",
    accent: "#f06a6a",
  },
  {
    name: "HubSpot",
    logo: "/assets/tools/hubspot-logo.png",
    category: "CRM & Sales",
    accent: "#ff5c35",
  },
  {
    name: "Microsoft Office",
    logo: "/assets/tools/microsoft-office-logo.jpg",
    category: "Documents, decks & reporting",
    accent: "#d83b01",
  },
] as const;

export const pmProjects = [
  {
    id: "PM-01",
    title: "Sea Logistics Document Intelligence — Prompt Engineering",
    organization: "Rippey AI",
    category: "Prompt Engineering & Domain Intelligence",
    summary:
      "This isn't an automated pipeline, it's applied prompt engineering for the sea logistics domain. Worked directly with shipping and logistics documents, including Bills of Lading, AP Invoices, and Arrival Notices, and wrote extraction prompts tailored to how major ocean carriers format their paperwork, including MSC, ONE, Evergreen, and Hapag-Lloyd.",
    deliverables: [
      "Built & refined prompts specific to each carrier's layout & terminology (MSC, ONE, Evergreen, Hapag-Lloyd)",
      "Extracted key operational fields: container numbers, vessel & voyage details, dates, parties, and charges",
      "Achieved 95% extraction accuracy across tested document types through iterative testing & prompt design",
    ],
    tools: ["Prompt Architecture", "Domain Extraction", "LLM Evaluation", "Logistics Intelligence"],
    accent: "#c45c26",
  },
  {
    id: "PM-02",
    title: "Multi-LLM Evaluation & Quality Tracker",
    organization: "Rippey AI",
    category: "AI Operations & Evaluation",
    summary:
      "Designed and maintained systematic evaluation logs for production AI systems to proactively flag failure patterns and drive model quality.",
    deliverables: [
      "Comparative benchmark evaluations across GPT-4, Claude, and Gemini",
      "Shared issue tracking systems for cross-functional decision-making",
      "Model behavior documentation & continuous improvement dashboards",
    ],
    tools: ["Notion Trackers", "GPT-4 / Claude / Gemini", "Reporting Dashboards"],
    accent: "#3b82f6",
  },
  {
    id: "PM-03",
    title: "Partner Onboarding & Workflow Architecture",
    organization: "Rippey AI",
    category: "Process & Onboarding Management",
    summary:
      "Translated complex partner business requirements into structured AI workflows, milestone schedules, and execution roadmaps.",
    deliverables: [
      "Structured partner onboarding plans & requirement specs",
      "Cross-team stakeholder alignment decks & performance reporting",
      "Repeatable implementation templates for future enterprise clients",
    ],
    tools: ["Asana", "Notion", "Workflow Design", "Client Demos"],
    accent: "#10b981",
  },
  {
    id: "PM-04",
    title: "Outbound B2B Lead Engine & Campaign Automation",
    organization: "ScaleBuild AI / Hyperscaler",
    category: "Business Development & Sales Automation",
    summary:
      "Architected scalable outbound prospecting and automated cold email infrastructure targeting enterprise decision-makers for AI & cloud hyperscaler offerings.",
    deliverables: [
      "Mined and verified targeted B2B decision-maker contact data using Apollo.io filters and lead enrichment",
      "Built and launched automated multi-touch cold email sequences in Instantly.ai with domain warmup and spintax",
      "Established lead tracking, campaign analytics, and response optimization for outbound pipeline growth",
    ],
    tools: ["Apollo.io", "Instantly.ai", "B2B Lead Generation", "Cold Email Outreach", "Sales Funnel"],
    accent: "#0ea5e9",
  },
  {
    id: "PM-05",
    title: "B2B Outreach & Lead Generation Funnel",
    organization: "360 Mails",
    category: "Sales Operations & Campaign Management",
    summary:
      "Managed full end-to-end B2B outreach pipelines, prospect data mining, and account targeting through the sales funnel.",
    deliverables: [
      "Prospect identification & qualified account list mining",
      "Outreach strategy development and client profiling",
      "Campaign performance reporting & pipeline tracking",
    ],
    tools: ["HubSpot CRM", "Excel / Sheets", "B2B Sales Funnel"],
    accent: "#8b5cf6",
  },
] as const;

export const creativeWork = [
  {
    id: "01",
    title: "LHOTSE",
    subtitle: "Car Fragrance · Product Visual",
    description:
      "Premium automotive scent branding — coffee-toned glass, natural wood cap, and atmospheric green vapor in a luxury cabin environment.",
    image: "/assets/work/lhotse-car-fragrance.png",
    tags: ["Product Design", "Brand Visual", "AI Generation"],
    accent: "#2d5016",
  },
  {
    id: "02",
    title: "IGNITE",
    subtitle: "utx.ai · Campaign Poster",
    description:
      "Neon-drenched synthwave identity for a high-energy AI brand — graffiti typography, electric teal puffer, and lime-green signal copy.",
    image: "/assets/work/ignite-utx-ai.png",
    tags: ["Campaign", "Streetwear Aesthetic", "Generative AI"],
    accent: "#a3ff00",
  },
  {
    id: "03",
    title: "ideal FOR MEN",
    subtitle: "Skincare · Brand Campaign",
    description:
      "Masculine luxury skincare visual — metallic silver bottle, forest-green rope, and nature-powered copy for a sophisticated men's line.",
    image: "/assets/work/ideal-for-men.png",
    tags: ["Luxury Branding", "Copywriting", "Visual Direction"],
    accent: "#1a3d2f",
  },
  {
    id: "04",
    title: "OCEANUS × Disney",
    subtitle: "Fashion · The Little Mermaid",
    description:
      "High-fashion mermaid capsule collection — caustic underwater lighting, sequined scales, and a Disney collaboration aesthetic.",
    image: "/assets/work/oceanus-disney.png",
    tags: ["Fashion", "Collaboration", "Concept Visual"],
    accent: "#0891b2",
  },
  {
    id: "05",
    title: "Motion Signal",
    subtitle: "Dynamic · Visual Study",
    description:
      "Kinetic motion-blur runner against a golden sunset — abstract energy and forward momentum captured in a single frame.",
    image: "/assets/work/motion-runner.png",
    tags: ["Motion Design", "Photography", "AI Art"],
    accent: "#ea580c",
  },
  {
    id: "06",
    title: "Generative Portrait",
    subtitle: "AI Artwork · Personal Visual",
    description:
      "Editorial portrait artwork with a coastal setting and polished art direction, created as part of Utsarga's generative visual practice.",
    image: "/assets/profile/profile-beach.png",
    tags: ["AI Portrait", "Visual Direction", "Generative AI"],
    accent: "#0ea5e9",
  },
] as const;

export const videos = [
  {
    id: "v1",
    title: "Portfolio Reel I",
    src: "/videos/por-1.mp4",
  },
  {
    id: "v2",
    title: "Portfolio Reel II",
    src: "/videos/por-2.mp4",
  },
  {
    id: "v3",
    title: "Portfolio Reel III",
    src: "/videos/por-3.mp4",
  },
  {
    id: "v4",
    title: "Generated Visual I",
    src: "/videos/generated-video.mp4",
  },
  {
    id: "v5",
    title: "Generated Visual II",
    src: "/videos/generated-video-2.mp4",
  },
] as const;

export const projects = [] as const;

export const experience = [
  {
    role: "Business Development Associate",
    company: "ScaleBuild AI / Hyperscaler",
    period: "07/2026 – Present",
    location: "Remote",
    highlights: [
      "Leading outbound business development and client acquisition strategies for AI products and cloud hyperscaler solutions.",
      "Leveraging Apollo.io to mine verified ICP decision-maker data, build targeted account lists, and perform deep contact enrichment.",
      "Architecting and executing automated cold outreach workflows using Instantly.ai, managing multi-domain warmup protocols and deliverability optimization.",
      "Designing high-converting outreach sequences and personalized messaging frameworks that consistently drive open rates, response rates, and qualified lead flow.",
      "Managing pipeline metrics across the sales funnel, analyzing campaign performance data, and qualifying high-intent prospects for closing.",
    ],
  },
  {
    role: "Associate AI Project Manager",
    company: "Rippey AI",
    period: "04/2025 – 03/2026",
    location: "Colorado (Remote)",
    highlights: [
      "Led end-to-end delivery of AI and prompt-engineering projects across Product, Engineering, Partnerships, and Client Success teams.",
      "Managed project timelines, stakeholder communications, dependencies, and risk mitigation to ensure successful project execution.",
      "Designed, tested, and optimized prompts for production AI workflows, improving output quality and operational efficiency.",
      "Coordinated partner onboarding projects, translating business requirements into structured AI workflows and implementation plans.",
      "Prepared performance reports, client demonstrations, and project updates while maintaining detailed documentation and audit-ready records.",
    ],
  },
  {
    role: "AI Operations Analyst",
    company: "Rippey AI",
    period: "09/2023 – 04/2025",
    location: "Colorado (Remote)",
    highlights: [
      "Monitored production AI systems and maintained comprehensive evaluation logs, proactively flagging failure patterns and recommending targeted improvements.",
      "Conducted structured comparative evaluations across GPT-4, Claude, and Gemini; documented findings in shared trackers to inform team-wide decision-making.",
      "Collaborated cross-functionally with Product and Engineering to document model behavior, maintain reporting dashboards, and support continuous improvement initiatives.",
      "Managed multiple concurrent project tracks with competing deadlines, consistently delivering on time with strong attention to detail.",
    ],
  },
  {
    role: "Sales & Marketing Associate",
    company: "360 Mails",
    period: "08/2022 – 12/2022",
    location: "Nepal",
    highlights: [
      "Led B2B outreach campaigns and managed end-to-end lead generation pipelines, tracking prospects and activities through the full sales funnel.",
      "Conducted market research, prospect identification, and data mining to build qualified partner and client lists for targeted account outreach.",
      "Collaborated with sales and marketing teams on client profiling, outreach strategy, and campaign performance reporting.",
    ],
  },
] as const;

export const education = {
  degree: "Bachelor's Degree in Information Management",
  school: "Tribhuvan University",
  period: "04/2021 – 10/2025",
  location: "Kathmandu, Nepal",
} as const;

export const skills = [
  "AI Project Management & Agile Delivery",
  "AI Operations & Multi-LLM Evaluation (GPT-4, Claude, Gemini)",
  "B2B Lead Generation & Prospecting (Apollo.io)",
  "Cold Email Automation & Deliverability (Instantly.ai)",
  "Outbound Sales Strategy & Funnel Optimization",
  "Cross-functional Stakeholder Alignment",
  "Workflow Optimization & Process Architecture",
  "CRM & Project Management Tools (Notion, Jira, ClickUp, Asana, HubSpot)",
  "Documentation & Executive Reporting",
] as const;

export const certificates = ["Claude 101"] as const;

export const aboutText = [
  "AI Project Manager, Operations, & Business Development professional with 3+ years of experience leading cross-functional teams, managing production AI workflows, and driving B2B sales pipelines. Proven track record in project execution, prompt evaluation architectures, client onboarding, and automated growth strategies.",
  "Adept with modern PM frameworks, LLM evaluation trackers, Apollo.io, Instantly.ai, and CRM tools — keeping complex AI initiatives on schedule while scaling strategic outbound business development.",
] as const;

export function getPortfolioContext(): string {
  return `
Name: ${site.fullName}
Title: ${site.title}
Email: ${site.email}
Phone: ${site.phone}
Location: ${site.location}
GitHub: ${site.social.github}
LinkedIn: ${site.social.linkedin}
Website: ${site.social.website}

Summary:
${aboutText.join(" ")}

Experience:
${experience
  .map(
    (e) =>
      `- ${e.role} at ${e.company} (${e.period}): ${e.highlights.join("; ")}`,
  )
  .join("\n")}

Project Management & BD Portfolio:
${pmProjects
  .map(
    (p) =>
      `- ${p.title} (${p.organization}): ${p.summary} Deliverables: ${p.deliverables.join(", ")}. Tools: ${p.tools.join(", ")}`,
  )
  .join("\n")}

Education: ${education.degree}, ${education.school} (${education.period})

Creative Work:
${creativeWork.map((c) => `- ${c.title}: ${c.description}`).join("\n")}

Tools: ${tools.map((tool) => tool.name).join(", ")}
Skills: ${skills.join(", ")}
Certificates: ${certificates.join(", ")}
`.trim();
}

