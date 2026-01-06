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

    async function maybeRedirectIfSessionExists() {
      // Give Supabase a chance to initialize & persist session from URL hash
      const { data, error } = await supabase.auth.getSession();
      if (error) throw error;

      if (data.session && !isDone) {
        isDone = true;
        router.replace(next);
        router.refresh();
      }
    }

    // 1) Subscribe to auth events (will fire SIGNED_IN once session is set from URL)
    const { data: sub } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN" && session && !isDone) {
        isDone = true;
        router.replace(next);
        router.refresh();
      }
    });

    // 2) Also do an immediate check (covers cases where session is already present)
    maybeRedirectIfSessionExists().catch((e: any) => {
      setError(e?.message ?? "Auth callback failed.");
    });

    // 3) Safety timeout: if nothing happens, send to login
    const t = setTimeout(async () => {
      if (isDone) return;
      const { data } = await supabase.auth.getSession();
      if (!data.session) router.replace(`/login?next=${encodeURIComponent(next)}`);
    }, 2500);

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