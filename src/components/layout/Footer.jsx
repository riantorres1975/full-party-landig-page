// src/components/layout/Footer.jsx

const STORE_URL   = 'https://full-party-store.vercel.app/';
const FB_URL      = 'https://www.facebook.com/profile.php?id=100068298698109';
const WA_URL      = 'https://wa.me/524521040377';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-brand-purple via-purple-900 to-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="text-3xl">🎊</span>
            <span className="font-display text-2xl">
              Full Party <span className="text-brand-yellow">Uruapan</span>
            </span>
          </div>
          <p className="text-purple-200 text-sm leading-relaxed font-body">
            Tu tienda de globos y artículos de fiesta en Uruapan, Michoacán.
            ¡Hacemos que cada celebración sea mágica! ✨
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-display text-brand-yellow text-lg mb-4">Navegación</h4>
          <ul className="space-y-2 text-sm text-purple-200">
            {[
              ['#categorias', 'Categorías'],
              ['#catalogo',   'Catálogo'],
              ['#sucursales', 'Sucursales'],
              ['#contacto',   'Contacto'],
              [STORE_URL,     'Tienda Online 🛍️', true],
            ].map(([href, label, ext]) => (
              <li key={href}>
                <a
                  href={href}
                  target={ext ? '_blank' : undefined}
                  rel={ext ? 'noopener noreferrer' : undefined}
                  className="hover:text-brand-yellow transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-display text-brand-yellow text-lg mb-4">Síguenos</h4>
          <div className="flex gap-4">
            <a
              href={FB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center text-lg hover:scale-110 hover:bg-blue-500 transition-transform shadow-lg"
              aria-label="Facebook"
            >
              <i className="fa-brands fa-facebook-f" />
            </a>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-green-500 flex items-center justify-center text-lg hover:scale-110 hover:bg-green-400 transition-transform shadow-lg"
              aria-label="WhatsApp"
            >
              <i className="fa-brands fa-whatsapp" />
            </a>
            <a
              href={STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-brand-magenta flex items-center justify-center text-lg hover:scale-110 hover:bg-pink-500 transition-transform shadow-lg"
              aria-label="Tienda online"
            >
              <i className="fa-solid fa-store" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-purple-700 text-center py-4 text-xs text-purple-300 font-body">
        © {new Date().getFullYear()} Full Party Uruapan — Todos los derechos reservados 🎈
      </div>
    </footer>
  );
}
