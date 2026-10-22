// TopBar.tsx — place this ABOVE <Header /> in your layout
export default function TopBar() {
  return (
    <div className="bg-navy text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-2 text-xs font-medium uppercase tracking-wide">
        {/* Left: legal references + status */}
        <div className="flex min-w-0 items-center gap-2">
          <span className="hidden opacity-80 md:inline">
            NPO Act 71 of 1997
          </span>
          <span className="hidden opacity-30 md:inline">|</span>
          <span className="hidden opacity-80 md:inline">
            NQF Act 67 of 2008
          </span>
          <span className="hidden opacity-30 md:inline">|</span>

          <span className="flex items-center gap-1.5 opacity-90">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            SAQA Professional Body (Interim)
          </span>

          <span className="hidden opacity-30 md:inline">|</span>
          <span className="truncate md:hidden">SAQA Body (Interim)</span>
        </div>

        {/* Right: contact + compliance */}
        <div className="flex shrink-0 items-center gap-4">
          <span className="hidden opacity-70 normal-case tracking-normal md:inline">
            Virtual Platform • info@lifeguardcouncil.org.za
          </span>
          <span className="opacity-80">POPIA | PAIA COMPLIANT</span>
        </div>
      </div>
    </div>
  );
}
