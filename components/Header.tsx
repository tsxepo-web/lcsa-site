"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        {/* Logo & Branding */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-12 w-12 shrink-0">
            <Image
              src="/images/lpsa-logo.png"
              alt="Lifeguard Profession of South Africa Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="leading-tight">
            <b className="block text-[15px] text-navy">LPSA</b>
            <small className="text-[11px] text-slate-500">
              Lifeguard Profession · South Africa
            </small>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 xl:flex">
          {nav.map((n) => {
            const active =
              n.href === "/" ? pathname === "/" : pathname.startsWith(n.href);
            if (n.children) {
              return (
                <div key={n.href} className="group relative">
                  <Link
                    href={n.href}
                    className={`flex items-center gap-1 rounded px-3 py-2 text-sm font-medium transition-colors ${
                      active
                        ? "text-brand"
                        : "text-slate-700 hover:text-red-600"
                    }`}
                  >
                    {n.label}
                    <span className="material-symbols-outlined text-[16px]">
                      expand_more
                    </span>
                  </Link>
                  <div className="absolute left-0 top-full hidden w-64 pt-2 group-hover:block">
                    <div className="overflow-hidden rounded-md border border-slate-200 bg-white shadow-lg">
                      {n.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-slate-700 transition-colors hover:bg-slate-50 hover:text-red-600"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }
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

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="rounded border border-line px-3 py-2 text-sm xl:hidden"
          >
            Menu
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {open && (
        <nav className="border-t border-line bg-white px-5 py-3 xl:hidden">
          {nav.map((n) => (
            <div key={n.href}>
              <Link
                href={n.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm font-medium text-slate-700 transition-colors hover:text-red-600"
              >
                {n.label}
              </Link>
              {n.children && (
                <div className="ml-4 border-l border-slate-200 pl-4">
                  {n.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setOpen(false)}
                      className="block py-2 text-sm text-slate-500 transition-colors hover:text-red-600"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      )}
    </header>
  );
}
