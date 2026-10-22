import type { Metadata } from "next";
import {
  Card,
  Cards,
  DataTable,
  Notice,
  PageHero,
  Section,
} from "@/components/ui";

export const metadata: Metadata = { title: "CPD Programme" };

export default function CPD() {
  return (
    <>
      <PageHero
        eyebrow="Continuing Professional Development"
        title="CPD Programme"
      >
        CPD is one of LCSA&apos;s five functional areas, with an online
        self-service platform for evidence and compliance.
      </PageHero>
      <Section>
        <Notice>
          <strong>Implementation update:</strong> The CPD cycle is 1 March–28
          February, with CEUs valid for a 12-month cycle. Maximum carry-over of
          5 CEUs is permitted with motivation.
        </Notice>
        <Cards>
          <Card title="Online self-service">
            Upload evidence, track CEUs and download compliance letters through
            the CPD Portal.
          </Card>
          <Card title="Provider submissions">
            Accredited Service Providers submit attendance registers directly to
            LCSA via the provider portal.
          </Card>
          <Card title="Digital compliance record">
            Paper CPD certificates are no longer mandatory; the portal record is
            the authoritative proof.
          </Card>
        </Cards>
        <h2 className="mb-4 mt-14 text-2xl font-bold text-navy">
          Key CPD implementation points
        </h2>
        <DataTable
          head={["Area", "Requirement"]}
          rows={[
            [
              "Sampling",
              "Random CPD audits discontinued; practitioners remain responsible for ongoing compliance.",
            ],
            [
              "Provider attendance",
              "Accredited providers submit attendance directly.",
            ],
            [
              "Accreditation letter",
              "Provider submissions must include the valid accreditation letter and copy the Accreditor.",
            ],
            ["Cycle", "1 March – 28 February annually."],
          ]}
        />
      </Section>
    </>
  );
}
