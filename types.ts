import { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  color: string;
  icon: LucideIcon;
}

export interface FAQItem {
  question: string;
  answer: string;
}
