import type { Metadata } from "next";
import { Card, Notice, PageHero, Section } from "@/components/ui";

export const metadata: Metadata = { title: "About LCSA" };

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About LCSA"
        title="A national professional register for lifeguards."
      >
        LCSA is a non-profit, non-statutory professional body established to
        reduce drowning risk and professionalise lifeguarding across South
        Africa.
      </PageHero>
      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-navy">Interim Council</h2>
            <p className="mt-3 text-lg text-slate-600">
              The Interim Council was constituted on 08/09/2026 under the NPO
              Act 71 of 1997, aligned to the NQF Act 67 of 2008 and SAQA Policy
              for Professional Bodies.
            </p>
            <Notice>
              <strong>Framework:</strong> Professional Standards • Ethics &amp;
              Discipline • Scope of Practice • Accreditation • Health &amp;
              Fitness.
            </Notice>
          </div>
          <div className="space-y-5">
            <Card title="Public safety mandate">
              Professional standards, fitness and medical standards, assessment
              protocols, supervision expectations and continuing professional
              development are core parts of the framework.
            </Card>
            <Card title="Statutory collaboration">
              Collaboration with SAMSA, NSRI, SAPS, NDMC, municipalities, DSAC
              &amp; SASCOC and the Department of Health.
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}
