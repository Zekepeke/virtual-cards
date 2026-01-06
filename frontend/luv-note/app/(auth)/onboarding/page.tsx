"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

export default function AuthCallbackPage() {
  const supabase = useMemo(() => createSupabaseBrowserClient(), []);
  const router = useRouter();
  const params = useSearchParams();
  const [error, setError] = useState<string | null>(null);

  const next = params.get("next") || "/onboarding";

  useEffect(() => {
    let isDone = false;

    async function handleAuthCallback() {
      try {
        // Wait for session to be established
        const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
        
        if (sessionError) {
          throw sessionError;
        }

        if (sessionData.session && !isDone) {
          isDone = true;

          // Check if user has completed onboarding
          const { data: profile } = await supabase
            .from("profiles")
            .select("onboarding_completed")
            .eq("id", sessionData.session.user.id)
            .maybeSingle();

          // If onboarding is not completed, redirect to onboarding regardless of 'next' param
          if (!profile?.onboarding_completed) {
            router.replace("/onboarding");
          } else {
            // If onboarding is completed, use the 'next' param
            router.replace(next);
          }
          router.refresh();
        }
      } catch (e: any) {
        setError(e?.message ?? "Auth callback failed.");
      }
    }

    // Subscribe to auth events
    const { data: sub } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === "SIGNED_IN" && session && !isDone) {
        isDone = true;

        // Check onboarding status
        const { data: profile } = await supabase
          .from("profiles")
          .select("onboarding_completed")
          .eq("id", session.user.id)
          .maybeSingle();

        if (!profile?.onboarding_completed) {
          router.replace("/onboarding");
        } else {
          router.replace(next);
        }
        router.refresh();
      }
    });

    // Initial check
    handleAuthCallback();

    // Safety timeout
    const t = setTimeout(async () => {
      if (isDone) return;
      const { data } = await supabase.auth.getSession();
      if (!data.session) {
        router.replace(`/login?next=${encodeURIComponent(next)}`);
      }
    }, 3000);

    return () => {
      clearTimeout(t);
      sub.subscription.unsubscribe();
    };
  }, [next, router, supabase]);

  return (
    <div className="min-h-screen bg-[var(--cream)] flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        <p className="text-[var(--charcoal)]">Finishing sign in…</p>
        {error ? <p className="text-red-600 mt-3">{error}</p> : null}
      </div>
    </div>
  );
}