import Link from "next/link";

export default function Banner() {
  return (
    <section className="bg-navy">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-10">
        <h2 className="text-2xl font-bold text-white">
          Professional standards. Public safety.
        </h2>
        <Link
          href="/membership"
          className="rounded-md bg-brand px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
        >
          Apply for Registration
        </Link>
      </div>
    </section>
  );
}
