import Link from "next/link";
import { footerGroups } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-[#071225] text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-4">
        <div>
          <h4 className="mb-3 font-bold text-white">LCSA</h4>
          <p className="text-sm">
            The national professional register for lifeguards, focused on
            professional standards, ethics, scope of practice, accreditation,
            health &amp; fitness and CPD.
          </p>
        </div>
        {footerGroups.map((g) => (
          <div key={g.title}>
            <h4 className="mb-3 font-bold text-white">{g.title}</h4>
            <ul className="space-y-2 text-sm">
              {g.links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs">
        © {new Date().getFullYear()} Lifeguard Council of South Africa
      </div>
    </footer>
  );
}
