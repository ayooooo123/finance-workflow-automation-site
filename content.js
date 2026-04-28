window.siteContent = {
  firm: {
    name: "LedgerFlow Automation",
    eyebrow: "Finance workflow automation + AI",
    description: "A clean static website concept for a consulting firm that helps finance teams remove manual work without replacing their ERP."
  },
  nav: [
    ["Use Cases", "#use-cases"],
    ["How It Works", "#how-it-works"],
    ["Why Not ERP", "#erp"],
    ["About", "#about"],
    ["Contact", "#contact"]
  ],
  hero: {
    kicker: "Practical automation for finance teams",
    title: "Workflow automation without the ERP project.",
    body: "We help finance operators automate reporting, reconciliations, approvals, and month-end workflows using lightweight systems that fit around the tools they already use.",
    primaryCta: "Book a workflow review",
    secondaryCta: "See use cases"
  },
  stats: [
    ["3 weeks", "typical first implementation"],
    ["0 migrations", "works with existing systems"],
    ["Human-led", "approval points stay visible"]
  ],
  useCases: [
    {
      label: "Close operations",
      title: "Month-end packet assembly",
      body: "Pull source files, validate expected fields, flag missing items, draft commentary, and package the close binder for review."
    },
    {
      label: "Controls",
      title: "Approval routing + exception logs",
      body: "Turn spreadsheet-driven approvals into tracked workflows with audit trails, reminders, and exception summaries."
    },
    {
      label: "Reporting",
      title: "Board and lender reporting prep",
      body: "Generate recurring reporting packs from trusted source data, with variance notes and review checkpoints before anything leaves the team."
    },
    {
      label: "Reconciliation",
      title: "Cash, GL, and operational matching",
      body: "Compare exports across banks, ERPs, billing tools, and spreadsheets; surface mismatches instead of asking analysts to hunt manually."
    }
  ],
  timeline: [
    ["Week 1", "Map the workflow", "Document inputs, owners, approvals, exceptions, and where the current process loses time."],
    ["Week 2", "Build the working system", "Create automations, validation rules, AI-assisted drafting, and simple operator dashboards."],
    ["Week 3", "Pilot and hand over", "Run against real examples, adjust edge cases, train the team, and leave clear update documentation."]
  ],
  comparison: [
    ["Implementation", "Months or years", "First useful workflow in about three weeks"],
    ["System change", "Often requires migration or reconfiguration", "Works around existing ERP, email, spreadsheets, and BI"],
    ["Scope", "Broad platform replacement", "Focused on one painful finance workflow at a time"],
    ["Ownership", "Vendor/admin heavy", "Finance operators can understand and maintain the process"],
    ["AI role", "Often bundled into vague platform features", "Used narrowly for drafting, classification, checks, and summaries"]
  ],
  principles: [
    "No generic AI visuals or vague transformation copy.",
    "Content is separated in content.js so sections can be edited without touching layout code.",
    "Static HTML/CSS/JS: fast, secure, portable, and easy to host.",
    "Designed for clarity: explain the offer quickly, then give proof through structure."
  ]
};
