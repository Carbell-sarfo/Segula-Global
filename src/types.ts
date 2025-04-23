import type { ImgAttributes } from "astro:assets";

export interface CompatibilityItem {
  icon: string;
  title: string;
  url: string;
}

export interface FeatureItem {
  description: string;
  icon: string;
  title: string;
}

export interface FooterLink {
  description: string;
  icon: string;
  url: string;
}

export interface NavItem {
  title: string;
  url: string;
}


export interface Member {
    name: string;
    title: string;
    // image: image;
    details: string;
    linkedin: string;
    website: string;
    instagram: string;
}