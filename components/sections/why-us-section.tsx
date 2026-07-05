"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  HeartHandshake,
  Tag,
  Headset,
  Truck,
  type LucideIcon,
} from "lucide-react";
import { whyUsFeatures } from "@/data/features";
import { SectionHeading } from "@/components/shared/section-heading";

const iconMap: Record<string, LucideIcon> = {
  "shield-check": ShieldCheck,
  "heart-handshake": HeartHandshake,
  tag: Tag,
  headset: Headset,
  truck: Truck,
};

export function WhyUsSection() {
  return (
    <section className="container-app py-14 sm:py-20" aria-label="Kenapa memilih kami">
      <SectionHeading title="Mengapa Memilih RasaKita?" className="mb-10" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {whyUsFeatures.map((feature, index) => {
          const Icon = iconMap[feature.icon] ?? ShieldCheck;
          return (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              className="flex flex-col items-start gap-3 rounded-xl border border-border bg-white p-5 shadow-soft"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-light text-primary">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-semibold text-secondary">{feature.title}</p>
                <p className="text-sm text-muted">{feature.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
