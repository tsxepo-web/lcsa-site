import type { Metadata } from "next";

export const metadata: Metadata = { title: "Future Proof Your Career" };

const downloadLinks = [
  {
    label: "Resources",
    file: "/files/InstallationManualJpn.pdf",
  },
  {
    label: "Skills Gap Analysis",
    file: "/files/Installationshandbuch.pdf",
  },
  {
    label: "Self Assessment and Reflection",
    file: "/files/ReadMe.pdf",
  },
];

export default function FutureProofYourCareer() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        {/* Intro Text */}
        <div className="text-center">
          <p className="text-[15px] leading-relaxed text-slate-700">
            Thank you for joining the Future Proof Your Career Webinar. Below
            are buttons where you can download resources as discussed during the
            webinar.
          </p>
        </div>

        {/* Download Buttons Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {downloadLinks.map((link, index) => (
            <a
              key={index}
              href={link.file}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 items-center justify-center rounded bg-[#8b1c62] px-6 text-sm font-bold text-white transition-colors hover:bg-[#6d134c]"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
