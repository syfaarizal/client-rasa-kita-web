"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Minus, Plus, ShoppingCart, ShieldCheck, Truck, Leaf } from "lucide-react";
import type { Product } from "@/types";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { StarRating } from "@/components/shared/star-rating";
import { formatCurrency, cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface ProductDetailProps {
  product: Product;
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [activeImage, setActiveImage] = React.useState(product.image);
  const [quantity, setQuantity] = React.useState(1);
  const { toast } = useToast();

  const gallery = [product.image, ...product.gallery.filter((img) => img !== product.image)];

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
      <div className="flex flex-col gap-4">
        <motion.div
          key={activeImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-white shadow-soft"
        >
          {product.badge && (
            <Badge className="absolute left-4 top-4 z-10">{product.badge}</Badge>
          )}
          <Image src={activeImage} alt={product.name} fill className="object-cover" priority />
        </motion.div>
        {gallery.length > 1 && (
          <div className="flex gap-3">
            {gallery.map((image) => (
              <button
                key={image}
                onClick={() => setActiveImage(image)}
                className={cn(
                  "relative h-20 w-20 overflow-hidden rounded-xl border-2 transition-colors",
                  activeImage === image ? "border-primary" : "border-transparent"
                )}
                aria-label="Lihat gambar produk"
              >
                <Image src={image} alt={product.name} fill className="object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-extrabold text-secondary sm:text-3xl">{product.name}</h1>
          <StarRating rating={product.rating} reviewCount={product.reviewCount} />
        </div>

        <p className="text-3xl font-bold text-primary">{formatCurrency(product.price)}</p>

        <p className="text-muted">{product.description}</p>

        {product.weight && (
          <p className="text-sm text-secondary">
            <span className="font-semibold">Kemasan:</span> {product.weight}
          </p>
        )}

        <ul className="flex flex-col gap-2">
          {product.highlights.map((highlight) => (
            <li key={highlight} className="flex items-center gap-2 text-sm text-secondary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {highlight}
            </li>
          ))}
        </ul>

        <Separator />

        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center rounded-full border border-border">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="flex h-11 w-11 items-center justify-center rounded-full text-secondary transition-colors hover:text-primary"
              aria-label="Kurangi jumlah"
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="w-10 text-center font-semibold text-secondary">{quantity}</span>
            <button
              onClick={() => setQuantity((q) => Math.min(product.stock, q + 1))}
              className="flex h-11 w-11 items-center justify-center rounded-full text-secondary transition-colors hover:text-primary"
              aria-label="Tambah jumlah"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>

          <Button
            size="lg"
            className="flex-1 sm:flex-none"
            onClick={() =>
              toast({
                title: "Ditambahkan ke keranjang",
                description: `${quantity} x ${product.name} berhasil ditambahkan.`,
                variant: "success",
              })
            }
          >
            <ShoppingCart className="h-4 w-4" /> Tambah ke Keranjang
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-3">
          <div className="flex items-center gap-2 text-sm text-muted">
            <ShieldCheck className="h-4 w-4 text-primary" /> Tanpa Pengawet
          </div>
          <div className="flex items-center gap-2 text-sm text-muted">
            <Truck className="h-4 w-4 text-primary" /> Pengiriman Cepat
          </div>
          <div className="flex items-center gap-2 text-sm text-muted">
            <Leaf className="h-4 w-4 text-primary" /> Fresh Setiap Hari
          </div>
        </div>
      </div>
    </div>
  );
}
