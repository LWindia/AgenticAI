// types.ts

export interface Program {
    title: string;
    mentor: string;
    duration: string;
    status: string;
    type: "Live" | "Recorded";
    image: string;
    slug: string;
    category: string;
  }
  
  export interface RouteConfig {
    buttonText: string;
    href: string;
  }

  // types.ts

export interface Capsule {
    name: string;
    outcome: string;
    badge: string;
    duration: string;
    price: string;
  }
  
  export interface RoadmapLevel {
    level: string;
    capsules: Capsule[];
  }