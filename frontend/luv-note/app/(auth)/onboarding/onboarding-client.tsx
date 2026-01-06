"use client";

import { OnboardingWizard } from "@/components/onboarding/OnboardingWizard";

export default function OnboardingClient({ userId }: { userId: string }) {
  return <OnboardingWizard userId={userId} />;
}