import Link from "next/link";
import { RomanticButton } from "../../../romantic-button";
import { Heart } from "lucide-react";
import Logo from "@/components/Logo";

export function NavBar() {
  return (
    <nav className="sticky top-0 z-50 bg-[var(--cream)]/95 backdrop-blur-md border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Logo />

          <div className="hidden md:flex items-center gap-8">
            <a href="#how" className="text-[var(--charcoal-lighter)] hover:text-[var(--rose)] transition-colors">
              How it Works
            </a>
            <a href="#templates" className="text-[var(--charcoal-lighter)] hover:text-[var(--rose)] transition-colors">
              Templates
            </a>
            <a href="#pricing" className="text-[var(--charcoal-lighter)] hover:text-[var(--rose)] transition-colors">
              Pricing
            </a>
          </div>

          <Link href="/login?intent=signin&next=/dashboard">
            <RomanticButton variant="ghost" className="hidden md:block px-6 py-2">
              Sign In
            </RomanticButton>
          </Link>
        </div>
      </div>
    </nav>
  );
}