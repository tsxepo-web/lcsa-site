import Link from "next/link";
import Image from "next/image";

// Replace these with your actual image paths (e.g., in /public/images/)
const heroCards = [
  {
    title: "Membership",
    href: "/membership",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600&h=400",
  },
  {
    title: "Upcoming Events",
    href: "/events",
    img: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=600&h=400",
  },
  {
    title: "Masterclasses 2026",
    href: "/designations/masterclasses",
    img: "https://images.unsplash.com/photo-1455390582262-044cdead2708?auto=format&fit=crop&q=80&w=600&h=400",
  },
  {
    title: "Annual Conference 2026",
    href: "/events/conference",
    img: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=600&h=400",
  },
  {
    title: "Awards 2026",
    href: "/awards/2026",
    img: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?auto=format&fit=crop&q=80&w=600&h=400",
  },
  {
    title: "Subscribe",
    href: "#subscribe",
    img: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=600&h=400",
  },
];

export default function ImageGridHero() {
  return (
    <section className="w-full bg-white pb-16">
      {/* Top Logo Section */}
      <div className="flex justify-center pt-12 pb-8">
        {/* Replace with your actual OPSA logo */}
        <div className="grid grid-cols-2 gap-1 w-24 h-24 border-2 border-slate-200 p-1">
          <div className="bg-[#8b1c62] rounded-tl-md"></div>
          <div className="bg-[#d4d15c] rounded-tr-md"></div>
          <div className="bg-[#6d6e71] rounded-bl-md"></div>
          <div className="bg-[#8b1c62] rounded-br-md"></div>
        </div>
      </div>

      {/* Main Navigation (Desktop) */}
      <nav className="hidden md:flex justify-center items-center gap-8 pb-4 text-[13px] font-bold text-[#8b1c62] uppercase tracking-wider">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="/membership" className="hover:underline">
          Membership
        </Link>
        <Link href="/designations" className="hover:underline">
          Designations
        </Link>
        <Link href="/awards" className="hover:underline">
          Awards
        </Link>
        <Link href="/resources" className="hover:underline">
          Resources
        </Link>
        <Link href="/voices" className="hover:underline">
          Member Voices
        </Link>
        <Link href="/contact" className="hover:underline">
          Contact
        </Link>
      </nav>

      {/* Thick Colored Divider Line */}
      <div className="w-full h-1 bg-[#8b1c62] mb-10" />

      {/* Image Grid */}
      <div className="mx-auto max-w-[1100px] px-4 md:px-6">
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {heroCards.map((card) => (
            <div key={card.title} className="group flex flex-col">
              {/* Image Container with Overlay */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 shadow-sm">
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Optional dark overlay for text readability (if you add text over images) */}
                {/* <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:bg-black/20" /> */}
              </div>

              {/* Title Link */}
              <Link
                href={card.href}
                className="mt-4 text-center text-[18px] font-bold text-[#8b1c62] underline decoration-2 underline-offset-4 hover:text-[#5f0e40] transition-colors"
              >
                {card.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
