export const nav = [
  { href: "/", label: "Home" },
  {
    href: "/about",
    label: "About",
    children: [
      { href: "/about", label: "About LPSA" },
      { href: "/about/vision-mission", label: "Vision and Mission" },
      { href: "/about/directors", label: "Directors" },
      {
        href: "/files/lifeguard-manual.pdf",
        label: "Code of Conduct",
      },
      {
        href: "/files/constitution-sa.pdf",
        label: "Constitution",
      },
      { href: "/about/saqa-recognition", label: "SAQA Recognition" },
      { href: "/about/popia", label: "Protection of Personal Information" },
    ],
  },
  {
    href: "/designations",
    label: "Designations",
    children: [
      {
        href: "/designations",
        label: "Professional Designations",
      },
      { href: "/designations/masterclasses", label: "Masterclass 2026" },
    ],
  },
  {
    href: "/awards",
    label: "Awards",
    children: [{ href: "/awards/2026", label: "Awards 2026" }],
  },
  {
    href: "/membership/types",
    label: "Membership",
    children: [
      { href: "/files/ReadMe.pdf", label: "Who are Our Members" },
      { href: "/membership/types", label: "Types of Membership" },
      { href: "/membership/portal", label: "Member Online Learning Portal" },
      {
        href: "/membership/critical-skill-letter",
        label: "Critical Skill Letter",
      },
    ],
  },
  {
    href: "/resources/endorsed",
    label: "Resources",
    children: [
      { href: "/resources/endorsed", label: "Endorsed training programmes" },
      {
        href: "/resources/future-proof",
        label: "Future Proof your Career 2026",
      },
      { href: "/resources/global-skills", label: "Global Skills Matrix" },
      {
        href: "/resources/portal-instructions",
        label: "LPSA Online Portal Instructions",
      },
      {
        href: "/resources/recertification-handbook",
        label: "Recertification Handbook",
      },
      { href: "/resources/webinar-replays", label: "Webinar Replays" },
    ],
  },
  { href: "/Member Voices", label: "Member Voices" },
  { href: "/contact", label: "Contact" },
];
export const footerGroups = [
  {
    title: "Professionals",
    links: [
      { href: "/membership", label: "Registration" },
      { href: "/cpd", label: "CPD Programme" },
      { href: "/accreditation", label: "Accreditation" },
    ],
  },
  {
    title: "Public & Employers",
    links: [
      { href: "/register", label: "Verify a Lifeguard" },
      { href: "/resources", label: "Resources" },
      { href: "/ethics", label: "Ethics & Discipline" },
    ],
  },
  {
    title: "Organisation",
    links: [
      { href: "/about", label: "About LPSA" },
      { href: "/resources", label: "Governance" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export const designations = [
  "TLG(SA)",
  "LG(POOL)(SA)",
  "LG(SURF)(SA)",
  "SLG(SA)",
  "LSM(SA)",
  "LGI(SA)",
  "LGA(SA)",
  "FLCSA",
];

export const stakeholders = [
  [
    "SAQA",
    "NQF Act 67 of 2008; professional body recognition and designations.",
  ],
  [
    "CATHSSETA / QCTO",
    "Skills development, occupational qualifications and training pathways.",
  ],
  [
    "DSAC & SASCOC",
    "Sport recognition, lifesaving as a sport code and coaching standards.",
  ],
  [
    "Department of Health / HPCSA",
    "First aid scope, emergency care interface and medical fitness referral.",
  ],
  [
    "SAPS / NSRI / NDMC",
    "Incident reporting, rescue coordination and disaster risk.",
  ],
  [
    "Municipalities",
    "Beach and pool bylaws, public amenity safety and lifeguard employment.",
  ],
] as const;

export const quickLinks: [string, string?, string?][] = [
  ["Verify a lifeguard", "→", "/register"],
  ["Apply for registration", "→", "/membership"],
  ["Documents & policies", "→", "/resources"],
  ["Ethics & discipline", "→", "/ethics"],
];
