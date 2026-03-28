// src/components/layout/Navbar.jsx
// Barra de navegación con glassmorphism, logo y menú móvil

import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'Categorías',  href: '#categorias' },
  { label: 'Catálogo',    href: '#catalogo'   },
  { label: 'Sucursales',  href: '#sucursales' },
  { label: 'Contacto',    href: '#contacto'   },
];

const STORE_URL = 'https://full-party-store.vercel.app/';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`glass-nav fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
        scrolled ? 'shadow-lg shadow-purple-100' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">

        {/* Logo + Brand */}
        <a href="#" className="flex items-center gap-2 group">
          {/*
            ─────────────────────────────────────────────────────
            LOGO: Descomenta para usar tu imagen real:
            <img src="/src/assets/logo.png" alt="Logo"
                 className="h-10 w-10 object-contain" />
            ─────────────────────────────────────────────────────
          */}
          <span className="text-2xl group-hover:animate-bounce transition-all">🎊</span>
          <span className="font-display text-xl text-brand-purple">
            Full Party <span className="text-brand-magenta">Uruapan</span>
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-body font-700 text-gray-700 hover:text-brand-purple transition-colors duration-200 text-sm font-semibold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Desktop */}
        <a
          href={STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 btn-shimmer text-white font-display text-sm px-5 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-200"
        >
          <i className="fa-solid fa-store" />
          Ir a la Tienda
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden text-brand-purple text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu md:hidden bg-white/95 backdrop-blur px-4 ${menuOpen ? 'open' : ''}`}>
        <ul className="py-3 space-y-1">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2 text-gray-700 font-semibold hover:text-brand-purple transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center btn-shimmer text-white font-display py-2 rounded-full shadow"
            >
              🛍️ Ir a la Tienda
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
