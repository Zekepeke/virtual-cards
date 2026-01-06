"use client";

import { pricing } from "../content";
import { RomanticCard } from "../../../romantic-card";
import { RomanticButton } from "../../../romantic-button";
import { SparkleDecoration } from "../../../micro-illustrations";
import { Check } from "lucide-react";
import Link from "next/link";

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h2 className="text-[var(--charcoal)]">{pricing.heading}</h2>
            <SparkleDecoration className="opacity-60" />
          </div>
          <p className="text-[var(--charcoal-lighter)] max-w-2xl mx-auto">
            {pricing.subheading}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricing.plans.map((plan) => (
            <RomanticCard
              key={plan.name}
              className={[
                "relative",
                plan.highlighted ? "border-2 border-[var(--rose)]" : "",
              ].join(" ")}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[var(--rose)] to-[var(--rose-deep)] px-4 py-1 rounded-[var(--radius-full)] shadow-[var(--shadow-pink)]">
                  <span className="text-white">{plan.badge}</span>
                </div>
              )}

              <div className={plan.badge ? "mb-6 pt-4" : "mb-6"}>
                <h3 className="text-[var(--charcoal)] mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-[var(--charcoal)]">{plan.price}</span>
                  <span className="text-[var(--charcoal-lighter)]">{plan.priceNote}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check
                      size={20}
                      className="text-[var(--rose)] flex-shrink-0 mt-0.5"
                    />
                    <span className="text-[var(--charcoal-lighter)]">{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={`/login?intent=signup&plan=${plan.name.toLowerCase()}&next=/onboarding`}
              >
                <RomanticButton
                  variant={plan.highlighted ? "primary" : "ghost"}
                  className="w-full"
                >
                  {plan.buttonLabel}
                </RomanticButton>
              </Link>
            </RomanticCard>
          ))}
        </div>
      </div>
    </section>
  );
}