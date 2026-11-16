import { MapPin, Briefcase, DollarSign, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const JOBS = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  title: "Frontend Developer",
  description:
    "Showcase your commitment to diversity and inclusion by highlighting initiatives.",
  location: "New York, USA",
  type: "Hybrid",
  salary: "$35-$40/hour",
}));

export function FeaturedJobs() {
  return (
    <section id="jobs" className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      {/* Section Header */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] text-zinc-400 uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
          <span>SMART JOB DISCOVERY</span>
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
        </div>
        <h2 className="mx-auto mt-3 max-w-md text-3xl font-bold tracking-tight text-white sm:text-4xl">
          The roles you’d never find by searching
        </h2>
      </div>

      {/* 3x2 Job Cards Grid */}
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {JOBS.map((job) => (
          <div
            key={job.id}
            className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#111115] p-6 transition hover:border-indigo-500/40 hover:bg-[#14141a]"
          >
            <div>
              <h3 className="text-base font-semibold text-white">{job.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                {job.description}
              </p>

              {/* Metadata Pills */}
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 text-[11px] text-zinc-300">
                  <MapPin className="h-3 w-3 text-purple-400" />
                  {job.location}
                </span>
                <span className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 text-[11px] text-zinc-300">
                  <Briefcase className="h-3 w-3 text-purple-400" />
                  {job.type}
                </span>
                <span className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 text-[11px] text-zinc-300">
                  <DollarSign className="h-3 w-3 text-purple-400" />
                  {job.salary}
                </span>
              </div>
            </div>

            {/* Apply Action */}
            <button
              type="button"
              className="mt-6 inline-flex items-center gap-1.5 text-xs font-medium text-zinc-300 transition hover:text-white"
            >
              <span>Apply Now</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="mt-10 text-center">
        <Button className="rounded-lg bg-white px-6 text-xs font-semibold text-black hover:bg-zinc-200">
          View all job open
        </Button>
      </div>
    </section>
  );
}