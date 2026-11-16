import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = { title: "Recertification Handbook" };

export default function RecertificationHandbook() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-[#0A1931] md:text-4xl">
            Resources
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            The official Recertification Handbook for the Lifeguard Profession
            of South Africa. Click the document below to view it in your browser
            or download a copy.
          </p>
        </div>

        {/* Booklet Preview Container */}
        <div className="mt-12 flex flex-col items-center">
          {/* This is the "Cover" */}
          <a
            href="/files/LSA-1184-Patrol-Guidelines.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block w-full max-w-[400px] overflow-hidden rounded-sm border border-slate-200 bg-white shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl"
          >
            {/* Top Bar (Logo & Contact) */}
            <div className="flex items-center justify-between border-b border-slate-100 bg-white p-6">
              <div className="relative h-14 w-14">
                <Image
                  src="/images/lpsa-logo.png" // Update this if your filename is different
                  alt="Lifeguard Profession of South Africa Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-right text-[10px] font-semibold text-[#0A1931]">
                <p>info@lifeguardcouncil.org.za</p>
                <p className="mt-1">www.lpsa.org.za</p>
              </div>
            </div>

            {/* Blue Block with Image */}
            <div className="relative mx-4 mt-4 bg-[#0A1931] px-6 py-8">
              <div className="relative mx-auto aspect-square w-full max-w-[220px] overflow-hidden border-4 border-white bg-slate-200 shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400"
                  alt="Recertification Handbook Cover"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Title Block */}
            <div className="bg-[#f4f4f4] px-6 py-10 text-center">
              <h2 className="font-serif text-2xl tracking-wide text-[#0A1931]">
                RECERTIFICATION
              </h2>
              <h3 className="mt-2 text-4xl font-black tracking-tight text-black">
                HANDBOOK
              </h3>
              <p className="mt-12 text-[11px] font-medium text-slate-600">
                March 2025
              </p>
            </div>
          </a>

          {/* Action Button */}
          <a
            href="/files/Recertification-Handbook-March-2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 flex items-center gap-2 rounded bg-[#D11C1C] px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-[#b01515]"
          >
            <span className="material-symbols-outlined text-lg">
              open_in_new
            </span>
            View / Download PDF
          </a>
          <p className="mt-3 text-[11px] text-slate-500">
            Opens in a new tab. File size: ~2.5MB
          </p>
        </div>
      </div>
    </section>
  );
}
