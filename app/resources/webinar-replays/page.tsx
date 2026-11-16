import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = { title: "Webinar Replays" };

const webinars = [
  {
    title: "Getting Up To Speed MS Word, Getting Up To Speed MS PowerPoint",
    label: "Future Focused",
    // Replace with your actual YouTube video ID
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "/images/webinars/future-focused.jpg", // Or use YouTube's auto-thumbnail: https://img.youtube.com/vi/YOUTUBE_ID/maxresdefault.jpg
  },
  {
    title: "Getting to know MS PowerPoint",
    label: "Cultural Intelligence",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "/images/webinars/cultural-intelligence.jpg",
  },
  {
    title: "Less Clicks More Results - tips for using MS Office",
    label: "Collaboration and Unity: Teamwork",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "/images/webinars/teamwork.jpg",
  },
  {
    title: "Webinar: Cultural Intelligence",
    label: "Lifelong Learning",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "/images/webinars/lifelong-learning.jpg",
  },
  {
    title: "AI and the Administrative Professional",
    label: "AI and the Administrative Professional",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "/images/webinars/ai-professional.jpg",
  },
  {
    title: "Empowerment and Leadership",
    label: "Empowerment and Leadership",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "/images/webinars/empowerment.jpg",
  },
  {
    title: "Community in Support",
    label: "Community in Support",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "/images/webinars/community.jpg",
  },
];

export default function WebinarReplays() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-2xl font-bold text-[#0A1931] md:text-3xl">
            Webinar Replays
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Missed a session? Watch the recordings of our past webinars below.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {webinars.map((video, index) => (
            <div key={index} className="flex flex-col">
              {/* Thumbnail Link */}
              <a
                href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-video w-full overflow-hidden rounded border border-slate-200 bg-slate-100 shadow-sm transition-all hover:shadow-md"
              >
                {/* You can use a local image or an auto-generated YouTube thumbnail */}
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors group-hover:bg-black/30">
                  <div className="flex h-12 w-16 items-center justify-center rounded bg-red-600 transition-transform group-hover:scale-110">
                    <svg className="h-6 w-6 fill-white" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </a>

              {/* Video Label/Title */}
              <a
                href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-[13px] font-bold text-[#0A1931] hover:text-[#D11C1C] hover:underline"
              >
                {video.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
