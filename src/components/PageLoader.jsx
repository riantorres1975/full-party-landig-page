// src/components/PageLoader.jsx
// Pantalla de carga animada con globos y confeti

import { useEffect, useState } from 'react';

const BALLOONS = ['🎈', '🎉', '🎊', '✨', '🎈', '🎀', '💜', '🎈'];

export default function PageLoader({ onDone }) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Ocultar loader después de 2.4 s
    const timer = setTimeout(() => {
      setHidden(true);
      setTimeout(onDone, 850); // esperar fade-out antes de notificar al padre
    }, 2400);
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <div className={`loader-overlay ${hidden ? 'hidden' : ''}`}>
      {/* Confeti de fondo */}
      <div className="confetti-container">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="confetti-piece" />
        ))}
      </div>

      {/* Globos flotantes que suben */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {BALLOONS.map((b, i) => (
          <span
            key={i}
            className="loader-balloon"
            style={{
              left: `${8 + i * 11}%`,
              bottom: '10%',
              animationDelay: `${i * 0.22}s`,
              animationDuration: `${1.6 + i * 0.15}s`,
              fontSize: `${1.8 + (i % 3) * 0.6}rem`,
            }}
          >
            {b}
          </span>
        ))}
      </div>

      {/* Logo / Título central */}
      <div className="relative z-10 flex flex-col items-center gap-4 text-center px-6">
        {/*
          ─────────────────────────────────────────────────────────────
          LOGO: Coloca tu logo en src/assets/logo.png y descomenta:

          <img src="/src/assets/logo.png" alt="Full Party Uruapan"
               className="w-40 h-40 object-contain drop-shadow-2xl animate-float" />

          Por ahora se usa el título de texto como placeholder:
          ─────────────────────────────────────────────────────────────
        */}
        <div className="text-6xl animate-float">🎊</div>

        <h1 className="font-display text-4xl md:text-5xl text-brand-purple drop-shadow-sm">
          Full Party
        </h1>
        <p className="font-body font-bold text-brand-magenta text-lg tracking-wide">
          Uruapan
        </p>

        {/* Barra de progreso */}
        <div className="w-48 h-2 bg-purple-100 rounded-full overflow-hidden mt-3">
          <div
            className="h-full rounded-full bg-gradient-to-r from-brand-purple via-brand-magenta to-brand-orange"
            style={{ animation: 'load-bar 2.2s ease forwards' }}
          />
        </div>
      </div>

      <style>{`
        @keyframes load-bar {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </div>
  );
}
