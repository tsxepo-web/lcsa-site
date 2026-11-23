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
                A South Africa free from preventable drowning through
                professional, ethical and competent lifeguarding.
              </p>
            </div>

            {/* Core Values */}
            <div className="mt-12">
              <h2 className="text-xl font-bold text-[#8b1c62]">
                Our Core values
              </h2>
              <ul className="mt-4 space-y-4 text-[14px] leading-relaxed text-slate-700">
                <li>
                  <strong className="text-slate-900">
                    We put safety first:
                  </strong>{" "}
                  Prioritizing preventing drowning fatalities and other injuries
                  and protecting health and well-being at work and at home.
                </li>
                <li>
                  <strong className="text-slate-900">
                    We act with honesty and integrity:
                  </strong>{" "}
                  Acting honestly, fairly, ethically, and transparently
                </li>
                <li>
                  <strong className="text-slate-900">
                    We are accountable:
                  </strong>{" "}
                  Owning decisions, actions, and performance while learning from
                  experiences
                </li>
                <li>
                  <strong className="text-slate-900">
                    Transformation and inclusivity:
                  </strong>{" "}
                  Working with colleagues and stakeholders toward shared goals
                  and strong outcomes.
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <h2 className="text-xl font-bold text-[#8b1c62]">Our Mission</h2>
            <p className="mt-4 text-[14px] leading-relaxed text-slate-700">
              To regulate, professionalise and advance the lifeguarding and
              lifesaving industry through standard-setting, registration,
              education, accreditation and enforcement of ethics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
