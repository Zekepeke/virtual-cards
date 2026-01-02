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
  Check,
} from "lucide-react";

export type Template = {
  id: number;
  title: string;
  color: string;
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

export type PricingPlan = {
  name: string;
  price: string;
  priceNote: string;
  badge?: string;
  features: string[];
  buttonLabel: string;
  buttonVariant: "ghost" | "primary";
  highlighted?: boolean;
};

export type FooterColumn = {
  title: string;
  links: { label: string; href: string }[];
};

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

export const pricing = {
  heading: "Simple, Honest Pricing",
  subheading: "Start free, upgrade when you're ready for more",
  plans: [
    {
      name: "Free",
      price: "$0",
      priceNote: "forever",
      features: [
        "5 cards per month",
        "Basic templates",
        "Text messages",
        "Scheduled delivery",
        "Private links",
      ],
      buttonLabel: "Get Started Free",
      buttonVariant: "ghost",
      highlighted: false,
    },
    {
      name: "Premium",
      price: "$9.99",
      priceNote: "per month",
      badge: "Most Popular",
      features: [
        "Unlimited cards",
        "All premium templates",
        "Photo & video messages",
        "Custom designs",
        "Gift card integration",
        "Priority support",
      ],
      buttonLabel: "Start Premium Trial",
      buttonVariant: "primary",
      highlighted: true,
    },
  ] satisfies PricingPlan[],
};

export const cta = {
  heading: "Ready to Send Your First Love Card?",
  subheading:
    "Join thousands of couples using LuvNote to stay connected across any distance",
  footnote: "No credit card required • Free forever plan available",
};

export const footer = {
  brand: "LuvNote",
  copyright: "© 2026 LuvNote. Made with love for long-distance couples.",
  socials: [
    { label: "Twitter", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
  ],
  columns: [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#how" },
        { label: "Templates", href: "#templates" },
        { label: "Pricing", href: "#pricing" },
        { label: "FAQ", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Contact", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Help Center", href: "#" },
        { label: "Community", href: "#" },
        { label: "Guides", href: "#" },
        { label: "API", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy", href: "#" },
        { label: "Terms", href: "#" },
        { label: "Security", href: "#" },
        { label: "Cookies", href: "#" },
      ],
    },
  ] satisfies FooterColumn[],
};