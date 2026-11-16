import type { Metadata } from "next";

export const metadata: Metadata = { title: "Vision and Mission" };

export default function VisionAndMission() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        {/* Intro Block */}
        <div className="text-[15px] font-medium leading-relaxed text-slate-800 md:text-base">
          <p>
            The Lifeguard Profession of South Africa (LPSA) is a non-profit,
            non-statutory professional body established in 2026 under the NPO
            Act 71 of 1997. We represent lifeguards, senior lifeguards,
            lifeguard managers, instructors, assessors, and employers – in fact,
            all professionals dedicated to water safety and drowning prevention.
            LPSA is aligned to the NQF Act 67 of 2008 and is currently
            undergoing the SAQA professional body recognition process to ensure
            national standards of excellence.
          </p>
        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-slate-200" />

        {/* Two Column Layout */}
        <div className="mt-10 grid gap-12 md:grid-cols-2 md:gap-16">
          {/* Left Column */}
          <div>
            {/* Vision */}
            <div>
              <h2 className="text-xl font-bold text-[#8b1c62]">Our Vision</h2>
              <p className="mt-4 text-[14px] leading-relaxed text-slate-700">
                To be the leading professional association in developing ethical
                standards of practice and excellence for lifeguards and water
                safety professionals in Africa.
              </p>
            </div>

            {/* Core Values */}
            <div className="mt-12">
              <h2 className="text-xl font-bold text-[#8b1c62]">
                Our Core values
              </h2>
              <ul className="mt-4 space-y-4 text-[14px] leading-relaxed text-slate-700">
                <li>
                  <strong className="text-slate-900">Diversity:</strong>{" "}
                  respecting the dignity and value of all individuals.
                </li>
                <li>
                  <strong className="text-slate-900">Integrity:</strong>{" "}
                  demonstrating actions that are honest, loyal and ethical
                  aligned to our vision and mission.
                </li>
                <li>
                  <strong className="text-slate-900">Transparency:</strong>{" "}
                  conducting business in an open and accountable manner to the
                  benefit of our members and partners.
                </li>
                <li>
                  <strong className="text-slate-900">Excellence:</strong> being
                  the go-to place for relevant resources and expertise for
                  individuals and organisations to ensure growth and
                  development.
                </li>
                <li>
                  <strong className="text-slate-900">Creativity:</strong>{" "}
                  passionately pursuing innovative approaches which enhance
                  service standards.
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <h2 className="text-xl font-bold text-[#8b1c62]">Our Mission</h2>
            <p className="mt-4 text-[14px] leading-relaxed text-slate-700">
              To ensure and promote quality assurance in the lifeguarding
              profession through:
            </p>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-[14px] leading-relaxed text-slate-700 marker:text-slate-400">
              <li>
                Developing ethical standards of practice aligned to relevant
                global best practices.
              </li>
              <li>
                Providing suitable and applicable standards that will enhance
                service excellence in the lifeguarding profession.
              </li>
              <li>
                Advising and supporting organizations about matters relating to
                the lifeguarding profession.
              </li>
              <li>
                Supporting and encouraging members in continuous professional
                and career path development.
              </li>
              <li>
                Promoting innovative systems and technological advancements that
                enhance public safety.
              </li>
              <li>
                Recognising excellence within the lifeguarding profession and
                creating meaningful platforms for networking.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
