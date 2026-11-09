import type { Metadata } from "next";
import { PageHero, Section } from "@/components/ui";

export const metadata: Metadata = { title: "Accreditation" };

export default function Accreditation() {
  return (
    <>
      <PageHero
        eyebrow="Accreditation Framework"
        title="Recognising professional learning providers."
      >
        A two-tier framework in which recognised Accreditors accredit Service
        Providers.
      </PageHero>
      <Section>
        <div
          id="accreditation"
          className="rounded-2xl border border-slate-200 bg-white p-5"
        >
          <div className="text-[11px] font-bold uppercase tracking-widest text-slate-500">
            Governing Structure
          </div>
          <h4 className="mt-2 text-[16px] font-extrabold text-[#0A1931]">
            Board of 11 • Term 5 years max 2 consecutive
          </h4>

          <div className="mt-4 grid gap-3 text-[13px]">
            <div className="flex gap-3">
              <div className="grid h-8 w-8 place-items-center rounded-full bg-[#0A1931] text-xs font-bold text-white">
                P
              </div>
              <div>
                <div className="font-bold text-[#0A1931]">
                  Chairperson / President: Nkululeko Dube
                </div>
                <div className="text-slate-600">
                  Interim President, 15 yrs Surf Lifeguarding, NSRI liaison,
                  SAMSA small vessel certified.
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 text-[12.5px] text-slate-700 md:grid-cols-2">
              <div className="rounded-lg border bg-slate-50 p-3">
                <strong>Vice-Chairperson:</strong> Sarah Naidoo (SLG)(SA) – Pool
                & Training Standards Lead, CATHSSETA
              </div>
              <div className="rounded-lg border bg-slate-50 p-3">
                <strong>Secretary:</strong> Johan van Wyk (LGA)(SA) – QCTO
                Assessor Moderator, Ethics
              </div>
              <div className="rounded-lg border bg-slate-50 p-3">
                <strong>Treasurer:</strong> Thandi Nkosi (LSM)(SA) – Finance,
                SARS NPO compliance
              </div>
              <div className="rounded-lg border bg-slate-50 p-3">
                <strong>Members (7):</strong> Surf Rep, Pool Rep, Municipal Rep,
                Employer Rep, Youth, Transformation, Medical Advisor (HPCSA
                liaison)
              </div>
            </div>
          </div>

          <div className="mt-4 text-[11px] text-slate-500">
            Office Bearers elected per Interim Constitution clause 9. Quorum 6.
            Board committees: Accreditation, Ethics &amp; Discipline, CPD &amp;
            Professional Standards, Finance &amp; Risk.
          </div>
        </div>
      </Section>
    </>
  );
}
