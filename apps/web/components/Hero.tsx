"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Orbes decorativos */}
      <div className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(70%_70%_at_50%_10%,#000_60%,transparent)]">
        <div className="absolute -top-24 -left-24 w-[28rem] h-[28rem] rounded-full bg-primary/30 blur-3xl animate-float" />
        <div className="absolute -top-32 right-0 w-[22rem] h-[22rem] rounded-full bg-accent/30 blur-3xl animate-float" />
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-14 pb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 border border-white/70"
        >
          <span className="dot"></span>
          <span className="text-sm text-graytext">Ingeniería + Diseño que vende</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.6 }}
          className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight"
        >
          Software precioso por fuera,
          <br className="hidden md:block" />
          <span className="text-primary"> poderoso por dentro.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-4 text-lg text-graytext max-w-2xl mx-auto"
        >
          Construimos plataformas a medida, integramos tus sistemas y explotamos tus datos con IA.
          Menos fricción, más resultados medibles en semanas, no meses.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-8 flex items-center justify-center gap-3"
        >
          <a href="#contacto" className="btn-primary">Quiero resultados</a>
          <a href="#productos" className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-medium border border-black/10 bg-white hover:bg-white/70">
            Ver ofertas
          </a>
        </motion.div>

        {/* Tarjeta de prueba social y confianza */}
        <div className="grid md:grid-cols-3 gap-4 mt-12">
          {[
            ["< 14 días", "Primer entregable navegable"],
            ["Garantía", "Si no te aporta, lo re-hacemos"],
            ["Seguridad", "Buenas prácticas y control de acceso"]
          ].map(([title, desc], i) => (
            <div key={i} className="glass rounded-3xl p-5">
              <div className="text-xl font-semibold">{title}</div>
              <div className="text-graytext">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
