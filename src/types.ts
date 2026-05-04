import type { ReactNode } from "react";

export type View = "home" | "structure" | "regulatory" | "strategy" | "partnerships" | "join-operator" | "join-training";

export interface Vertical {
  name: string;
  description: string;
  category: string;
  isComingSoon?: boolean;
}

export interface StrategyItem {
  title: string;
  description: string;
  icon: ReactNode;
  isComingSoon?: boolean;
}

export interface IntelLink {
  label: string;
  view: View;
  isComingSoon?: boolean;
}

export interface NavLink {
  name: string;
  href: string;
  isComingSoon?: boolean;
}
