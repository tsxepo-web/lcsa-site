import type { Metadata } from "next";

const revisions = [
  {
    n: 1,
    title: "Discontinuation of sampling",
    desc: "Random CPD audits discontinued. All practitioners must ensure ongoing compliance. Boards will suspend registration for non-compliance. Practitioners may not practice while suspended.",
  },
  {
    n: 2,
    title: "Online self-service platform",
    desc: "LPSA CPD Portal launched for uploading evidence, tracking CEUs, downloading compliance letters. Mobile-responsive, POPIA compliant.",
  },
  {
    n: 3,
    title: "Direct provider submissions",
    desc: "Accredited Service Providers submit attendance registers directly to LPSA via provider portal. No practitioner upload required for provider-led activities.",
  },
  {
    n: 4,
    title: "Accreditation letter requirement",
    desc: "Service Provider must copy Accreditor when submitting to LPSA and must attach accreditation letter. Activities without valid accreditation letter will be rejected.",
  },
  {
    n: 5,
    title: "CPD certificates no longer mandatory",
    desc: "Issuance of paper CPD certificates is no longer mandatory. Digital compliance record in portal is authoritative proof.",
  },
  {
    n: 6,
    title: "CEU validity 12-month cycle",
    desc: "CEU points valid for 12 months cycle (1 March - 28 Feb), not 24 months. Carry-over of maximum 5 CEUs permitted with motivation.",
  },
];

const ceuRows: [string, string, string, string, string][] = [
  ["Trainee Lifeguard", "TLG(SA)", "8", "2", "10"],
  ["Lifeguard Pool", "LG(POOL)(SA)", "20", "5", "25"],
  ["Lifeguard Surf", "LG(SURF)(SA)", "25", "5", "30"],
  ["Senior Lifeguard", "SLG(SA)", "25", "5", "30"],
  ["Lifeguard Manager", "LSM(SA)", "20", "10", "30"],
  ["Lifeguard Instructor", "LGI(SA)", "20", "10", "30"],
  ["Lifeguard Assessor", "LGA(SA)", "20", "10", "30"],
  ["Lifeguard Employer Representative", "LEA", "10", "5", "15"],
];

export const metadata: Metadata = { title: "CPD Programme" };

export default function CPD() {
  return (
    <section id="cpd" className="border-y border-slate-200 bg-[#F8FAFC]">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-20">
        <div className="rounded-2xl bg-[#0A1931] p-6 md:p-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-start">
            <div className="max-w-190">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-white">
                <span className="material-symbols-outlined text-sm">
                  workspace_premium
                </span>
                Continuing Professional Development
              </div>
              <h2 className="mt-4 text-[30px] font-extrabold leading-[1.05] tracking-tight text-white md:text-[40px]">
                CPD Programme
              </h2>
              <p className="mt-4 text-[14px] leading-relaxed text-white/70 md:text-[15px]">
                CPD is one of{" "}
                <strong className="text-white">5 functional areas</strong> of
                the Lifeguard Profession of South Africa: Professional
                Standards, Ethics, Scope of Practice, Accreditation, and Health
                &amp; Fitness. CPD is implemented under the legislative
                authority of the{" "}
                <strong className="text-white">NPO Act 71 of 1997</strong> and{" "}
                <strong className="text-white">NQF Act 67 of 2008</strong>, in
                accordance with the SAQA Policy for Professional Bodies, and is
                the responsibility of every registered lifeguard to ensure
                ongoing competence and public safety from drowning.
              </p>
            </div>
            <div className="shrink-0 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm lg:w-[320px]">
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                Benchmark Structure
              </div>
              <div className="mt-2">
                <a
                  href="https://www.hpcsa.co.za/cpd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14px] font-bold text-[#0A1931] hover:underline"
                >
                  HPCSA Continuing Professional Development (CPD)
                </a>
              </div>
              <div className="mt-2 text-[12px] leading-relaxed text-slate-600">
                LPSA CPD pages are modeled exactly on the HPCSA CPD framework
                for statutory credibility and user familiarity.
              </div>
              <a
                href="https://www.hpcsa.co.za/cpd"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-bold text-[#D11C1C]"
              >
                View product
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </a>
              <div className="mt-3 flex items-center gap-2 border-t border-slate-100 pt-3 text-[11px] text-slate-500">
                <span className="material-symbols-outlined text-sm">info</span>
                Benchmark reference only – LPSA is independent non-statutory
                body.
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 overflow-hidden rounded-[20px] border border-slate-200 bg-white shadow-sm">
          <div className="flex items-start justify-between gap-4 bg-[#0A1931] px-6 py-5 text-white md:px-8">
            <div>
              <div className="text-[12px] font-bold uppercase tracking-widest opacity-80">
                Revised CPD Guidelines 2026 • LPSA-CPD-2026-V1
              </div>
              <div className="mt-1 text-[18px] font-bold tracking-tight md:text-[20px]">
                Key Revisions to CPD Implementation
              </div>
            </div>
            <span className="hidden rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-bold md:inline-flex">
              EFFECTIVE 1 MARCH 2026
            </span>
          </div>

          <div className="grid gap-6 p-6 text-[13.5px] leading-relaxed text-slate-700 md:grid-cols-2 md:p-8">
            {revisions.map((f) => (
              <div key={f.n} className="flex gap-4">
                <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#0A1931] text-[13px] font-bold text-white">
                  {f.n}
                </div>
                <div>
                  <div className="font-bold text-[#0A1931]">{f.title}</div>
                  <div className="mt-1 text-slate-600">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-3 border-t border-amber-200 bg-amber-50 px-6 py-4 text-[13px] text-amber-900 md:px-8">
            <span className="material-symbols-outlined mt-0.5 shrink-0 text-xl">
              warning
            </span>
            <span>
              <strong>Compliance Note:</strong> Failure to meet minimum CEUs in
              both categories (Technical + Ethics/OHSA) results in non-compliant
              status even if total CEUs exceed threshold. Boards will suspend
              practitioners who remain non-compliant 60 days after cycle end.
            </span>
          </div>
        </div>
        <div className="mt-10">
          <h3 className="text-[18px] font-extrabold text-[#0A1931]">
            Minimum CEU Requirements per Designation
          </h3>
          <p className="mt-2 max-w-200 text-[13px] text-slate-600">
            CEUs: Continuing Education Units. 1 CEU = 1 hour of accredited
            learning. Ethics component must include Human Rights, Health Law,
            OHSA 85 of 1993, and professional conduct. Cycle: 1 March – 28
            February annually.
          </p>

          <div className="mt-5 overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full min-w-180 text-[13px]">
              <thead>
                <tr className="bg-[#0A1931] text-left text-white">
                  <th className="px-4 py-3.5 font-bold tracking-wide">
                    Register (Abbreviation)
                  </th>
                  <th className="px-4 py-3.5 font-bold tracking-wide">
                    Clinical / Technical CEUs
                  </th>
                  <th className="px-4 py-3.5 font-bold tracking-wide">
                    Ethics, Human Rights, Health Law &amp; OHSA
                  </th>
                  <th className="px-4 py-3.5 font-bold tracking-wide">
                    Total Minimum
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {ceuRows.map((f) => (
                  <tr key={f[1]} className="hover:bg-slate-50/70">
                    <td className="px-4 py-3.5">
                      <span className="font-bold text-[#0A1931]">{f[0]}</span>{" "}
                      <span className="ml-1 rounded border bg-slate-100 px-1.5 py-0.5 font-mono text-[11px]">
                        {f[1]}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 font-semibold">{f[2]}</td>
                    <td className="px-4 py-3.5 font-semibold">{f[3]}</td>
                    <td className="px-4 py-3.5">
                      <span className="inline-flex min-w-9 justify-center rounded-full bg-[#0A1931] px-2.5 py-1 text-[12px] font-bold text-white">
                        {f[4]}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 flex gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-[13px] text-red-900">
            <span className="material-symbols-outlined mt-0.5 shrink-0 text-xl">
              block
            </span>
            <div>
              <strong>Non-compliance rule:</strong> Even if total CEUs are above
              threshold, if either component (Technical OR Ethics/OHSA) is below
              its minimum threshold, practitioner is deemed non-compliant.
              Example: LG(SURF)(SA) with 30 total but only 3 Ethics =
              Non-compliant.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
