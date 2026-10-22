import Link from "next/link";
import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="bg-soft">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="mb-3 text-xs font-bold uppercase tracking-widest text-brand">
          {eyebrow}
        </div>
        <h1 className="max-w-3xl text-4xl font-extrabold text-navy md:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">{children}</p>
      </div>
    </section>
  );
}

export function Section({
  children,
  soft = false,
}: {
  children: ReactNode;
  soft?: boolean;
}) {
  return (
    <section className={soft ? "bg-soft" : ""}>
      <div className="mx-auto max-w-6xl px-5 py-16">{children}</div>
    </section>
  );
}

export function Card({
  title,
  children,
  tag,
  href,
}: {
  title: string;
  children?: ReactNode;
  tag?: string;
  href?: string;
}) {
  const body = (
    <>
      {tag && (
        <span className="mb-3 inline-block rounded bg-soft px-2 py-1 text-xs font-bold text-brand">
          {tag}
        </span>
      )}
      <h3 className="text-lg font-bold text-navy">{title}</h3>
      {children && <p className="mt-2 text-sm text-slate-600">{children}</p>}
    </>
  );
  const cls = "block rounded-xl border border-line bg-white p-6 shadow-sm";
  return href ? (
    <Link href={href} className={`${cls} transition hover:shadow-md`}>
      {body}
    </Link>
  ) : (
    <div className={cls}>{body}</div>
  );
}

export function Cards({ children }: { children: ReactNode }) {
  return <div className="grid gap-5 md:grid-cols-3">{children}</div>;
}

export function Notice({ children }: { children: ReactNode }) {
  return (
    <div className="my-6 rounded-lg border-l-4 border-brand bg-soft p-4 text-sm text-slate-700">
      {children}
    </div>
  );
}

export function RowList({
  items,
}: {
  items: [label: string, icon?: string, href?: string][];
}) {
  return (
    <ul className="divide-y divide-line">
      {items.map(([label, icon, href], i) => {
        const inner = (
          <span className="flex items-center justify-between py-3 text-sm font-medium">
            <span>{label}</span>
            <span aria-hidden>{icon ?? "→"}</span>
          </span>
        );
        return (
          <li key={href ?? `${label}-${i}`}>
            {href ? (
              <Link
                href={href}
                className="text-slate-700 transition-colors hover:text-red-600"
              >
                {inner}
              </Link>
            ) : (
              <div className="text-slate-700">{inner}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export function DataTable({
  head,
  rows,
}: {
  head: [string, string];
  rows: readonly (readonly [string, string])[];
}) {
  return (
    <div className="overflow-x-auto rounded-xl border border-line">
      <table className="w-full text-left text-sm">
        <thead className="bg-navy text-white">
          <tr>
            <th className="px-4 py-3">{head[0]}</th>
            <th className="px-4 py-3">{head[1]}</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-line bg-white">
          {rows.map(([a, b]) => (
            <tr key={a}>
              <td className="px-4 py-3 font-semibold text-navy">{a}</td>
              <td className="px-4 py-3">{b}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export const btnPrimary =
  "inline-block rounded-md bg-brand px-5 py-3 text-sm font-semibold text-white hover:opacity-90";
export const btnDark =
  "inline-block rounded-md bg-navy px-5 py-3 text-sm font-semibold text-white hover:bg-navy/90";
export const inputCls =
  "w-full rounded-md border border-line px-3 py-3 text-sm outline-none focus:border-navy";
