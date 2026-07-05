import type { NavLink } from "@/types";

export const SITE_CONFIG = {
  name: "RasaKita",
  tagline: "Lezat, Praktis, Berkualitas",
  description:
    "Menyediakan camilan lokal, frozen food, katering sehat, dan minuman kekinian dengan kualitas terbaik untuk seluruh Indonesia.",
  url: "https://rasakita.id",
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: "Beranda", href: "/" },
  { label: "Tentang Kami", href: "/about" },
  {
    label: "Produk",
    href: "/products",
    children: [
      { label: "Camilan Lokal", href: "/products?category=camilan-lokal" },
      { label: "Frozen Food", href: "/products?category=frozen-food" },
      { label: "Katering Sehat", href: "/products?category=katering-sehat" },
      { label: "Minuman Kekinian", href: "/products?category=minuman-kekinian" },
    ],
  },
  { label: "Katering Sehat", href: "/products?category=katering-sehat" },
  { label: "Kontak", href: "/contact" },
];
