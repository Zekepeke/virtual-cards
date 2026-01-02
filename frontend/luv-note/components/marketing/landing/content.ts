// app/components/landing/content.ts
import type { LucideIcon } from "lucide-react";
import {
  Heart,
  Gift,
  Clock,
  Image as ImageIcon,
  Lock,
  Sparkles,
  Mail,
  Star,
  Send,
} from "lucide-react";

export type Template = {
  id: number;
  title: string;
  color: string; // tailwind gradient classes
  icon: LucideIcon;
  description: string;
};

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type Testimonial = {
  name: string;
  location: string;
  quote: string;
  image: string | null;
};

export type Step = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

// For tags/badges in the hero
export const heroBadge = {
  text: "For Long-Distance Love",
  icon: Sparkles,
};

export const templates: Template[] = [
  {
    id: 1,
    title: "Anniversary",
    color: "from-[var(--rose)] to-[var(--rose-deep)]",
    icon: Heart,
    description: "Celebrate your love",
  },
  {
    id: 2,
    title: "Good Morning",
    color: "from-[#FFB347] to-[#FFCC70]",
    icon: Sparkles,
    description: "Start their day with love",
  },
  {
    id: 3,
    title: "Miss You",
    color: "from-[#9D7CE8] to-[#B89FF5]",
    icon: Mail,
    description: "Bridge the distance",
  },
  {
    id: 4,
    title: "Birthday",
    color: "from-[var(--gold)] to-[var(--gold-light)]",
    icon: Gift,
    description: "Make it special",
  },
  {
    id: 5,
    title: "Holiday",
    color: "from-[#4ECDC4] to-[#6FE7DE]",
    icon: Star,
    description: "Seasonal celebrations",
  },
];

export const features: Feature[] = [
  {
    icon: Clock,
    title: "Scheduled Delivery",
    description: "Send your card at the perfect moment, even if you're asleep",
  },
  {
    icon: ImageIcon,
    title: "Photo & Video",
    description: "Add personal photos and video messages to your card",
  },
  {
    icon: Lock,
    title: "Private Link",
    description: "Your card is for their eyes only with a unique secure link",
  },
  {
    icon: Gift,
    title: "Optional Gift",
    description: "Include a digital gift card to make it extra special",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Sarah & James",
    location: "NYC ↔ London",
    quote:
      "LuvNote makes the 3,000 miles feel like nothing. Opening a card from James is the highlight of my day.",
    image: null,
  },
  {
    name: "Emma & Lucas",
    location: "Tokyo ↔ Paris",
    quote:
      "We send each other good morning cards every day. It's our little ritual that keeps us connected.",
    image: null,
  },
  {
    name: "Maya & Alex",
    location: "Sydney ↔ Toronto",
    quote:
      "The animation when opening a card feels so real. It's like receiving a physical gift in the mail.",
    image: null,
  },
];

export const steps: Step[] = [
  {
    number: "01",
    title: "Choose Your Card",
    description:
      "Pick from beautiful templates designed for every occasion and feeling",
    icon: Heart,
  },
  {
    number: "02",
    title: "Personalize It",
    description:
      "Write your message, add photos or videos, and choose when to send",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "Send & Delight",
    description:
      "They'll receive a private link with an enchanting card-opening animation",
    icon: Send,
  },
];