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
    const next = params.get("next") || "/auth/dashboard";

    async function finalizeAuth() {
      try {
        // Handles implicit-flow magic links (#access_token=...) and can store the session.
        // (If your project later switches to PKCE (?code=...), we’ll upgrade this.)
        const { data, error } = await supabase.auth.getSessionFromUrl({
          storeSession: true,
        });

        if (error) throw error;

        // If session exists, you're logged in now
        if (data?.session) {
          router.replace(next);
          router.refresh();
          return;
        }

        // If no session was found, still redirect (or send to login)
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