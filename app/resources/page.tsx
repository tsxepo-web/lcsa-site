import type { Metadata } from "next";

const documents = [
  {
    title: "CPD Guidelines for Practitioners",
    meta: "LPSA-CPD-PRAC-2026 • 24 pages • PDF",
    tag: "Core",
  },
  {
    title: "CPD Guidelines for Accreditors and Service Providers",
    meta: "LPSA-CPD-ACC-2026 • 32 pages • PDF",
    tag: "Accreditation",
  },
  {
    title: "List of Approved Accreditors (per board)",
    meta: "Updated 01/09/2026 • Excel & PDF",
    tag: "Accreditors",
  },
  {
    title: "Application for CPD Service Provider",
    meta: "Form LPSA-CPD-01 • Online + PDF",
    tag: "Form",
  },
  {
    title: "Annual Report by CPD Provider",
    meta: "Form LPSA-CPD-02 • Due 31 March",
    tag: "Form",
  },
  {
    title: "Application for Individual CPD Activity",
    meta: "Form LPSA-CPD-03 • 14-day review",
    tag: "Form",
  },
  {
    title: "Application for Recognition as Accreditor",
    meta: "Form LPSA-CPD-04 • Board review",
    tag: "Form",
  },
  {
    title: "Policy: Fees and Commercial Interest for CPD",
    meta: "LPSA-POL-FEE-2026 • Fee schedule inside",
    tag: "Policy",
  },
  {
    title: "Promulgated CPD Rules",
    meta: "Interim Constitution Schedule 4 • Rules",
    tag: "Rules",
  },
  {
    title: "SAQA Alignment Declaration",
    meta: "NQF Act 67 of 2008 • Professional Body",
    tag: "SAQA",
  },
  {
    title: "Code of Ethics and Professional Conduct",
    meta: "LPSA-ETH-2026 • All designations",
    tag: "Ethics",
  },
  {
    title: "POPIA Compliance & PAIA Manual",
    meta: "POPIA Act 4 of 2013 • PAIA Manual v2",
    tag: "Legal",
  },
];

const tagIcons: Record<string, string> = {
  Core: "menu_book",
  Accreditation: "verified_user",
  Accreditors: "groups",
  Form: "edit_document",
  Policy: "policy",
  Rules: "gavel",
  SAQA: "workspace_premium",
  Ethics: "balance",
  Legal: "shield",
};

export const metadata: Metadata = { title: "Resources & Governance" };

export default function Resources() {
  return (
    <>
      <section className="border-b border-slate-200 bg-[#0A1931] text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
          <div className="max-w-190">
            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D11C1C]">
              Documents & Resources
            </div>
            <h1 className="mt-3 text-[30px] font-extrabold leading-[1.05] tracking-tight md:text-[42px]">
              Everything the council publishes, in one place.
            </h1>
            <p className="mt-4 text-[14px] leading-relaxed text-white/70 md:text-[15px]">
              Policies, legislation, forms and professional guidance —
              versioned, dated and POPIA-compliant. If it governs lifeguarding
              in South Africa, it lives here.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
            {[
              {
                label: "CPD guidelines",
                icon: "menu_book",
                href: "#documents",
              },
              { label: "Forms", icon: "edit_document", href: "#documents" },
              {
                label: "Ethics & conduct",
                icon: "balance",
                href: "#documents",
              },
              { label: "Legal & POPIA", icon: "shield", href: "#documents" },
            ].map((j) => (
              <a
                key={j.label}
                href={j.href}
                className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-[13px] font-semibold transition hover:bg-white/15"
              >
                <span className="material-symbols-outlined text-lg">
                  {j.icon}
                </span>
                {j.label}
              </a>
            ))}
          </div>
        </div>
      </section>
      <section id="documents" className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
          <div className="flex items-baseline justify-between gap-4">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D11C1C]">
                Important Documents
              </div>
              <h2 className="mt-2 text-[26px] font-extrabold tracking-tight text-[#0A1931] md:text-[32px]">
                CPD &amp; Professional Practice Library
              </h2>
              <p className="mt-2 max-w-180 text-[13px] text-slate-600">
                Modeled on HPCSA CPD document categories. All downloads are
                POPIA-compliant PDFs. Last updated: September 2026.
              </p>
            </div>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {documents.map((f) => (
              <div
                key={f.title}
                className="group rounded-[14px] border border-slate-200 bg-white p-5 transition hover:border-slate-300 hover:shadow-[0_8px_24px_rgba(10,25,49,0.08)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-[10px] bg-[#0A1931] text-white">
                    <span className="material-symbols-outlined text-xl">
                      {tagIcons[f.tag] ?? "description"}
                    </span>
                  </div>
                  <span className="rounded-full border border-slate-200 bg-slate-100 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-600">
                    {f.tag}
                  </span>
                </div>
                <div className="mt-4 text-[14px] font-bold leading-tight text-[#0A1931] group-hover:text-black">
                  {f.title}
                </div>
                <div className="mt-2 text-[12px] text-slate-500">{f.meta}</div>

                <div className="mt-4 flex gap-2">
                  <button className="inline-flex h-8 items-center gap-1.5 rounded-full bg-[#0A1931] px-3 text-[11px] font-bold text-white">
                    <span className="material-symbols-outlined text-sm">
                      download
                    </span>
                    Download PDF
                  </button>
                  <button className="inline-flex h-8 items-center gap-1 rounded-full border border-slate-200 bg-white px-3 text-[11px] font-semibold">
                    View
                    <span className="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
