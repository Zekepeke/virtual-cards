import "../globals.css";
import { Inter, Cormorant } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
});

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}