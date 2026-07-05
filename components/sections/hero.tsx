"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BadgeCheck, Smile, PackageCheck, Truck, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { heroFeatures } from "@/data/features";

const iconMap: Record<string, LucideIcon> = {
  "badge-check": BadgeCheck,
  smile: Smile,
  "package-check": PackageCheck,
  truck: Truck,
};

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-light via-cream to-cream">
      <div className="container-app grid grid-cols-1 items-center gap-10 py-14 sm:py-20 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <h1 className="text-balance text-3xl font-extrabold leading-tight text-secondary sm:text-4xl lg:text-5xl">
            Lezatnya Camilan Lokal,{" "}
            <span className="text-primary">Praktis dan Berkualitas</span>
          </h1>
          <p className="max-w-lg text-base text-muted sm:text-lg">
            Temukan berbagai camilan, frozen food, katering sehat, dan minuman kekinian
            pilihan untuk setiap momen spesialmu.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/products">Belanja Sekarang</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/products">Lihat Semua Produk</Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4 sm:grid-cols-4">
            {heroFeatures.map((feature) => {
              const Icon = iconMap[feature.icon] ?? BadgeCheck;
              return (
                <div key={feature.id} className="flex flex-col gap-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-primary shadow-soft">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-secondary">{feature.title}</p>
                    <p className="text-xs text-muted">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto grid w-full max-w-md grid-cols-2 gap-3 sm:max-w-lg"
        >
          <div className="col-span-2 overflow-hidden rounded-3xl shadow-card">
            <Image
              src="/images/hero-1.jpg"
              alt="Aneka dimsum dan camilan RasaKita"
              width={640}
              height={360}
              priority
              className="h-48 w-full object-cover sm:h-56"
            />
          </div>
          <div className="overflow-hidden rounded-3xl shadow-card">
            <Image
              src="/images/hero-2.jpg"
              alt="Minuman kekinian RasaKita"
              width={320}
              height={320}
              className="h-40 w-full object-cover sm:h-48"
            />
          </div>
          <div className="overflow-hidden rounded-3xl shadow-card">
            <Image
              src="/images/hero-3.jpg"
              alt="Katering sehat RasaKita"
              width={320}
              height={320}
              className="h-40 w-full object-cover sm:h-48"
            />
          </div>

          <div className="absolute -bottom-6 left-1/2 flex w-40 -translate-x-1/2 flex-col items-center gap-1 rounded-full bg-white p-4 text-center shadow-card sm:w-44">
            <span className="text-xl font-extrabold text-primary sm:text-2xl">100%</span>
            <span className="text-[11px] font-medium leading-tight text-muted">
              Bahan Pilihan Tanpa Pengawet
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
