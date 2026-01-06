import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const { data: userData } = await supabase.auth.getUser();

  if (!userData.user) redirect("/login?next=/onboarding");

  const userId = userData.user.id;

  const { data: profile, error } = await supabase
    .from("profiles")
    .select("onboarding_completed")
    .eq("id", userId)
    .maybeSingle();

  // If there's no profile yet, they're not onboarded.
  const onboardingDone = profile?.onboarding_completed === true;

  if (!onboardingDone) redirect("/onboarding");

  return <>{children}</>;
}