"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

export default function AuthCallbackPage() {
  const supabase = useMemo(() => createSupabaseBrowserClient(), []);
  const router = useRouter();
  const params = useSearchParams();
  const [error, setError] = useState<string | null>(null);
  
  // Move next outside of useEffect
  const next = params.get("next") || "/onboarding";

  useEffect(() => {
    const code = params.get("code");

    async function finalizeAuth() {
      try {
        // Modern Supabase uses PKCE flow with a code parameter
        if (code) {
          const { error } = await supabase.auth.exchangeCodeForSession(code);
          
          if (error) throw error;

          // Session is now stored automatically
          router.replace(next);
          router.refresh();
          return;
        }

        // If no code, redirect to login
        router.replace("/login");
      } catch (e: any) {
        setError(e?.message ?? "Failed to finish login.");
      }
    }

    finalizeAuth();
  }, [params, router, supabase, next]);

  return (
    <div className="min-h-screen bg-[var(--cream)] flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        <p className="text-[var(--charcoal)]">Finishing sign in…</p>
        {error ? <p className="text-red-600 mt-3">{error}</p> : null}
      </div>
    </div>
  );
}