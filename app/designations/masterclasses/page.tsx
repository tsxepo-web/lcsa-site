import type { Metadata } from "next";

export const metadata: Metadata = { title: "2026 Masterclasses" };

const masterclasses = [
  {
    title: "Professional Designation Masterclass (PDMC)",
    facilitator: "Dawn Williams",
    description:
      "The Professional Designation Masterclass looks at the world of the Administrative Professional and focuses on the critical skills that are essential for Administrative Professionals in the workplace and to keep relevant for the future. Topics include (but are not limited to) technical skills, organisational skills, communication skills, interpersonal skills, problem solving and professionalism.",
    dates: [
      "9-13 March 2026: Johannesburg",
      "6-10 July 2026: Cape Town",
      "17-21 August 2026: Durban",
      "7-11 September 2026: Johannesburg",
    ],
    formTitle: "PDMC Registration Forms",
    formBtn: "Johannesburg",
  },
  {
    title: "Masterclass: Business Administration (MCBA)",
    facilitator: "Tholo Motaung",
    description:
      "The Masterclass: Business Administration focuses on topics to provide a comprehensive understanding of business management and operations. Topics include (but are not limited to) business writing, project coordination, event planning, financial basics, human resource management, organisational skills and leadership, presentations, ethics and professionalism.",
    dates: [
      "23-27 February 2026: Johannesburg",
      "20-24 April 2026: Cape Town",
      "24-28 August 2026: KwaZulu Natal",
      "21 - 25 September 2026: Johannesburg",
      "26-30 October 2026: Cape Town",
    ],
    formTitle: "MCBA Registration Forms",
    formBtn: "Registration",
  },
];

export default function Masterclasses() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-[#8b1c62] md:text-4xl">
            2026 OPSA Masterclasses
          </h1>
          <p className="mt-3 text-sm font-bold text-[#8b1c62]">
            OPSA Masterclasses are facilitated in-house on request for 5 or more
            delegates
          </p>

          <div className="mx-auto mt-8 max-w-3xl border-y border-slate-200 py-6 text-[13px] leading-relaxed text-slate-700">
            <strong>Note:</strong> OPSA Professional Designation Masterclass and
            Business Administration Masterclasses require delegates to complete
            a Portfolio of Evidence during the Masterclass. On successful
            completion, delegates are awarded professional designations. The
            cost of the Masterclass includes a 2-year professional membership
            fee.
          </div>
        </div>

        {/* Masterclasses Grid */}
        <div className="mt-12 grid items-stretch gap-12 md:grid-cols-2">
          {masterclasses.map((mc, i) => (
            // ADDED: flex, flex-col, h-full to make the column stretch completely
            <div key={i} className="flex flex-col h-full">
              {/* Title & Facilitator */}
              <div className="text-center">
                <h2 className="text-xl font-bold text-[#8b1c62]">{mc.title}</h2>
                <p className="mt-1 text-sm text-slate-600">
                  Facilitator: {mc.facilitator}
                </p>
              </div>

              <div className="mt-6 border-y border-slate-200 py-6 text-center text-[13px] leading-relaxed text-slate-700">
                {mc.description}
              </div>

              {/* Brochure Button */}
              <div className="mt-6 text-center">
                <button className="rounded bg-[#8b1c62] px-8 py-2 text-sm font-bold text-white transition-colors hover:bg-[#6d134c]">
                  Brochure
                </button>
              </div>

              {/* Dates List */}
              <div className="mt-6 flex flex-col items-center gap-3 pb-6 text-[13px] text-slate-700">
                {mc.dates.map((date, j) => (
                  <div
                    key={j}
                    className="w-full max-w-[300px] border-b border-slate-100 pb-2 text-center last:border-0 last:pb-0"
                  >
                    {date}
                  </div>
                ))}
              </div>

              {/* Registration Section */}
              {/* ADDED: mt-auto pt-8 to push this block to the bottom of the column */}
              <div className="mt-auto pt-8 text-center">
                <div className="mx-auto w-full border-t border-slate-200 pt-8">
                  <h3 className="text-lg font-bold text-[#8b1c62]">
                    {mc.formTitle}
                  </h3>
                  <button className="mt-4 rounded bg-[#8b1c62] px-8 py-2 text-sm font-bold text-white transition-colors hover:bg-[#6d134c]">
                    {mc.formBtn}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
