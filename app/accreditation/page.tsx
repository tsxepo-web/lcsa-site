import type { Metadata } from "next";
import { Card, PageHero, RowList, Section } from "@/components/ui";

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
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-bold text-navy">
              Two-tier model
            </h2>
            <div className="space-y-4">
              <Card title="1. Accreditors">
                Accreditors are recognised by the LCSA Board and oversee the
                accreditation of Service Providers.
              </Card>
              <Card title="2. Service Providers">
                Providers submit attendance directly to LCSA and include the
                Accreditor and accreditation letter with submissions.
              </Card>
            </div>
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-bold text-navy">
              Provider pathway
            </h2>
            <RowList
              items={[
                ["Submit provider information", "01"],
                ["Accreditor review", "02"],
                ["LCSA recognition", "03"],
                ["Provider submits attendance", "04"],
                ["CPD record updated", "05"],
              ]}
            />
          </div>
        </div>
      </Section>
    </>
  );
}
