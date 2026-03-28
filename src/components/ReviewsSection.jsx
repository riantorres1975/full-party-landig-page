// src/components/ReviewsSection.jsx
// Carrusel de reseñas de Google Maps con rotación automática

import { useState, useEffect, useCallback } from 'react';

// ─────────────────────────────────────────────────────────────────────────────
// RESEÑAS: Edita este array con las opiniones reales de tu Google Maps.
// Copia el nombre, calificación (1-5), fecha y texto de cada reseña.
// ─────────────────────────────────────────────────────────────────────────────
const REVIEWS = [
  {
    id: 1,
    name: 'María González',
    rating: 5,
    date: 'hace 2 semanas',
    text: '¡Excelente servicio! Encontré todo lo que necesitaba para la fiesta de cumpleaños de mi hija. Los globos de foil son hermosos y el precio muy accesible.',
    avatar: 'MG',
    color: 'bg-brand-purple',
  },
  {
    id: 2,
    name: 'Carlos Ramírez',
    rating: 5,
    date: 'hace 1 mes',
    text: 'Muy buena variedad de artículos de fiesta. El personal es muy amable y te ayudan a elegir la decoración perfecta. Definitivamente volvería a comprar aquí.',
    avatar: 'CR',
    color: 'bg-brand-magenta',
  },
  {
    id: 3,
    name: 'Laura Mendoza',
    rating: 5,
    date: 'hace 1 mes',
    text: 'Pedí por WhatsApp y fue súper rápido. Llegó todo en perfecto estado. Los globos de látex de colores son increíbles, ¡mi fiesta quedó preciosa!',
    avatar: 'LM',
    color: 'bg-brand-cyan',
  },
  {
    id: 4,
    name: 'Roberto Silva',
    rating: 4,
    date: 'hace 2 meses',
    text: 'Gran tienda con mucha variedad. Tiene de todo para armar una mesa de dulces espectacular. Los precios son justos y la atención muy buena.',
    avatar: 'RS',
    color: 'bg-brand-orange',
  },
  {
    id: 5,
    name: 'Ana Patricia Flores',
    rating: 5,
    date: 'hace 2 meses',
    text: 'El mejor lugar en Uruapan para comprar artículos de fiesta. La decoración que me recomendaron para el bautizo quedó espectacular. ¡100% recomendado!',
    avatar: 'AF',
    color: 'bg-brand-lime',
  },
  {
    id: 6,
    name: 'Jorge Herrera',
    rating: 5,
    date: 'hace 3 meses',
    text: 'Compré globos de figuras y personajes para la fiesta de mi sobrino. Quedó encantado. Precios accesibles y entrega rápida. ¡Excelente servicio!',
    avatar: 'JH',
    color: 'bg-violet-600',
  },
];

// Componente de estrellas
function Stars({ rating }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <i
          key={i}
          className={`fa-solid fa-star text-sm ${
            i < rating ? 'text-yellow-400' : 'text-gray-200'
          }`}
        />
      ))}
    </div>
  );
}

// Tarjeta individual de reseña
function ReviewCard({ review, isActive, isPrev, isNext }) {
  let positionClass = 'opacity-0 scale-90 pointer-events-none';
  if (isActive) positionClass = 'opacity-100 scale-100 z-20 relative';
  else if (isPrev || isNext) positionClass = 'opacity-40 scale-95 z-10';

  return (
    <div
      className={`transition-all duration-500 ease-in-out ${positionClass} 
        bg-white rounded-3xl shadow-xl p-6 border border-gray-100 flex flex-col gap-4 min-h-[220px]`}
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        {/* Avatar */}
        <div className={`${review.color} w-11 h-11 rounded-full flex items-center justify-center text-white font-display text-sm flex-shrink-0 shadow`}>
          {review.avatar}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-body font-bold text-gray-800 text-sm truncate">{review.name}</p>
          <div className="flex items-center gap-2">
            <Stars rating={review.rating} />
            <span className="text-gray-400 text-xs">{review.date}</span>
          </div>
        </div>
        {/* Google icon */}
        <div className="flex-shrink-0 opacity-60">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
        </div>
      </div>

      {/* Texto */}
      <p className="font-body text-gray-600 text-sm leading-relaxed flex-1">
        <i className="fa-solid fa-quote-left text-brand-purple opacity-30 mr-1 text-xs" />
        {review.text}
        <i className="fa-solid fa-quote-right text-brand-purple opacity-30 ml-1 text-xs" />
      </p>
    </div>
  );
}

export default function ReviewsSection() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = REVIEWS.length;

  const next = useCallback(() => setCurrent(c => (c + 1) % total), [total]);
  const prev = useCallback(() => setCurrent(c => (c - 1 + total) % total), [total]);

  // Auto-rotate cada 4 segundos
  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [next, paused]);

  // Cuántas tarjetas mostrar según el ancho
  // En desktop mostramos 3 centradas, en mobile solo 1
  const getVisible = () => {
    const prev1 = (current - 1 + total) % total;
    const next1 = (current + 1) % total;
    return { prev1, current, next1 };
  };

  const { prev1, next1 } = getVisible();

  const GOOGLE_MAPS_URL = 'https://www.google.com/maps/place/Full+Party+Uruapan+Suc+Sol+Naciente/data=!4m2!3m1!1s0x0:0x5158156fe2efca48?sa=X&ved=1t:2428&ictx=111';

  return (
    <section
      id="resenas"
      className="py-20 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #fffbeb 0%, #fdf4ff 100%)' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Encabezado */}
        <div className="text-center mb-14" data-aos="fade-up">
          <span className="inline-block bg-yellow-100 text-yellow-700 font-body font-bold text-sm px-4 py-1 rounded-full mb-4">
            ⭐ Opiniones de clientes
          </span>
          <h2 className="section-title text-4xl md:text-5xl text-gray-800 mb-4">
            Lo que dicen en{' '}
            <span className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(90deg, #4285F4, #34A853)' }}>
              Google
            </span>
          </h2>
          {/* Rating global */}
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="font-display text-4xl text-gray-800">4.7</span>
            <div className="flex flex-col items-start gap-0.5">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <i key={i} className="fa-solid fa-star text-yellow-400 text-lg" />
                ))}
              </div>
              <span className="font-body text-gray-400 text-xs">Basado en reseñas de Google Maps</span>
            </div>
          </div>
        </div>

        {/* Carrusel Desktop: 3 tarjetas */}
        <div className="hidden md:grid grid-cols-3 gap-6 items-center" data-aos="fade-up">
          {[prev1, current, next1].map((idx, pos) => (
            <div
              key={REVIEWS[idx].id}
              onClick={() => setCurrent(idx)}
              className={`cursor-pointer transition-all duration-500 ${
                pos === 1
                  ? 'scale-100 opacity-100'
                  : 'scale-95 opacity-50 hover:opacity-70'
              }`}
            >
              <ReviewCard
                review={REVIEWS[idx]}
                isActive={pos === 1}
                isPrev={pos === 0}
                isNext={pos === 2}
              />
            </div>
          ))}
        </div>

        {/* Carrusel Mobile: 1 tarjeta */}
        <div className="md:hidden px-2" data-aos="fade-up">
          <ReviewCard review={REVIEWS[current]} isActive />
        </div>

        {/* Controles de navegación */}
        <div className="flex items-center justify-center gap-4 mt-10">
          {/* Prev */}
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border-2 border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white transition-all duration-200 flex items-center justify-center"
            aria-label="Anterior reseña"
          >
            <i className="fa-solid fa-chevron-left text-sm" />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? 'w-6 h-3 bg-brand-purple'
                    : 'w-3 h-3 bg-gray-300 hover:bg-brand-magenta'
                }`}
                aria-label={`Reseña ${i + 1}`}
              />
            ))}
          </div>

          {/* Next */}
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border-2 border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white transition-all duration-200 flex items-center justify-center"
            aria-label="Siguiente reseña"
          >
            <i className="fa-solid fa-chevron-right text-sm" />
          </button>
        </div>

        {/* CTA Google Maps */}
        <div className="text-center mt-8">
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white border-2 border-gray-200 text-gray-700 font-body font-bold text-sm px-6 py-3 rounded-full shadow hover:shadow-md hover:border-brand-purple hover:text-brand-purple transition-all duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Ver todas las reseñas en Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
