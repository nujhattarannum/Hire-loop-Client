
import {
  Search,
  MapPin,
  BriefcaseBusiness,
  ChartNoAxesColumn,
  UsersRound,
  Star,
} from "lucide-react";

const stats = [
  {
    icon: BriefcaseBusiness,
    number: "50K",
    label: "Active Jobs",
  },
  {
    icon: ChartNoAxesColumn,
    number: "12K",
    label: "Companies",
  },
  {
    icon: UsersRound,
    number: "2M",
    label: "Job Seekers",
  },
  {
    icon: Star,
    number: "97%",
    label: "Satisfaction Rate",
  },
];

const trendingJobs = [
  "Product Designer",
  "AI Engineering",
  "Dev-ops Engineer",
];

const Banner = () => {
  return (
    <section className="relative min-h-[660px] overflow-hidden bg-black text-white">

      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_5%,rgba(65,65,65,0.35),transparent_55%)]" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4 pt-20 text-center sm:pt-24">

        {/* Job Badge */}
        <div className="mb-5 flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 shadow-lg">
          <BriefcaseBusiness className="h-3.5 w-3.5 text-orange-400" />

          <span className="text-[11px] font-semibold tracking-wider">
            50,000+
          </span>

          <span className="text-[10px] tracking-widest text-gray-400">
            NEW JOBS THIS MONTH
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-[42px]">
          Find Your Dream Job Today
        </h1>

        {/* Description */}
        <p className="mt-3 max-w-[530px] text-xs leading-6 text-gray-400 sm:text-sm">
          HireLoop connects top talent with world-class companies.
          Browse thousands of curated opportunities and land your next
          role — faster.
        </p>

        {/* Search Bar */}
        <div className="mt-5 flex w-full max-w-[520px] items-center rounded-xl border border-white/15 bg-[#151515] p-1 shadow-xl">

          {/* Job Input */}
          <div className="flex min-w-0 flex-1 items-center gap-2 px-2 sm:px-3">
            <Search className="h-4 w-4 shrink-0 text-gray-400" />

            <input
              type="text"
              placeholder="Job title, skill or company"
              className="w-full min-w-0 bg-transparent py-2 text-[10px] text-white outline-none placeholder:text-gray-500 sm:text-xs"
            />
          </div>

          <div className="h-6 w-px bg-white/10" />

          {/* Location Input */}
          <div className="flex min-w-0 flex-1 items-center gap-2 px-2 sm:px-3">
            <MapPin className="h-4 w-4 shrink-0 text-gray-400" />

            <input
              type="text"
              placeholder="Location or Remote"
              className="w-full min-w-0 bg-transparent py-2 text-[10px] text-white outline-none placeholder:text-gray-500 sm:text-xs"
            />
          </div>

          {/* Search Button */}
          <button
            type="button"
            aria-label="Search jobs"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#6554F5] transition-colors hover:bg-[#5745E8]"
          >
            <Search className="h-4 w-4 text-white" />
          </button>
        </div>

        {/* Trending Jobs */}
        <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
          <span className="mr-1 text-[10px] text-gray-500">
            Trending Position
          </span>

          {trendingJobs.map((job) => (
            <span
              key={job}
              className="rounded-full border border-white/10 bg-white/[0.08] px-2.5 py-1 text-[9px] text-gray-300"
            >
              {job}
            </span>
          ))}
        </div>
      </div>

      {/* Earth Globe */}
      <div className="pointer-events-none absolute bottom-[-370px] left-1/2 h-[650px] w-[650px] -translate-x-1/2 rounded-full shadow-[0_-10px_90px_25px_rgba(86,65,255,0.65)] sm:bottom-[-390px] sm:h-[720px] sm:w-[720px]">

        {/* Globe Image */}
        <div
          className="absolute inset-0 overflow-hidden rounded-full border-t border-indigo-300/30 bg-[radial-gradient]"
          style={{
  backgroundImage:
    "linear-gradient(to bottom, rgba(75,65,220,0.12), rgba(0,0,0,0.55)), url('/globe.png')",
  backgroundSize: "cover",
  backgroundPosition: "center top",
}}
        />

        {/* Globe Message */}
        <div className="absolute left-0 right-0 top-[85px] z-10 px-4 text-center">
          <p className="text-lg font-medium leading-7 text-white/90 sm:text-xl">
            Assisting over 15,000 job seekers
            <br />
            find their dream positions.
          </p>
        </div>
      </div>

      {/* Small Decorative Stars */}
      <div className="pointer-events-none absolute inset-0 z-[1]">
        {[
          ["20%", "45%"],
          ["78%", "43%"],
          ["12%", "55%"],
          ["88%", "53%"],
          ["27%", "52%"],
          ["72%", "57%"],
          ["50%", "48%"],
          ["8%", "48%"],
          ["93%", "48%"],
        ].map(([left, top], index) => (
          <span
            key={index}
            className="absolute h-1 w-1 rounded-full bg-indigo-500/70 shadow-[0_0_8px_2px_rgba(99,102,241,0.5)]"
            style={{ left, top }}
          />
        ))}
      </div>

      {/* Statistics Cards */}
      <div className="absolute bottom-8 left-0 z-20 w-full px-4 sm:px-6">
        <div className="mx-auto grid max-w-[1100px] grid-cols-2 gap-3 md:grid-cols-4">

          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="flex min-h-[116px] flex-col justify-between rounded-xl border border-white/10 bg-gradient-to-b from-[#050505] to-[#191919] p-3 shadow-xl sm:min-h-[117px] sm:p-4"
              >
                <Icon className="h-3.5 w-3.5 text-gray-300" />

                <div>
                  <h3 className="text-2xl font-semibold tracking-tight sm:text-[27px]">
                    {stat.number}
                  </h3>

                  <p className="mt-1 text-[9px] text-gray-300 sm:text-[10px]">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Banner;
