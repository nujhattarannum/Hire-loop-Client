import { Button } from "@/components/ui/button";

export function BottomCta() {
  return (
    <section className="relative overflow-hidden pt-20 pb-24">
      {/* Curved Indigo Wireframe Dome */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto h-[420px] max-w-5xl overflow-hidden">
        <div className="bg-grid-dome mx-auto h-[720px] w-[720px] rounded-full border border-indigo-400/30 bg-gradient-to-b from-indigo-600/45 via-indigo-950/30 to-transparent shadow-[0_-30px_120px_rgba(79,70,229,0.45)] sm:h-[960px] sm:w-[960px]" />
      </div>

      {/* Foreground Copy & Buttons */}
      <div className="relative z-10 mx-auto max-w-2xl px-4 pt-16 text-center sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Your next role is already looking for you
        </h2>
        <p className="mt-4 text-xs text-zinc-300 sm:text-sm">
          Build a profile in three minutes. The matches start arriving tomorrow morning.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button className="rounded-lg bg-white px-5 py-5 text-xs font-semibold text-black hover:bg-zinc-200">
            Create a free account
          </Button>
          <Button
            variant="outline"
            className="rounded-lg border-white/15 bg-black/50 px-5 py-5 text-xs font-medium text-white backdrop-blur-md hover:bg-white/10 hover:text-white"
          >
            View pricing
          </Button>
        </div>
      </div>
    </section>
  );
}