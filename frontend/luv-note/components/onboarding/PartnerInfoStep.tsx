"use client";

import React from "react";
import { RomanticInput } from "../romantic-input";
import { RomanticButton } from "../romantic-button";

type Props = {
  partnerName: string;
  timezone: string;
  setPartnerName: (v: string) => void;
  setTimezone: (v: string) => void;
  onNext: () => void;
  onSkip: () => void;
  loading?: boolean;
};

export function PartnerInfoStep({
  partnerName,
  timezone,
  setPartnerName,
  setTimezone,
  onNext,
  onSkip,
  loading,
}: Props) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-[var(--charcoal)] mb-2">Quick setup</h2>
        <p className="text-[var(--charcoal-lighter)]">
          This helps us schedule cards at the right time.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="text-[var(--charcoal)] block mb-2">Partner’s name</label>
          <RomanticInput
            value={partnerName}
            onChange={(e) => setPartnerName(e.target.value)}
            placeholder="Amanda"
            className="w-full bg-white"
          />
        </div>

        <div>
          <label className="text-[var(--charcoal)] block mb-2">Timezone</label>
          <RomanticInput
            value={timezone}
            onChange={(e) => setTimezone(e.target.value)}
            placeholder="America/Chicago"
            className="w-full bg-white"
          />
          <p className="text-[var(--charcoal-lighter)] text-xs mt-2">
            Tip: use IANA format like <code>America/Chicago</code>.
          </p>
        </div>
      </div>

      <div className="flex gap-3">
        <RomanticButton variant="primary" className="flex-1" onClick={onNext} disabled={loading}>
          Continue
        </RomanticButton>
        <RomanticButton variant="ghost" className="flex-1" onClick={onSkip} disabled={loading}>
          Skip
        </RomanticButton>
      </div>
    </div>
  );
}