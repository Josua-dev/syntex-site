// =========================================================
// Syntex Technologies — Verified content layer
// Every string below traces to the source site files
// (Downloads/files/*.html and the saved prototypes).
// Areas with no public source material are marked
// `verified:false` and rendered as honest placeholders —
// never invented content.
// =========================================================

export const identity = {
  name: 'Syntex Technologies (Pty) Ltd',
  legal: 'Syntex Technologies (Pty) Ltd',
  incorporated: 2008,
  // Consistent with all canonical source pages (index/about + body of tech-nova).
  parent: 'Syntex Investment', // verified in approach/solutions/track-record footers
  tagline: 'The systems that matter.',
  country: 'Namibia',
  region: 'Windhoek',
  hq: {
    line1: '340 Sam Nujoma Drive',
    line2: 'Klein Windhoek, Windhoek',
    line3: 'Khomas Region, Namibia',
  },
  phone: '+264 61 309 171',
  phoneHref: '+26461309171',
  emailSales: 'sales@syntexnam.com',
  emailSupport: 'support@syntexnam.com',
}

// Verified six solution areas + their descriptions.
export const serviceAreas = [
  {
    slug: 'access-control-biometrics',
    title: 'Access Control & Biometric Systems',
    category: 'Security', categorySlug: 'security',
    navGroup: 'Security',
    url: '/services/access-control-biometrics',
    intro: 'Access control software for securing a single site or a portfolio of buildings.',
    body: 'Access control software that ties doors, identity verification, and monitoring into one networked system, built to be administered across a single site or a portfolio of buildings.',
    keywords: ['access control', 'biometric', 'fingerprint', 'networking', 'site security'],
  },
  {
    slug: 'border-control-management',
    title: 'Border Control Management',
    category: 'Security', categorySlug: 'security',
    navGroup: 'Security',
    url: '/services/border-control-management',
    intro: 'A system for managing immigration across national borders, implemented in more than ten countries.',
    body: 'A convenient way to manage immigration across national borders. Implemented in more than ten countries, built for the throughput and audit requirements of national border posts.',
    keywords: ['border control', 'immigration', 'national borders', 'border posts', '10+ countries'],
  },
  {
    slug: 'security-management',
    title: 'Security Management Systems',
    category: 'Security', categorySlug: 'security',
    navGroup: 'Security',
    url: '/services/security-management',
    intro: 'Centralised security management that unifies access, alarm, and monitoring into one operating picture.',
    body: 'A security management system that unifies access control, alarms, and monitoring into one operating picture across a site or a portfolio of buildings — the systems-integration surface the official record describes under its six core solution areas.',
    keywords: ['security management', 'centralised', 'monitoring', 'alarms', 'site security'],
  },
  {
    slug: 'ict-security-audit',
    title: 'ICT & Security Audit',
    category: 'Security', categorySlug: 'security',
    navGroup: 'Security',
    url: '/services/ict-security-audit',
    intro: 'A structured review of existing infrastructure and access controls, forming the baseline for any security deployment.',
    body: 'A structured review of existing infrastructure and access controls, forming the baseline for any security management system deployment or upgrade.',
    keywords: ['audit', 'ICT audit', 'security audit', 'infrastructure review', 'compliance'],
  },
  {
    slug: 'enterprise-resource-planning',
    title: 'Enterprise Resource Planning (ERP)',
    category: 'Enterprise Systems', categorySlug: 'enterprise',
    navGroup: 'Enterprise',
    url: '/services/enterprise-resource-planning',
    intro: 'Unified systems for planning, monitoring, and decision-making across core business operations.',
    body: 'Comprehensive software to integrate and manage business processes, functions, and resources in one unified system, giving a centralised, real-time view of core operations for planning and decision-making.',
    keywords: ['ERP', 'enterprise resource planning', 'integration', 'business processes', 'planning'],
  },
  {
    slug: 'hr-payroll',
    title: 'HR & Payroll Systems',
    category: 'Enterprise Systems', categorySlug: 'enterprise',
    navGroup: 'Enterprise',
    url: '/services/hr-payroll',
    intro: 'Applicant tracking, salary administration, benefits, performance, training, and HR management in one system.',
    body: 'Applicant tracking and interview scheduling, salary administration, benefits and deductions, job history, performance appraisals, training records, and disciplinary record-keeping in one system.',
    keywords: ['HR', 'payroll', 'applicant tracking', 'salary', 'attendance', 'performance'],
  },
  {
    slug: 'utility-billing',
    title: 'Utility & Billing Systems',
    category: 'Utility & Billing', categorySlug: 'utility',
    navGroup: 'Utility & Billing',
    url: '/services/utility-billing',
    intro: 'Complete control over meter readings, adjustments, tariff billing, receipts, connections, and disconnections.',
    body: 'Complete control over meter readings and adjustments, complex tariff billing, receipting, connections, and disconnections — built for municipal and utility-scale operations.',
    keywords: ['utility', 'billing', 'meter', 'tariff', 'municipal', 'revenue'],
  },
  {
    slug: 'project-change-management',
    title: 'Project & Change Management',
    category: 'Consulting', categorySlug: 'consulting',
    navGroup: 'Consulting',
    url: '/services/project-change-management',
    intro: 'Structured project management run alongside change management, so system adoption is planned from the start.',
    body: 'Structured project management run alongside change management, so system adoption is planned for from the start rather than left to chance after go-live.',
    keywords: ['project management', 'change management', 'delivery', 'go-live'],
  },
  {
    slug: 'business-process-reengineering',
    title: 'Business Process Re-Engineering',
    category: 'Consulting', categorySlug: 'consulting',
    navGroup: 'Consulting',
    url: '/services/business-process-reengineering',
    intro: 'A review of existing workflows to identify where a new system should change how work is actually done.',
    body: 'A review of existing operational workflows to identify where a new system should change how work is actually done, not just digitise the current process.',
    keywords: ['business process', 're-engineering', 'workflow', 'operations'],
  },
  {
    slug: 'business-technology-consulting',
    title: 'Business & Technology Consulting',
    category: 'Consulting', categorySlug: 'consulting',
    navGroup: 'Consulting',
    url: '/services/business-technology-consulting',
    intro: 'Project management, change management, business process re-engineering, and ICT & security audit.',
    body: 'Project management, change management, business process re-engineering, and ICT & security audit, delivered end-to-end as part of every engagement.',
    keywords: ['consulting', 'technology consulting', 'advisory', 'change'],
  },
  {
    slug: 'knowledge-transfer',
    title: 'Knowledge Transfer',
    category: 'Consulting', categorySlug: 'consulting',
    navGroup: 'Consulting',
    url: '/services/knowledge-transfer',
    intro: 'Structured handover and training built into every engagement, so your team can operate the system independently.',
    body: 'Structured handover and training built into every engagement, so your team can operate and extend the system independently once it has been deployed.',
    keywords: ['training', 'knowledge transfer', 'handover', 'enablement'],
  },
]

// Verified hardware supply lines + the partner brands they name.
export const hardware = {
  intro: 'Enterprise hardware procured from our technology partners and delivered to your site.',
  categories: [
    {
      slug: 'servers', title: 'Servers',
      brands: ['HP', 'Oracle', 'Dell'],
      note: 'Server hardware sourced from HP, Oracle, and Dell, specified against the workload the system is actually being deployed for.',
    },
    {
      slug: 'laptops-desktops', title: 'Laptops & Desktops',
      brands: ['HP', 'Lenovo', 'Dell', 'Asus'],
      note: 'End-user computing hardware from HP, Lenovo, Dell, and Asus, procured and delivered to site alongside your software rollout.',
    },
    {
      slug: 'printers-scanners', title: 'Printers & Scanners',
      brands: ['HP', 'Canon'],
      note: 'Print and scan hardware specified for the volume and document type your operation actually runs, from single-office to multi-site deployments.',
    },
  ],
  brandList: ['HP', 'Oracle', 'Dell', 'Lenovo', 'Asus'],
}

// Verified solutions — cross-cutting groupings of the service areas above.
// Each solution is a problem-lens over already-verified services (it references
// them by slug), NOT invented capabilities. An empty/derived capability name is avoided.
export const solutions = [
  {
    slug: 'enterprise-systems',
    title: 'Enterprise Systems',
    lens: 'By Capability',
    intro: 'One integrated record across planning, HR, and finance for a whole operation.',
    body: 'ERP, HR & payroll, and utility billing drawn together so every function works from the same operating record. Referenced service areas below describe each piece in detail.',
    services: ['enterprise-resource-planning', 'hr-payroll', 'utility-billing'],
  },
  {
    slug: 'security-access',
    title: 'Security & Access',
    lens: 'By Capability',
    intro: 'Protecting people, sites, and national borders with integrated identity and access technology.',
    body: 'Access control, biometric identity, border management, security management, and the audits that baseline them — the full security stack the official record describes.',
    services: ['access-control-biometrics', 'border-control-management', 'security-management', 'ict-security-audit'],
  },
  {
    slug: 'border-control',
    title: 'Border Control',
    lens: 'By Capability',
    intro: 'Immigration and border management deployed across national border posts.',
    body: 'The border control management system the official record states is implemented in more than ten countries, shown as a dedicated solution.',
    services: ['border-control-management'],
  },
  {
    slug: 'financial-systems',
    title: 'Financial Systems',
    lens: 'By Function',
    intro: 'Billing, receipting, and financial management built for revenue-critical operations.',
    body: 'Utility tariff billing, receipting, and the financial modules inside an ERP deployment — the revenue-focused face of Syntex’s enterprise work.',
    services: ['utility-billing', 'enterprise-resource-planning'],
  },
  {
    slug: 'human-resources',
    title: 'Human Resources',
    lens: 'By Function',
    intro: 'The full HR and payroll lifecycle, from applicant tracking to pay administration.',
    body: 'Applicant tracking and interview scheduling, salary administration, benefits, performance, training, and disciplinary records in one system.',
    services: ['hr-payroll'],
  },
  {
    slug: 'utility-management',
    title: 'Utility Management',
    lens: 'By Function',
    intro: 'Metering, tariffs, and connections for municipal and utility-scale operations.',
    body: 'Complete control over meter readings and adjustments, complex tariff billing, receipting, connections, and disconnections.',
    services: ['utility-billing'],
  },
]

// Verified technology / capability partners (from .cap-item across all pages).
export const partners = [
  'VMware', 'Cisco', 'Dell', 'HP', 'HPE', 'Microsoft',
  'Oracle Partner', 'Oracle Advanced', 'Sophos', 'VEEAM', 'ManageEngine', 'Amplify',
]

// Verified project categories — each is a solution category with honest metadata.
// NO named clients, NO invented statistics. Locations are as-published (ver/region).
export const projects = [
  {
    slug: 'border-control-management',
    title: 'Border Control Management',
    category: 'Security',
    status: 'Deployed 10+ Countries',
    verified: true, // client count is published ("10+"), identity of clients is not
    meta: ['Cross-border deployments', 'Government'],
    overview: 'Immigration and border management technology deployed across national border posts.',
    services: [1, 3], // border-control-management, ict-security-audit
    industry: 'government',
  },
  {
    slug: 'access-control-biometric-rollout',
    title: 'Access Control & Biometric Rollout',
    category: 'Security',
    status: 'In Production',
    verified: false,
    meta: ['Windhoek, Khomas', 'Enterprise Client'],
    overview: 'Access control and biometric system rolled out across a site or a portfolio of buildings.',
    services: [0], // access-control-biometrics (unchanged)
    industry: 'enterprise',
  },
  {
    slug: 'municipal-utility-billing',
    title: 'Municipal Utility & Billing System',
    category: 'Utility',
    status: 'In Production',
    verified: false,
    meta: ['Namibia-wide', 'Municipal Client'],
    overview: 'Utility metering, tariff billing, receipting, connections, and disconnections for a municipal-scale operation.',
    services: [6], // utility-billing
    industry: 'utilities',
  },
  {
    slug: 'erp-implementation-integration',
    title: 'ERP Implementation & Integration',
    category: 'Enterprise Systems',
    status: 'Completed',
    verified: false,
    meta: ['Windhoek, Khomas', 'Mid-Market Client'],
    overview: 'Enterprise resource planning implementation and integration into an existing operating environment.',
    services: [4, 7, 8, 10], // erp, project-change, process-reengineering, knowledge-transfer
    industry: 'enterprise',
  },
  {
    slug: 'hr-payroll-rollout',
    title: 'HR & Payroll System Rollout',
    category: 'Enterprise Systems',
    status: 'In Production',
    verified: false,
    meta: ['Windhoek, Khomas', 'Enterprise Client'],
    overview: 'Human resources and payroll system rollout covering applicant tracking through pay administration.',
    services: [5, 10], // hr-payroll, knowledge-transfer
    industry: 'enterprise',
  },
  {
    slug: 'ict-security-audit-engagement',
    title: 'ICT & Security Audit Engagement',
    category: 'Consulting',
    status: 'Completed',
    verified: false,
    meta: ['Windhoek, Khomas', 'Enterprise Client'],
    overview: 'An ICT and security audit establishing the baseline for subsequent security and enterprise deployments.',
    services: [3, 7], // ict-audit, project-change
    industry: 'enterprise',
  },
]

// Verified industry/sector list.
export const industries = [
  {
    slug: 'government',
    title: 'Government & Border Control',
    short: 'Government',
    intro: 'Security, border control, and enterprise systems for public-sector operations.',
    note: 'Serves national border control (10+ countries) and government departments.',
  },
  {
    slug: 'utilities',
    title: 'Municipalities & Utilities',
    short: 'Utilities',
    intro: 'Metering, tariff billing, and revenue-management systems for municipal-scale operations.',
    note: 'Utility & billing systems delivered Namibia-wide.',
  },
  {
    slug: 'financial-services',
    title: 'Financial Services',
    short: 'Financial Services',
    intro: 'Enterprise systems and financial management infrastructure.',
    note: 'Listed among the sectors Syntex serves; financial management systems.',
  },
  {
    slug: 'enterprise',
    title: 'Enterprise & Mid-Market',
    short: 'Enterprise',
    intro: 'ERP, HR & payroll, and integrated business processes for mid-market and enterprise clients.',
    note: 'Core focus for ERP and HR & payroll delivery.',
  },
]

// Verified delivery process.
export const process = [
  { n: '01', title: 'Discovery & Audit', text: 'ICT and security audit, business process review, and requirements gathering before any solution is proposed.' },
  { n: '02', title: 'Solution Design', text: 'Systems architecture planning tailored to your industry, scale, and existing infrastructure.' },
  { n: '03', title: 'Build & Integration', text: 'Development, configuration, and integration of ERP, HR, billing, or security systems into your operating environment.' },
  { n: '04', title: 'Hardware & Deployment', text: 'Hardware supply, delivery, and on-site deployment coordinated alongside the software rollout.' },
  { n: '05', title: 'Change Management', text: 'Ongoing support, training, and knowledge transfer to help your organisation adopt the new system fully.' },
]

// Verified vision + operating principles.
export const vision = {
  text: 'To be a trusted provider of technology solutions across Southern Africa, measured by the standard of our innovation, our accountability, and our consistency.',
  values: [
    { n: '01', title: 'Innovation', text: 'Solutions are matched to the client’s actual constraints and infrastructure, not a fixed product template.' },
    { n: '02', title: 'Accountability', text: 'The team that scopes an engagement stays accountable through delivery, with project and change management structured in from day one.' },
    { n: '03', title: 'Consistency', text: 'The same process discipline applies whether the engagement is a single hardware order or a multi-year systems rollout.' },
  ],
}

export const contact = identity // contact hub uses identity