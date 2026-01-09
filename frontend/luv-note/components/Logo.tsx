import { Heart } from "lucide-react";

type LogoProps = { size?: number };

export default function Logo({ size = 18 }: LogoProps) {
  return (
    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[var(--rose)] to-[var(--rose-deep)] flex items-center justify-center">
      <Heart size={size} className="text-white" fill="white" />
    </div>
  );
}
