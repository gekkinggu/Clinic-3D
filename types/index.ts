// types/index.ts
export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export interface NavigationItem {
  href: string;
  label: string;
}
