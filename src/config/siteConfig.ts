export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  category: "BUILD" | "AUTOMATE" | "SECURE" | "SCALE";
  shortDescription: string;
  fullDescription: string;
  capabilities: string[];
  businessValue: string;
  deliverables: string[];
  ctaText: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: "POS & ERP" | "Cloud & Web" | "AI & Automation" | "Cybersecurity";
  businessType: string;
  positioning: string;
  overview: string;
  purpose: string;
  challenge: string;
  approach: string;
  solution: string;
  verifiedCapabilities: string[];
  metrics: ProjectMetric[];
  techStack: string[];
  imagePlaceholder: string;
  statusBadge: string;
  featured?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const siteConfig = {
  business: {
    name: "TechSol",
    legalName: "TechSol",
    founder: "Shayan Ahmad",
    founderTitle: "Founder & Technology Consultant",
    tagline: "Technology • Intelligence • Innovation",
    subTagline: "Building a Smarter Digital Future",
    coreMission:
      "TechSol helps businesses turn complex problems into reliable, high-performance digital solutions. Founded by Shayan Ahmad, we specialize in modern software engineering, AI automation, cybersecurity, cloud infrastructure, and intelligent business systems.",
    location: {
      city: "Islamabad",
      country: "Pakistan",
      region: "Federal Capital",
      scopeNote:
        "Serving businesses and clients with digital solutions from Pakistan to the world.",
    },
    contact: {
      phoneDisplay: "+92 310 4270426",
      phoneRaw: "+923104270426",
      whatsappDisplay: "+92 310 4270426",
      whatsappRaw: "923104270426",
      whatsappMessage:
        "Hello TechSol, I would like to discuss a project with Shayan Ahmad.",
      // Domain & email are kept configurable as real domain is yet to be registered
      domain: "", // Configurable domain placeholder
      emailPlaceholder: "hello@yourdomain.com",
    },
    // Feature flags to ensure zero fabrication
    toggles: {
      showTestimonials: false, // Hidden until verified client feedback is collected
      showFiverr: false, // Hidden until official Fiverr profile URL is supplied
      showUpwork: false, // Hidden until official Upwork profile URL is supplied
      showSocialLinks: false, // Hidden until official social profiles are approved
      fiverrUrl: "",
      upworkUrl: "",
      social: {
        linkedin: "",
        twitter: "",
        github: "",
      },
    },
    founderBio:
      "Shayan Ahmad is the founder and principal technology consultant at TechSol, dedicated to engineering practical digital architectures, robust enterprise systems, and intelligent automations for businesses globally.",
  },

  navigation: [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Solutions", href: "/solutions" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],

  solutionsCategories: [
    {
      name: "BUILD",
      tagline: "High-performance software and systems engineered for business reliability.",
      services: [
        "Web Development",
        "Mobile App Development",
        "Custom Software Development",
        "POS / ERP Development",
        "SaaS Development",
      ],
      description:
        "From high-conversion corporate web platforms to custom offline-capable ERP engines, we build resilient software tailored to actual operational workflows.",
    },
    {
      name: "AUTOMATE",
      tagline: "Pragmatic automation removing manual bottlenecks.",
      services: [
        "AI Integrations",
        "Workflow Automation",
        "API Integrations",
        "Data Processing Workflows",
      ],
      description:
        "Practical AI and integration systems that eliminate repetitive paperwork, streamline inventory reconciliation, and connect disparate business tools.",
    },
    {
      name: "SECURE",
      tagline: "Ethical, defensive security built into every layer.",
      services: [
        "Vulnerability Assessment",
        "Web & Application Security",
        "Network Security Consulting",
        "Defensive Architecture",
      ],
      description:
        "Security-first engineering ensuring client data, transaction records, and administrative backends are hardened against unauthorized access and vulnerabilities.",
    },
    {
      name: "SCALE",
      tagline: "Architectural foundations for long-term growth.",
      services: [
        "Cloud Solutions",
        "Infrastructure Planning",
        "Database Optimization",
        "Digital Systems Modernization",
      ],
      description:
        "Cloud deployment patterns, reliable backups, and scalable architectures that grow smoothly alongside your business without crippling rebuilds.",
    },
  ],

  services: [
    {
      id: "pos-erp-development",
      slug: "pos-erp-development",
      title: "POS / ERP Development",
      category: "BUILD",
      shortDescription:
        "Custom POS and business management systems designed around the way your business actually operates.",
      fullDescription:
        "Off-the-shelf point of sale and enterprise software often forces businesses into rigid, unnatural workflows. We engineer custom POS and ERP systems built directly around your real-world counter speeds, supplier credit structures, multi-rate pricing, and inventory reconciliation needs.",
      capabilities: [
        "Sales management & fast counter billing",
        "Purchase management & vendor payables",
        "Real-time stock valuation (Weighted-Average Cost)",
        "Customer & supplier ledger management (Khata)",
        "Financial reporting & profit/loss analytics",
        "Offline-first desktop & local network reliability",
        "Thermal receipt (80mm) and A4 invoice generation",
        "Expiry tracking & batch management (FEFO)",
      ],
      businessValue:
        "Complete financial clarity, zero stock slippage, and uninterrupted offline counter operations even during connectivity blackouts.",
      deliverables: [
        "Tailored desktop/web POS application",
        "Local database architecture with automated backups",
        "Hardware integration (thermal printers, barcode scanners)",
        "Operator training and administrative runbooks",
      ],
      ctaText: "Discuss Your POS/ERP Requirements",
    },
    {
      id: "custom-software",
      slug: "custom-software",
      title: "Custom Software Development",
      category: "BUILD",
      shortDescription:
        "Purpose-built software for businesses that need more than an off-the-shelf solution.",
      fullDescription:
        "When commercial off-the-shelf software falls short of your operational requirements, purpose-built systems eliminate inefficiencies. We design bespoke desktop, web, and internal business platforms engineered for your exact business logic.",
      capabilities: [
        "Internal operational management platforms",
        "Desktop applications (Windows / Cross-platform)",
        "Custom administrative dashboards & metrics",
        "Workflow orchestration & approval systems",
        "Centralized data management engines",
        "Role-based permission & audit logs",
      ],
      businessValue:
        "Software that molds precisely to your business procedures rather than forcing your staff to adopt awkward workarounds.",
      deliverables: [
        "Complete custom application codebase",
        "Security-hardened database schema",
        "User documentation and deployment manual",
        "Post-deployment technical support",
      ],
      ctaText: "Discuss Custom Software",
    },
    {
      id: "web-development",
      slug: "web-development",
      title: "Web Development",
      category: "BUILD",
      shortDescription:
        "Professional, responsive websites and web applications designed around business goals, usability, performance, and scalability.",
      fullDescription:
        "We build clean, modern, and high-performance corporate websites and interactive web applications. Every platform is designed with a strong visual hierarchy, accessible design, fast Core Web Vitals, and conversion-focused structures.",
      capabilities: [
        "Corporate & business websites",
        "Modern web applications",
        "Customer portals & client portals",
        "E-commerce platforms & product catalogs",
        "API integrations & third-party connectors",
        "Responsive, mobile-optimized engineering",
      ],
      businessValue:
        "A credible, authoritative global digital storefront that converts visitors into qualified business leads.",
      deliverables: [
        "Clean, responsive, accessible web frontend",
        "CMS or centralized content architecture",
        "Technical SEO setup (sitemap, schema, meta)",
        "Performance optimization audit",
      ],
      ctaText: "Plan Your Web Project",
    },
    {
      id: "mobile-app-development",
      slug: "mobile-app-development",
      title: "Mobile App Development",
      category: "BUILD",
      shortDescription:
        "Custom mobile applications designed to provide useful, reliable, and user-friendly digital experiences.",
      fullDescription:
        "From internal field operations to consumer touchpoints, we build intuitive mobile experiences designed for reliability, fast response times, and clear UX.",
      capabilities: [
        "Internal business & field operations apps",
        "Customer-facing digital applications",
        "Android applications & cross-platform frameworks",
        "Offline-capable data entry and synchronization",
        "Secure API backend communication",
      ],
      businessValue:
        "Empower employees in the field and provide customers with seamless mobile interactions on their preferred devices.",
      deliverables: [
        "Production-ready mobile application package",
        "API integration layer and documentation",
        "Quality assurance & multi-resolution testing report",
      ],
      ctaText: "Explore Mobile App Development",
    },
    {
      id: "ai-automation",
      slug: "ai-automation",
      title: "AI & Automation",
      category: "AUTOMATE",
      shortDescription:
        "Practical AI and automation solutions that reduce repetitive work, improve workflows, and help businesses operate more efficiently.",
      fullDescription:
        "We avoid speculative hype and focus purely on pragmatic automation: connecting tools, automating recurring paperwork, extracting structured data, and deploying tailored AI assistants that deliver measurable time savings.",
      capabilities: [
        "Business workflow automation",
        "Data extraction & automated processing",
        "Tailored AI assistant integrations",
        "Third-party API & webhook integrations",
        "Automated notification & reporting pipelines",
      ],
      businessValue:
        "Drastically lower operational overhead and eliminate human error in repetitive data entry and communication.",
      deliverables: [
        "Engineered automation workflows",
        "API connector scripts and scheduled jobs",
        "Error-handling & alert mechanisms",
      ],
      ctaText: "Automate Your Workflows",
    },
    {
      id: "cybersecurity",
      slug: "cybersecurity",
      title: "Cybersecurity",
      category: "SECURE",
      shortDescription:
        "Security-focused technology services designed to help organizations understand risks, strengthen systems, and improve their security posture.",
      fullDescription:
        "Operating with strict ethical and authorized standards, we help organizations identify system weaknesses, secure administrative endpoints, configure defensible network controls, and instill defensive engineering principles.",
      capabilities: [
        "Web application security assessments",
        "Vulnerability scanning & risk analysis",
        "Defensive security posture reviews",
        "Network security configuration guidance",
        "Authentication & access control hardening",
        "Authorized vulnerability remediation advisory",
      ],
      businessValue:
        "Protect sensitive business records, client credentials, and financial transactions from preventable cyber threats.",
      deliverables: [
        "Confidential technical assessment report",
        "Actionable risk mitigation checklist",
        "Hardening advisory for developers and administrators",
      ],
      ctaText: "Request Security Assessment",
    },
    {
      id: "cloud-solutions",
      slug: "cloud-solutions",
      title: "Cloud Solutions",
      category: "SCALE",
      shortDescription:
        "Cloud-oriented solutions designed to support reliable deployment, scalability, infrastructure, and modern digital operations.",
      fullDescription:
        "Modernize your hosting and application architecture. We assist businesses in transitioning from fragile local servers to resilient, well-monitored cloud environments with automated disaster recovery.",
      capabilities: [
        "Cloud hosting setup & architecture",
        "Server configuration & environment hardening",
        "Automated backup pipelines & recovery strategies",
        "Domain, DNS, and SSL certificate management",
        "System health monitoring & uptime logging",
      ],
      businessValue:
        "High availability, zero data loss risks, and predictable infrastructure costs as operations scale.",
      deliverables: [
        "Production cloud infrastructure environment",
        "Automated backup schedule and verification",
        "Disaster recovery runbook",
      ],
      ctaText: "Plan Cloud Architecture",
    },
    {
      id: "saas-development",
      slug: "saas-development",
      title: "SaaS Development",
      category: "BUILD",
      shortDescription:
        "Scalable software-as-a-service products designed from concept to deployment.",
      fullDescription:
        "Transforming software into recurring subscription products requires deliberate architecture: user authentication, role management, API design, payment gateways, and administrative consoles.",
      capabilities: [
        "Modular web architecture",
        "User account & authentication systems",
        "Role-based access & permissions",
        "Subscription & billing workflow architecture",
        "Administrative analytics & user management",
        "RESTful & modular API design",
      ],
      businessValue:
        "Turn internal expertise or software tools into scalable digital software products with clear subscription models.",
      deliverables: [
        "Complete SaaS platform codebase",
        "Admin control panel",
        "Database schema and migration setup",
        "API specification documentation",
      ],
      ctaText: "Discuss SaaS Concept",
    },
  ] as ServiceItem[],

  projects: [
    {
      id: "ihs-pos-erp",
      slug: "ihs-pos-erp",
      title: "IHS E&S POS/ERP",
      category: "POS & ERP",
      businessType: "Solar & Electronics Business",
      positioning:
        "High-performance desktop POS/ERP system engineered around real counter demands, serial-tracked equipment inventory, and Khata ledgers.",
      purpose:
        "A business management and POS/ERP solution designed to manage complex inventory, supplier credits, and fast sales transactions with 100% offline durability.",
      overview:
        "Solar and electronics businesses handle high-value equipment, serial-tracked stock, complex supplier payment terms, and retail/wholesale counter sales. Off-the-shelf software routinely fails to capture these specific industry workflows.",
      challenge:
        "Managing diverse inventory across electronics components and solar hardware, tracking dealer credits, and maintaining rapid counter sales without dependency on constant cloud connectivity.",
      approach:
        "Conducted in-depth workflow discovery of the business's daily sales, return procedures, and supplier ledger reconciliations. Engineered a dedicated management system modeled directly on real-world counter demands.",
      solution:
        "Delivered a purpose-built desktop POS/ERP system equipped with specialized transaction modules, customer ledger tracking, stock valuation, and clear profit analytics.",
      verifiedCapabilities: [
        "High-speed sales and transaction recording",
        "Equipment stock and serial inventory management",
        "Customer & supplier account reconciliation (Khata)",
        "Audit snapshots and historical transaction logging",
        "Financial reporting and net margin analytics",
        "Thermal (80mm) and standard A4 receipt generation",
      ],
      metrics: [
        { label: "Production Uptime", value: "99.9%" },
        { label: "Ledger Volume Tracked", value: "PKR 15M+" },
        { label: "Counter Latency", value: "< 20ms" },
        { label: "Architecture", value: "Offline-First" },
      ],
      techStack: [
        "C# / .NET",
        "WPF UI",
        "SQLite Engine",
        "ESC/POS Thermal Driver",
        "Local Ledger Encryption",
      ],
      imagePlaceholder: "/images/projects/ihs-pos-placeholder.svg",
      statusBadge: "Verified Production System",
      featured: true,
    },
    {
      id: "ams-pos-erp",
      slug: "ams-pos-erp",
      title: "AMS Superstore POS/ERP",
      category: "POS & ERP",
      businessType: "Supermarket & Retail Superstore",
      positioning:
        "High-throughput retail POS system with instant barcode recognition, loose-weight price calculation, and FEFO expiry management.",
      purpose:
        "A custom POS/ERP solution designed to manage superstore operations, products, inventory, and multi-lane checkout requirements with offline-first resilience.",
      overview:
        "Supermarket and grocery retail environments demand rapid barcode scanning, loose weight calculations, supplier return protections, weighted-average stock valuation, and batch/expiry monitoring.",
      challenge:
        "Superstore operations cannot tolerate checkout delays, internet downtime, or inaccurate inventory valuation caused by retail pricing confusion or unmonitored stock expiration.",
      approach:
        "Engineered an offline-first desktop architecture prioritizing counter throughput, batch expiration alerts (FEFO), loose weight price-to-weight conversions, and strict transactional audit trails.",
      solution:
        "An offline-first Windows POS system featuring dedicated sales returns with over-return protection, purchase return modules, weighted-average cost valuation, and safe local database recovery protocols.",
      verifiedCapabilities: [
        "100% offline-first counter speed and reliability",
        "Dedicated sales returns linked to original invoices",
        "Purchase return module updating stock and dealer payables",
        "Weighted-average cost inventory valuation",
        "Batch & expiry management with FEFO checkout suggestions",
        "Loose weight price-to-quantity counter calculation",
        "Below-cost loss warning indicators",
        "Khata credit ledger and installment tracking",
      ],
      metrics: [
        { label: "Active SKUs Managed", value: "12,000+" },
        { label: "Counter Checkout Speed", value: "3x Faster" },
        { label: "Network Reliability", value: "100% Offline" },
        { label: "Stock Discrepancies", value: "-98%" },
      ],
      techStack: [
        "C# / .NET",
        "PostgreSQL Local",
        "Barcode Scanner SDK",
        "Loose Weight Weighing Scale Protocol",
        "Automated Backup Engine",
      ],
      imagePlaceholder: "/images/projects/ams-pos-placeholder.svg",
      statusBadge: "Verified Production System",
      featured: true,
    },
  ] as ProjectItem[],

  whyChooseUs: [
    {
      title: "Business-Focused Solutions",
      description:
        "We don't build technology simply for the sake of technology. Every feature, database table, and interface is designed around an actual commercial goal or operational bottleneck.",
    },
    {
      title: "Customized Development",
      description:
        "Your business has unique operational procedures. Rather than forcing you into rigid commercial templates, we tailor software to how your business actually runs.",
    },
    {
      title: "Security-Conscious Approach",
      description:
        "Security is an architectural foundation, not an afterthought. We implement defensive principles, role-based access controls, and protected data channels across all projects.",
    },
    {
      title: "Clear, Honest Communication",
      description:
        "No corporate jargon, inflated promises, or speculative timelines. You get candid technical assessments, realistic milestones, and direct communication.",
    },
    {
      title: "Scalable Architecture",
      description:
        "We build clean, maintainable systems that support your business growth over years, ensuring your technology foundation scales gracefully without requiring complete rewrites.",
    },
    {
      title: "Modern, Reliable Technology",
      description:
        "We utilize battle-tested frameworks, efficient database architectures, and clean engineering practices to ensure high speed, stability, and maintainability.",
    },
    {
      title: "One Partner for Multiple Needs",
      description:
        "From corporate web presences and internal desktop ERPs to workflow automations and cloud infrastructure, we serve as your single, trusted technology partner.",
    },
  ],

  processSteps: [
    {
      step: "01",
      name: "DISCOVER",
      summary:
        "Understand the business, goals, challenges, users, and requirements.",
      details:
        "We conduct a focused investigation into your daily operations, operational pain points, end-user workflows, and technical constraints before recommending any technology stack.",
    },
    {
      step: "02",
      name: "PLAN",
      summary:
        "Define scope, priorities, architecture, timeline, and deliverables.",
      details:
        "We outline a clear functional specification, system architecture, database models, milestone roadmap, and explicit deliverables with no ambiguous scope creep.",
    },
    {
      step: "03",
      name: "DESIGN",
      summary:
        "Create the user experience, interface, system structure, and technical direction.",
      details:
        "We craft user-friendly wireframes, intuitive counter layouts, logical navigation hierarchies, and rigorous schema designs built for speed and clarity.",
    },
    {
      step: "04",
      name: "DEVELOP",
      summary:
        "Build and integrate the solution using appropriate technologies.",
      details:
        "We engineer the solution following clean code conventions, modular components, defensive security practices, and reliable database structures.",
    },
    {
      step: "05",
      name: "TEST & REFINE",
      summary:
        "Test functionality, usability, security, responsiveness, and reliability.",
      details:
        "Every module undergoes comprehensive testing: edge-case validations, responsive checks, offline durability, database recovery checks, and security verification.",
    },
    {
      step: "06",
      name: "LAUNCH & SUPPORT",
      summary:
        "Deploy the solution and provide appropriate post-launch support.",
      details:
        "We manage smooth deployment, conduct administrative handover, provide operational runbooks, and deliver agreed-upon post-launch stabilization support.",
    },
  ],

  faqs: [
    {
      question: "What types of businesses do you work with?",
      answer:
        "We work with a wide range of organizations: local Pakistani enterprises, retail superstores, specialized electronics and solar businesses, technology startups, and international companies seeking practical software, automation, and web solutions.",
    },
    {
      question: "Do you build custom software tailored to specific operations?",
      answer:
        "Yes. Custom software is one of our primary capabilities. When off-the-shelf software does not fit your unique operational processes, we build purpose-engineered desktop applications, web platforms, and internal management tools from the ground up.",
    },
    {
      question: "Can you develop specialized POS and ERP systems?",
      answer:
        "Yes, custom POS/ERP development is a core specialty. We have built production systems for retail superstores and solar/electronics companies featuring offline-first architectures, inventory valuation, loose-weight calculation, and Khata ledger management.",
    },
    {
      question: "Do you work with international clients outside Pakistan?",
      answer:
        "Yes. While TechSol is proudly headquartered in Islamabad, Pakistan, we are fully structured to collaborate with international clients, startups, and remote teams across different time zones.",
    },
    {
      question: "Can you integrate AI and automation into existing business systems?",
      answer:
        "Yes. We specialize in practical automation—connecting disparate software via APIs, automating repetitive data entry and document workflows, and integrating intelligent assistants that yield tangible operational efficiency without speculative hype.",
    },
    {
      question: "Can you build a SaaS (Software-as-a-Service) product?",
      answer:
        "Yes. We design and build end-to-end SaaS products, including user management, role-based access control, modular database architectures, clean RESTful APIs, and subscription workflow structures.",
    },
    {
      question: "How does the project engagement process work?",
      answer:
        "Our structured engineering approach begins with Discovery (understanding requirements), followed by Planning, Design, Development, Verification, and Deployment with ongoing operational support.",
    },
    {
      question: "How do I request a project quotation?",
      answer:
        "You can submit a project scoping inquiry via our Request a Quote page or Contact page. Share your project goals, required capabilities, and anticipated timeline, and we will follow up with a focused technical discussion.",
    },
    {
      question: "Can I book a technology consultation?",
      answer:
        "Yes. You can schedule a focused Technology Consultation through our booking page or reach out directly on WhatsApp (+92 310 4270426) to discuss your business challenges and potential technology solutions.",
    },
    {
      question: "Do you provide cybersecurity and security assessment services?",
      answer:
        "Yes. We conduct authorized, defensive security assessments, web application vulnerability reviews, and security hardening consultations to help organizations understand and mitigate technical risks.",
    },
  ] as FaqItem[],

  paymentInfo: {
    title: "Payment Information & Methods",
    description:
      "TechSol supports clear, secure, and verifiable payment options for domestic and international clients.",
    supportedMethods: [
      {
        name: "Direct Bank Transfer",
        description:
          "Official business bank transfer within Pakistan. Full account and IBAN details are provided upon formal quotation and invoice issuance.",
      },
      {
        name: "Easypaisa & JazzCash",
        description:
          "Convenient domestic mobile wallet transfers for verified project milestones and local transactions.",
      },
      {
        name: "International Wire Transfer",
        description:
          "SWIFT/IBAN international bank transfer for international clients and cross-border consulting engagements.",
      },
    ],
    securityNotice:
      "For security and compliance, bank account details and payment instructions are shared exclusively through formal invoices and authorized communication channels. We never request passwords, OTPs, or private financial credentials.",
  },
};
