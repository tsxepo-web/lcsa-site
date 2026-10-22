import Link from "next/link";
import {
  Card,
  Cards,
  Section,
  RowList,
  btnDark,
  btnPrimary,
} from "@/components/ui";
import { quickLinks } from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="bg-navy text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 lg:grid-cols-2">
          <div>
            <div className="mb-3 text-xs font-bold uppercase tracking-widest text-red-300">
              Non-statutory professional body • NPO Act 71 of 1997
            </div>
            <h1 className="text-4xl font-extrabold md:text-6xl">
              Lifeguard Council of South Africa
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-300">
              The national professional register for lifeguards. Established to
              protect public safety from drowning through professional
              standards, ethics, scope of practice, accreditation and continuing
              professional development.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/register" className={btnPrimary}>
                Verify a Lifeguard
              </Link>
              <Link
                href="/membership"
                className="inline-block rounded-md border border-white bg-navy px-5 py-3 text-sm font-semibold text-white hover:brightness-125"
              >
                Apply for Registration
              </Link>
            </div>
          </div>
          <div className="rounded-2xl bg-white p-7 text-slate-700 shadow-xl">
            <span className="rounded bg-soft px-2 py-1 text-xs font-bold text-brand">
              Official Register
            </span>
            <h3 className="mt-3 text-xl font-bold text-navy">
              Verify professional status
            </h3>
            <p className="mt-2 text-sm">
              Check registration, designation, CPD compliance and status through
              the LCSA professional register.
            </p>
            <Link
              href="/register"
              className={`${btnDark} mt-4 w-full text-center`}
            >
              Go to the register
            </Link>
            <p className="mt-3 text-xs text-slate-500">
              For employers, municipalities and event organisers.
            </p>
          </div>
        </div>
      </section>

      <Section>
        <div className="mb-10 max-w-3xl">
          <div className="mb-2 text-xs font-bold uppercase tracking-widest text-brand">
            What LCSA does
          </div>
          <h2 className="text-3xl font-extrabold text-navy">
            Professional standards for safer water environments.
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            LCSA has five functional areas: Professional Standards, Ethics &amp;
            Discipline, Scope of Practice, Accreditation, and Health &amp;
            Fitness. CPD sits across all five.
          </p>
        </div>
        <Cards>
          <Card href="/about" tag="01" title="About LCSA">
            Learn about the Interim Council, its purpose and professional
            framework.
          </Card>
          <Card href="/cpd" tag="02" title="CPD Programme">
            Understand CEU requirements, the annual cycle and the CPD portal.
          </Card>
          <Card href="/accreditation" tag="03" title="Accreditation">
            Information for accreditors and recognised service providers.
          </Card>
        </Cards>
      </Section>

      <Section soft>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="mb-2 text-xs font-bold uppercase tracking-widest text-brand">
              For the public &amp; employers
            </div>
            <h2 className="text-3xl font-extrabold text-navy">
              Put public safety first.
            </h2>
            <p className="mt-3 text-lg text-slate-600">
              LCSA&apos;s register is the definitive source for verifying a
              lifeguard&apos;s professional status.
            </p>
            <Link href="/register" className={`${btnDark} mt-5`}>
              Professional Register
            </Link>
          </div>
          <RowList items={quickLinks} />
        </div>
      </Section>
    </>
  );
}
