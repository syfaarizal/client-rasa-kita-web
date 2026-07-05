import type { Product } from "@/types";

export const products: Product[] = [
  {
    id: "prod-1",
    slug: "dimsum-ayam",
    name: "Dimsum Ayam",
    categorySlug: "frozen-food",
    price: 35000,
    rating: 4.8,
    reviewCount: 125,
    image: "/images/product-dimsum.jpg",
    gallery: ["/images/product-dimsum.jpg", "/images/product-dimsum-2.jpg"],
    badge: "Terlaris",
    shortDescription: "Dimsum ayam lembut dengan isian daging pilihan.",
    description:
      "Dimsum ayam RasaKita dibuat dari daging ayam pilihan yang digiling halus, dipadukan dengan bumbu rahasia, lalu dikukus hingga matang sempurna. Cocok disantap sebagai camilan maupun lauk pendamping nasi.",
    weight: "500 gr / isi 20 pcs",
    stock: 120,
    highlights: ["Tanpa pengawet", "Daging ayam pilihan", "Siap kukus"],
  },
  {
    id: "prod-2",
    slug: "bakso-aci-original",
    name: "Bakso Aci Original",
    categorySlug: "frozen-food",
    price: 25000,
    rating: 4.7,
    reviewCount: 98,
    image: "/images/product-bakso.jpg",
    gallery: ["/images/product-bakso.jpg"],
    badge: "Terlaris",
    shortDescription: "Bakso aci kenyal khas Bandung dengan cita rasa gurih.",
    description:
      "Bakso aci original dibuat dengan resep tradisional khas Bandung. Teksturnya kenyal dengan rasa gurih yang khas, cocok untuk kuah pedas maupun digoreng.",
    weight: "250 gr / isi 15 pcs",
    stock: 200,
    highlights: ["Tekstur kenyal", "Resep tradisional", "Tanpa bahan pengawet"],
  },
  {
    id: "prod-3",
    slug: "cireng-isi-pedas",
    name: "Cireng Isi Pedas",
    categorySlug: "camilan-lokal",
    price: 20000,
    rating: 4.6,
    reviewCount: 87,
    image: "/images/product-cireng.jpg",
    gallery: ["/images/product-cireng.jpg"],
    badge: "Terlaris",
    shortDescription: "Cireng renyah dengan isian sambal pedas menggugah selera.",
    description:
      "Cireng isi pedas menghadirkan sensasi renyah di luar dan kenyal di dalam, dipadukan dengan isian sambal pedas yang menggugah selera. Camilan favorit segala usia.",
    weight: "300 gr / isi 10 pcs",
    stock: 150,
    highlights: ["Renyah di luar, kenyal di dalam", "Level pedas bisa dipilih"],
  },
  {
    id: "prod-4",
    slug: "katering-sehat-paket-1-hari",
    name: "Katering Sehat Paket 1 Hari",
    categorySlug: "katering-sehat",
    price: 45000,
    rating: 4.9,
    reviewCount: 76,
    image: "/images/product-katering.jpg",
    gallery: ["/images/product-katering.jpg"],
    badge: "Terlaris",
    shortDescription: "Menu sehat lengkap untuk kebutuhan gizi harianmu.",
    description:
      "Paket katering sehat 1 hari terdiri dari menu makan siang dan malam yang disusun oleh ahli gizi, menggunakan bahan segar tanpa pengawet dengan porsi seimbang.",
    weight: "2x makan / hari",
    stock: 40,
    highlights: ["Disusun ahli gizi", "Bahan segar harian", "Rendah minyak"],
  },
  {
    id: "prod-5",
    slug: "thai-tea-boba",
    name: "Thai Tea Boba",
    categorySlug: "minuman-kekinian",
    price: 18000,
    rating: 4.7,
    reviewCount: 110,
    image: "/images/product-thaitea.jpg",
    gallery: ["/images/product-thaitea.jpg"],
    badge: "Terlaris",
    shortDescription: "Thai tea creamy dengan topping boba kenyal.",
    description:
      "Thai tea boba RasaKita diracik dari teh Thailand asli dengan krim susu yang lembut, dilengkapi topping boba kenyal buatan sendiri.",
    weight: "500 ml",
    stock: 300,
    highlights: ["Teh Thailand asli", "Boba homemade", "Bisa less sugar"],
  },
  {
    id: "prod-6",
    slug: "keripik-singkong-balado",
    name: "Keripik Singkong Balado",
    categorySlug: "camilan-lokal",
    price: 15000,
    rating: 4.6,
    reviewCount: 63,
    image: "/images/product-keripik.jpg",
    gallery: ["/images/product-keripik.jpg"],
    badge: "Terlaris",
    shortDescription: "Keripik singkong renyah dengan bumbu balado pedas manis.",
    description:
      "Keripik singkong balado dibuat dari singkong pilihan yang diiris tipis, digoreng renyah, lalu dibalut bumbu balado pedas manis khas nusantara.",
    weight: "200 gr",
    stock: 250,
    highlights: ["Renyah tahan lama", "Bumbu balado khas", "Tanpa pengawet"],
  },
  {
    id: "prod-7",
    slug: "mochi-kekinian",
    name: "Mochi Kekinian",
    categorySlug: "camilan-lokal",
    price: 22000,
    rating: 4.5,
    reviewCount: 54,
    image: "/images/product-mochi.jpg",
    gallery: ["/images/product-mochi.jpg"],
    shortDescription: "Mochi lembut dengan berbagai varian rasa kekinian.",
    description:
      "Mochi kekinian hadir dengan tekstur lembut kenyal dan isian krim lumer, tersedia dalam berbagai varian rasa seperti taro, matcha, dan cokelat.",
    weight: "250 gr / isi 8 pcs",
    stock: 90,
    highlights: ["Isian krim lumer", "4 varian rasa", "Tanpa pengawet"],
  },
  {
    id: "prod-8",
    slug: "nugget-ayam-homemade",
    name: "Nugget Ayam Homemade",
    categorySlug: "frozen-food",
    price: 32000,
    rating: 4.8,
    reviewCount: 71,
    image: "/images/product-nugget.jpg",
    gallery: ["/images/product-nugget.jpg"],
    badge: "Baru",
    shortDescription: "Nugget ayam homemade tanpa bahan pengawet.",
    description:
      "Nugget ayam homemade dibuat dari daging ayam asli tanpa campuran tepung berlebih, cocok untuk bekal anak maupun lauk keluarga.",
    weight: "500 gr / isi 20 pcs",
    stock: 100,
    highlights: ["100% daging ayam asli", "Cocok untuk bekal anak"],
  },
  {
    id: "prod-9",
    slug: "es-kopi-gula-aren",
    name: "Es Kopi Gula Aren",
    categorySlug: "minuman-kekinian",
    price: 16000,
    rating: 4.6,
    reviewCount: 82,
    image: "/images/product-eskopi.jpg",
    gallery: ["/images/product-eskopi.jpg"],
    shortDescription: "Kopi susu gula aren dengan rasa creamy dan manis pas.",
    description:
      "Es kopi gula aren racikan RasaKita menggunakan biji kopi pilihan dan gula aren asli, menghasilkan rasa manis legit yang pas dan creamy.",
    weight: "350 ml",
    stock: 180,
    highlights: ["Gula aren asli", "Kopi pilihan", "Creamy"],
  },
  {
    id: "prod-10",
    slug: "salad-buah-segar",
    name: "Salad Buah Segar",
    categorySlug: "katering-sehat",
    price: 28000,
    rating: 4.7,
    reviewCount: 45,
    image: "/images/product-salad.jpg",
    gallery: ["/images/product-salad.jpg"],
    shortDescription: "Salad buah segar dengan saus yogurt rendah kalori.",
    description:
      "Salad buah segar berisi kombinasi buah musiman terbaik dengan saus yogurt rendah kalori, cocok untuk menu diet sehat harian.",
    weight: "300 gr",
    stock: 60,
    highlights: ["Buah segar musiman", "Saus yogurt rendah kalori"],
  },
  {
    id: "prod-11",
    slug: "risoles-mayo",
    name: "Risoles Mayo",
    categorySlug: "camilan-lokal",
    price: 24000,
    rating: 4.5,
    reviewCount: 39,
    image: "/images/product-risoles.jpg",
    gallery: ["/images/product-risoles.jpg"],
    shortDescription: "Risoles crispy dengan isian sosis, telur, dan mayo.",
    description:
      "Risoles mayo dengan kulit tipis dan renyah, berisi sosis, telur, sayuran, dan saus mayo yang creamy.",
    weight: "300 gr / isi 10 pcs",
    stock: 130,
    highlights: ["Kulit tipis renyah", "Isian melimpah"],
  },
  {
    id: "prod-12",
    slug: "matcha-latte",
    name: "Matcha Latte",
    categorySlug: "minuman-kekinian",
    price: 19000,
    rating: 4.6,
    reviewCount: 58,
    image: "/images/product-matcha.jpg",
    gallery: ["/images/product-matcha.jpg"],
    shortDescription: "Matcha latte creamy dari bubuk matcha premium Jepang.",
    description:
      "Matcha latte RasaKita dibuat dari bubuk matcha premium asal Jepang, dipadukan dengan susu segar untuk rasa creamy yang seimbang.",
    weight: "400 ml",
    stock: 140,
    highlights: ["Matcha premium Jepang", "Susu segar"],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getBestSellers(): Product[] {
  return products.filter((product) => product.badge === "Terlaris");
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((product) => product.categorySlug === categorySlug);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter((item) => item.categorySlug === product.categorySlug && item.id !== product.id)
    .slice(0, limit);
}
