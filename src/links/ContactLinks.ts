import type { IconType } from "react-icons";

import {
  FaGithub,
  FaWhatsapp,
  FaDiscord,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

import { GrLinkedin } from "react-icons/gr";

export type Contact = {
  name: string;
  link: string;
  icon: IconType;
};

export const contacts: Contact[] = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/your-username",
    icon: GrLinkedin,
  },
  {
    name: "GitHub",
    link: "https://github.com/your-username",
    icon: FaGithub,
  },
  {
    name: "WhatsApp",
    link: "https://wa.me/8801865525112",
    icon: FaWhatsapp,
  },
  {
    name: "Discord",
    link: "https://discord.com/users/your-user-id",
    icon: FaDiscord,
  },
  {
    name: "Email",
    link: "dewan.abid.02.2006@gmail.com",
    icon: FaEnvelope,
  },
  {
    name: "Phone",
    link: "tel:+8801865525112",
    icon: FaPhone,
  },
];
