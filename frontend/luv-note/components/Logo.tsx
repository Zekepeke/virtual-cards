import { Heart } from "lucide-react";

type LogoProps = { 
    size?: number 
    title?: string
    className?: string;
};

export default function Logo({ size = 18, title = "LuvNote", className= "flex items-center gap-2" }: LogoProps) {
  return (
    <div className={className}>
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[var(--rose)] to-[var(--rose-deep)] flex items-center justify-center">
        <Heart size={18} className="text-white" fill="white" />
        </div>
        <span className="text-lg text-[var(--charcoal)]">LuvNote</span>
    </div>


  );
}
