import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = { title: "Professional Designations" };

const designations = [
  {
    title: "PROFESSIONAL LIFEGUARD",
    abbreviation: "(PL)",
    requirements: [
      "A matric certificate or a SAQA-recognized NQF Level 4 Business Administration or Public Administration qualification or higher.",
      "Five to nine years' practical experience in an administrative role.",
      "The successful completion of an industry-related portfolio of evidence to determine the level of your skills.",
    ],
  },
  {
    title: "SENIOR PROFESSIONAL LIFEGUARD",
    abbreviation: "(SPL)",
    requirements: [
      "A SAQA recognized NQF Level 5 Business Administration or Public Administration qualification or higher.",
      "Ten or more years' practical experience in an administrative role.",
      "The successful completion of an industry related portfolio of evidence to determine the level of your skills.",
    ],
  },
  {
    title: "LIFEGUARD INSTRUCTOR",
    abbreviation: "(LI)",
    requirements: [
      "A SAQA recognized NQF Level 5 Business Administration or Public Administration qualification or higher.",
      "Ten or more years' practical experience in an administrative role.",
      "The successful completion of an industry related portfolio of evidence to determine the level of your skills.",
    ],
  },
  {
    title: "LIFEGUARD ASSESSOR",
    abbreviation: "(LA)",
    requirements: [
      "A SAQA recognized NQF Level 5 Business Administration or Public Administration qualification or higher.",
      "Ten or more years' practical experience in an administrative role.",
      "The successful completion of an industry related portfolio of evidence to determine the level of your skills.",
    ],
  },
  {
    title: "LIFEGUARD SUPERVISION",
    abbreviation: "(LS)",
    requirements: [
      "A SAQA recognized NQF Level 5 Business Administration or Public Administration qualification or higher.",
      "Ten or more years' practical experience in an administrative role.",
      "The successful completion of an industry related portfolio of evidence to determine the level of your skills.",
    ],
  },
];

// NEW: The 5-step process data
const processSteps = [
  {
    abbr: "PL",
    color: "bg-[#5fa82d]", // Green
    bgLight: "bg-[#f4ece9]", // Light Pink/Beige
    text: "Complete the Portfolio of Evidence (PoE) at your own pace and in your own time. You have three (3) months in which to complete and return the PoE for assessment.",
  },
  {
    abbr: "SPL",
    color: "bg-[#5b9bd5]", // Blue
    bgLight: "bg-[#f8f6e7]", // Light Yellow/Cream
    text: "", // Empty in screenshot
  },
  {
    abbr: "LI",
    color: "bg-[#ffc000]", // Yellow/Orange
    bgLight: "bg-[#e2f0d9]", // Light Green
    text: "Attend a 5-day Masterclass – update your skills and complete your Portfolio of Evidence (PoE) during the Masterclass.",
  },
  {
    abbr: "LA",
    color: "bg-[#a5a5a5]", // Grey
    bgLight: "bg-[#ddebf7]", // Light Blue
    text: "Attend a 5-day Masterclass – update your skills and complete your Portfolio of Evidence (PoE) during the Masterclass.",
  },
  {
    abbr: "LS",
    color: "bg-[#ed7d31]", // Orange
    bgLight: "bg-[#b4c6e7]", // Darker Blue
    text: "Organise an in-house Masterclass to professionalise the administrative body at your organisation. Update your team's skills and complete the Portfolio of Evidence (PoE) during the Masterclass. Great for team building! (Minimum 10 delegates.)",
  },
];

export default function ProfessionalDesignations() {
  return (
    <>
      {/* Hero Image Banner */}
      <section className="w-full bg-slate-100">
        <div className="mx-auto max-w-[1280px]">
          <div className="relative aspect-[21/9] w-full overflow-hidden md:aspect-[3/1]">
            <Image
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200&h=400"
              alt="Professional Designations"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* Intro Text */}
      <section className="bg-white py-12 text-center md:py-16">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <p className="text-sm leading-relaxed text-slate-700">
            A professional designation is earned by a person in a particular
            field by meeting certain requirements, and successfully completing a
            Portfolio of Evidence (PoE) to show competence in performing a
            certain job or task. It is an official endorsement from a
            professional body of your skills and experience.
          </p>
          <h2 className="mt-8 text-2xl font-extrabold uppercase text-[#8b1c62]">
            LPSA OFFERS FIVE SAQA-REGISTERED PROFESSIONAL DESIGNATIONS
          </h2>
        </div>
      </section>

      {/* Designations Grid */}
      <section className="bg-white pb-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-8 text-center">
            <h3 className="text-sm font-bold text-slate-800">
              Minimum qualification and experience requirements:
            </h3>
            <p className="mt-1 text-[13px] text-red-700">
              <strong>Note:</strong> If you do not have the qualifications
              required and have attended training during your years as a
              Lifeguard, we do <strong>Recognise Prior Learning (RPL)</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {designations.map((d, i) => (
              <div key={i} className="flex flex-col">
                <div className="flex h-24 flex-col items-center justify-center border border-b-0 border-slate-200 bg-navy px-3 py-6 text-center">
                  <h4 className="text-[12px] font-bold uppercase tracking-wide text-white">
                    {d.title}
                  </h4>
                  <span className="mt-1 text-[12px] text-white">
                    {d.abbreviation}
                  </span>
                </div>

                <div className="flex-1 border border-slate-200 bg-white p-5">
                  <ul className="list-disc space-y-4 pl-4 text-[12px] leading-relaxed text-slate-700 marker:text-[#0A1931]">
                    {d.requirements.map((req, j) => (
                      <li key={j}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-4xl space-y-6">
            {/* Validity & CPD Requirement - Highlighted Box */}
            <div className="flex flex-col items-center justify-center rounded-lg border border-[#0A1931]/10 bg-slate-50 p-6 text-center sm:flex-row sm:text-left sm:gap-4">
              <span className="material-symbols-outlined text-3xl text-[#8b1c62]">
                verified
              </span>
              <div>
                <h4 className="text-sm font-bold text-[#0A1931]">
                  Validity & Continued Professional Development (CPD)
                </h4>
                <p className="mt-1 text-[13px] leading-relaxed text-slate-700">
                  LPSA professional designations are valid for{" "}
                  <strong>2 years</strong>. To maintain your designation, you
                  must earn <strong>20 CPD points</strong> within the 2-year
                  period to show your commitment to ongoing learning and keeping
                  up to date with industry skills.
                </p>
              </div>
            </div>

            {/* Benchmarking Explanation */}
            <div className="text-center text-[13px] leading-relaxed text-slate-600">
              <p>
                Professional designations give employers an indication of the
                levels of competence of the members who qualify for them.
                Designations are awarded based on an assessment against a set of
                outcomes.
                <br className="hidden sm:block" />
                <strong className="mt-2 inline-block text-slate-800">
                  LPSA Professional Designations are nationally and
                  internationally benchmarked.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Booklet CTA */}
      <section className="bg-white pb-16">
        <div className="flex justify-center">
          <button className="rounded-md bg-[#8b1c62] px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-[#6d134c]">
            Download the Professional Designation Booklet
          </button>
        </div>
      </section>

      {/* NEW: The 5-Step Process Section */}
      <section className="bg-[#f4f4f4] py-16">
        <div className="mx-auto max-w-[1100px] px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-xl font-bold text-[#8b1c62]">
              How do I get a professional designation?
            </h2>
            <p className="mt-4 text-[13px] text-slate-700">
              <strong>Note:</strong> All costs shown below include VAT, the
              registration fee and 2 year professional membership.
            </p>
            <p className="mt-1 text-[13px] text-slate-700">
              A payment plan can be negotiated - email{" "}
              <a
                href="mailto:cpd@lpsa.org.za"
                className="text-[#8b1c62] hover:underline"
              >
                cpd@lpsa.org.za
              </a>
            </p>
          </div>

          {/* Process Grid */}
          <div className="mt-12 flex flex-col gap-4 md:flex-row md:gap-2">
            {processSteps.map((step, i) => (
              <div
                key={i}
                className={`flex flex-1 flex-col shadow-sm border border-slate-200/50 ${step.bgLight}`}
              >
                {/* Colored Header */}
                <div
                  className={`${step.color} flex items-center justify-center py-4 text-white`}
                >
                  <h4 className="text-xl font-bold">{step.abbr}</h4>
                </div>

                {/* Content Box */}
                <div className="flex-1 p-5">
                  <p className="text-[13px] leading-relaxed text-slate-800">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
