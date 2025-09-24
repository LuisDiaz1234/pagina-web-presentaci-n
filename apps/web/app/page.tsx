import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ProductCard from "@/components/ProductCard";
import ContactForm from "@/components/ContactForm";

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* Productos */}
      <Section
        id="productos"
        eyebrow="Qué vendemos"
        title="3 ofertas claras para generar valor desde la primera semana"
        subtitle="Diseñadas para impactar rápido, medible y con estándares de nivel enterprise."
      >
        <div className="grid md:grid-cols-3 gap-6">
          <ProductCard
            title="Plataformas a Medida"
            price="Desde $8,900"
            bullets={[
              "Apps web y portales con diseño premium",
              "Autenticación, roles y paneles",
              "Escalable en la nube (Vercel/AWS)"
            ]}
            example="Ejemplo: portal de clientes con pagos y notificaciones."
          />
          <ProductCard
            title="Integraciones & Automatización"
            price="Desde $3,500"
            bullets={[
              "Conectamos ERP/CRM/E-commerce con tus apps",
              "APIs y webhooks robustos",
              "Automatizamos procesos repetitivos"
            ]}
            example="Ejemplo: pedidos del e-commerce directo al ERP con inventario en vivo."
          />
          <ProductCard
            title="Data + IA Aplicada"
            price="Desde $4,900"
            bullets={[
              "Dashboards con métricas de negocio",
              "Bots privados (RAG) sobre tus documentos",
              "Alertas y predicciones accionables"
            ]}
            example="Ejemplo: dashboard de ventas + bot interno que responde sobre contratos."
          />
        </div>
      </Section>

      {/* Por qué LuLab */}
      <Section
        id="porque"
        eyebrow="Por qué LuLab"
        title="Te compran resultados: nosotros los entregamos"
        subtitle="Menos bla-bla, más cambio real en tu operación."
      >
        <div className="grid md:grid-cols-2 gap-6">
          <ul className="space-y-4">
            {[
              "Salida 3× más rápida: sprints semanales con entregables visibles.",
              "Diseño que vende: UI/UX que convierte y crea confianza.",
              "Arquitectura segura y preparada para crecer.",
              "Costos claros y sin sorpresas (alcance cerrado).",
              "Soporte cercano: canal directo con el equipo."
            ].map((t, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="dot mt-1" />
                <p className="text-graytext">{t}</p>
              </li>
            ))}
          </ul>
          <div className="glass rounded-3xl p-6">
            <h4 className="text-xl font-semibold mb-3">Garantías de valor</h4>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                ["<14 días", "MVP navegable"],
                ["+28%", "Tasa de conversión típica"],
                ["99.9%", "Disponibilidad"],
                ["NPS 70+", "Relación a largo plazo"]
              ].map(([metric, label], i) => (
                <div key={i} className="rounded-2xl border border-white/70 p-4">
                  <div className="text-3xl font-bold text-primary">{metric}</div>
                  <div className="text-graytext">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Contacto */}
      <Section
        id="contacto"
        eyebrow="Hablemos"
        title="Cuéntanos tu objetivo y te proponemos el camino más corto"
        subtitle="Agenda un diagnóstico sin costo. Te devolvemos un plan y un estimado de ROI."
      >
        <ContactForm />
      </Section>
    </>
  );
}
