import type { Metadata } from "next";
import { Card, Notice, PageHero, RowList, Section } from "@/components/ui";

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
      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-navy">Code of Ethics</h2>
            <p className="mt-3 text-lg text-slate-600">
              <strong>Code of Ethics LCSA-ETH-2026</strong>. Complaints are
              handled through the LCSA ethics process.
            </p>
            <h3 className="mb-3 mt-6 text-lg font-bold text-navy">
              Possible sanctions
            </h3>
            <RowList
              items={[
                ["Caution"],
                ["Fine"],
                ["Suspension"],
                ["De-registration"],
              ]}
            />
          </div>
          <Card title="Complaints & appeals">
            Complaints may be submitted through the ethics contact. An appeal
            may be made to an independent tribunal in accordance with clause 15.
            <Notice>
              The final production site should use the council&apos;s approved
              complaints form, official email address and published procedural
              documents.
            </Notice>
          </Card>
        </div>
      </Section>
    </>
  );
}
