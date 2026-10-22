"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-md bg-navy text-sm font-bold text-white">
            SA
          </span>
          <span className="leading-tight">
            <b className="block text-navy">LCSA</b>
            <small className="text-xs text-slate-500">
              Lifeguard Council · South Africa
            </small>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex">
          {nav.map((n) => {
            const active =
              n.href === "/" ? pathname === "/" : pathname.startsWith(n.href);
            return (
              <Link
                key={n.href}
                href={n.href}
                className={`rounded px-3 py-2 text-sm font-medium transition-colors ${
                  active ? "text-brand" : "text-slate-700 hover:text-red-600"
                }`}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/register"
            className="rounded-md bg-navy px-4 py-2 text-sm font-semibold text-white hover:bg-navy/90"
          >
            Verify Lifeguard
          </Link>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="rounded border border-line px-3 py-2 text-sm xl:hidden"
          >
            Menu
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-line bg-white px-5 py-3 xl:hidden">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-medium text-slate-700 transition-colors hover:text-red-600"
            >
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
