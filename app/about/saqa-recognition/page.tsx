import type { Metadata } from "next";

export const metadata: Metadata = { title: "SAQA Recognition" };

export default function SqaRecognition() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        {/* Page Title */}
        <h1 className="text-2xl font-bold text-[#8b1c62] md:text-3xl">
          SAQA Recognition
        </h1>

        {/* Content Paragraphs */}
        <div className="mt-6 space-y-4 text-[14px] leading-relaxed text-slate-700 md:text-[15px]">
          <p>
            In 2026 the Lifeguard Profession of South Africa (LPSA) is
            undergoing the process to be recognised by SAQA as a professional
            body for the lifeguarding and water safety industry. During the
            interim period, LPSA operates as a non-statutory body under the NPO
            Act 71 of 1997, ensuring that it meets the rigorous requirements of
            a professional body and the needs of its members.
          </p>
          <p>
            Once fully recognised, LPSA will be audited by SAQA periodically to
            ensure ongoing compliance. This recognition will allow LPSA to
            register professional designations on the National Qualifications
            Framework (NQF), providing official endorsement of our members'
            skills and experience.
          </p>
        </div>

        {/* Call to Action Button (Centered) */}
        <div className="mt-12 flex justify-center">
          <a
            href="/files/saqa-recognition-certificate.pdf" // Replace with your actual certificate PDF path
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-md bg-[#8b1c62] px-8 text-sm font-bold text-white shadow-sm transition-colors hover:bg-[#6d134c] focus:outline-none focus:ring-2 focus:ring-[#8b1c62] focus:ring-offset-2"
          >
            Click to view certificate
          </a>
        </div>
      </div>
    </section>
  );
}
