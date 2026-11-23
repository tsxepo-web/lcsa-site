export default function HeroGrid() {
  const benefits = [
    {
      title: "PERSONAL DEVELOPMENT",
      desc: "Become a member of a community that wants to help you grow personally and professionally through continuous learning",
    },
    {
      title: "PROFESSIONAL DEVELOPMENT",
      desc: "Professional Designations give you credibility in your industry and a sense of security and belonging in your career",
    },
    {
      title: "COMMITMENT",
      desc: "Show that you are serious about your professional development. Prove that your career is more than just a “job” and that you have long-term goals",
    },
    {
      title: "TAKING CHARGE",
      desc: "Professional Associations give their members the power to make a real change in their line of work.",
    },
    {
      title: "NETWORKING",
      desc: "Interact with like-minded administrative professionals and build relationships that can help you in your career.",
    },
    {
      title: "CONTINUOUS LEARNING",
      desc: "Members shall have access to the LPSA Online Learning Portal with content and learning that are essential for lifeguard professionals and will keep you up to date",
    },
  ];

  return (
    <div className="mt-8">
      <h2 className="mx-auto max-w-3xl text-center text-2xl font-extrabold tracking-tight text-[#0A1931] md:text-3xl">
        Building an environment that promotes water safety and links to a
        successful career
      </h2>

      {/* Changed to a 4-column grid on large screens to widen the cards */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((benefit, i) => (
          <div
            key={i}
            className="group flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition-all hover:-translate-y-1 hover:shadow-md"
          >
            {/* Decorative Brand Line */}
            <div className="mb-5 h-1 w-12 rounded-full bg-[#8b1c62] transition-all group-hover:w-full"></div>

            <h3 className="text-[12px] font-bold tracking-widest text-[#0A1931]">
              {benefit.title}
            </h3>
            <p className="mt-3 text-[13px] leading-relaxed text-slate-600">
              {benefit.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
