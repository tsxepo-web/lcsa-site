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
            In 2026, the Lifeguard Profession of South Africa is not yet a
            SAQA-recognised professional body.
          </p>
          <p>Status – Pending application</p>
        </div>

        {/* Disabled Button */}
        <div className="mt-12 flex justify-center">
          <button
            disabled
            className="inline-flex h-12 cursor-not-allowed items-center justify-center rounded-md bg-slate-300 px-8 text-sm font-bold text-slate-500 shadow-sm"
          >
            Certificate Pending
          </button>
        </div>
      </div>
    </section>
  );
}
