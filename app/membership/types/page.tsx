import type { Metadata } from "next";

export const metadata: Metadata = { title: "Types of Membership" };

const membershipTiers = [
  {
    title: "ASSOCIATE MEMBER",
    fee: "R 800.00",
    description: "For members who join LPSA for career advancement.",
    benefits: [
      "Access to the online members portal for free resources, online learning, and networking",
      "Can serve on the Executive Committee and take part in the AGM",
    ],
    showPayButton: true,
    payButtonLabel: "Pay Associate Fee",
    footerNote: null,
  },
  {
    title: "PROFESSIONAL MEMBER",
    fee: "R 800.00",
    description: (
      <>
        A member who has achieved an{" "}
        <a href="/designations" className="text-[#8b1c62] underline">
          LPSA professional designation (link)
        </a>
      </>
    ),
    benefits: [
      "A SAQA-recognised professional designation",
      "Access to the online members portal",
      "Coaching and mentoring by peers",
      "Career advice and guidance",
    ],
    showPayButton: false,
    payButtonLabel: "",
    footerNote:
      "Invoices / a link for payment will be provided once the application is successful.",
  },
  {
    title: "STUDENT MEMBER (full-time)",
    fee: "R 350.00",
    description: "A member who is studying (full-time) Risk/Safety Management.",
    benefits: [
      "Access to the online members portal for free resources, online learning, and networking",
      "Coaching and mentoring by professional members",
    ],
    showPayButton: true,
    payButtonLabel: "Pay Student Fee",
    footerNote: null,
  },
  {
    title: "ORGANISATION MEMBERSHIP",
    fee: "R5 000.00",
    description:
      "A member who employs professional lifeguards to administer using LPSA guidelines.",
    benefits: [
      "Access to the online members portal for free resources, online verification, and networking.",
      "Access to Standard Operating Procedures and Risk Assessments.",
      "Discount to LPSA events (appoints a delegate).",
    ],
    showPayButton: true,
    payButtonLabel: "Pay Organisation Fee",
    footerNote: null,
  },
  {
    title: "LIFE SAVING CLUBS MEMBERSHIP",
    fee: "R1 300.00",
    description:
      "A membership that provides professional lifeguards and trainees with an opportunity to stay active in the profession and administer using LPSA guidelines.",
    benefits: [
      "Access to the online members portal for free resources, online learning, and networking",
      "Voluntary duties",
      "Access to Standard Operating Procedures and Risk Assessments",
      "Discount to LPSA events (appoints a delegate)",
    ],
    showPayButton: true,
    payButtonLabel: "Pay Club Fee",
    footerNote: null,
  },
  {
    title: "TRAINING PROVIDER MEMBERSHIP",
    fee: "R1 300.00",
    description:
      "A member who employs professional lifeguards to administer using LPSA guidelines.",
    benefits: [
      "Access to the online members portal for free resources, online learning, and networking",
      "Discount to LPSA events (appoints a delegate)",
    ],
    showPayButton: true,
    payButtonLabel: "Pay Provider Fee",
    footerNote: null,
  },
];

export default function MembershipTypes() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Page Title */}
        <div className="mb-10">
          <h1 className="text-2xl font-bold text-[#0A1931] md:text-3xl">
            Type Of Membership
          </h1>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {membershipTiers.map((tier) => (
            <div
              key={tier.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md"
            >
              <div className="p-8 pb-6 text-center">
                <h3 className="text-[15px] font-bold text-[#0A1931]">
                  {tier.title}
                </h3>

                <div className="mt-5 flex flex-col items-center justify-center gap-1 text-[#0A1931]">
                  <span className="text-[12px] font-medium">Annual fee:</span>
                  <span className="text-xl font-bold">{tier.fee}</span>
                </div>

                <p className="mt-4 text-[13px] leading-relaxed text-slate-600">
                  {tier.description}
                </p>
              </div>

              <div className="flex flex-1 flex-col p-8 pt-0">
                <ul className="space-y-3">
                  {tier.benefits.map((benefit, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-[13px] text-slate-700"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0A1931]"></span>
                      <span className="leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-8">
                  <div className="border-t border-slate-100 pt-6">
                    <button className="w-full rounded-md bg-[#8b1c62] py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#6d134c]">
                      Apply Online
                    </button>
                    {tier.showPayButton ? (
                      <button className="mt-3 w-full rounded-md border border-[#8b1c62] bg-transparent py-2.5 text-[13px] font-bold text-[#8b1c62] transition-colors hover:bg-[#8b1c62]/5">
                        {tier.payButtonLabel}
                      </button>
                    ) : (
                      <p className="mt-4 text-center text-[11px] leading-relaxed text-slate-500">
                        {tier.footerNote}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
