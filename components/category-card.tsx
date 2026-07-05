"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Cookie, Snowflake, Salad, CupSoda, type LucideIcon } from "lucide-react";
import type { Category } from "@/types";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, LucideIcon> = {
  cookie: Cookie,
  snowflake: Snowflake,
  salad: Salad,
  "cup-soda": CupSoda,
};

interface CategoryCardProps {
  category: Category;
  index?: number;
}

export function CategoryCard({ category, index = 0 }: CategoryCardProps) {
  const Icon = iconMap[category.icon] ?? Cookie;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-white shadow-soft transition-shadow duration-300 hover:shadow-card"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={category.image}
          alt={category.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white shadow-card">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3 className="font-semibold text-secondary">{category.name}</h3>
          <p className="text-sm text-muted">{category.description}</p>
        </div>
        <Button asChild variant="outline" size="sm" className="mt-auto w-fit">
          <Link href={`/products?category=${category.slug}`}>Lihat Produk</Link>
        </Button>
      </div>
    </motion.div>
  );
}
