// src/components/ProductCategories.jsx
// Tarjetas de categorías de productos con AOS

import { categories } from '../data/productData';

const STORE_URL = 'https://full-party-store.vercel.app/';

// Mapa de gradientes por id de categoría
const GRADIENTS = {
  1: 'from-purple-500 to-violet-700',
  2: 'from-pink-500 to-rose-600',
  3: 'from-orange-500 to-amber-600',
  4: 'from-cyan-500 to-sky-600',
  5: 'from-lime-500 to-green-600',
};

const AOS_ANIMS = ['fade-up', 'fade-right', 'fade-up', 'fade-left', 'fade-up'];

export default function ProductCategories() {
  return (
    <section id="categorias" className="py-20 bg-white relative overflow-hidden">
      {/* Decoración de fondo */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-yellow-100 rounded-full opacity-50 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-100 rounded-full opacity-50 blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Encabezado */}
        <div className="text-center mb-14" data-aos="fade-up">
          <span className="inline-block bg-purple-100 text-brand-purple font-body font-bold text-sm px-4 py-1 rounded-full mb-4">
            🛍️ Lo que tenemos para ti
          </span>
          <h2 className="section-title text-4xl md:text-5xl text-gray-800 mb-4">
            Nuestras{' '}
            <span className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(90deg, #7e22ce, #db2777)' }}>
              Categorías
            </span>
          </h2>
          <p className="font-body text-gray-500 max-w-xl mx-auto text-lg">
            Todo lo que necesitas para decorar y celebrar, en un solo lugar.
          </p>
        </div>

        {/* Grid de tarjetas */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {categories.map((cat, idx) => (
            <a
              key={cat.id}
              href={STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-aos={AOS_ANIMS[idx]}
              data-aos-delay={idx * 80}
              className={`category-card group relative rounded-2xl p-6 bg-gradient-to-br ${GRADIENTS[cat.id]} text-white text-center shadow-lg shadow-${cat.shadow} hover:shadow-xl cursor-pointer`}
            >
              {/* Blob decorativo */}
              <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-white/20 blur-xl" />

              <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300 drop-shadow">
                {cat.emoji}
              </div>
              <h3 className="font-display text-base leading-tight mb-1">{cat.title}</h3>
              <p className="font-body text-xs text-white/80 leading-snug">{cat.description}</p>

              {/* Indicador de hover */}
              <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-1 text-xs font-semibold text-white/90">
                Ver <i className="fa-solid fa-arrow-right text-xs" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
