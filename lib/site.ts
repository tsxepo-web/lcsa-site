export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/register", label: "Professional Register" },
  { href: "/cpd", label: "CPD" },
  { href: "/accreditation", label: "Accreditation" },
  { href: "/membership", label: "Membership" },
  { href: "/ethics", label: "Ethics" },
  { href: "/resources", label: "Resources" },
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
      { href: "/about", label: "About LCSA" },
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
