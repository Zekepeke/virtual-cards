"use client";

import React, { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { RomanticInput } from "@/app/components/romantic-input";
import { RomanticButton } from "@/app/components/romantic-button";
import { Mail, Apple } from "lucide-react";

type Props = {
  /** where to send users after auth succeeds */
  redirectTo?: string; // e.g. "/onboarding"
};

export function SignInMethods({ redirectTo = "/onboarding" }: Props) {
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
    const cb = new URL("/callback", base);
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
        <RomanticButton
          variant="ghost"
          className="w-full"
          onClick={() => signInWithOAuth("google")}
          disabled={loading}
        >
          Continue with Google
        </RomanticButton>

        <RomanticButton
          variant="ghost"
          className="w-full"
          onClick={() => signInWithOAuth("apple")}
          disabled={loading}
        >
          <Apple size={18} className="mr-2" />
          Continue with Apple
        </RomanticButton>
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