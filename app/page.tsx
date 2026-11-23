import GearsGraphic from "@/components/GearsGraphics";
import HeroGrid from "@/components/HeroGrid";

export default function Home() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* 1. The Gears Graphic */}
        <div className="mx-auto flex max-w-4xl justify-center">
          <GearsGraphic />
        </div>

        {/* 2. The Grid of Cards */}
        <HeroGrid />
      </div>
    </section>
  );
}
