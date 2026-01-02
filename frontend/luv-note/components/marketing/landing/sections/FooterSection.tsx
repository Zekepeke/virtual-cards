// app/components/landing/sections/FooterSection.tsx
import { footer } from "../content";
import { Heart } from "lucide-react";

export function FooterSection() {
  return (
    <footer className="bg-[var(--charcoal)] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {footer.columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-white mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Heart className="text-[var(--rose)]" fill="var(--rose)" size={20} />
            <span className="text-white">{footer.brand}</span>
          </div>

          <p className="text-white/50 text-center">{footer.copyright}</p>

          <div className="flex gap-4">
            {footer.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="text-white/70 hover:text-white transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}