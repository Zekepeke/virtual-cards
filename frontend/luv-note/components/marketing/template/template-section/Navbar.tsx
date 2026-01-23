import Link from "next/link";
import { RomanticButton } from "../../../romantic-button";
import { Heart } from "lucide-react";
import Logo from "@/components/Logo";

export function NavBar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Logo />

            {/* Nav Links */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-[var(--charcoal)] hover:text-[var(--rose)] transition-colors">Templates</a>
              <a href="#" className="text-[var(--charcoal)] hover:text-[var(--rose)] transition-colors">How it works</a>
              <a href="#" className="text-[var(--charcoal)] hover:text-[var(--rose)] transition-colors">Pricing</a>
            </div>

            {/* CTA */}
            <RomanticButton variant="primary" className="hidden sm:flex">
              <Heart size={16} className="mr-2" fill="currentColor" />
              Create a Love Card
            </RomanticButton>
          </div>
        </div>
      </nav>
  );
}