// app/components/landing/sections/NavBar.tsx
import { RomanticButton } from "../../../romantic-button";
import { Heart } from "lucide-react";

export function NavBar() {
  return (
    <nav className="sticky top-0 z-50 bg-[var(--cream)]/95 backdrop-blur-md border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="text-[var(--rose)]" fill="var(--rose)" size={24} />
            <span className="text-[var(--charcoal)]">LuvNote</span>
          </div>

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

          <RomanticButton variant="ghost" className="hidden md:block px-6 py-2">
            Sign In
          </RomanticButton>
        </div>
      </div>
    </nav>
  );
}