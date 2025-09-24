import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 gap-6 items-center">
          <div className="flex items-center gap-3">
            <Logo className="h-9 w-9" />
            <div>
              <div className="font-semibold">LuLab Technology</div>
              <div className="text-graytext text-sm">Construimos software que acelera tu negocio.</div>
            </div>
          </div>
          <div className="text-sm text-graytext sm:text-right">
            © {new Date().getFullYear()} LuLab Technology. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}
