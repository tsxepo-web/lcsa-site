import Link from "next/link";
import Image from "next/image";
import { Card, Cards, Section, btnDark } from "@/components/ui";

// Replace these with your actual image paths (e.g., "/images/membership.jpg")
const heroCards = [
  {
    title: "Membership",
    href: "/membership",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600&h=400",
  },
  {
    title: "Upcoming Events",
    href: "/events",
    img: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=600&h=400",
  },
  {
    title: "Masterclasses 2026",
    href: "/designations/masterclasses",
    img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800&h=600",
  },
  {
    title: "Annual Conference 2026",
    href: "/events/conference",
    img: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=600&h=400",
  },
  {
    title: "Awards 2026",
    href: "/awards/2026",
    img: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?auto=format&fit=crop&q=80&w=600&h=400",
  },
  {
    title: "Subscribe",
    href: "#subscribe",
    img: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=600&h=400",
  },
];

export default function Home() {
  return (
    <>
      {/* NEW HERO GRID SECTION */}
      <section className="w-full bg-white pb-16 pt-10">
        <div className="mx-auto max-w-[1100px] px-4 md:px-6">
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {heroCards.map((card) => (
              <div key={card.title} className="group flex flex-col">
                {/* Image Container with Overlay */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 shadow-sm border border-slate-200">
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Title Link */}
                <Link
                  href={card.href}
                  className="mt-4 text-center text-[18px] font-bold text-[#8b1c62] underline decoration-2 underline-offset-4 hover:text-[#5f0e40] transition-colors"
                >
                  {card.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT LPSA DOES */}
      <Section>
        <div className="mb-10 max-w-3xl">
          <div className="mb-2 text-xs font-bold uppercase tracking-widest text-brand">
            What LPSA does
          </div>
          <h2 className="text-3xl font-extrabold text-navy">
            Professional standards for safer water environments.
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            LPSA has five functional areas: Professional Standards, Ethics &amp;
            Discipline, Scope of Practice, Accreditation, and Health &amp;
            Fitness. CPD sits across all five.
          </p>
        </div>
        <Cards>
          <Card href="/about" tag="01" title="About LPSA">
            Learn about the Interim Council, its purpose and professional
            framework.
          </Card>
          <Card href="/cpd" tag="02" title="CPD Programme">
            Understand CEU requirements, the annual cycle and the CPD portal.
          </Card>
          <Card href="/accreditation" tag="03" title="Accreditation">
            Information for accreditors and recognised service providers.
          </Card>
        </Cards>
      </Section>

      {/* FOR THE PUBLIC & EMPLOYERS */}
      <Section soft>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="mb-2 text-xs font-bold uppercase tracking-widest text-brand">
              For the public &amp; employers
            </div>
            <h2 className="text-3xl font-extrabold text-navy">
              Put public safety first.
            </h2>
            <p className="mt-3 text-lg text-slate-600">
              LPSA&apos;s register is the definitive source for verifying a
              lifeguard&apos;s professional status.
            </p>
            <Link href="/register" className={`${btnDark} mt-5`}>
              Professional Register
            </Link>
          </div>

          {/* Kept a simplified inline list here instead of RowList since we moved links to the navbar */}
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
            <h3 className="font-bold text-navy mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm font-medium text-slate-600">
              <li>
                <Link href="/register" className="hover:text-brand">
                  Verify a Lifeguard
                </Link>
              </li>
              <li>
                <Link href="/membership" className="hover:text-brand">
                  Apply for Registration
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-brand">
                  Documents & Policies
                </Link>
              </li>
              <li>
                <Link href="/ethics" className="hover:text-brand">
                  Ethics & Discipline
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
