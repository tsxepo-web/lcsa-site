import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import Link from "next/link";

export const metadata: Metadata = { title: "Critical Skills Letter" };

export default function CriticalSkillsLetter() {
  return (
    <>
      <PageHero eyebrow="Membership" title="Critical Skills Letter">
        LPSA will provide a Critical Skills Letter to applicants who meet the
        requirements for LPSA Professional Membership and who are working in
        Business Administration.
      </PageHero>

      <section className="bg-slate-50 py-12 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:px-6 lg:grid-cols-[1fr_320px]">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-10">
            <div>
              <h2 className="text-xl font-bold text-[#8b1c62]">
                How do I apply?
              </h2>
              <p className="mt-4 text-sm text-slate-700">
                Send the following supporting documentation to{" "}
                <a
                  href="mailto:admin@opsa.org.za"
                  className="font-semibold text-[#8b1c62] hover:underline"
                >
                  admin@lpsa.org.za
                </a>
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700 marker:text-[#8b1c62]">
                <li>
                  <strong>Certified Copy of Passport</strong> dated not older
                  than 3 months
                </li>
                <li>
                  <strong>Proof of Employment</strong> - a signed letter from
                  your employer stating your position, date employment commenced
                  and dated not older than 02 months from the date of issue
                </li>
                <li>
                  <strong>Certified copy of your qualifications</strong>
                </li>
                <li>
                  <strong>Foreign qualifications:</strong> Certified SAQA
                  certificate confirming your Highest Qualification/s, dated not
                  older than 3 months (if applicable)
                </li>
                <li>
                  <strong>Detailed and up to date CV.</strong> The CV should
                  include:
                  <ul className="mt-2 list-[circle] space-y-1 pl-5 marker:text-slate-400">
                    <li>
                      All previous positions held, with the start and finish
                      dates for these positions
                    </li>
                    <li>Start date of current position</li>
                    <li>
                      Full detailed list of duties and responsibilities under
                      each of the previous positions and your current position
                    </li>
                    <li>
                      Include telephone and emails for your references within
                      your CV.
                    </li>
                  </ul>
                </li>
              </ul>

              <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
                <strong>Note:</strong> Further supporting
                information/documentation may be requested if required.
              </div>
            </div>

            <div className="mt-10 border-t border-slate-100 pt-10">
              <h2 className="text-xl font-bold text-[#8b1c62]">
                How long does it take?
              </h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700 marker:text-[#8b1c62]">
                <li>
                  <strong>If the applicant meets all the requirements:</strong>{" "}
                  approximately 14 working days from the date that all
                  supporting documentation is received.
                </li>
                <li>
                  <strong>
                    If the applicant needs to complete a Portfolio of Evidence:
                  </strong>{" "}
                  approximately 30 working days from date supporting
                  documentation is received. (This is dependent on how long the
                  applicant takes to complete the Portfolio of Evidence.)
                </li>
              </ul>
              <p className="mt-4 text-sm text-slate-700">
                If the applicant is successful, an invoice will be issued, and
                on proof of payment, the membership certificate and letter will
                only be forwarded to the applicant.
              </p>
            </div>

            <div className="mt-10 border-t border-slate-100 pt-10">
              <h2 className="text-xl font-bold text-[#8b1c62]">
                Cost of Critical Skills Letter
              </h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700 marker:text-[#8b1c62]">
                <li>
                  <strong>LPSA Professional Member</strong> = R1500.00
                </li>
                <li>
                  <strong>Non-members</strong> must apply for and meet the
                  requirements for Professional Membership. Costs incurred would
                  be for registration, annual membership fee and Critical Skills
                  Letter = R2250.00.
                </li>
              </ul>
            </div>
          </div>
          <aside className="flex flex-col gap-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-bold text-[#0A1931]">Ready to apply?</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-slate-600">
                Ensure you have all the required certified documents ready
                before submitting your application to avoid delays.
              </p>
              <Link
                href="/membership/types"
                className="mt-4 flex w-full items-center justify-center rounded-lg bg-[#8b1c62] py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#6d134c]"
              >
                Apply for Membership
              </Link>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 shadow-sm">
              <h3 className="font-bold text-[#0A1931]">Need help?</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-slate-600">
                If you have any questions regarding the requirements or the
                application process, please contact us.
              </p>
              <a
                href="mailto:admin@opsa.org.za"
                className="mt-4 flex items-center gap-2 text-sm font-semibold text-[#8b1c62] hover:underline"
              >
                <span className="material-symbols-outlined text-lg">mail</span>
                admin@lpsa.org.za
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
