import Link from "next/link";

const FOOTER_LINKS = {
  Product: [
    { label: "Job discovery", href: "#jobs" },
    { label: "Worker AI", href: "#features" },
    { label: "Companies", href: "#" },
    { label: "Salary data", href: "#" },
  ],
  Navigations: [
    { label: "Help center", href: "#" },
    { label: "Career library", href: "#" },
    { label: "Contact", href: "#" },
  ],
  Resources: [
    { label: "Brand Guideline", href: "#" },
    { label: "Newsroom", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="relative bg-[#050507] pt-16 pb-12 text-zinc-400">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top Row: Brand & Navigation Columns */}
        <div className="flex flex-col justify-between gap-12 lg:flex-row">
          {/* Left Column: HireLoop Logo & Tagline */}
          <div className="max-w-xs">
            <Link href="/" className="inline-flex items-center text-2xl font-bold tracking-tight">
              <span className="text-[#254EDB]">hirel</span>
              <span className="relative mx-0.5 inline-flex items-center">
                <span className="h-4 w-4 rounded-full border-[2.5px] border-[#254EDB]" />
                <span className="-ml-1.5 h-4 w-4 rounded-full border-[2.5px] border-[#E06D1B]" />
              </span>
              <span className="text-[#E06D1B]">p</span>
            </Link>

            <p className="mt-4 text-xs leading-relaxed text-zinc-500">
              The AI-native career platform. Built for people who take their work seriously.
            </p>
          </div>

          {/* Right Columns: Product, Navigations, Resources */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 sm:gap-16">
            {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
              <div key={heading}>
                <h3 className="text-xs font-semibold text-indigo-400">
                  {heading}
                </h3>
                <ul className="mt-4 space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-xs text-zinc-500 transition hover:text-zinc-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row: Social Icons & Copyright */}
        <div className="mt-16 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          {/* Social Buttons */}
          <div className="flex items-center gap-2.5">
            {/* Facebook */}
            <Link
              href="#"
              aria-label="Facebook"
              className="flex h-8 w-8 items-center justify-center rounded-md bg-white/[0.06] text-zinc-400 transition hover:bg-white/10 hover:text-white"
            >
              <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M13.5 22v-8.2h2.8l.4-3.2h-3.2V8.5c0-.9.3-1.6 1.6-1.6h1.7V4.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.1 1.5-4.1 4.2v2.4H7.5v3.2h2.7V22h3.3z" />
              </svg>
            </Link>

            {/* Pinterest (Highlighted Indigo Box) */}
            <Link
              href="#"
              aria-label="Pinterest"
              className="flex h-8 w-8 items-center justify-center rounded-md bg-indigo-600/80 text-white transition hover:bg-indigo-500"
            >
              <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.04-2.83.18-.77 1.18-5.01 1.18-5.01s-.3-.6-.3-1.49c0-1.4.81-2.44 1.82-2.44.86 0 1.27.64 1.27 1.41 0 .86-.55 2.15-.83 3.34-.24 1 .5 1.81 1.48 1.81 1.78 0 3.14-1.87 3.14-4.58 0-2.39-1.72-4.07-4.18-4.07-2.85 0-4.52 2.14-4.52 4.34 0 .86.33 1.78.74 2.28.08.1.09.19.07.29-.07.31-.24.99-.28 1.13-.04.18-.15.22-.34.13-1.25-.58-2.03-2.41-2.03-3.88 0-3.16 2.3-6.06 6.62-6.06 3.48 0 6.18 2.48 6.18 5.79 0 3.45-2.18 6.23-5.2 6.23-1.02 0-1.97-.53-2.3-1.15l-.62 2.38c-.23.87-.84 1.96-1.25 2.62.94.29 1.94.45 2.98.45 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
              </svg>
            </Link>

            {/* LinkedIn */}
            <Link
              href="#"
              aria-label="LinkedIn"
              className="flex h-8 w-8 items-center justify-center rounded-md bg-white/[0.06] text-zinc-400 transition hover:bg-white/10 hover:text-white"
            >
              <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" />
              </svg>
            </Link>
          </div>

          {/* Copyright & Legal Links */}
          <div className="flex flex-wrap items-center gap-4 text-[11px] text-zinc-600">
            <span>Copyright 2024 — Programming Hero</span>
            <div className="flex items-center gap-1.5 text-zinc-500">
              <Link href="#" className="transition hover:text-zinc-300">
                Terms &amp; Policy
              </Link>
              <span>-</span>
              <Link href="#" className="transition hover:text-zinc-300">
                Privacy Guideline
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}