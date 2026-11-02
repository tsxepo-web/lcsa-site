import type { Metadata } from "next";
import Link from "next/link";
import { Card, Cards, PageHero, Section, btnPrimary } from "@/components/ui";
import { designations } from "@/lib/site";

const designationRows: [string, string, string, string, string][] = [
  [
    "Trainee Lifeguard TLG(SA)",
    "200m swim <5:00, 50m tow <1:30",
    "Level 1 (16h)",
    "0 months – supervised",
    "Pool rescue & CPR",
  ],
  [
    "Lifeguard Pool LG(POOL)(SA)",
    "400m <8:00, 50m rescue <0:55",
    "Level 2 + AED",
    "6 months pool",
    "Pool, spinal, AED scenario",
  ],
  [
    "Lifeguard Beach / Surf LG(SURF)(SA)",
    "800m run-swim-run <15:00, surf entry",
    "Level 3",
    "12 months surf",
    "Surf rescue, IRB, board",
  ],
  [
    "Senior Lifeguard SLG(SA)",
    "1km <19:00, advanced tow 100m",
    "Level 3 + O2",
    "3 yrs + supervision",
    "Team lead, risk assessment",
  ],
  [
    "Lifeguard Manager LSM(SA)",
    "Manager fitness waiver + 800m <16:00",
    "Level 3",
    "5 yrs + 1 yr supervision",
    "OHSA, duty roster, incident cmd",
  ],
  [
    "Lifeguard Instructor LGI(SA)",
    "Instructor fitness + demo all rescues",
    "Facilitator cert",
    "SLG + 2 yrs",
    "Teach-back + moderation",
  ],
  [
    "Lifeguard Assessor LGA(SA)",
    "Assessor fitness (maintain)",
    "Assessor + moderation",
    "LGI + 2 yrs",
    "Assessment audit + CPD",
  ],
];

const feeRows: [string, string, string][] = [
  ["Trainee Lifeguard", "TLG(SA)", "R150"],
  ["Lifeguard (Pool/Surf)", "LG(SA)", "R750"],
  ["Senior Lifeguard", "SLG(SA)", "R650"],
  ["Lifeguard Manager", "LSM(SA)", "R950"],
  ["Lifeguard Instructor", "LGI(SA)", "R950"],
  ["Lifeguard Assessor", "LGA(SA)", "R1,050"],
  ["Lifeguard Club (NPO)", "LTC", "R1,200"],
  ["Lifeguard Training Provider", "LTP", "R1,500"],
  ["Lifeguard Employer / LEA", "LEA", "R3,500"],
];

export const metadata: Metadata = { title: "Membership & Registration" };

export default function Membership() {
  return (
    <>
      <PageHero
        eyebrow="Membership & Registration"
        title="Professional registration and designations."
      >
        Eight professional designations, with registration as a central LCSA
        service.
      </PageHero>
      <section id="membership" className="bg-[#F8FAFC]">
        <div className="mx-auto max-w-[1280px] px-4 py-12 md:px-6 md:py-16">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Left column */}
            <div className="flex flex-col">
              <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D11C1C]">
                Membership Criteria • Constitution Page 11
              </div>
              <h2 className="mt-2 text-[24px] font-extrabold tracking-tight text-[#0A1931] md:text-[28px]">
                Professional Designation Requirements
              </h2>

              <div className="mt-5 overflow-x-auto rounded-[12px] border border-slate-200 bg-white">
                <table className="w-full min-w-[680px] text-[12.5px]">
                  <thead>
                    <tr className="bg-[#0A1931] text-left text-white">
                      <th className="px-3 py-3">Grade</th>
                      <th className="px-3 py-3">Fitness Standard</th>
                      <th className="px-3 py-3">First Aid</th>
                      <th className="px-3 py-3">Experience</th>
                      <th className="px-3 py-3">Assessment</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    {designationRows.map((f) => (
                      <tr key={f[0]} className="hover:bg-slate-50">
                        <td className="px-3 py-3 font-bold leading-tight text-[#0A1931]">
                          {f[0]}
                        </td>
                        <td className="px-3 py-3">{f[1]}</td>
                        <td className="px-3 py-3">{f[2]}</td>
                        <td className="px-3 py-3">{f[3]}</td>
                        <td className="px-3 py-3">{f[4]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-3 text-[11px] text-slate-500">
                All candidates must be medically fit, no criminal record
                involving negligence causing bodily harm, and sign Code of
                Ethics. Health &amp; Fitness assessed per Schedule 2 of Interim
                Constitution.
              </div>
            </div>

            {/* Right column */}
            <div className="flex flex-col space-y-8">
              <div>
                <h3 className="text-[18px] font-extrabold text-[#0A1931]">
                  Annual Subscription Fees 2026/27
                </h3>
                <p className="mt-1 text-[12px] text-slate-600">
                  Financial year 1 March – 28 Feb. Pro-rata for mid-cycle
                  registrations. Fees incl. CPD portal access, professional
                  indemnity guidance (not insurance), register maintenance.
                </p>

                <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 bg-white">
                  <table className="w-full min-w-120 text-[13px]">
                    <thead>
                      <tr className="bg-[#0A1931] text-left text-white">
                        <th className="px-4 py-3">Category</th>
                        <th className="px-4 py-3">Designation</th>
                        <th className="px-4 py-3 text-right">Annual Fee</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {feeRows.map((f) => (
                        <tr key={f[1]} className="hover:bg-slate-50">
                          <td className="px-4 py-2.5 font-medium text-[#0A1931]">
                            {f[0]}
                          </td>
                          <td className="px-4 py-2.5">
                            <span className="rounded border bg-slate-100 px-1.5 py-0.5 font-mono text-[11px]">
                              {f[1]}
                            </span>
                          </td>
                          <td className="px-4 py-2.5 text-right font-bold">
                            {f[2]}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <div className="flex gap-2 border-t border-amber-200 bg-amber-50 px-4 py-3 text-[11px] text-amber-900">
                    <span className="material-symbols-outlined shrink-0 text-base">
                      info
                    </span>
                    Late renewal after 30 April incurs R250 penalty. Suspension
                    after 60 days non-payment. Employer categories cover
                    multiple staff – CPD compliance per individual still
                    required.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
