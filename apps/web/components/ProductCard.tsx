"use client";
import { motion } from "framer-motion";

export default function ProductCard({
  title,
  bullets,
  example,
  price
}: {
  title: string;
  bullets: string[];
  example: string;
  price?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
      className="rounded-3xl glass p-6 flex flex-col"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">{title}</h3>
        {price && <span className="text-primary font-semibold">{price}</span>}
      </div>
      <ul className="mt-4 space-y-3">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-3 text-graytext">
            <span className="dot mt-2" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <div className="mt-4 rounded-2xl bg-lightbg p-4 text-sm text-graytext">
        <span className="font-medium text-charcoal">Ejemplo:&nbsp;</span>
        {example}
      </div>
      <a href="#contacto" className="btn-primary mt-6">Solicitar propuesta</a>
    </motion.div>
  );
}
