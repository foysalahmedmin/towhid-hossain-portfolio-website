import { Facebook, Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import React from "react";

type Social = {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  aria_label?: string;
};

export const SOCIAL: Social[] = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: Linkedin,
    aria_label: "Visit our LinkedIn profile",
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: Twitter,
    aria_label: "Visit our Twitter profile",
  },
  {
    name: "Email",
    href: "mailto:contact@example.com",
    icon: Mail,
    aria_label: "Send us an email",
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: Instagram,
    aria_label: "Visit our Instagram profile",
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: Facebook,
    aria_label: "Visit our Facebook page",
  },
];
