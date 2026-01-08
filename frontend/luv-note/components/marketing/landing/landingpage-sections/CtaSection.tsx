"use client";

import React, { useMemo,useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "motion/react";
import { cta } from "../content";
import { RomanticInput } from "../../../romantic-input";
import { RomanticButton } from "../../../romantic-button";
import { Heart, Mail, Sparkles } from "lucide-react";
import Link from "next/link";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";



export function CtaSection({ redirectTo = "/auth/callback" }: Props) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const supabase = useMemo(() => createSupabaseBrowserClient(), []);
  const params = useSearchParams();


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

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-[var(--rose)] to-[var(--rose-deep)] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10">
          <Heart size={40} fill="white" className="text-white" />
        </div>
        <div className="absolute top-20 right-20">
          <Sparkles size={32} className="text-white" />
        </div>
        <div className="absolute bottom-20 left-1/4">
          <Mail size={36} className="text-white" />
        </div>
        <div className="absolute bottom-10 right-1/3">
          <Heart size={28} fill="white" className="text-white" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-white mb-6">{cta.heading}</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">{cta.subheading}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <RomanticInput
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full bg-white"
              inputMode="email"
            />

            <RomanticButton 
              onClick={sendMagicLink}
              disabled={loading}
              variant="secondary" 
              className="whitespace-nowrap"
            >
              Create Free Account
            </RomanticButton>
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

          <p className="text-white/70">{cta.footnote}</p>
        </motion.div>
      </div>
    </section>
  );
}