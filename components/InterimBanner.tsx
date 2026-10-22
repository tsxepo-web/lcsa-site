export default function InterimBanner() {
  return (
    <div className="w-full border-b border-[#FCD34D] bg-[#FEF3C7] text-[11px] tracking-wide md:text-xs">
      <div className="mx-auto flex max-w-6xl items-center gap-2 px-4 py-2 md:px-6">
        <svg
          aria-hidden="true"
          className="ml-1 h-4 w-4 shrink-0 text-[#92400E]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m10.29 3.86-8.07 14A2 2 0 0 0 3.95 21h16.1a2 2 0 0 0 1.73-3.14l-8.07-14a2 2 0 0 0-3.42 0Z" />
          <path d="M12 9v4" />
          <path d="M12 17h.01" />
        </svg>
        <span className="font-medium text-[#78350F]">
          INTERIM STATUS: Non-Statutory Professional Body established under NPO
          Act 71 of 1997. Application for SAQA Professional Body recognition in
          progress. Constitution Ref: LCSA-CON-2026-V1 approved 08/09/2026.{" "}
          <span className="hidden md:inline">
            | No SAQA Recognition Status yet - Interim Council operating under
            Interim Constitution.
          </span>
        </span>
      </div>
    </div>
  );
}
