import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = { title: "Professional Designations" };

const designations = [
  {
    title: "Certified Office Professional (COP)",
    requirements: [
      "A SAQA recognised NQF Level 4 Business Administration or Public Administration qualification",
      "Two to four years practical work experience in administration",
      "The successful completion of an industry relevant portfolio of evidence to determine the level of your skills",
    ],
  },
  {
    title: "Certified Managerial Office Professional (CMOP)",
    requirements: [
      "A matric certificate or a SAQA recognised NQF Level 4 Business Administration or Public Administration qualification or higher",
      "More than four years practical experience in an administrative role",
      "The successful completion of an industry relevant portfolio of evidence to determine the level of your skills",
    ],
  },
  {
    title: "Certified Office Manager (COM)",
    requirements: [
      "A SAQA recognised NQF Level 5 Business Administration or Public Administration qualification or higher",
      "Five or more years practical experience in an administrative role",
      "The successful completion of an industry relevant portfolio of evidence to determine the level of your skills",
    ],
  },
];

// 1. ADDED UNIQUE IMAGES TO EACH PATHWAY
const pathways = [
  {
    title: "GO SOLO!",
    desc: "Complete the Portfolio of Evidence (PoE) at your own pace from start to finish. You can download the template and submit the PoE for assessment.",
    price: "R2400",
    color: "bg-[#6b6b6b]", // Grey
    btnText: "Download PoE Template",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400&h=300", // Solo working
  },
  {
    title: "ONLINE MASTERCLASS",
    desc: "Complete an online masterclass programme – update your skills and complete your Portfolio of Evidence (PoE) during the programme. A blend of blended learning.",
    price: "R4800",
    color: "bg-[#b3205e]", // Magenta
    btnText: "Download PoE Template",
    img: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&q=80&w=400&h=300", // Online learning
  },
  {
    title: "PUBLIC MASTERCLASS",
    desc: "Attend a 5-Day Masterclass, update your skills and complete your Portfolio of Evidence (PoE) during the Masterclass.",
    price: "R11750",
    color: "bg-[#8b1c62]", // Darker Magenta
    btnText: "Download PoE Template",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=400&h=300", // Public speaking/class
  },
  {
    title: "IN-HOUSE MASTERCLASS",
    desc: "Offered in-house or in the workplace directly at your organisation. Update your skills and complete your Portfolio of Evidence (PoE) during the Masterclass. Open for team building (maximum 10 delegates).",
    price: "Enquire",
    color: "bg-[#b93e76]", // Lighter Magenta
    btnText: "Request a Quote",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400&h=300", // Team working
  },
];

export default function ProfessionalDesignations() {
  return (
    <>
      {/* Hero Image Banner */}
      <section className="w-full bg-slate-100">
        <div className="mx-auto max-w-[1280px]">
          <div className="relative aspect-[21/9] w-full overflow-hidden md:aspect-[3/1]">
            {/* 2. RELIABLE HERO IMAGE */}
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
          <h2 className="mt-8 text-2xl font-extrabold text-[#8b1c62]">
            OPSA offers three SAQA Registered Professional Designations
          </h2>
        </div>
      </section>

      {/* Designations Grid */}
      <section className="bg-white pb-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-8 text-center">
            <h3 className="text-sm font-bold text-slate-800">
              Minimum qualification and experience requirements:
            </h3>
            <p className="mt-1 text-[13px] text-red-700">
              <strong>Note:</strong> If you do not have the qualifications
              required and have attended training during your years as an
              administrative professional, we do{" "}
              <strong>Recognise Prior Learning (RPL)</strong>.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {designations.map((d, i) => (
              <div key={i} className="flex flex-col">
                <div className="bg-[#b93e76] px-4 py-3 text-center text-sm font-bold text-white">
                  {d.title}
                </div>
                <div className="flex-1 border border-t-0 border-slate-200 bg-[#f8f8f8] p-6">
                  <ul className="list-disc space-y-3 pl-4 text-[13px] leading-relaxed text-slate-700 marker:text-[#8b1c62]">
                    {d.requirements.map((req, j) => (
                      <li key={j}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-[12px] leading-relaxed text-slate-600">
            <p>
              OPSA professional designations are valid for 2 years. Twenty (20)
              CPD points must be earned in the 2-year period to show commitment
              to ongoing learning and keeping up to date with the skills and
              knowledge required in the workplace.
            </p>
            <p className="mt-2">
              (Professional designations give employers an indication of the
              levels of competence of the members who qualify for them.
              Designations are assessed based on an assessment against a set of
              outcomes. OPSA Professional Designations are nationally and
              internationally benchmarked).
            </p>
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

      {/* Pathway Section */}
      <section className="bg-[#f4f4f4] py-16">
        <div className="mx-auto max-w-[1000px] px-4 md:px-6">
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
                href="mailto:downrys@opsa.org.za"
                className="text-[#8b1c62] hover:underline"
              >
                downrys@opsa.org.za
              </a>
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pathways.map((p, i) => (
              <div key={i} className="flex flex-col">
                {/* Top Color Block */}
                <div
                  className={`${p.color} flex flex-1 flex-col p-5 text-white`}
                >
                  <h4 className="text-center text-[13px] font-bold uppercase tracking-wide">
                    {p.title}
                  </h4>
                  <p className="mt-4 text-[12px] leading-relaxed opacity-90">
                    {p.desc}
                  </p>
                </div>

                {/* Price Block */}
                <div className="bg-white px-4 py-6 text-center text-2xl font-bold text-[#8b1c62]">
                  {p.price}
                </div>

                {/* Image Block */}
                <div className="relative aspect-[4/3] w-full bg-slate-200">
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Button Block */}
                <div className="bg-[#e5e5e5] p-3 text-center">
                  <button className="w-full rounded bg-[#8b1c62] py-2 text-[11px] font-bold text-white hover:bg-[#6d134c]">
                    {p.btnText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
