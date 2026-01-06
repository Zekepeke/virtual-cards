"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { PartnerInfoStep } from "./PartnerInfoStep";
import { PhotoStep } from "./PhotoStep";

type Step = "partner" | "photo";

export function OnboardingWizard({ userId }: { userId: string }) {
  const supabase = useMemo(() => createSupabaseBrowserClient(), []);
  const router = useRouter();

  const [step, setStep] = useState<Step>("partner");
  const [partnerName, setPartnerName] = useState("");
  const [timezone, setTimezone] = useState('America/Chicago');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function upsertProfile(partial: Record<string, any>) {
    const { error } = await supabase
      .from("profiles")
      .upsert({ id: userId, ...partial }, { onConflict: "id" });
    if (error) throw error;
  }

  async function nextPartnerStep(skip: boolean) {
    setError(null);
    setSaving(true);
    try {
      await upsertProfile({
        partner_name: skip ? null : partnerName || null,
        timezone: skip ? null : timezone || null,
      });
      setStep("photo");
    } catch (e: any) {
      setError(e?.message ?? "Failed to save profile.");
    } finally {
      setSaving(false);
    }
  }

  async function finish(photoUrl?: string, skip: boolean = false) {
    setError(null);
    setSaving(true);
    try {
      await upsertProfile({
        couple_photo_url: skip ? null : photoUrl ?? null,
        onboarding_completed: true,
      });
      router.push("/dashboard");
      router.refresh();
    } catch (e: any) {
      setError(e?.message ?? "Failed to finish onboarding.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="min-h-screen bg-[var(--cream)] flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md bg-white/70 backdrop-blur-sm border border-[var(--border)] rounded-[var(--radius-xl)] shadow-[var(--shadow-md)] p-8">
        <div className="mb-6">
          <div className="flex items-center justify-between text-xs text-[var(--charcoal-lighter)]">
            <span>Setup</span>
            <span>Step {step === "partner" ? 1 : 2} of 2</span>
          </div>
          <div className="mt-2 h-2 bg-[var(--border)] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[var(--rose)] to-[var(--rose-deep)]"
              style={{ width: step === "partner" ? "50%" : "100%" }}
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
            loading={saving}
            onNext={() => nextPartnerStep(false)}
            onSkip={() => nextPartnerStep(true)}
          />
        ) : (
          <PhotoStep
            userId={userId}
            loading={saving}
            onDone={(url) => finish(url, false)}
            onSkip={() => finish(undefined, true)}
          />
        )}
      </div>
    </div>
  );
}