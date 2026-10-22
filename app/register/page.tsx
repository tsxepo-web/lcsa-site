import type { Metadata } from "next";
import {
  PageHero,
  Section,
  RowList,
  btnPrimary,
  inputCls,
} from "@/components/ui";

export const metadata: Metadata = { title: "Professional Register" };

export default function RegisterPage() {
  return (
    <>
      <PageHero
        eyebrow="Professional Register"
        title="Verify a lifeguard. Protect the public."
      >
        Employers, municipalities and event organisers can use the register to
        check professional status before deployment.
      </PageHero>
      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-bold text-navy">
              What can be verified?
            </h2>
            <RowList
              items={[
                ["Name", "Register"],
                ["Designation", "Professional"],
                ["Registration number", "ID"],
                ["Category and status", "Status"],
                ["CPD compliance", "CPD"],
                ["Valid-until information", "Validity"],
                ["Employer and disciplinary flags", "Where applicable"],
              ]}
            />
          </div>
          <div className="rounded-xl border border-line bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-navy">Live verification</h3>
            <p className="mt-2 text-sm">
              Search by registration number or name.
            </p>
            {/* TODO: convert to a client component / server action that calls the register API */}
            <form className="mt-4 space-y-3">
              <input
                className={inputCls}
                placeholder="Registration number or name"
              />
              <button type="button" className={`${btnPrimary} w-full`}>
                Search Register
              </button>
            </form>
            <p className="mt-3 text-xs text-slate-500">
              Prototype interface; live register integration to be connected
              during development.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
