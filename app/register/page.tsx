"use client";

import { useState } from "react";

type LookupResult =
  | { error: true; message: string }
  | {
      error?: false;
      status: string;
      photo: string;
      name: string;
      regNo: string;
      designation: string;
      category: string;
      validUntil: string;
      cpdStatus: string;
      employer: string;
    };

const MOCK: LookupResult = {
  status: "ACTIVE",
  photo: "TN",
  name: "Thabo N Molefe",
  regNo: "LCSA-SURF-2026-0847",
  designation: "LG(SURF)(SA)",
  category: "Surf Lifeguard",
  validUntil: "31 Dec 2026",
  cpdStatus: "Compliant — 18/15 points",
  employer: "City of Cape Town",
};

export default function RegisterSection() {
  const [n, r] = useState(""); // input value / setter
  const [l, setLookup] = useState<LookupResult | null>(null); // lookup result

  // "s" = verify handler
  const s = () => {
    const q = n.trim();
    if (!q) {
      setLookup({
        error: true,
        message: "Please enter a registration number.",
      });
      return;
    }
    // mock: any non-empty value returns the sample record
    if (q.toLowerCase().includes("invalid")) {
      setLookup({
        error: true,
        message: `No record found for “${q}”.`,
      });
      return;
    }
    setLookup(MOCK);
  };

  return (
    <section id="register" className="bg-[#0A1931] text-white">
      <div className="mx-auto grid max-w-[1280px] items-start gap-10 px-4 py-12 md:px-6 md:py-16 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left column */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest">
            Professional Register • Verification
          </div>
          <h2 className="mt-4 text-[28px] font-extrabold leading-[1.05] tracking-tight md:text-[36px]">
            Verify a Lifeguard. Protect the Public.
          </h2>
          <p className="mt-4 max-w-[56ch] text-[14px] leading-relaxed text-white/70">
            Employers, municipalities and event organisers must verify
            registration before deployment. Under OHSA 85 of 1993, employing
            non-competent lifeguards may constitute negligence. LCSA Register is
            definitive source.
          </p>

          <div className="mt-6 grid max-w-[520px] grid-cols-2 gap-3 text-[12px]">
            <div className="rounded-xl border border-white/15 bg-white/10 p-4">
              <div className="font-bold">What you can verify</div>
              <div className="mt-1 leading-relaxed text-white/60">
                Name, Designation, Reg No, Category, CPD compliance, Status,
                Valid-until, Employer, Disciplinary flags.
              </div>
            </div>
            <div className="rounded-xl border border-white/15 bg-white/10 p-4">
              <div className="font-bold">For employers</div>
              <div className="mt-1 leading-relaxed text-white/60">
                LEA category requires annual workplace skills plan submission to
                CATHSSETA. Verify individual staff CPD separately.
              </div>
            </div>
          </div>
        </div>

        {/* Right column — verification card */}
        <div className="rounded-[20px] bg-white p-6 text-[#0A1931] shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-[14px] font-bold tracking-wide">
              <span className="material-symbols-outlined text-base">badge</span>
              REGISTER VERIFICATION
            </div>
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2 py-1 text-[10px] font-bold text-emerald-700">
              OFFICIAL
            </span>
          </div>

          <div className="mt-5">
            <label className="text-[11px] font-bold uppercase tracking-widest text-slate-500">
              Registration Number or ID
            </label>
            <div className="mt-2 flex gap-2">
              <input
                value={n}
                onChange={(e) => r(e.target.value)}
                placeholder="LCSA-XXXX-YYYY-NNNN"
                className="h-11 flex-1 rounded-full border border-slate-300 px-4 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#0A1931]/20"
              />
              <button
                onClick={s}
                className="h-11 rounded-full bg-[#0A1931] px-6 text-[13px] font-bold text-white"
              >
                Verify
              </button>
            </div>
            <div className="mt-3 text-[11px] text-slate-500">
              Example: LCSA-SURF-2026-0847 (Thabo N Molefe). Try any value –
              mock returns sample record for demo.
            </div>
          </div>

          {/* Success result */}
          {l && !l.error && (
            <div className="mt-6 overflow-hidden rounded-[14px] border border-slate-200">
              <div className="flex items-center justify-between bg-[#0A1931] px-4 py-3 text-white">
                <span className="text-[12px] font-bold tracking-wide">
                  VERIFICATION RESULT
                </span>
                <span className="rounded-full bg-emerald-400 px-2 py-1 text-[10px] font-bold text-[#0A1931]">
                  {l.status}
                </span>
              </div>

              <div className="grid gap-3 p-4 text-[13px]">
                <div className="flex gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-[#0A1931] font-bold text-white">
                    {l.photo}
                  </div>
                  <div>
                    <div className="text-[15px] font-bold">{l.name}</div>
                    <div className="text-slate-600">
                      {l.regNo} • {l.designation}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-widest text-slate-500">
                      Category
                    </div>
                    <div className="font-medium">{l.category}</div>
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-widest text-slate-500">
                      Valid Until
                    </div>
                    <div className="font-medium">{l.validUntil}</div>
                  </div>

                  <div className="col-span-2">
                    <div className="text-[11px] font-bold uppercase tracking-widest text-slate-500">
                      CPD Compliance
                    </div>
                    <div className="mt-1 inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[12px] font-semibold text-emerald-800">
                      {l.cpdStatus}
                    </div>
                  </div>

                  <div className="col-span-2">
                    <div className="text-[11px] font-bold uppercase tracking-widest text-slate-500">
                      Current Employer
                    </div>
                    <div>{l.employer}</div>
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <button className="h-9 rounded-full bg-[#0A1931] px-4 text-[12px] font-bold text-white">
                    Download Compliance Letter
                  </button>
                  <button className="h-9 rounded-full border border-slate-300 px-4 text-[12px] font-semibold">
                    Report Concern
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Error result */}
          {l?.error && (
            <div className="mt-6 flex gap-2 rounded-xl border border-red-200 bg-red-50 p-4 text-[13px] text-red-800">
              <span className="material-symbols-outlined mt-0.5 shrink-0 text-base">
                error
              </span>
              {l.message}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
