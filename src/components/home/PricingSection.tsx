"use client";

import { useState } from "react";
import { Crown, BarChart3, Zap, Plus, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const PLANS = [
  {
    name: "Starter",
    monthlyPrice: 0,
    yearlyPrice: 0,
    icon: Crown,
    featured: false,
    subtitle: "Start building your insights hub:",
    features: [
      "Daily AI match brief (top 5)",
      "Verified salary bands",
      "Company insight dashboards",
      "1-click apply, unlimited",
    ],
  },
  {
    name: "Growth",
    monthlyPrice: 17,
    yearlyPrice: 13,
    icon: BarChart3,
    featured: true,
    subtitle: "Start building your insights hub:",
    features: [
      "Daily AI match brief (top 5)",
      "Verified salary bands",
      "Company insight dashboards",
      "1-click apply, unlimited",
    ],
  },
  {
    name: "Premium",
    monthlyPrice: 99,
    yearlyPrice: 74,
    icon: Zap,
    featured: false,
    subtitle: "Start building your insights hub:",
    features: [
      "Everything in Pro",
      "Multi-profile career portfolios",
      "Shared talent rooms",
      "Recruiter view (read-only)",
    ],
  },
];

export function PricingSection() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  return (
    <section id="pricing" className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
      {/* Header */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] text-zinc-400 uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
          <span>PRICING</span>
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
        </div>
        <h2 className="mx-auto mt-3 max-w-md text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Pay for the leverage, not the listings
        </h2>

        {/* Billing Toggle */}
        <div className="mt-7 inline-flex items-center rounded-full border border-white/10 bg-[#121216] p-1">
          <button
            type="button"
            onClick={() => setBilling("monthly")}
            className={`rounded-full px-4 py-1.5 text-xs font-medium transition ${
              billing === "monthly"
                ? "bg-white text-black"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Monthly
          </button>
          <button
            type="button"
            onClick={() => setBilling("yearly")}
            className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-medium transition ${
              billing === "yearly"
                ? "bg-white text-black"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <span>Yearly</span>
            <span className="rounded-full bg-fuchsia-600 px-1.5 py-0.5 text-[10px] font-semibold text-white">
              25%
            </span>
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {PLANS.map((plan) => {
          const Icon = plan.icon;
          const price =
            billing === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;

          return (
            <div
              key={plan.name}
              className={`flex flex-col justify-between rounded-2xl border p-6 transition ${
                plan.featured
                  ? "border-indigo-500/40 bg-gradient-to-b from-[#171722] to-[#0f0f13] shadow-[0_0_50px_rgba(99,102,241,0.12)]"
                  : "border-white/[0.08] bg-[#0e0e12]"
              }`}
            >
              <div>
                {/* Card Top Row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-purple-400">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="text-base font-medium text-white">
                      {plan.name}
                    </span>
                  </div>

                  <div className="text-right">
                    <span className="text-3xl font-bold text-white">${price}</span>
                    <span className="text-xs text-zinc-400">/month</span>
                  </div>
                </div>

                <p className="mt-6 text-xs font-medium text-zinc-300">
                  {plan.subtitle}
                </p>

                {/* Feature List */}
                <ul className="mt-4 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2.5 text-xs text-zinc-400"
                    >
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-white/10 text-zinc-300">
                        <Plus className="h-2.5 w-2.5" />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <Button
                className={`mt-8 flex w-full items-center justify-between rounded-xl px-4 py-5 text-xs font-medium ${
                  plan.featured
                    ? "bg-white text-black hover:bg-zinc-200"
                    : "border border-white/10 bg-[#18181d] text-zinc-200 hover:bg-white/10"
                }`}
              >
                <span>Choose This Plan</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </div>
          );
        })}
      </div>
    </section>
  );
}