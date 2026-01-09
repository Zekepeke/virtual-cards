import React from "react";
import { Heart, Link } from "lucide-react";
import Logo from "../Logo";

type AuthShellProps = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
};

export function AuthShell({ title, subtitle, children, footer }: AuthShellProps) {
  return (
    <div className="min-h-screen bg-[var(--cream)] flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        <a href="/" className="block mb-8">
          <Logo className="flex items-center justify-center gap-2 mb-8"/>
        </a>

        <div className="bg-white/70 backdrop-blur-sm border border-[var(--border)] rounded-[var(--radius-xl)] shadow-[var(--shadow-md)] p-8">
          <h1 className="text-[var(--charcoal)] mb-2">{title}</h1>
          {subtitle ? (
            <p className="text-[var(--charcoal-lighter)] mb-6">{subtitle}</p>
          ) : null}

          {children}
        </div>

        {footer ? (
          <div className="mt-6 text-center text-[var(--charcoal-lighter)]">
            {footer}
          </div>
        ) : null}
      </div>
    </div>
  );
}