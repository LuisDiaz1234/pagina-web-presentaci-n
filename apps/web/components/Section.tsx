import { ReactNode } from "react";

export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section id={id} className="py-14">
      <div className="max-w-7xl mx-auto px-4">
        {eyebrow && (
          <div className="inline-flex items-center gap-2 text-sm text-graytext">
            <span className="dot" />
            <span>{eyebrow}</span>
          </div>
        )}
        <h2 className="mt-3 text-3xl md:text-4xl font-bold">{title}</h2>
        {subtitle && <p className="mt-2 text-graytext max-w-3xl">{subtitle}</p>}
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
