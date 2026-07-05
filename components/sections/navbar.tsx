"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, Search, ShoppingCart, User, Instagram, Facebook, Phone, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/constants";
import { company } from "@/data/company";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden bg-secondary text-white sm:block">
        <div className="container-app flex h-9 items-center justify-between text-xs">
          <div className="flex items-center gap-5">
            <span>Pengiriman ke seluruh Indonesia</span>
            <span className="hidden items-center gap-1 md:flex">
              Gratis Ongkir min. belanja Rp150.000
            </span>
            <span className="hidden items-center gap-1 lg:flex">
              <Phone className="h-3 w-3" /> Customer Service: {company.phone}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span>Ikuti kami:</span>
            <Link href={company.socials[0].href} aria-label="Instagram" className="hover:text-primary">
              <Instagram className="h-3.5 w-3.5" />
            </Link>
            <Link href={company.socials[2].href} aria-label="Facebook" className="hover:text-primary">
              <Facebook className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={{
          boxShadow: scrolled ? "0 8px 30px -12px rgba(43,43,43,0.15)" : "0 0 0 rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.3 }}
        className={cn("glass border-b border-border transition-colors", scrolled ? "glass" : "bg-cream")}
      >
        <div className="container-app flex h-20 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2" aria-label="RasaKita - Beranda">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-light text-lg font-bold text-primary">
              🍱
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-lg font-extrabold text-secondary">RasaKita</span>
              <span className="text-[11px] text-muted">Lezat, Praktis, Berkualitas</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigasi utama">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <DropdownMenu key={link.label}>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-secondary transition-colors hover:bg-primary-light hover:text-primary">
                      {link.label}
                      <ChevronDown className="h-3.5 w-3.5" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    {link.children.map((child) => (
                      <DropdownMenuItem key={child.label} asChild>
                        <Link href={child.href}>{child.label}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium text-secondary transition-colors hover:bg-primary-light hover:text-primary",
                    pathname === link.href && "bg-primary-light text-primary"
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <Button variant="ghost" size="icon" aria-label="Cari produk" className="hidden sm:inline-flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Akun saya" className="hidden sm:inline-flex">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Keranjang belanja" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">
                3
              </span>
            </Button>
            <Button asChild size="default" className="hidden md:inline-flex">
              <Link href="/products">Pesan Sekarang</Link>
            </Button>

            <Sheet open={drawerOpen} onOpenChange={setDrawerOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Buka menu" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-1" aria-label="Navigasi mobile">
                  {NAV_LINKS.map((link) => (
                    <div key={link.label} className="flex flex-col">
                      <SheetClose asChild>
                        <Link
                          href={link.href}
                          className="rounded-lg px-3 py-3 font-medium text-secondary transition-colors hover:bg-primary-light hover:text-primary"
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                      {link.children && (
                        <div className="ml-3 flex flex-col border-l border-border pl-3">
                          {link.children.map((child) => (
                            <SheetClose asChild key={child.label}>
                              <Link
                                href={child.href}
                                className="rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:text-primary"
                              >
                                {child.label}
                              </Link>
                            </SheetClose>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
                <Button asChild className="mt-4">
                  <Link href="/products">Pesan Sekarang</Link>
                </Button>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.div>
    </header>
  );
}
