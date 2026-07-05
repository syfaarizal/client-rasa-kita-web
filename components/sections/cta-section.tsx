"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/data/company";

export function CtaSection() {
  return (
    <section className="container-app pb-14 sm:pb-20" aria-label="Ajakan pesan sekarang">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-5 rounded-3xl bg-secondary px-6 py-12 text-center text-white sm:px-12"
      >
        <h2 className="max-w-xl text-2xl font-bold sm:text-3xl">
          Lapar? Pesan Sekarang, Nikmati Kelezatan RasaKita Hari Ini!
        </h2>
        <p className="max-w-lg text-sm text-white/80 sm:text-base">
          Konsultasikan kebutuhan camilan, katering, atau minuman untuk acaramu bersama tim kami.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild size="lg">
            <Link href="/products">Pesan Sekarang</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:text-secondary">
            <Link href={`https://wa.me/${company.whatsapp}`} target="_blank">
              <MessageCircle className="h-4 w-4" /> Chat WhatsApp
            </Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
