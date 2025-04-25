import { Facebook, Linkedin, Mail } from "lucide-react";
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
    href: "https://www.linkedin.com/in/towhid-hossain-4163712b/",
    icon: Linkedin,
    aria_label: "Visit our LinkedIn profile",
  },
  {
    name: "Email",
    href: "mailto:towhid.hossain@fifo-tech.com",
    icon: Mail,
    aria_label: "Send us an email",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/TowhidHossainBPO/",
    icon: Facebook,
    aria_label: "Visit our Facebook page",
  },
];
