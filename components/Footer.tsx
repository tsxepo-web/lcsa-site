import Link from "next/link";
import { footerGroups } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-[#071225] text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 pt-12 pb-8 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:gap-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-[10px] bg-white text-[#0A1931]">
              <span className="material-symbols-outlined text-xl">
                health_and_safety
              </span>
            </div>
            <div>
              <div className="font-extrabold leading-none tracking-tight text-white">
                Lifeguard Profession of South Africa
              </div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.2em] opacity-70">
                LPSA • Non-Statutory Professional Body
              </div>
            </div>
          </div>

          <p className="mt-4 text-[12px] leading-relaxed text-white/60">
            LPSA is a non-profit, non-statutory professional body established
            under NPO Act 71 of 1997, aligned to NQF Act 67 of 2008 and SAQA
            Policy for Professional Bodies. We establish and maintain a national
            professional register for lifeguards to protect public safety from
            drowning. Interim Constitution Ref LPSA-CON-2026-V1 approved
            08/09/2026. No SAQA Recognition Status yet (interim). Virtual
            platform operation.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest">
            <span className="h-2 w-2 rounded-full bg-[#D11C1C]" />
            WE PUT PUBLIC SAFETY FIRST
          </div>
        </div>
        {footerGroups.map((g) => (
          <div key={g.title}>
            <h4 className="mb-3 font-bold text-white">{g.title}</h4>
            <ul className="space-y-2 text-sm">
              {g.links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 px-5 py-6 text-[11px] text-white/50 md:flex-row md:items-start">
          <p className="max-w-212.5 leading-relaxed">
            © 2026 Lifeguard Profession of South Africa. All Rights Reserved.
            Interim Council. Constitution approved 08/09/2026. Virtual Platform.
            POPIA | PAIA | BCEA | LRA | COIDA compliant.
          </p>

          <div className="flex shrink-0 gap-4 whitespace-nowrap">
            <span>Built to HPCSA benchmark</span>
            <a
              href="https://www.hpcsa.co.za/cpd"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              HPCSA CPD Reference
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
