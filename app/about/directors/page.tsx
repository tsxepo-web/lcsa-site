import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = { title: "Directors" };

export default function Directors() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        {/* Page Title */}
        <h1 className="mb-8 text-2xl font-bold text-[#8b1c62]">Directors</h1>

        {/* Intro Section (Image + Text) */}
        <div className="flex flex-col gap-8 md:flex-row md:items-start">
          {/* Image - Using direct width/height props */}
          <div className="shrink-0">
            <Image
              // Swapped to an image showing three professionals in a meeting
              src="/images/directors.avif"
              alt="LPSA Directors (Three people)"
              width={398}
              height={224}
              className="rounded-sm border border-slate-200 object-cover w-full max-w-[398px] md:w-[398px] h-auto md:h-[224px]"
            />
          </div>

          {/* Text next to image */}
          <div className="flex-1 space-y-4 text-[13.5px] leading-relaxed text-slate-700">
            <p>
              Nomvula Moloko (left), Dawn Williams (centre) and Tholo Motaung
              (right) joined forces in 2026 as Directors at LPSA. Combined, they
              have over 50 years experience in the public safety, water safety,
              and secretarial industry in various roles.
            </p>
            <p>
              The Directors have a passion for empowering others and encouraging
              individuals to reach their full potential through continuous
              learning. Their goal is to professionalise and assist lifeguards
              and water safety professionals at all levels and titles in South
              Africa to reach new levels.
            </p>
            <p>
              The Directors are established facilitators for the lifeguarding
              profession and have facilitated workshops in Africa for lifeguards
              and others.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-slate-300" />

        {/* Bios Section */}
        <div className="mt-12 space-y-6 text-[13.5px] leading-relaxed text-slate-700">
          <p>
            <strong className="font-semibold text-slate-900">
              Tholo Motaung (M. Inst. D)
            </strong>{" "}
            is an established trainer, facilitator, assessor, moderator and
            developmental coach. He is a Behavioural Sciences graduate and
            Corporate Governance scholar. He earned the title “Star
            Administrator” for his contribution in pioneering initiatives that
            focused on the development of office professionals in the Higher
            Education Sector. Tholo has appeared in a Isono (telenovela on BET)
            and hosts a talk show on Cobra Tycoon (online radio show) where he
            gets the opportunity to empower others. Tholo is the Director:
            Corporate Affairs at LPSA and is registered as a full member at the
            Institute of Directors South Africa (IODSA).
          </p>

          <p className="mt-12">
            <strong className="font-semibold text-slate-900">
              Dawn Williams
            </strong>{" "}
            is a facilitator with a passion for empowering others to reach new
            levels through continuous learning and self-discovery. As the LPSA
            CEO and Director: Learning and Development, Dawn encourages all
            lifeguards to add value to their role by gaining certifications and
            making a commitment to life-long learning. Dawn currently
            facilitates workshops for both soft and technical skills for
            lifeguards as well as the LPSA Professional Designation Masterclass.
            Dawn is a certified NLP practitioner and a Microsoft Office
            Instructor.
          </p>

          <p className="mt-12">
            <strong className="font-semibold text-slate-900">
              Nomvula Moloko
            </strong>{" "}
            is a facilitator who believes in a solutions-oriented approach and
            operational execution between executives and their assistant through
            a C.R.E.A.T.E. model. Nomvula has over 18 years experience in
            corporate and State-owned enterprises encompassing various office
            administration roles and during that time achieved a higher
            certificate in Management. Business Administration, Management and
            Operations. An award winning office professional, Nomvula serves the
            administrative community by serving on Boards dedicated to the
            advancement of the role and has been invited to be a judge at
            various administrative competitions. Nomvula is proficient in 7
            African languages.
          </p>
        </div>
      </div>
    </section>
  );
}
