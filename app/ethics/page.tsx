import type { Metadata } from "next";
import { Card, Notice, PageHero, RowList, Section } from "@/components/ui";

const complianceRows: [string, string, string, string][] = [
  [
    "SAMSA",
    "Act 5 of 1998 (Merchant Shipping)",
    "Small vessel & surf rescue craft operations, NSRI coordination",
    "SAMSA small vessel cert for surf craft, skippers license where required",
  ],
  [
    "OHSA",
    "Act 85 of 1993",
    "Employer duty to provide competent lifeguards, risk assessments, supervision ratios",
    "OHSA file, duty roster, competency register – employer category LEA",
  ],
  [
    "DSAC & SASCOC",
    "Act 110 of 1998 (Sport)",
    "Sport recognition, lifesaving as sport code, coaching standards",
    "SASCOC membership via Lifesaving SA sport pathway, coaching CPD",
  ],
  [
    "CATHSSETA & QCTO",
    "Skills Dev Act 97 of 1998",
    "Occupational qualifications, skills programmes, accreditation of training providers",
    "LTP accreditation, QCTO occupational cert, CATHSSETA workplace approval",
  ],
  [
    "SAQA",
    "NQF Act 67 of 2008",
    "Professional Body recognition, designation registration on NQF, RPL",
    "Professional designations FLCSA etc. registered, CPD aligned to SAQA policy",
  ],
  [
    "Dept of Health & HPCSA",
    "Health Professions Act 56 of 1974",
    "First aid scope, emergency care interface, medical fitness referral",
    "First aid levels mapped to HPCSA BA/AA scope, referral protocols",
  ],
  [
    "SAPS / NSRI / NDMC",
    "SAPS Act 68 of 1995, Disaster Mgmt Act 57 of 2002",
    "Drowning incident reporting, rescue coordination, disaster risk",
    "Incident report to SAPS, NSRI joint ops log, NDMC municipal plan integration",
  ],
  [
    "Municipalities",
    "Municipal Systems Act 32 of 2000",
    "Beach & pool bylaws, public amenity safety, employment of lifeguards",
    "Municipal SLA, beach safety audit, blue flag liaison",
  ],
  [
    "DSD – NPO Directorate",
    "NPO Act 71 of 1997",
    "Non-profit governance, financial reporting, constitution",
    "NPO certificate, annual narrative & financial report to DSD",
  ],
  [
    "SARS",
    "Income Tax Act 58 of 1962",
    "Tax compliance, NPO PBO status",
    "Tax clearance, PBO application, VAT where applicable",
  ],
];

const ethicsCards = [
  {
    title: "Ethics & Discipline",
    desc: "Code of Ethics LCSA-ETH-2026. Complaints via ethics@lifeguardcouncil.org.za. Sanctions: caution, fine, suspension, de-registration. Appeal to independent tribunal per clause 15.",
    icon: "gavel",
  },
  {
    title: "POPIA, PAIA, BCEA, LRA, COIDA",
    desc: "POPIA Act 4 of 2013: personal data processed only for professional registration. PAIA Manual available. BCEA/LRA/COIDA compliance via employer guide.",
    icon: "health_and_safety",
  },
  {
    title: "Accreditation Framework",
    desc: "Two-tier: Accreditors (recognised by LCSA Board) accredit Service Providers. Providers submit attendance directly. Accreditor copied + letter attached.",
    icon: "verified_user",
  },
];

export const metadata: Metadata = { title: "Ethics & Discipline" };

export default function Ethics() {
  return (
    <>
      <PageHero
        eyebrow="Ethics & Discipline"
        title="Professional conduct and accountability."
      >
        A Code of Ethics, a complaints route and a disciplinary framework.
      </PageHero>
      <section id="ethics" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-[1280px] px-4 py-12 md:px-6 md:py-16">
          {/* Header row */}
          <div className="flex flex-col justify-between gap-6 lg:flex-row">
            <div className="max-w-[720px]">
              <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D11C1C]">
                Statutory Bodies Compliance Schedule
              </div>
              <h2 className="mt-2 text-[26px] font-extrabold tracking-tight text-[#0A1931] md:text-[32px]">
                Multi-Regulator Alignment Framework
              </h2>
              <p className="mt-3 text-[13px] leading-relaxed text-slate-600">
                LCSA operates as non-statutory body but ensures professional
                practice complies with all relevant South African legislation.
                LCSA does NOT include international bodies. Scope limited to SA
                jurisdiction.
              </p>
            </div>

            <div className="h-fit max-w-[360px] rounded-xl bg-[#0A1931] px-4 py-3 text-[12px] leading-relaxed text-white">
              <strong className="tracking-wide">NO INTERNATIONAL BODIES</strong>
              <br />
              Per user instruction and Interim Constitution, LCSA scope excludes
              ILS, RLSS Commonwealth, or other international bodies. Recognition
              limited to SAQA/CATHSSETA/QCTO/SA statutory environment.
            </div>
          </div>

          {/* Compliance table */}
          <div className="mt-8 overflow-x-auto rounded-[12px] border border-slate-200">
            <table className="w-full min-w-[860px] text-[12.5px]">
              <thead>
                <tr className="bg-[#0A1931] text-left text-white">
                  <th className="px-4 py-3">Statute / Authority</th>
                  <th className="px-4 py-3">Act No.</th>
                  <th className="px-4 py-3">LCSA Relevance</th>
                  <th className="px-4 py-3">Compliance Evidence</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {complianceRows.map((f) => (
                  <tr key={f[0]} className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-bold text-[#0A1931]">
                      {f[0]}
                    </td>
                    <td className="px-4 py-3 font-mono text-[11px]">{f[1]}</td>
                    <td className="px-4 py-3">{f[2]}</td>
                    <td className="px-4 py-3">{f[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Three feature cards */}
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {ethicsCards.map((f) => (
              <div
                key={f.title}
                className="rounded-[14px] border border-slate-200 bg-[#F8FAFC] p-5"
              >
                <span className="material-symbols-outlined text-xl text-[#0A1931]">
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
      </section>
    </>
  );
}
