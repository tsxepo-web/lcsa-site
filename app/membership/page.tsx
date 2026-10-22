import type { Metadata } from "next";
import Link from "next/link";
import { Card, Cards, PageHero, Section, btnPrimary } from "@/components/ui";
import { designations } from "@/lib/site";

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
      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {designations.map((d) => (
            <Card key={d} tag="Designation" title={d} />
          ))}
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-xl bg-soft p-6">
          <h2 className="text-xl font-bold text-navy">
            Ready to begin registration?
          </h2>
          <Link href="/contact" className={btnPrimary}>
            Contact LCSA
          </Link>
        </div>
      </Section>
    </>
  );
}
