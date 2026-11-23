import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = { title: "Endorsed Training Programmes" };

const programmes = [
  {
    provider: "IQ Academy",
    // Replace with your actual local logo paths (e.g., /images/logos/iq-academy.png)
    logo: "https://placehold.co/200x100/ffffff/0A1931?text=IQ+Academy&font=montserrat",
    title: "Office Administration (Short Course Programme)",
    desc: "The Office Administration course will equip students with essential skills and knowledge to operate and manage 21st-century office environments. The curriculum is designed to teach you the theories and practices required to master the role of an office administrator and manage office operations in both the traditional and virtual office.",
    method: "Fully online or internet supported",
    duration: "6-12 months",
  },
  {
    provider: "FAMC",
    logo: "https://placehold.co/200x100/ffffff/0A1931?text=FAMC&font=montserrat",
    title: "Advanced Customer Care, Quality and Management Training",
    desc: "This highly interactive and enjoyable programme is designed to help participants develop the vital skills to manage positive customer care and learn how to build lasting rapport with their customers.",
    method: "Classroom / Blended learning",
    duration: "2 days",
  },
  {
    provider: "KPR",
    logo: "https://placehold.co/200x100/ffffff/0A1931?text=KPR&font=montserrat",
    title: "Advanced Office Management, an interactive session",
    desc: "This programme is designed to empower PA's, Secretaries and Office Administrators. To uncover current business trends and practices that revolutionises roles in office and administration management in a new era of AI, working remotely and modern challenges. This workshop will consist of lectures, exercises, case studies and many practical interventions to ensure skills transfer.",
    method: "Classroom",
    duration: "2 days",
  },
  {
    provider: "Conflict Management",
    logo: "https://placehold.co/200x100/ffffff/0A1931?text=Logo&font=montserrat",
    title: "Conflict Management, Resolution and Mediation Skills",
    desc: "This workshop is focused on introducing practical conflict resolution techniques and strategies that managers and team leaders can effectively utilise when managing conflict in the workplace.",
    method: "Classroom",
    duration: "2 days",
  },
];

export default function EndorsedProgrammes() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        {/* Header Section */}
        <div>
          <h1 className="text-2xl font-bold text-[#8b1c62]">
            Endorsed training programmes
          </h1>

          <div className="mt-4 border-y border-slate-200 py-4 text-[13px] italic text-slate-700">
            <p>
              Training providers: if you would like to have your programme
              endorsed, complete the{" "}
              <Link href="#" className="text-[#8b1c62] hover:underline">
                application form
              </Link>{" "}
              and return together with requested documentation to{" "}
              <a
                href="mailto:admin@lpsa.org.za"
                className="text-[#8b1c62] hover:underline"
              >
                admin@lpsa.org.za
              </a>
              .
            </p>
          </div>

          <p className="mt-8 text-[13px] text-slate-700">
            The following programmes have been endorsed by LPSA
          </p>
          <div className="mt-4 border-b border-slate-200" />
        </div>

        {/* Programmes List */}
        <div className="mt-10 flex flex-col gap-12">
          {programmes.map((prog, i) => (
            <div
              key={i}
              className="flex flex-col gap-6 md:flex-row md:items-start"
            >
              {/* Logo Column (Fixed width on desktop) */}
              <div className="flex w-full shrink-0 justify-center md:w-48 md:justify-start">
                <div className="relative h-24 w-40">
                  <Image
                    src={prog.logo}
                    alt={prog.provider}
                    fill
                    className="object-contain object-left md:object-center"
                  />
                </div>
              </div>

              {/* Content Column */}
              <div className="flex-1">
                <h2 className="text-lg font-bold text-[#8b1c62] underline decoration-1 underline-offset-4">
                  {prog.title}
                </h2>

                <p className="mt-3 text-[13px] leading-relaxed text-slate-700">
                  {prog.desc}
                </p>

                <div className="mt-4 flex flex-col gap-2 text-[13px] text-slate-700">
                  <p>
                    <strong>Study method:</strong> {prog.method}
                  </p>
                  <p>
                    <strong>Course duration:</strong> {prog.duration}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
