"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle"|"loading"|"ok"|"err">("idle");
  const [msg, setMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    // Honeypot
    if ((data as any).company) { setStatus("ok"); return; }

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (res.ok) {
      setStatus("ok");
      setMsg("¡Gracias! Te contactaremos en breve.");
      form.reset();
    } else {
      const t = await res.text();
      setStatus("err");
      setMsg("No pudimos enviar el mensaje. Intenta de nuevo o escríbenos al correo.");
      console.error(t);
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-4 glass rounded-3xl p-6">
      <input className="hidden" name="company" aria-hidden="true" tabIndex={-1} />
      <div className="flex flex-col gap-2">
        <label className="text-sm text-graytext">Nombre</label>
        <input name="name" required placeholder="Tu nombre"
          className="rounded-2xl border border-black/10 p-3 bg-white outline-none focus:ring-2 focus:ring-primary/30"/>
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm text-graytext">Email</label>
        <input type="email" name="email" required placeholder="tu@empresa.com"
          className="rounded-2xl border border-black/10 p-3 bg-white outline-none focus:ring-2 focus:ring-primary/30"/>
      </div>
      <div className="md:col-span-2 flex flex-col gap-2">
        <label className="text-sm text-graytext">¿Qué quieres lograr?</label>
        <textarea name="message" required rows={4} placeholder="Cuéntanos objetivo, plazos y presupuesto si aplica."
          className="rounded-2xl border border-black/10 p-3 bg-white outline-none focus:ring-2 focus:ring-primary/30"/>
      </div>
      <div className="md:col-span-2 flex items-center justify-between gap-3">
        <p className="text-sm text-graytext">
          Respuesta en <strong>menos de 24h</strong>. Tu información no se comparte.
        </p>
        <button className="btn-primary" disabled={status==="loading"}>
          {status==="loading" ? "Enviando..." : "Enviar"}
        </button>
      </div>
      {status!=="idle" && (
        <div className={`md:col-span-2 text-sm ${status==="ok" ? "text-accent" : "text-red-600"}`}>
          {msg}
        </div>
      )}
    </form>
  );
}
