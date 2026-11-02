import type { Metadata } from "next";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = { title: "About LCSA" };

const features = [
  {
    title: "Professional Standards",
    desc: "National competency framework, fitness & medical standards, assessment protocols per designation.",
    icon: "workspace_premium", // Shield icon
  },
  {
    title: "Public Safety Mandate",
    desc: "Protecting bathers, enforcing supervision ratios, OHSA 85 of 1993 compliance for employers.",
    icon: "shield", // Health and safety icon
  },
  {
    title: "SAQA Alignment",
    desc: "Professional designations registered on NQF, recognition of prior learning, CATHSSETA & QCTO pathways.",
    icon: "check_circle", // Education/qualification icon
  },
  {
    title: "Statutory Collaboration",
    desc: "Works with SAMSA, NSRI, SAPS, NDMC, Municipalities, DSAC & SASCOC, Dept Health.",
    icon: "group", // Collaboration icon
  },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About LCSA • LCSA-CON-2026-V1"
        title="A national professional register for lifeguards."
      >
        LCSA is a non-profit, non-statutory professional body established to
        reduce drowning risk and professionalise lifeguarding across South
        Africa.
      </PageHero>

      <section id="about" className="border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D11C1C]"></div>
              <h2 className="mt-3 text-[28px] font-extrabold leading-[1.05] tracking-tight text-[#0A1931] md:text-[36px]">
                A non-profit, non-statutory professional body establishing a
                national register.
              </h2>
              <p className="mt-4 text-[14px] leading-relaxed text-slate-600">
                Interim Council constituted 08/09/2026 under NPO Act 71 of 1997,
                aligned to NQF Act 67 of 2008 and SAQA Policy for Professional
                Bodies. LCSA exists to reduce drowning risk and professionalise
                lifeguarding across South Africa.
              </p>

              <div className="mt-6 flex gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
                <span className="material-symbols-outlined mt-0.5 shrink-0 text-xl text-[#0A1931]">
                  domain
                </span>
                <div className="text-[13px] leading-relaxed text-slate-700">
                  <strong>Functional Areas:</strong> Professional Standards •
                  Ethics &amp; Discipline • Scope of Practice • Accreditation •
                  Health &amp; Fitness. CPD sits across all five as per Interim
                  Constitution.
                </div>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  {/* Use Google font icon */}
                  <span className="material-symbols-outlined text-2xl text-[#0A1931]">
                    {f.icon}
                  </span>
                  <div className="mt-3 text-[14px] font-bold text-[#0A1931]">
                    {f.title}
                  </div>
                  <div className="mt-2 text-[13px] leading-relaxed text-slate-600">
                    {f.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
