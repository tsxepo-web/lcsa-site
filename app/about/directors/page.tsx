import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = { title: "Directors" };

export default function Directors() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        {/* Page Title */}
        <h1 className="mb-8 text-2xl font-bold text-[#8b1c62]">Directors</h1>

        {/* Intro Section (Image + Text) */}
        <div className="flex flex-col gap-8 md:flex-row md:items-start">
          {/* Image Container */}
          <div className="relative aspect-4/3 w-full shrink-0 overflow-hidden rounded-sm border border-slate-200 bg-slate-100 md:w-99.5">
            <Image
              src="/images/Kathy-Kwetepane.png"
              alt="Cathy Kwetepane"
              fill
              className="object-cover object-top"
            />
          </div>

          {/* Text next to image */}
          <div className="flex-1 space-y-4 text-[13.5px] leading-relaxed text-slate-700">
            <p>
              Cathy Kwetepane: is responsible for strategic leadership, planning
              & national water safety vision. Governance, compliance & standard
              procedure establishment. Legal research, affidavits, approve
              budgets, guide resource allocation, and monitor revenue, cash
              flow, and profitability. Ensure day-to-day operations align with
              strategic priorities, track key performance metrics, and authorize
              major contracts, investments, or restructuring. Keep the board
              informed of material developments, oversee risk management, and
              uphold legal and regulatory standards.
            </p>
            <p>
              She holds a BA in law and a Post-Graduate Certificate in Education
              cum laude, and she is a candidate for LLB. She is a member and a
              National Deputy Secretary-General, Black Lawyers Association;
              Secretary, SA Women Lawyers Association.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-slate-300" />

        <div className="flex flex-col gap-8 md:flex-row md:items-start">
          {/* Image Container */}
          <div className="relative aspect-4/3 w-full shrink-0 overflow-hidden rounded-sm border border-slate-200 bg-slate-100 md:w-99.5">
            <Image
              src="/images/Nkululeko-Dube.png"
              alt="Nkululeko Dube"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Text next to image */}
          <div className="flex-1 space-y-4 text-[13.5px] leading-relaxed text-slate-700">
            <p>
              Nkululeko Dube: is responsible for stakeholder engagement & change
              management. Critical control monitoring & operational risk
              framework. Municipal partnerships, Strategic leadership, planning,
              implementation & national water safety vision. Governance,
              compliance & standard procedure implementation. He has experience
              as a lifeguard during his teenage years. He also furthered his
              commercial law with vast experience in mining, risk management,
              and safety management. He has managed a section of a department
              with 83 employees under him safely.
            </p>
          </div>
        </div>

        <div className="my-10 border-t border-slate-300" />

        <div className="flex flex-col gap-8 md:flex-row md:items-start">
          {/* Image Container */}
          <div className="relative aspect-4/3 w-full shrink-0 overflow-hidden rounded-sm border border-slate-200 bg-slate-100 md:w-99.5">
            <Image
              src="/images/Siyabonga-Ndlovu.png"
              alt="Siyabonga Ndlovu"
              fill
              className="object-cover object-top"
            />
          </div>

          {/* Text next to image */}
          <div className="flex-1 space-y-4 text-[13.5px] leading-relaxed text-slate-700">
            <p>
              Siyabonga Ndlovu: is responsible as the senior administrative and
              governance leader of the organization, pairing strategic oversight
              with operational execution. Ensures the organization follows its
              constitution, bylaws, mandates, and legal or regulatory
              requirements. Sets agendas, coordinates executive committee or
              assembly sessions, oversees minutes and resolutions, and reports
              on organizational performance. He has over five years of
              experience in the security industry as a supervisor, with
              technical certificates of trade.
            </p>
          </div>
        </div>
        <div className="my-10 border-t border-slate-300" />

        <div className="flex flex-col gap-8 md:flex-row md:items-start">
          {/* Image Container */}
          <div className="relative aspect-4/3 w-full shrink-0 overflow-hidden rounded-sm border border-slate-200 bg-slate-100 md:w-99.5">
            <Image
              src="/images/Sarito-Mokgotho.png"
              alt="Sarito Mokgotho"
              fill
              className="object-cover object-top"
            />
          </div>

          {/* Text next to image */}
          <div className="flex-1 space-y-4 text-[13.5px] leading-relaxed text-slate-700">
            <p>
              Sarito Mokgotho: is responsible for internal and external
              communications. Oversees and/or writes press releases, speeches,
              reports, website copy, and social media content while keeping
              brand voice consistent. Advises executives on public messaging,
              arranges speaking opportunities or media training, and engages
              investors, partners, and communities. Monitors media coverage,
              audience feedback, and campaign analytics to report impact and
              refine strategies. Manage relationships with journalists and media
              outlets, pitch stories, handle press inquiries, and oversee PR
              campaigns. He has over a decade of experience in human resources,
              managing over 6000 people, and he holds a national diploma in HR.
              He also specializes in CCMA matters and union negotiations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
