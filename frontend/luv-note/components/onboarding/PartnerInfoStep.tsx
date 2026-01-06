"use client";

import { RomanticButton } from "../romantic-button";
import { RomanticInput } from "../romantic-input";
import { Globe } from "lucide-react";

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
  const timezones = [
  { value: 'America/New_York', label: 'Eastern Time (ET)' },
  { value: 'America/Chicago', label: 'Central Time (CT)' },
  { value: 'America/Denver', label: 'Mountain Time (MT)' },
  { value: 'America/Los_Angeles', label: 'Pacific Time (PT)' },
  { value: 'America/Anchorage', label: 'Alaska Time (AKT)' },
  { value: 'Pacific/Honolulu', label: 'Hawaii Time (HT)' },
  { value: 'Europe/London', label: 'London (GMT)' },
  { value: 'Europe/Paris', label: 'Paris (CET)' },
  { value: 'Asia/Tokyo', label: 'Tokyo (JST)' },
  { value: 'Asia/Shanghai', label: 'Shanghai (CST)' },
  { value: 'Australia/Sydney', label: 'Sydney (AEDT)' }
];
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
        
        <div className="mb-6">
          <label className="block text-[var(--charcoal)] mb-2 flex items-center gap-2">
            <Globe size={16} className="text-[var(--rose)]" />
            Your timezone
          </label>
          <select
            value={timezone}
            onChange={(e) => setTimezone(e.target.value)}
            className="w-full px-4 py-3 rounded-[var(--radius-lg)] border border-[var(--border)] 
                      focus:border-[var(--rose)] focus:outline-none focus:ring-2 focus:ring-[var(--rose)]/20
                      transition-all text-[var(--charcoal)] bg-white"
          >
            {timezones.map((tz) => (
              <option key={tz.value} value={tz.value}>
                {tz.label}
              </option>
            ))}
          </select>
          <p className="text-sm text-[var(--charcoal-lighter)] mt-2">
            This helps us schedule cards at the perfect time
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