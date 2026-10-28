export interface Identity {
  name: string;
  displayName: string;
  location: string;
  role: string;
  summary: string;
}

export interface SeoMetadata {
  title: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  kind: "professional" | "independent";
  technologies: string[];
  href?: string;
}

export interface ExperienceEntry {
  company: string;
  role: string;
  focus: string;
  dates?: string;
}

export interface Capability {
  title: string;
  description: string;
  technologies: string[];
}

export interface AboutContent {
  paragraphs: string[];
  statement: string;
}

export interface ContactLink {
  label: string;
  href: string;
}

export const identity: Identity = {
  name: "To Nguyen Duy Tan",
  displayName: "Tan",
  location: "Ho Chi Minh City, Vietnam",
  role: "Principal Platform Engineer",
  summary:
    "I work across cloud platforms, distributed systems, fintech infrastructure, and AI research computing, with more than eight years in infrastructure engineering.",
};

export const seo: SeoMetadata = {
  title: "Tan To — Platform & Infrastructure Engineer",
  description:
    "Tan To is a platform engineer in Ho Chi Minh City working across cloud infrastructure, distributed systems, fintech, and AI computing.",
};

export const projects: Project[] = [
  {
    id: "dgx-superpod",
    title: "NVIDIA DGX SuperPOD & GPU Infrastructure",
    description:
      "GPU and high-performance computing infrastructure work for AI research at VinAI Research, including NVIDIA DGX SuperPOD environments.",
    category: "AI research infrastructure",
    kind: "professional",
    technologies: [
      "NVIDIA DGX SuperPOD",
      "GPU clusters",
      "Kubernetes",
      "Slurm",
    ],
  },
  {
    id: "distributed-data-cdc",
    title: "Distributed Data & CDC Infrastructure",
    description:
      "Engineering work with event streaming and change data capture across enterprise systems.",
    category: "Distributed data",
    kind: "professional",
    technologies: ["Kafka", "Debezium", "Kafka Connect", "Schema Registry"],
  },
  {
    id: "metro-real-estate-map",
    title: "Ho Chi Minh City Metro & Real Estate Map",
    description:
      "A personal geospatial application exploring how property locations relate to urban metro infrastructure.",
    category: "Independent project",
    kind: "independent",
    technologies: ["Geospatial data", "Metro infrastructure", "Real estate"],
  },
  {
    id: "ai-inference-serving",
    title: "AI Inference & Model Serving",
    description:
      "Infrastructure experience and experimentation with serving large language and machine learning models.",
    category: "AI infrastructure",
    kind: "independent",
    technologies: ["vLLM", "NVIDIA Triton Inference Server"],
  },
  {
    id: "market-data-research",
    title: "Quantitative Market Data Research",
    description:
      "Personal exploration of market data systems and AI-assisted quantitative research.",
    category: "Independent research",
    kind: "independent",
    technologies: [
      "Market data",
      "Quantitative research",
      "AI-assisted analysis",
    ],
  },
];

export const experience: ExperienceEntry[] = [
  {
    company: "Masan Corporation",
    role: "Principal DevOps Engineer",
    focus:
      "Enterprise cloud infrastructure, Azure, Kubernetes, and data platforms.",
  },
  {
    company: "MatchMove Fintech",
    role: "Senior DevOps Engineer",
    focus:
      "AWS and Kubernetes platform operations for financial technology systems.",
  },
  {
    company: "VinAI Research",
    role: "GPU / HPC Infrastructure Engineering",
    focus: "NVIDIA DGX SuperPOD, GPU clusters, and research computing.",
  },
  {
    company: "Xendit",
    role: "Fintech Infrastructure Engineering",
    focus: "Terraform-based infrastructure automation and CI/CD.",
  },
  {
    company: "ZaloPay",
    role: "Payment Infrastructure Engineering",
    focus: "Payment infrastructure and reliability engineering.",
  },
];

export const capabilities: Capability[] = [
  {
    title: "Cloud & Platform Engineering",
    description:
      "Designing and operating cloud-native infrastructure and Kubernetes platforms across enterprise environments.",
    technologies: ["AWS", "Azure", "GCP", "Kubernetes", "EKS", "AKS", "GKE"],
  },
  {
    title: "AI Infrastructure & GPU Computing",
    description:
      "Working with research compute, GPU clusters, and model-serving infrastructure.",
    technologies: ["NVIDIA DGX SuperPOD", "Slurm", "vLLM", "NVIDIA Triton"],
  },
  {
    title: "Distributed Systems & Data",
    description:
      "Building and operating streaming and data movement infrastructure for distributed systems.",
    technologies: [
      "Kafka",
      "Debezium",
      "Kafka Connect",
      "Schema Registry",
      "CDC",
    ],
  },
  {
    title: "DevOps, Automation & Reliability",
    description:
      "Automating infrastructure delivery and improving dependable operation of cloud platforms.",
    technologies: [
      "Terraform",
      "Helm",
      "Ansible",
      "GitLab CI/CD",
      "GitHub Actions",
    ],
  },
];

export const about: AboutContent = {
  paragraphs: [
    "My work has moved across payment infrastructure, AI research, enterprise cloud systems, and personal software projects. Those environments have different constraints, but each depends on clear systems and dependable foundations.",
    "I enjoy understanding how complex platforms behave and making them easier to operate. Outside day-to-day infrastructure work, I stay curious about GPU computing, distributed systems, and the ways data can help us ask better questions.",
  ],
  statement: "Good infrastructure makes complex work dependable.",
};

// Configure only verified public contact links here. Unknown links are omitted
// until supplied; the site should hide the contact list when it is empty.
export const contacts: ContactLink[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/tantnd" },
  { label: "Telegram @tantnd", href: "https://t.me/tantnd" },
];
