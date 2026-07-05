import type { Metadata } from "next";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { ProductsGrid } from "@/components/sections/products-grid";

export const metadata: Metadata = {
  title: "Semua Produk",
  description: "Jelajahi seluruh camilan lokal, frozen food, katering sehat, dan minuman kekinian RasaKita.",
};

interface ProductsPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const { category } = await searchParams;

  return (
    <div className="container-app py-12 sm:py-16">
      <div className="mb-10 flex flex-col gap-2">
        <h1 className="text-3xl font-extrabold text-secondary">Semua Produk</h1>
        <p className="text-muted">
          Temukan camilan, frozen food, katering sehat, dan minuman kekinian favoritmu.
        </p>
      </div>
      <ProductsGrid products={products} categories={categories} initialCategory={category} />
    </div>
  );
}
