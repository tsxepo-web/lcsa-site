import type { Metadata } from "next";
import { Card, Cards, DataTable, PageHero, Section } from "@/components/ui";
import { stakeholders } from "@/lib/site";

export const metadata: Metadata = { title: "Resources & Governance" };

export default function Resources() {
  return (
    <>
      <PageHero
        eyebrow="Documents & Resources"
        title="Policies, legislation and professional guidance."
      >
        A dedicated resources area keeps the homepage clean while making the
        council&apos;s supporting documents easy to find.
      </PageHero>
      <Section>
        <Cards>
          <Card title="Policies & Governance">
            Constitution, governance information, professional standards and
            council policies.
          </Card>
          <Card title="Legislation & Compliance">
            NPO Act 71 of 1997, NQF Act 67 of 2008, OHSA 85 of 1993, POPIA,
            PAIA, BCEA, LRA and COIDA.
          </Card>
          <Card title="Downloads">
            Approved forms, CPD information, employer guidance, accreditation
            material and public notices.
          </Card>
        </Cards>
        <h2 className="mb-4 mt-14 text-2xl font-bold text-navy">
          Referenced stakeholder framework
        </h2>
        <DataTable head={["Stakeholder", "Reference"]} rows={stakeholders} />
      </Section>
    </>
  );
}
