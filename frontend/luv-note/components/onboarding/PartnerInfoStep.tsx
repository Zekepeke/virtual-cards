"use client";

import { RomanticButton } from "../romantic-button";
import { RomanticInput } from "../romantic-input";

export function PartnerInfoStep({
  partnerName,
  timezone,
  setPartnerName,
  setTimezone,
  onNext,
  onSkip,
  loading,
}: {
  partnerName: string;
  timezone: string;
  setPartnerName: (v: string) => void;
  setTimezone: (v: string) => void;
  onNext: () => void;
  onSkip: () => void;
  loading?: boolean;
}) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-[var(--charcoal)] mb-2">A quick setup</h2>
        <p className="text-[var(--charcoal-lighter)]">
          Partner name + timezone helps scheduled cards land at the perfect moment.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="text-[var(--charcoal)] block mb-2">Partner’s name</label>
          <RomanticInput
            value={partnerName}
            onChange={(e) => setPartnerName(e.target.value)}
            placeholder="Alyssa"
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
            Example: <code>America/Chicago</code>
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