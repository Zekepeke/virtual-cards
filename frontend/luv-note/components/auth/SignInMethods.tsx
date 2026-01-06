"use client";

import React, { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { RomanticInput } from "../romantic-input";
import { RomanticButton } from "../romantic-button";
import { Mail, Apple } from "lucide-react";

type Props = {
  /** where to send users after auth succeeds */
  redirectTo?: string; // e.g. "/auth/callback"
};

export function SignInMethods({ redirectTo = "/auth/callback" }: Props) {
  const supabase = useMemo(() => createSupabaseBrowserClient(), []);
  const params = useSearchParams();

  const [email, setEmail] = useState(params.get("email") ?? "");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Preserve user intent (create card, plan, etc.) through auth:
  const next = params.get("next") ?? redirectTo;
  const intent = params.get("intent") ?? "";
  const plan = params.get("plan") ?? "";

  const callbackUrl = useMemo(() => {
    const base =
      typeof window !== "undefined"
        ? window.location.origin
        : "http://localhost:3000";

    // We’ll land here after OAuth/magic-link to finish the session + redirect.
    const cb = new URL("/auth/callback", base);
    cb.searchParams.set("next", next);
    if (intent) cb.searchParams.set("intent", intent);
    if (plan) cb.searchParams.set("plan", plan);
    return cb.toString();
  }, [next, intent, plan]);

  async function sendMagicLink() {
    setError(null);

    if (!email.trim()) {
      setError("Please enter your email.");
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: callbackUrl,
        },
      });
      if (error) throw error;

      setSent(true);
    } catch (e: any) {
      setError(e?.message ?? "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  async function signInWithOAuth(provider: "google" | "apple") {
    setError(null);
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: { redirectTo: callbackUrl },
      });
      if (error) throw error;
      // OAuth will redirect away automatically
    } catch (e: any) {
      setError(e?.message ?? "OAuth sign-in failed.");
      setLoading(false);
    }
  }

  return (
    <div className="space-y-4">
      <div>
        <label className="text-[var(--charcoal)] block mb-2">Email</label>
        <RomanticInput
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full bg-white"
          inputMode="email"
        />
      </div>

      <RomanticButton
        variant="primary"
        className="w-full"
        onClick={sendMagicLink}
        disabled={loading}
      >
        <Mail size={18} className="mr-2" />
        {sent ? "Check your email" : loading ? "Sending..." : "Continue with email"}
      </RomanticButton>

      <div className="flex items-center gap-3 my-2">
        <div className="h-px bg-[var(--border)] flex-1" />
        <span className="text-[var(--charcoal-lighter)]">or</span>
        <div className="h-px bg-[var(--border)] flex-1" />
      </div>

      <div className="grid grid-cols-1 gap-3">
        <div className="space-y-3">
          <button
            className="w-full px-4 py-3 rounded-[var(--radius-lg)] border-2 border-[var(--border)] 
                      bg-white hover:border-[var(--rose)] transition-all flex items-center justify-center gap-3
                      text-[var(--charcoal)] hover:shadow-[var(--shadow-md)]"
          >
            <svg width="18" height="18" viewBox="0 0 18 18">
              <path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z"/>
              <path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z"/>
              <path fill="#FBBC05" d="M3.964 10.707c-.18-.54-.282-1.117-.282-1.707s.102-1.167.282-1.707V4.961H.957C.347 6.175 0 7.55 0 9s.348 2.825.957 4.039l3.007-2.332z"/>
              <path fill="#EA4335" d="M9 3.582c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.961L3.964 7.29C4.672 5.163 6.656 3.582 9 3.582z"/>
            </svg>
            Continue with Google
          </button>

          <button
            className="w-full px-4 py-3 rounded-[var(--radius-lg)] border-2 border-[var(--charcoal)] 
                      bg-[var(--charcoal)] hover:bg-[var(--charcoal)]/90 transition-all flex items-center justify-center gap-3
                      text-white hover:shadow-[var(--shadow-md)]"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
              <path d="M14.94 5.19A4.38 4.38 0 0 0 16 2.53a4.44 4.44 0 0 0-2.87 1.47 4.14 4.14 0 0 0-1.06 2.64 3.6 3.6 0 0 0 2.87-1.45zm2.52 7.44a9.49 9.49 0 0 1-1.25 2.19c-.75 1-1.53 2-2.75 2s-1.57-.78-2.93-.78-1.78.77-2.91.8-2.09-1.09-2.86-2.16a10.67 10.67 0 0 1-1.83-5.95c0-3.5 2.27-5.35 4.51-5.35 1.19 0 2.18.78 2.93.78s1.85-.96 3.13-.96a4.16 4.16 0 0 1 3.52 1.82 4.11 4.11 0 0 0-2.06 3.52 4.17 4.17 0 0 0 2.5 3.81z"/>
            </svg>
            Continue with Apple
          </button>
        </div>

      </div>

      {error ? (
        <p className="text-red-600 text-sm mt-2">{error}</p>
      ) : sent ? (
        <p className="text-[var(--charcoal-lighter)] text-sm mt-2">
          We sent you a secure sign-in link. Open it on this device to continue.
        </p>
      ) : null}

      {intent || plan ? (
        <p className="text-[var(--charcoal-lighter)] text-xs">
          You’ll continue to {intent ? <b>{intent}</b> : "your account"}{" "}
          {plan ? <>({plan} plan)</> : null} after signing in.
        </p>
      ) : null}
    </div>
  );
}