// Mega-navigation information architecture.
// `type: 'link'` items are real pages. `type: 'group'` items
// are category headings that contain child links.
// `verified:false` marks pages whose full content is not yet
// in the public source material (honest placeholders).

export const nav = [
  {
    label: 'About',
    path: '/about',
    heading: 'About Syntex',
    description: 'A Namibian systems integrator, built since 2008.',
    groups: [
      { title: 'Company', items: [
        { label: 'About Syntex', path: '/about', verified: true },
        { label: 'Our Story', path: '/about/story', verified: true },
        { label: 'Vision & Mission', path: '/about/vision-mission', verified: true },
        { label: 'Core Values', path: '/about/values', verified: true },
      ]},
      { title: 'People', items: [
        { label: 'Leadership', path: '/about/leadership', verified: false },
        { label: 'Departments', path: '/about/departments', verified: false },
        { label: 'Our Team', path: '/about/team', verified: false },
        { label: 'Careers', path: '/about/careers', verified: false },
      ]},
    ],
  },
  {
    label: 'Services',
    path: '/services',
    heading: 'Solutions & Services',
    description: 'What Syntex does — technology solutions designed to transform complex business operations.',
    groups: [
      { title: 'Enterprise', items: [
        { label: 'Enterprise Resource Planning', path: '/services/enterprise-resource-planning', verified: true },
        { label: 'HR & Payroll', path: '/services/hr-payroll', verified: true },
        { label: 'Utility & Billing', path: '/services/utility-billing', verified: true },
      ]},
      { title: 'Security', items: [
        { label: 'Access Control & Biometrics', path: '/services/access-control-biometrics', verified: true },
        { label: 'Border Control Management', path: '/services/border-control-management', verified: true },
        { label: 'Security Management', path: '/services/security-management', verified: true },
      ]},
      { title: 'Consulting', items: [
        { label: 'Business & Technology Consulting', path: '/services/business-technology-consulting', verified: true },
        { label: 'Project & Change Management', path: '/services/project-change-management', verified: true },
        { label: 'ICT & Security Audit', path: '/services/ict-security-audit', verified: true },
      ]},
    ],
  },
  {
    label: 'Solutions',
    path: '/solutions',
    heading: 'Solutions',
    description: 'How Syntex solves particular business and technical problems.',
    groups: [
      { title: 'By Capability', items: [
        { label: 'Enterprise Systems', path: '/solutions/enterprise-systems', verified: true },
        { label: 'Security & Access', path: '/solutions/security-access', verified: true },
        { label: 'Border Control', path: '/solutions/border-control', verified: true },
      ]},
      { title: 'By Function', items: [
        { label: 'Financial Systems', path: '/solutions/financial-systems', verified: true },
        { label: 'Human Resources', path: '/solutions/human-resources', verified: true },
        { label: 'Utility Management', path: '/solutions/utility-management', verified: true },
      ]},
    ],
  },
  {
    label: 'Projects',
    path: '/projects',
    heading: 'Projects & Track Record',
    description: 'A selection of the solution categories our team has delivered.',
    groups: [
      { title: 'By Category', items: [
        { label: 'Featured Projects', path: '/projects', verified: true },
        { label: 'Security Projects', path: '/projects?cat=security', verified: true },
        { label: 'Enterprise Projects', path: '/projects?cat=enterprise', verified: true },
      ]},
      { title: 'By Sector', items: [
        { label: 'Government', path: '/projects?cat=government', verified: true },
        { label: 'Utility', path: '/projects?cat=utility', verified: true },
        { label: 'Consulting', path: '/projects?cat=consulting', verified: true },
      ]},
    ],
  },
  {
    label: 'Industries',
    path: '/industries',
    heading: 'Industries',
    description: 'The sectors and environments Syntex serves.',
    groups: [
      { title: 'Sectors', items: [
        { label: 'Government & Border Control', path: '/industries/government', verified: true },
        { label: 'Municipalities & Utilities', path: '/industries/utilities', verified: true },
        { label: 'Financial Services', path: '/industries/financial-services', verified: true },
        { label: 'Enterprise & Mid-Market', path: '/industries/enterprise', verified: true },
      ]},
      { title: 'Explore', items: [
        { label: 'Industries Overview', path: '/industries', verified: true },
        { label: 'Global Reach', path: '/global', verified: true },
      ]},
    ],
  },
  {
    label: 'Hardware',
    path: '/hardware',
    heading: 'Hardware Supply',
    description: 'Enterprise hardware, procured from our partners and delivered to your site.',
    groups: [
      { title: 'Product Lines', items: [
        { label: 'Servers', path: '/hardware#servers', verified: true },
        { label: 'Laptops & Desktops', path: '/hardware#laptops-desktops', verified: true },
        { label: 'Printers & Scanners', path: '/hardware#printers-scanners', verified: true },
      ]},
      { title: 'Brands', items: [
        { label: 'HP', path: '/hardware#brands', verified: true },
        { label: 'Dell', path: '/hardware#brands', verified: true },
        { label: 'Lenovo', path: '/hardware#brands', verified: true },
        { label: 'Oracle', path: '/hardware#brands', verified: true },
      ]},
    ],
  },
  {
    label: 'Insights',
    path: '/insights',
    heading: 'Insights',
    description: 'News, notes, and resources from Syntex.',
    groups: [
      { title: 'Library', items: [
        { label: 'News & Announcements', path: '/insights/news', verified: true },
        { label: 'Approach', path: '/insights/approach', verified: true },
        { label: 'Resources', path: '/insights/resources', verified: false },
        { label: 'Case Studies', path: '/insights/case-studies', verified: false },
      ]},
    ],
  },
  {
    label: 'Contact',
    path: '/contact',
    heading: 'Contact Syntex',
    description: 'Talk to the team that scopes, builds, and supports your systems.',
    groups: [
      { title: 'Get in Touch', items: [
        { label: 'Contact Us', path: '/contact', verified: true },
        { label: 'Request a Consultation', path: '/contact?intent=consultation', verified: true },
      ]},
      { title: 'Routes', items: [
        { label: 'Sales', path: '/contact?topic=sales', verified: true },
        { label: 'Support', path: '/contact?topic=support', verified: true },
        { label: 'Locations', path: '/contact#locations', verified: true },
      ]},
    ],
  },
]

// Flat searchable index of all nav destinations (powers Cmd/Ctrl+K command palette).
export const searchIndex = nav
  .flatMap((top) => top.groups.flatMap((g) => g.items))
  .map((it, i) => ({
    id: it.path + i,
    label: it.label,
    path: it.path,
    verified: it.verified !== false,
  }))