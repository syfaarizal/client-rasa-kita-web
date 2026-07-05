import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { company } from "@/data/company";
import { ContactForm } from "@/components/sections/contact-form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Kontak",
  description: "Hubungi tim RasaKita untuk pertanyaan, pemesanan, atau kerja sama.",
};

const faqs = [
  {
    question: "Berapa lama proses pengiriman?",
    answer: "Estimasi pengiriman 1-3 hari kerja tergantung lokasi tujuan di seluruh Indonesia.",
  },
  {
    question: "Apakah produk bisa dipesan dalam jumlah besar?",
    answer: "Bisa. Silakan hubungi customer service kami untuk pemesanan partai besar dan harga khusus.",
  },
  {
    question: "Bagaimana cara pembayaran yang tersedia?",
    answer: "Kami menerima transfer bank, e-wallet (OVO, GoPay), dan pembayaran melalui marketplace.",
  },
  {
    question: "Apakah ada garansi jika produk rusak saat pengiriman?",
    answer: "Ya, kami menyediakan garansi retur untuk produk yang rusak atau tidak sesuai pesanan.",
  },
];

export default function ContactPage() {
  return (
    <div className="container-app py-12 sm:py-16">
      <div className="mb-10 flex flex-col gap-2 text-center">
        <h1 className="text-3xl font-extrabold text-secondary sm:text-4xl">Hubungi Kami</h1>
        <p className="mx-auto max-w-xl text-muted">
          Punya pertanyaan seputar produk atau pemesanan? Tim kami siap membantu.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
        <div className="flex flex-col gap-4 lg:col-span-2">
          <div className="flex flex-col gap-4 rounded-2xl border border-border bg-white p-6 shadow-soft">
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-light text-primary">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold text-secondary">Alamat</p>
                <p className="text-sm text-muted">{company.address}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-light text-primary">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold text-secondary">Telepon</p>
                <p className="text-sm text-muted">{company.phone}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-light text-primary">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold text-secondary">Email</p>
                <p className="text-sm text-muted">{company.email}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-light text-primary">
                <Clock className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold text-secondary">Jam Operasional</p>
                <p className="text-sm text-muted">{company.operationalHours}</p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border shadow-soft">
            <iframe
              title="Lokasi RasaKita"
              src="https://www.google.com/maps?q=Bandung&output=embed"
              className="h-64 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="rounded-2xl border border-border bg-white p-6 shadow-soft sm:p-8">
            <h2 className="mb-6 text-xl font-bold text-secondary">Kirim Pesan</h2>
            <ContactForm />
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="mb-6 text-center text-2xl font-bold text-secondary">Pertanyaan Umum</h2>
        <Accordion type="single" collapsible className="mx-auto max-w-2xl">
          {faqs.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
