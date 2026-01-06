"use client";

import React, { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { createSupabaseBrowserClient } from "@/lib/supbabase/client";
import { PartnerInfoStep } from "./PartnerInfoStep";
import { PhotoStep } from "./PhotoStep";

type Props = {
  userId: string;
};

type Step = "partner" | "photo";

export function OnboardingWizard({ userId }: Props) {
  const supabase = useMemo(() => createSupabaseBrowserClient(), []);
  const router = useRouter();

  const [step, setStep] = useState<Step>("partner");
  const [partnerName, setPartnerName] = useState("");
  const [timezone, setTimezone] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone || "America/Chicago"
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const totalSteps = 2;
  const stepIndex = step === "partner" ? 1 : 2;

  async function upsertProfile(partial: {
    partner_name?: string;
    timezone?: string;
    couple_photo_url?: string | null;
    onboarding_completed?: boolean;
  }) {
    const payload = { id: userId, ...partial };
    const { error } = await supabase.from("profiles").upsert(payload, { onConflict: "id" });
    if (error) throw error;
  }

  async function handlePartnerNext() {
    setError(null);
    setLoading(true);
    try {
      // allow skip-ish minimal data, but save what we have
      await upsertProfile({
        partner_name: partnerName || null || undefined,
        timezone: timezone || undefined,
      });
      setStep("photo");
    } catch (e: any) {
      setError(e?.message ?? "Failed to save.");
    } finally {
      setLoading(false);
    }
  }

  async function finish(photoUrl?: string) {
    setError(null);
    setLoading(true);
    try {
      await upsertProfile({
        couple_photo_url: photoUrl ?? null,
        onboarding_completed: true,
      });
      router.push("/dashboard");
      router.refresh();
    } catch (e: any) {
      setError(e?.message ?? "Failed to finish onboarding.");
    } finally {
      setLoading(false);
    }
  }

  async function skipAll() {
    await finish(undefined);
  }

  return (
    <div className="min-h-screen bg-[var(--cream)] flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md bg-white/70 backdrop-blur-sm border border-[var(--border)] rounded-[var(--radius-xl)] shadow-[var(--shadow-md)] p-8">
        {/* progress indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-xs text-[var(--charcoal-lighter)]">
            <span>Setup</span>
            <span>
              Step {stepIndex} of {totalSteps}
            </span>
          </div>
          <div className="mt-2 h-2 bg-[var(--border)] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[var(--rose)] to-[var(--rose-deep)]"
              style={{ width: `${(stepIndex / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        {error ? <p className="text-red-600 text-sm mb-4">{error}</p> : null}

        {step === "partner" ? (
          <PartnerInfoStep
            partnerName={partnerName}
            timezone={timezone}
            setPartnerName={setPartnerName}
            setTimezone={setTimezone}
            onNext={handlePartnerNext}
            onSkip={skipAll}
            loading={loading}
          />
        ) : (
          <PhotoStep
            userId={userId}
            onDone={(url) => finish(url)}
            onSkip={skipAll}
          />
        )}
      </div>
    </div>
  );
}