import NewsLetterForm from "@/components/NewsletterForm";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = { title: "About LPSA" };

export default function AboutLPSA() {
  return (
    <>
      {/* Main Content Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          {/* Top Header */}
          <div className="text-center">
            <h1 className="text-xl font-bold text-[#8b1c62] md:text-2xl">
              Building Careers | Attaining Water Safety
            </h1>
          </div>

          {/* Chain Link Image */}
          <div className="relative mx-auto mt-8 h-32 w-full max-w-lg md:h-48">
            <Image
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=400"
              alt="Linked chain representing career connections"
              fill
              className="object-contain"
            />
          </div>

          {/* NEW CONTENT SECTION */}
          <div className="mt-16">
            {/* Intro Paragraph */}
            <div className="mx-auto max-w-4xl text-center text-[15px] leading-relaxed text-slate-700 md:text-[16px]">
              <p>
                Lifeguard Profession of South Africa is not about control. It is
                about{" "}
                <strong>
                  protection, credibility, dignity, equality, and
                  sustainability.
                </strong>{" "}
                The Lifeguard Profession of South Africa is the professional
                body mandated to professionalize, regulate, and protect the
                lifeguarding profession in South Africa. For too long,
                lifeguarding has been seen as a casual job. We are changing
                that. We are building a recognized, respected, and sustainable
                profession.
              </p>
            </div>

            {/* Two Columns for "Stand For" and "What We Do" */}
            <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-16">
              {/* What we stand for */}
              <div>
                <h2 className="text-xl font-bold text-[#8b1c62]">
                  What we stand for
                </h2>
                <div className="mt-4 space-y-4 text-[14px] leading-relaxed text-slate-700">
                  <p>
                    We uphold the standards that make lifeguarding a profession:{" "}
                    <strong>
                      Professionalism, Ethics, Safety, Accountability, and
                      Industry Structure.
                    </strong>{" "}
                    We advocate for fair Employment, Liability protection, and
                    compliance.
                  </p>
                </div>
              </div>

              {/* What we do */}
              <div>
                <h2 className="text-xl font-bold text-[#8b1c62]">What we do</h2>
                <ul className="mt-4 list-disc space-y-3 pl-5 text-[14px] leading-relaxed text-slate-700 marker:text-[#8b1c62]">
                  <li>
                    Professional Registration and Credentialing of Lifeguards
                  </li>
                  <li>
                    Development of National Standards for Training, Ethics, and
                    Conduct
                  </li>
                  <li>Advocacy for Employment Rights and Legal Protection</li>
                  <li>Promotion of Water Safety and Drowning Prevention</li>
                  <li>
                    Safety Audits, Compliance, and Risk Management for aquatic
                    facilities
                  </li>
                  <li>Continuing Professional Development (CPD)</li>
                </ul>
              </div>
            </div>

            {/* Highlighted Closing Statement */}
            <div className="mt-12 rounded-lg bg-slate-50 border border-slate-200 p-6 text-center">
              <p className="text-[15px] font-bold text-[#0A1931] md:text-[16px]">
                We protect the public by protecting the practitioner.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-16 border-t border-slate-300" />

          {/* Action Buttons */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Link
              href="/membership/types"
              className="flex h-12 items-center justify-center rounded border-2 border-[#8b1c62] text-[13px] font-bold text-[#8b1c62] transition-colors hover:bg-[#8b1c62] hover:text-white"
            >
              Join LPSA
            </Link>
            <NewsLetterForm />
          </div>

          {/* Disclaimer */}
          <div className="mt-6 text-center">
            <p className="text-[10px] text-slate-500">
              P.S.: A newsletter subscriber is not a member. We simply keep you
              up to date with what is happening in the industry.
            </p>
          </div>
        </div>
      </section>

      {/* Dark Footer Callout */}
      <section className="bg-navy py-16 text-center text-white">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <h2 className="text-xl font-light md:text-2xl">
            LPSA is the place for administrative professionals to grow
            professionally and personally
          </h2>
          <p className="mt-6 text-sm text-slate-300">
            Email:{" "}
            <a href="mailto:admin@lpsa.org.za" className="hover:underline">
              admin@lpsa.org.za
            </a>{" "}
            | Telephone: 064 123 4567 (call or WhatsApp)
          </p>
        </div>
      </section>
    </>
  );
}
