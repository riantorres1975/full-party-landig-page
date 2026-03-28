// src/components/HeroSection.jsx
// Sección hero con fondo animado de globos y confeti

const STORE_URL = 'https://full-party-store.vercel.app/';

// Globos decorativos del fondo
const BG_BALLOONS = [
  { emoji: '🎈', top: '8%',  left: '4%',   size: '3rem', anim: 'animate-float',        delay: '0s'   },
  { emoji: '🎉', top: '15%', left: '88%',  size: '2.5rem',anim: 'animate-float_slow',  delay: '0.5s' },
  { emoji: '⭐', top: '60%', left: '2%',   size: '2rem', anim: 'animate-float_slower', delay: '1s'   },
  { emoji: '🎊', top: '70%', left: '92%',  size: '2.8rem',anim: 'animate-float',        delay: '1.5s' },
  { emoji: '💜', top: '40%', left: '95%',  size: '1.8rem',anim: 'animate-float_slow',  delay: '0.8s' },
  { emoji: '🎈', top: '85%', left: '15%',  size: '2.2rem',anim: 'animate-float_slower',delay: '0.3s' },
  { emoji: '✨', top: '25%', left: '92%',  size: '2rem', anim: 'animate-float',         delay: '2s'   },
  { emoji: '🎀', top: '50%', left: '5%',   size: '2.5rem',anim: 'animate-float_slow',  delay: '0.2s' },
];

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      style={{
        background: 'linear-gradient(135deg, #fdf4ff 0%, #fff1f5 40%, #f0fdff 100%)',
      }}
    >
      {/* Confeti de fondo */}
      <div className="confetti-container opacity-30">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="confetti-piece" />
        ))}
      </div>

      {/* Globos flotantes decorativos */}
      {BG_BALLOONS.map((b, i) => (
        <span
          key={i}
          className={`absolute pointer-events-none select-none ${b.anim}`}
          style={{ top: b.top, left: b.left, fontSize: b.size, animationDelay: b.delay, opacity: 0.6 }}
        >
          {b.emoji}
        </span>
      ))}

      {/* Blobs de color de fondo */}
      <div className="absolute top-10 -left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float_slow" />
      <div className="absolute top-20 right-0 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float_slower" />
      <div className="absolute bottom-10 left-1/3 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" />

      {/* Contenido principal */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        {/*
          ─────────────────────────────────────────────────────────────────
          LOGO HERO: Coloca tu logo en src/assets/logo.png y descomenta:

          <img
            src="/src/assets/logo.png"
            alt="Full Party Uruapan"
            className="mx-auto mb-6 w-36 h-36 md:w-48 md:h-48 object-contain drop-shadow-2xl animate-float"
          />
          ─────────────────────────────────────────────────────────────────
        */}
        <div className="text-7xl md:text-8xl mb-4 animate-float drop-shadow-lg">🎊</div>

        {/* Badge */}
        <span className="inline-block bg-brand-yellow text-brand-purple font-display text-sm px-4 py-1 rounded-full shadow mb-4 tracking-wide">
          🎈 Uruapan, Michoacán
        </span>

        {/* Título principal */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6">
          <span className="text-brand-purple">¡Haz que tu</span>{' '}
          <span
            className="text-transparent bg-clip-text"
            style={{ backgroundImage: 'linear-gradient(90deg, #db2777, #ea580c, #facc15)' }}
          >
            fiesta
          </span>
          <br />
          <span className="text-brand-purple">sea</span>{' '}
          <span className="text-brand-cyan">inolvidable!</span>{' '}
          <span>🎉</span>
        </h1>

        {/* Subtítulo */}
        <p className="font-body text-gray-600 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
          Globos, decoraciones y todo lo que necesitas para celebrar.
          Explora nuestro catálogo digital y haz tu pedido fácil y rápido.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="animate-pulse_glow btn-shimmer text-white font-display text-lg px-8 py-4 rounded-full shadow-2xl hover:shadow-pink-400/50 hover:scale-105 transition-all duration-300 flex items-center gap-3"
          >
            <i className="fa-solid fa-store" />
            Ver Catálogo Digital
          </a>
          <a
            href="#categorias"
            className="font-body font-bold text-brand-purple border-2 border-brand-purple px-8 py-4 rounded-full hover:bg-brand-purple hover:text-white transition-all duration-300 flex items-center gap-2"
          >
            <i className="fa-solid fa-grid-2" />
            Ver Categorías
          </a>
        </div>

        {/* Stats decorativos */}
        <div className="mt-14 grid grid-cols-3 gap-4 max-w-md mx-auto">
          {[
            { emoji: '🎈', label: 'Tipos de globos', value: '100+' },
            { emoji: '🏪', label: 'Sucursales',      value: '2'    },
            { emoji: '🎉', label: 'Años de experiencia', value: '5+' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl">{stat.emoji}</div>
              <div className="font-display text-2xl text-brand-purple">{stat.value}</div>
              <div className="font-body text-xs text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#categorias"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-brand-purple opacity-60 hover:opacity-100 transition-opacity animate-bounce"
      >
        <i className="fa-solid fa-chevron-down text-2xl" />
      </a>
    </section>
  );
}
