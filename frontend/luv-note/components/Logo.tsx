import { Heart } from "lucide-react";

type LogoProps = { 
    size?: number 
    title?: string
};

export default function Logo({ size = 18, title = "LuvNote" }: LogoProps) {
  return (
    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[var(--rose)] to-[var(--rose-deep)] flex items-center justify-center">
      <Heart size={size} className="text-white" fill="white" />
      <span className="text-[var(--charcoal)]">{title}</span>
    </div>
  );
}
