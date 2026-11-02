const quickLinks = [
  { label: "CPD Portal Login", href: "#cpd" },
  { label: "Verify a Lifeguard", href: "/register" },
  { label: "Apply for Registration", href: "/membership" },
  { label: "Accreditor List", href: "#documents" },
  { label: "Code of Ethics", href: "#ethics" },
  { label: "POPIA & PAIA Manual", href: "#documents" },
  { label: "Fee Policy", href: "#membership" },
  { label: "SAQA Alignment Declaration", href: "#documents" },
];

export default function ContactSection() {
  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:px-6 md:py-16 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Left Column - Now Blue */}
        <div className="rounded-2xl bg-[#0A1931] p-6 text-white md:p-8">
          <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D11C1C]">
            Contact • Virtual Platform
          </div>
          <h2 className="mt-2 text-[26px] font-extrabold tracking-tight md:text-[32px]">
            Lifeguard Council of South Africa
          </h2>
          <p className="mt-3 text-[14px] leading-relaxed text-white/70">
            Non-profit, non-statutory professional body. Operating virtually
            until permanent secretariat established post SAQA recognition. All
            applications via self-service portal.
          </p>

          <div className="mt-6 space-y-3 text-[13px]">
            <div className="flex gap-3">
              <span className="material-symbols-outlined mt-0.5 shrink-0 text-base text-white/80">
                domain
              </span>
              <span>
                <strong className="text-white">
                  Registered Address (Virtual):
                </strong>{" "}
                LCSA Interim Secretariat, c/o CATHSSETA Liaison Office,
                Johannesburg. Official correspondence via portal only.
              </span>
            </div>

            <div className="flex gap-3">
              <span className="material-symbols-outlined mt-0.5 shrink-0 text-base text-white/80">
                mail
              </span>
              <span>
                <strong className="text-white">Email:</strong>{" "}
                info@lifeguardcouncil.org.za • cpd@lifeguardcouncil.org.za •
                ethics@lifeguardcouncil.org.za •
                accreditation@lifeguardcouncil.org.za
              </span>
            </div>

            <div className="flex gap-3">
              <span className="material-symbols-outlined mt-0.5 shrink-0 text-base text-white/80">
                health_and_safety
              </span>
              <span>
                <strong className="text-white">Constitution:</strong> Approved
                08/09/2026 • Ref LCSA-CON-2026-V1 • NPO Act 71 of 1997 compliant
              </span>
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-white/15 bg-white/5 p-4 text-[12px] leading-relaxed text-white/60">
            <strong className="text-white">Office Hours:</strong> Mon-Fri
            08:00-16:00 SAST (Virtual). Response time 3 business days. For
            urgent verification, use Professional Register widget. For CPD
            evidence upload, use CPD Portal Login.
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6">
          <div className="text-[14px] font-bold text-[#0A1931]">
            Quick Links &amp; Compliance
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2 text-[12px]">
            {quickLinks.map((f) => (
              <a
                key={f.label}
                href={f.href}
                className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2.5 hover:border-[#0A1931]/30"
              >
                <span className="font-medium text-[#0A1931]">{f.label}</span>
                <span className="material-symbols-outlined text-sm text-slate-400">
                  chevron_right
                </span>
              </a>
            ))}
          </div>
          <div className="mt-6 text-[11px] leading-relaxed text-slate-500">
            <strong>Legal Compliance:</strong> POPIA Act 4 of 2013, PAIA Act 2
            of 2000, BCEA 75 of 1997, LRA 66 of 1995, COIDA 130 of 1993, NPO Act
            71 of 1997, NQF Act 67 of 2008, OHSA 85 of 1993, SAMSA Act 5 of
            1998, DSAC &amp; SASCOC Act 110 of 1998, Skills Dev Act 97 of 1998.
            SARS tax compliant. No SAQA recognition yet – interim council
            operating under interim constitution. WE PUT PUBLIC SAFETY FIRST.
          </div>
        </div>
      </div>
    </section>
  );
}
