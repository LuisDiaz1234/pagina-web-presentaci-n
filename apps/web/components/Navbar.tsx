"use client";
import Link from "next/link";
import Logo from "./Logo";
import { useEffect, useState } from "react";
import clsx from "clsx";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={clsx(
        "sticky top-0 z-50 transition-all",
        scrolled ? "backdrop-blur bg-white/70 border-b border-white/60" : ""
      )}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Logo className="h-8 w-8" />
          <span className="font-semibold">LuLab Technology</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-graytext">
          <a href="#productos" className="hover:text-charcoal">Productos</a>
          <a href="#porque" className="hover:text-charcoal">Por qué</a>
          <a href="#contacto" className="hover:text-charcoal">Contacto</a>
        </nav>
        <a href="#contacto" className="btn-primary">Empezar</a>
      </div>
    </header>
  );
}
