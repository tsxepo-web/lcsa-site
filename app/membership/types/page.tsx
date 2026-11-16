import type { Metadata } from "next";

export const metadata: Metadata = { title: "Types of Membership" };

const membershipTiers = [
  {
    title: "Associate Member",
    fee: "R500.00",
    description: "A member who joins LPSA for career advancement.",
    benefits: [
      "Access to the online members portal for free resources, online learning and networking",
      "Coaching and mentoring by professional members",
      "Career advice and guidance",
      "Discount to LPSA events",
    ],
    showPayButton: true,
    payButtonLabel: "Pay Associate Membership Fee",
    footerNote: null,
  },
  {
    title: "Professional Member",
    fee: "R700.00",
    description: "A member who has achieved an LPSA professional designation.",
    benefits: [
      "A SAQA recognised professional designation",
      "Access to the online members portal",
      "Coaching and mentoring by peers",
      "Career advice and guidance",
      "Discount to LPSA events",
      "Can serve on the Executive Committee and take part in the AGM",
    ],
    showPayButton: false,
    payButtonLabel: "",
    footerNote:
      "Invoices / a link for payment will be provided once the application is successful. There is a registration fee of R1000.00 for professional designations.",
  },
  {
    title: "Student Member (full-time)",
    fee: "R350.00",
    description:
      "A member who is studying (full-time) Business Administration or similar.",
    benefits: [
      "Access to the online members portal for free resources, online learning and networking",
      "Coaching and mentoring by professional members",
      "Career advice and guidance",
      "Discount to LPSA events",
    ],
    showPayButton: true,
    payButtonLabel: "Pay Student Membership Fee",
    footerNote: null,
  },
];

export default function MembershipTypes() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-3">
          {membershipTiers.map((tier) => (
            <div
              key={tier.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md"
            >
              <div className="p-8 pb-6 text-center">
                <h3 className="text-xl font-bold text-[#0A1931]">
                  {tier.title}
                </h3>

                <div className="mt-5 flex items-baseline justify-center gap-2 text-[#8b1c62]">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Annual Fee:
                  </span>
                  <span className="text-3xl font-extrabold">{tier.fee}</span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  {tier.description}
                </p>
              </div>
              <div className="flex flex-1 flex-col p-8 pt-0">
                <ul className="space-y-4">
                  {tier.benefits.map((benefit, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-[13.5px] text-slate-700"
                    >
                      <span className="material-symbols-outlined mt-0.5 shrink-0 text-[18px] text-[#8b1c62]">
                        check_circle
                      </span>
                      <span className="leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-8">
                  <div className="border-t border-slate-100 pt-6">
                    <button className="w-full rounded-lg bg-[#8b1c62] py-3 text-sm font-bold text-white transition-colors hover:bg-[#6d134c]">
                      Apply Online
                    </button>
                    {tier.showPayButton ? (
                      <button className="mt-3 w-full rounded-lg border-2 border-[#8b1c62] bg-transparent py-2.5 text-[13px] font-bold text-[#8b1c62] transition-colors hover:bg-[#8b1c62]/5">
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
