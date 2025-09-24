import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ProductCard from "@/components/ProductCard";
import ContactForm from "@/components/ContactForm";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Soluciones (sin precios) */}
      <Section
        id="soluciones"
        eyebrow="Qué vendemos"
        title="Tres soluciones que resuelven problemas reales"
        subtitle="Operamos estos productos de negocio y también construimos a medida según tu proceso."
      >
        <div className="grid md:grid-cols-3 gap-6">
          <ProductCard
            title="WhatsApp Bot + Yappy (ventas/reservas)"
            bullets={[
              "Atiende y toma pedidos o reservas 24/7",
              "Calcula total y cobra con Yappy en el mismo chat",
              "Registra cada pedido en una hoja o sistema"
            ]}
            example="Restaurante: el cliente pide, paga por Yappy y queda todo registrado automáticamente."
          />
          <ProductCard
            title="Copiloto Cotización → Factura (FE)"
            bullets={[
              "Del chat normal a cotización y factura electrónica",
              "Cálculo correcto de ITBMS y totales",
              "Genera PDF listo para enviar por correo o WhatsApp"
            ]}
            example="Servicios A/C: el equipo escribe la solicitud y el sistema genera cotización y factura en minutos."
          />
          <ProductCard
            title="Link-in-Bio Store + WhatsApp + Yappy"
            bullets={[
              "Catálogo de 1 página con pago claro",
              "Integra WhatsApp para dudas y post-venta",
              "Ideal para lanzamientos, eventos o catálogos simples"
            ]}
            example="Emprendimiento: comparte un link con 6 productos, cobro Yappy y atención por WhatsApp."
          />
        </div>
      </Section>

      {/* Por qué nosotros */}
      <Section
        id="porque"
        eyebrow="Por qué LuLab"
        title="Elegir proveedor es elegir resultados"
        subtitle="Nos contratan por velocidad, claridad y cuidado en la experiencia de usuario."
      >
        <div className="grid md:grid-cols-2 gap-6">
          <ul className="space-y-4">
            {[
              "Salida más rápida: sprints semanales con entregables visibles.",
              "Diseño que vende: UI/UX que convierte y genera confianza.",
              "Arquitectura segura, escalable y con buenas prácticas.",
              "Costos y alcance claros: sin sorpresas.",
              "Soporte cercano: canal directo con el equipo."
            ].map((t, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="dot mt-1" />
                <p className="text-graytext">{t}</p>
              </li>
            ))}
          </ul>
          <div className="glass rounded-3xl p-6">
            <h4 className="text-xl font-semibold mb-3">Qué entregamos en cada proyecto</h4>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                ["Implementación guiada", "Checklist claro y acompañamiento"],
                ["Integración local", "Yappy/ERP/CRM según necesidad"],
                ["Capacitación", "Videos cortos y guía paso a paso"],
                ["Soporte", "Canal dedicado para incidencias"]
              ].map(([metric, label], i) => (
                <div key={i} className="rounded-2xl border border-white/70 p-4">
                  <div className="text-lg font-bold text-primary">{metric}</div>
                  <div className="text-graytext">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Proyectos detallados */}
      <Section
        id="proyectos"
        eyebrow="Proyectos"
        title="Cómo se ven los proyectos de cada solución"
        subtitle="Nos integramos a tu operación: pedimos pocos datos, configuramos, probamos y te acompañamos en la salida."
      >
        <div className="space-y-6">
          {/* A */}
          <div className="glass rounded-3xl p-6">
            <h3 className="text-xl font-semibold">WhatsApp Bot + Yappy</h3>
            <div className="grid md:grid-cols-3 gap-6 mt-4">
              <div>
                <div className="font-medium">Qué resuelve</div>
                <ul className="text-graytext mt-2 list-disc list-inside space-y-1">
                  <li>Pedidos/reservas sin esperar respuesta humana</li>
                  <li>Cobro inmediato en el chat (menos abandonos)</li>
                  <li>Orden: registro automático de pedidos</li>
                </ul>
              </div>
              <div>
                <div className="font-medium">Incluye</div>
                <ul className="text-graytext mt-2 list-disc list-inside space-y-1">
                  <li>Flujo de conversación y validaciones</li>
                  <li>Pago por Yappy y confirmación</li>
                  <li>Registro en hoja o base de datos</li>
                </ul>
              </div>
              <div>
                <div className="font-medium">Impacto típico</div>
                <ul className="text-graytext mt-2 list-disc list-inside space-y-1">
                  <li>Menos mensajes perdidos</li>
                  <li>Más cobros a la primera</li>
                  <li>Visibilidad de pedidos y tiempos</li>
                </ul>
              </div>
            </div>
          </div>
          {/* B */}
          <div className="glass rounded-3xl p-6">
            <h3 className="text-xl font-semibold">Copiloto Cotización → Factura (FE)</h3>
            <div className="grid md:grid-cols-3 gap-6 mt-4">
              <div>
                <div className="font-medium">Qué resuelve</div>
                <ul className="text-graytext mt-2 list-disc list-inside space-y-1">
                  <li>Evita transcribir datos entre chats y planillas</li>
                  <li>Menos errores con ITBMS y totales</li>
                  <li>Formalidad: documentos claros</li>
                </ul>
              </div>
              <div>
                <div className="font-medium">Incluye</div>
                <ul className="text-graytext mt-2 list-disc list-inside space-y-1">
                  <li>Plantillas de cotización/factura</li>
                  <li>PDF y envío por email/WhatsApp</li>
                  <li>Exportación simple a contabilidad</li>
                </ul>
              </div>
              <div>
                <div className="font-medium">Impacto típico</div>
                <ul className="text-graytext mt-2 list-disc list-inside space-y-1">
                  <li>Ahorro de tiempo del equipo</li>
                  <li>Menos correcciones fiscales</li>
                  <li>Seguimiento claro de propuestas</li>
                </ul>
              </div>
            </div>
          </div>
          {/* C */}
          <div className="glass rounded-3xl p-6">
            <h3 className="text-xl font-semibold">Link-in-Bio Store + WhatsApp + Yappy</h3>
            <div className="grid md:grid-cols-3 gap-6 mt-4">
              <div>
                <div className="font-medium">Qué resuelve</div>
                <ul className="text-graytext mt-2 list-disc list-inside space-y-1">
                  <li>Venta sin web compleja</li>
                  <li>Cobro simple y claro</li>
                  <li>Canal directo para dudas/post-venta</li>
                </ul>
              </div>
              <div>
                <div className="font-medium">Incluye</div>
                <ul className="text-graytext mt-2 list-disc list-inside space-y-1">
                  <li>Página 1-click con catálogo breve</li>
                  <li>Botón Yappy y confirmación</li>
                  <li>WhatsApp conectado</li>
                </ul>
              </div>
              <div>
                <div className="font-medium">Impacto típico</div>
                <ul className="text-graytext mt-2 list-disc list-inside space-y-1">
                  <li>Salida rápida de campañas</li>
                  <li>Tasa de cobro más alta</li>
                  <li>Menos fricción en atención</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Contacto */}
      <Section
        id="contacto"
        eyebrow="Hablemos"
        title="Cuéntanos tu objetivo y te proponemos el camino más corto"
        subtitle="Te devolvemos un plan y un estimado de ROI. Sin demos; construimos y entregamos."
      >
        <ContactForm />
      </Section>
    </>
  );
}
