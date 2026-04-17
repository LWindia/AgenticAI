export interface Module {
  title: string;
  topics: string[];
  icon: JSX.Element;
}

export interface Capsule {
  title: string;
  badge: string;
  duration: string;
  price: string;
  outcome: string;
  modules: Module[];
}

export interface CourseModuleProps {
  capsules: Capsule[];
}

// types.ts
export interface HeroData {
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  fee: string;
  batch: string;
  ctaLink: string;
}
