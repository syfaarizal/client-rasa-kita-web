import type { CompanyInfo } from "@/types";

export const company: CompanyInfo = {
  name: "RasaKita",
  tagline: "Lezat, Praktis, Berkualitas",
  description:
    "Menyediakan camilan lokal, frozen food, katering sehat, dan minuman kekinian dengan kualitas terbaik.",
  address: "Jl. Kuliner No. 88, Bandung, Jawa Barat",
  phone: "0812-3456-7890",
  whatsapp: "6281234567890",
  email: "halo@rasakita.id",
  operationalHours: "Senin - Sabtu, 08.00 - 20.00 WIB",
  socials: [
    { platform: "Instagram", href: "https://instagram.com", icon: "instagram" },
    { platform: "TikTok", href: "https://tiktok.com", icon: "music-2" },
    { platform: "Facebook", href: "https://facebook.com", icon: "facebook" },
    { platform: "WhatsApp", href: "https://wa.me/6281234567890", icon: "message-circle" },
  ],
  paymentMethods: ["BCA", "Mandiri", "BRI", "BNI", "OVO", "GoPay"],
};
