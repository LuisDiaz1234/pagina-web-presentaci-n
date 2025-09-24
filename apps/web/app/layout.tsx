import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "LuLab Technology — Construimos software que acelera tu negocio",
  description:
    "Plataformas a medida, Integraciones & Automatización, y Data + IA aplicada. Entregamos rápido, con diseño impecable y ROI medible.",
  themeColor: "#0E76FF",
  icons: { icon: "/logo-lulab.svg" },
  openGraph: {
    title: "LuLab Technology",
    description:
      "Software a medida, integraciones y analítica + IA para empresas que quieren crecer rápido.",
    url: "https://lulab.example",
    siteName: "LuLab Technology",
    images: [{ url: "/logo-lulab.svg", width: 512, height: 512, alt: "LuLab" }],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "LuLab Technology",
    description:
      "Software a medida, integraciones y analítica + IA para crecer.",
    images: ["/logo-lulab.svg"]
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
