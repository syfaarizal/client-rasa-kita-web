"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { heroPromo } from "@/data/promo";
import { Button } from "@/components/ui/button";

export function PromoBanner() {
  return (
    <section className="container-app py-4 sm:py-6" aria-label="Promo spesial">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-2xl bg-primary sm:rounded-3xl"
      >
        <div className="absolute inset-0">
          <Image
            src={heroPromo.image}
            alt="Promo spesial RasaKita"
            fill
            className="object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 flex flex-col items-start justify-between gap-6 p-8 sm:flex-row sm:items-center sm:p-12">
          <div className="flex flex-col gap-2 text-white">
            <span className="text-sm font-medium uppercase tracking-wide">{heroPromo.title}</span>
            <h2 className="text-3xl font-extrabold sm:text-4xl">{heroPromo.highlight}</h2>
            <p className="max-w-sm text-sm text-white/90 sm:text-base">{heroPromo.description}</p>
            <Button asChild variant="secondary" size="lg" className="mt-3 w-fit">
              <Link href={heroPromo.ctaHref}>{heroPromo.ctaLabel}</Link>
            </Button>
          </div>
          <div className="flex flex-col items-center text-white">
            <span className="text-sm font-medium">DISKON HINGGA</span>
            <span className="text-6xl font-extrabold sm:text-7xl">{heroPromo.discountLabel}</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
