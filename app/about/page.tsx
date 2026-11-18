import NewsLetterForm from "@/components/NewsletterForm";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = { title: "About LPSA" };

const benefits = [
  {
    title: "Professional Development",
    color: "text-[#2563eb]",
    desc: "Professional Designations give you credibility in your industry and a sense of security and belonging in your career",
  },
  {
    title: "Personal Development",
    color: "text-[#6b7280]",
    desc: "Become a member of a community that wants to help you grow personally and professionally through continuous learning",
  },
  {
    title: "Taking charge",
    color: "text-[#3b82f6]",
    desc: "Professional Associations give their members the power to make a real change in their line of work.",
  },
  {
    title: "Continuous Learning",
    color: "text-[#ea580c]",
    desc: "Members have access to the LPSA Online Learning Portal with content and learning that is essential for administrative professionals and will keep you up to date",
  },
  {
    title: "Commitment",
    color: "text-[#eab308]", // Yellow
    desc: "Show that you are serious about your professional development. Prove that your career is more than just a “job” and that you have long term goals",
  },
  {
    title: "Networking",
    color: "text-[#16a34a]", // Green
    desc: "Interact with like-minded administrative professionals and build relationships that can help you in your career",
  },
];

export default function AboutLPSA() {
  return (
    <>
      {/* Main Content Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          {/* Top Header */}
          <div className="text-center">
            <h1 className="text-xl font-bold text-[#8b1c62] md:text-2xl">
              Building Careers | Attaining Excellence
            </h1>
          </div>

          {/* Chain Link Image */}
          <div className="relative mx-auto mt-8 h-32 w-full max-w-lg md:h-48">
            {/* Replace with your actual chain image from the screenshot */}
            <Image
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=400"
              alt="Linked chain representing career connections"
              fill
              className="object-contain"
            />
          </div>

          {/* Sub-header */}
          <div className="mt-8 text-center">
            <h2 className="text-lg font-bold text-[#8b1c62] md:text-xl">
              Strengthen the links to building a successful career
            </h2>
          </div>

          {/* Benefits Grid */}
          <div className="mt-12 grid gap-x-8 gap-y-10 md:grid-cols-3">
            {benefits.map((benefit, i) => (
              <div key={i} className="text-center">
                <h3 className={`text-[15px] font-bold ${benefit.color}`}>
                  {benefit.title}
                </h3>
                <p className="mt-3 text-[12px] leading-relaxed text-slate-600">
                  {benefit.desc}
                </p>
              </div>
            ))}
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
