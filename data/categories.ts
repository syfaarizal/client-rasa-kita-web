import type { Category } from "@/types";

export const categories: Category[] = [
  {
    id: "cat-1",
    slug: "camilan-lokal",
    name: "Camilan Lokal",
    description: "Aneka camilan khas nusantara",
    image: "/images/category-camilan.jpg",
    icon: "cookie",
    productCount: 18,
  },
  {
    id: "cat-2",
    slug: "frozen-food",
    name: "Frozen Food",
    description: "Dimsum, bakso aci & lainnya",
    image: "/images/category-frozen.jpg",
    icon: "snowflake",
    productCount: 24,
  },
  {
    id: "cat-3",
    slug: "katering-sehat",
    name: "Katering Sehat",
    description: "Menu sehat harian seimbang & bergizi",
    image: "/images/category-katering.jpg",
    icon: "salad",
    productCount: 12,
  },
  {
    id: "cat-4",
    slug: "minuman-kekinian",
    name: "Minuman Kekinian",
    description: "Aneka minuman segar dan kekinian",
    image: "/images/category-minuman.jpg",
    icon: "cup-soda",
    productCount: 15,
  },
];
