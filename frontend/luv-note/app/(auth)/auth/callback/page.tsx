"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

export default function AuthCallbackPage() {
  const supabase = useMemo(() => createSupabaseBrowserClient(), []);
  const router = useRouter();
  const params = useSearchParams();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const next = params.get("next") || "/onboarding";

    async function finalizeAuth() {
      try {
        // 1) If using PKCE flow, Supabase redirects with ?code=...
        const code = params.get("code");
        if (code && typeof (supabase.auth as any).exchangeCodeForSession === "function") {
          const { error } = await (supabase.auth as any).exchangeCodeForSession(code);
          if (error) throw error;

          router.replace(next);
          router.refresh();
          return;
        }

        // 2) If using implicit flow, Supabase redirects with #access_token=... in the hash
        if (typeof window !== "undefined" && window.location.hash) {
          const hashParams = new URLSearchParams(window.location.hash.slice(1));
          const access_token = hashParams.get("access_token");
          const refresh_token = hashParams.get("refresh_token");

          if (access_token && refresh_token) {
            // Works in both v1 and v2
            const { error } = await supabase.auth.setSession({
              access_token,
              refresh_token,
            });
            if (error) throw error;

            // Clean up the URL hash so tokens don't remain in the address bar
            window.history.replaceState({}, document.title, window.location.pathname + window.location.search);

            router.replace(next);
            router.refresh();
            return;
          }
        }

        // If neither flow is present, send back to login
        router.replace("/login");
      } catch (e: any) {
        setError(e?.message ?? "Failed to finish login.");
      }
    }

    finalizeAuth();
  }, [params, router, supabase]);

  return (
    <div className="min-h-screen bg-[var(--cream)] flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        <p className="text-[var(--charcoal)]">Finishing sign in…</p>
        {error ? <p className="text-red-600 mt-3">{error}</p> : null}
      </div>
    </div>
  );
}