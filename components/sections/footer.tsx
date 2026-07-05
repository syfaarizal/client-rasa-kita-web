"use client";

import * as React from "react";
import Link from "next/link";
import {
  Instagram,
  Facebook,
  MessageCircle,
  Music2,
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
} from "lucide-react";
import { company } from "@/data/company";
import { categories } from "@/data/categories";
import { NAV_LINKS } from "@/lib/constants";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";

const socialIconMap: Record<string, React.ElementType> = {
  instagram: Instagram,
  "music-2": Music2,
  facebook: Facebook,
  "message-circle": MessageCircle,
};

export function Footer() {
  const { toast } = useToast();
  const [email, setEmail] = React.useState("");

  function handleSubscribe(event: React.FormEvent) {
    event.preventDefault();
    if (!email.includes("@")) {
      toast({ title: "Email tidak valid", variant: "destructive" });
      return;
    }
    toast({ title: "Berhasil berlangganan!", description: "Terima kasih sudah bergabung." });
    setEmail("");
  }

  return (
    <footer className="bg-secondary text-white">
      <div className="container-app grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-5">
        <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-light text-lg font-bold text-primary">
              🍱
            </span>
            <span className="text-lg font-extrabold">RasaKita</span>
          </Link>
          <p className="text-sm text-white/70">{company.description}</p>
          <div className="flex items-center gap-3">
            {company.socials.map((social) => {
              const Icon = socialIconMap[social.icon] ?? Instagram;
              return (
                <Link
                  key={social.platform}
                  href={social.href}
                  aria-label={social.platform}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-primary"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white/60">Navigasi</h3>
          {NAV_LINKS.map((link) => (
            <Link key={link.label} href={link.href} className="text-sm text-white/80 hover:text-primary">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white/60">Kategori</h3>
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/products?category=${category.slug}`}
              className="text-sm text-white/80 hover:text-primary"
            >
              {category.name}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white/60">Kontak Kami</h3>
          <p className="flex items-start gap-2 text-sm text-white/80">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {company.address}
          </p>
          <p className="flex items-center gap-2 text-sm text-white/80">
            <Phone className="h-4 w-4 shrink-0 text-primary" /> {company.phone}
          </p>
          <p className="flex items-center gap-2 text-sm text-white/80">
            <Mail className="h-4 w-4 shrink-0 text-primary" /> {company.email}
          </p>
          <p className="flex items-center gap-2 text-sm text-white/80">
            <Clock className="h-4 w-4 shrink-0 text-primary" /> {company.operationalHours}
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white/60">Newsletter</h3>
          <p className="text-sm text-white/80">
            Dapatkan info promo dan produk terbaru dari kami.
          </p>
          <form onSubmit={handleSubscribe} className="flex gap-2">
            <Input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Masukkan email Anda"
              aria-label="Email untuk newsletter"
              className="border-white/15 border-r-0 bg-white/10 text-white placeholder:text-white/50"
            />
            <Button type="submit" size="icon" aria-label="Kirim">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>

      <Separator className="bg-white/10" />

      <div className="container-app flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
        <p className="text-xs text-white/60">
          © {new Date().getFullYear()} RasaKita. Semua Hak Dilindungi.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          {company.paymentMethods.map((method) => (
            <span
              key={method}
              className="rounded-md bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-white/70"
            >
              {method}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
